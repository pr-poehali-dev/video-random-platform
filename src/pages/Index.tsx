import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import { getRandomVideos } from '@/lib/mockVideos';
import { Video } from '@/types/video';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/lib/i18n';

const Index = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  useEffect(() => {
    setVideos(getRandomVideos(20));
  }, []);

  const handleTagClick = (tag: string) => {
    navigate(`/search?tag=${encodeURIComponent(tag)}`);
  };

  const refreshVideos = () => {
    setVideos(getRandomVideos(20));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            <span className="text-primary">20</span> {t('home.title')}
          </h2>
          <button
            onClick={refreshVideos}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            {t('home.refresh')}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map(video => (
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
      </main>
    </div>
  );
};

export default Index;