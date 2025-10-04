import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { MOCK_VIDEOS, getAllTags } from '@/lib/mockVideos';
import { Video } from '@/types/video';

const TAG_COLORS: Record<string, string> = {
  actor: 'bg-[hsl(var(--tag-actor))]',
  country: 'bg-[hsl(var(--tag-country))]',
  category: 'bg-[hsl(var(--tag-category))]',
  holiday: 'bg-[hsl(var(--tag-holiday))]',
};

const getTagColor = (type: string) => {
  return TAG_COLORS[type] || 'bg-[hsl(var(--tag-actor))]';
};

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);

  const allTags = getAllTags();

  useEffect(() => {
    const tagParam = searchParams.get('tag');
    if (tagParam && !selectedTags.includes(tagParam)) {
      setSelectedTags([tagParam]);
    }
  }, [searchParams]);

  useEffect(() => {
    let results = MOCK_VIDEOS;
    
    if (searchQuery) {
      results = results.filter(v => 
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.tags.some(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    if (selectedTags.length > 0) {
      results = results.filter(v => 
        selectedTags.some(tag => v.tags.some(t => t.name === tag))
      );
    }
    
    setFilteredVideos(results);
  }, [searchQuery, selectedTags]);

  const toggleTag = (tagName: string) => {
    setSelectedTags(prev =>
      prev.includes(tagName)
        ? prev.filter(t => t !== tagName)
        : [...prev, tagName]
    );
  };

  const handleTagClick = (tag: string) => {
    navigate(`/search?tag=${encodeURIComponent(tag)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">
            Поиск <span className="text-primary">видео</span>
          </h1>
          
          <div className="relative mb-6">
            <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск по названию или тегам..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-secondary border-border h-12 text-base focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Фильтр по тегам</h2>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <Badge
                  key={`${tag.name}-${tag.type}`}
                  className={`cursor-pointer transition-all font-medium ${
                    selectedTags.includes(tag.name)
                      ? `${getTagColor(tag.type)} text-white ring-2 ring-white/50`
                      : `${getTagColor(tag.type)} text-white opacity-60 hover:opacity-100`
                  }`}
                  onClick={() => toggleTag(tag.name)}
                >
                  <span className="text-xs opacity-70 mr-1 uppercase">{tag.type}:</span>
                  {tag.name}
                  <span className="ml-1.5 text-xs opacity-70">({tag.count})</span>
                </Badge>
              ))}
            </div>
          </div>

          {selectedTags.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Выбрано:</span>
                {selectedTags.map(tag => (
                  <Badge
                    key={tag}
                    className="bg-primary text-white cursor-pointer hover:bg-primary/80"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag} <Icon name="X" size={14} className="ml-1" />
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            Результаты поиска
          </h2>
          <span className="text-sm text-muted-foreground">
            {filteredVideos.length} видео
          </span>
        </div>

        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map(video => (
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
        ) : (
          <div className="text-center py-16">
            <Icon name="SearchX" size={64} className="mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
            <p className="text-muted-foreground">
              Попробуйте изменить параметры поиска
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default SearchPage;