import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import { getPopularVideos } from '@/lib/mockVideos';
import { Video } from '@/types/video';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/lib/i18n';

const PopularPage = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  useEffect(() => {
    setVideos(getPopularVideos(20));
  }, []);

  const handleTagClick = (tag: string) => {
    navigate(`/search?tag=${encodeURIComponent(tag)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">
            {t('popular.title')} <span className="text-primary">{t('popular.subtitle')}</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            {t('popular.description')}
          </p>
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

export default PopularPage;