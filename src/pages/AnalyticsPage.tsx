import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { MOCK_VIDEOS, getAllTags, getPopularVideos } from '@/lib/mockVideos';

const TAG_COLORS: Record<string, string> = {
  actor: 'bg-[hsl(var(--tag-actor))]',
  country: 'bg-[hsl(var(--tag-country))]',
  category: 'bg-[hsl(var(--tag-category))]',
  holiday: 'bg-[hsl(var(--tag-holiday))]',
};

const getTagColor = (type: string) => {
  return TAG_COLORS[type] || 'bg-[hsl(var(--tag-actor))]';
};

const AnalyticsPage = () => {
  const navigate = useNavigate();
  const popularVideos = getPopularVideos(6);
  const popularTags = getAllTags().slice(0, 10);
  
  const totalViews = MOCK_VIDEOS.reduce((sum, v) => sum + v.views, 0);
  const totalVideos = MOCK_VIDEOS.length;
  const averageViews = Math.round(totalViews / totalVideos);

  const handleTagClick = (tag: string) => {
    navigate(`/search?tag=${encodeURIComponent(tag)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-primary">Аналитика</span> платформы
          </h1>
          <p className="text-muted-foreground">Статистика просмотров и популярный контент</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-card border-border p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="Play" size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Всего видео</p>
                <p className="text-3xl font-bold">{totalVideos}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-card border-border p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="Eye" size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Всего просмотров</p>
                <p className="text-3xl font-bold">{totalViews.toLocaleString()}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-card border-border p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="TrendingUp" size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Средние просмотры</p>
                <p className="text-3xl font-bold">{averageViews.toLocaleString()}</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-card border-border p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Icon name="Tag" size={20} className="text-primary" />
              Популярные теги
            </h2>
            <div className="space-y-3">
              {popularTags.map((tag, index) => (
                <div key={`${tag.name}-${tag.type}`} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                    {index + 1}
                  </div>
                  <Badge
                    className={`${getTagColor(tag.type)} text-white border-0 cursor-pointer hover:opacity-80 transition-opacity font-medium flex-1 justify-between`}
                    onClick={() => handleTagClick(tag.name)}
                  >
                    <span>
                      <span className="text-xs opacity-70 mr-1 uppercase">{tag.type}:</span>
                      {tag.name}
                    </span>
                    <span className="text-xs opacity-70">{tag.count} видео</span>
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-card border-border p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Icon name="BarChart3" size={20} className="text-primary" />
              Топ по просмотрам
            </h2>
            <div className="space-y-3">
              {popularVideos.map((video, index) => (
                <div
                  key={video.id}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer"
                  onClick={() => navigate(`/video/${video.id}`)}
                >
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm line-clamp-1">{video.title}</p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                      <Icon name="Eye" size={12} />
                      <span>{video.views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">
            Самые популярные <span className="text-primary">видео</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularVideos.map(video => (
              <VideoCard
                key={video.id}
                id={video.id}
                title={video.title}
                thumbnail={video.thumbnail}
                tags={video.tags}
                duration={video.duration}
                views={video.views}
                onTagClick={handleTagClick}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsPage;
