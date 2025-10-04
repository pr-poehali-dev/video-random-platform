import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { getVideoById, getRelatedVideos } from '@/lib/mockVideos';

const TAG_COLORS: Record<string, string> = {
  actor: 'bg-[hsl(var(--tag-actor))]',
  country: 'bg-[hsl(var(--tag-country))]',
  category: 'bg-[hsl(var(--tag-category))]',
  holiday: 'bg-[hsl(var(--tag-holiday))]',
};

const getTagColor = (type: string) => {
  return TAG_COLORS[type] || 'bg-[hsl(var(--tag-actor))]';
};

const VideoPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const video = id ? getVideoById(id) : undefined;

  if (!video) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Видео не найдено</h2>
          <Link to="/" className="text-primary hover:underline">
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  const relatedVideos = id ? getRelatedVideos(id) : [];

  const handleTagClick = (tag: string) => {
    navigate(`/search?tag=${encodeURIComponent(tag)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-video bg-secondary rounded-lg overflow-hidden mb-6 relative group">
            <img 
              src={video.thumbnail} 
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
                <Icon name="Play" size={36} className="ml-1 text-white" />
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Icon name="Eye" size={18} />
                <span>{video.views.toLocaleString()} просмотров</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={18} />
                <span>{video.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={18} />
                <span>{new Date(video.uploadDate).toLocaleDateString('ru-RU')}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {video.tags.map(tag => (
                <Badge
                  key={`${tag.name}-${tag.type}`}
                  className={`${getTagColor(tag.type)} text-white border-0 px-3 py-1.5 cursor-pointer hover:opacity-80 transition-opacity text-sm font-medium`}
                  onClick={() => handleTagClick(tag.name)}
                >
                  <span className="opacity-60 mr-1.5 text-xs uppercase">{tag.type}:</span>
                  {tag.name}
                </Badge>
              ))}
            </div>

            <p className="text-muted-foreground">{video.description}</p>
          </div>

          {relatedVideos.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Похожие <span className="text-primary">видео</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {relatedVideos.map(relatedVideo => (
                  <VideoCard
                    key={relatedVideo.id}
                    id={relatedVideo.id}
                    title={relatedVideo.title}
                    thumbnail={relatedVideo.thumbnail}
                    tags={relatedVideo.tags}
                    duration={relatedVideo.duration}
                    views={relatedVideo.views}
                    onTagClick={handleTagClick}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default VideoPage;