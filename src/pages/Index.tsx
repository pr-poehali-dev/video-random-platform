import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  duration: string;
}

const MOCK_VIDEOS: Video[] = [
  {
    id: '1',
    title: 'Maya Woulfe, Jessica Fox - My T$ Stepmom Volume 6',
    description: 'Transsexual content',
    thumbnail: 'https://cdn.poehali.dev/files/442b2cfa-6004-40c6-9937-30e502855fca.png',
    tags: ['Transsexual', 'Mother', 'Daughter', 'Being Watched'],
    duration: '29:54'
  },
  {
    id: '2',
    title: 'Random Video Collection',
    description: 'Various content',
    thumbnail: 'https://cdn.poehali.dev/files/442b2cfa-6004-40c6-9937-30e502855fca.png',
    tags: ['Random', 'Latest', 'Go to'],
    duration: '15:32'
  },
  {
    id: '3',
    title: 'New Release Content',
    description: 'Fresh uploads',
    thumbnail: 'https://cdn.poehali.dev/files/442b2cfa-6004-40c6-9937-30e502855fca.png',
    tags: ['New', 'HD', 'Popular'],
    duration: '42:18'
  },
  {
    id: '4',
    title: 'Trending Video Now',
    description: 'Most viewed',
    thumbnail: 'https://cdn.poehali.dev/files/442b2cfa-6004-40c6-9937-30e502855fca.png',
    tags: ['Trending', 'Hot', 'Featured'],
    duration: '18:45'
  },
  {
    id: '5',
    title: 'Classic Collection',
    description: 'Timeless content',
    thumbnail: 'https://cdn.poehali.dev/files/442b2cfa-6004-40c6-9937-30e502855fca.png',
    tags: ['Classic', 'Archive', 'Retro'],
    duration: '35:22'
  },
  {
    id: '6',
    title: 'Premium Experience',
    description: 'High quality',
    thumbnail: 'https://cdn.poehali.dev/files/442b2cfa-6004-40c6-9937-30e502855fca.png',
    tags: ['Premium', '4K', 'Exclusive'],
    duration: '27:11'
  }
];

const ALL_TAGS = [
  { name: 'Transsexual', color: 'bg-[hsl(var(--tag-red))]' },
  { name: 'Mother', color: 'bg-[hsl(var(--tag-orange))]' },
  { name: 'Daughter', color: 'bg-[hsl(var(--tag-green))]' },
  { name: 'Being Watched', color: 'bg-[hsl(var(--tag-blue))]' },
  { name: 'Random', color: 'bg-[hsl(var(--tag-purple))]' },
  { name: 'Latest', color: 'bg-[hsl(var(--tag-red))]' },
  { name: 'Go to', color: 'bg-[hsl(var(--tag-orange))]' },
  { name: 'New', color: 'bg-[hsl(var(--tag-green))]' },
  { name: 'HD', color: 'bg-[hsl(var(--tag-blue))]' },
  { name: 'Popular', color: 'bg-[hsl(var(--tag-purple))]' },
  { name: 'Trending', color: 'bg-[hsl(var(--tag-red))]' },
  { name: 'Hot', color: 'bg-[hsl(var(--tag-orange))]' },
  { name: 'Featured', color: 'bg-[hsl(var(--tag-green))]' },
  { name: 'Classic', color: 'bg-[hsl(var(--tag-blue))]' },
  { name: 'Archive', color: 'bg-[hsl(var(--tag-purple))]' },
  { name: 'Premium', color: 'bg-[hsl(var(--tag-red))]' },
  { name: '4K', color: 'bg-[hsl(var(--tag-orange))]' },
  { name: 'Exclusive', color: 'bg-[hsl(var(--tag-green))]' }
];

const Index = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleTag = (tagName: string) => {
    setSelectedTags(prev =>
      prev.includes(tagName)
        ? prev.filter(t => t !== tagName)
        : [...prev, tagName]
    );
  };

  const getTagColor = (tagName: string) => {
    const tag = ALL_TAGS.find(t => t.name === tagName);
    return tag?.color || 'bg-[hsl(var(--tag-blue))]';
  };

  const filteredVideos = MOCK_VIDEOS.filter(video => {
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => video.tags.includes(tag));
    const matchesSearch = searchQuery === '' || 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTags && matchesSearch;
  });

  const randomVideo = MOCK_VIDEOS[Math.floor(Math.random() * MOCK_VIDEOS.length)];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">VIDEO PLATFORM</h1>
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <Icon name="Menu" size={24} />
            </button>
          </div>
          
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск по тегам..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-secondary border-0 focus-visible:ring-1 focus-visible:ring-primary"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Случайное видео</h2>
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              Обновить
              <Icon name="RefreshCw" size={16} />
            </button>
          </div>
          
          <Card className="bg-card border-border overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="relative aspect-video bg-secondary overflow-hidden group">
              <img 
                src={randomVideo.thumbnail} 
                alt={randomVideo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Play" size={28} className="ml-1" />
                </button>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs font-medium">
                {randomVideo.duration}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2 line-clamp-2">{randomVideo.title}</h3>
              <div className="flex flex-wrap gap-2">
                {randomVideo.tags.map(tag => (
                  <Badge 
                    key={tag} 
                    className={`${getTagColor(tag)} text-white border-0 cursor-pointer hover:opacity-80 transition-opacity`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Теги</h2>
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.map(tag => (
              <Badge
                key={tag.name}
                className={`${tag.color} text-white border-0 cursor-pointer transition-all duration-200 ${
                  selectedTags.includes(tag.name) 
                    ? 'ring-2 ring-white scale-105' 
                    : 'hover:scale-105'
                }`}
                onClick={() => toggleTag(tag.name)}
              >
                {tag.name}
              </Badge>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">
              {selectedTags.length > 0 || searchQuery ? 'Результаты поиска' : 'Новые видео'}
            </h2>
            <span className="text-sm text-muted-foreground">
              {filteredVideos.length} видео
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map(video => (
              <Card key={video.id} className="bg-card border-border overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
                <div className="relative aspect-video bg-secondary overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-colors">
                      <Icon name="Play" size={20} className="ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs font-medium">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2 text-sm">{video.title}</h3>
                  <div className="flex flex-wrap gap-1">
                    {video.tags.slice(0, 3).map(tag => (
                      <Badge 
                        key={tag} 
                        className={`${getTagColor(tag)} text-white border-0 text-xs cursor-pointer hover:opacity-80 transition-opacity`}
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
