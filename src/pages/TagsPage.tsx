import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { getAllTags } from '@/lib/mockVideos';

const TAG_COLORS: Record<string, string> = {
  actor: 'bg-[hsl(var(--tag-actor))]',
  country: 'bg-[hsl(var(--tag-country))]',
  category: 'bg-[hsl(var(--tag-category))]',
  holiday: 'bg-[hsl(var(--tag-holiday))]',
};

const TAG_ICONS: Record<string, string> = {
  actor: 'User',
  country: 'Globe',
  category: 'Folder',
  holiday: 'Calendar',
};

const getTagColor = (type: string) => {
  return TAG_COLORS[type] || 'bg-[hsl(var(--tag-actor))]';
};

const getTagIcon = (type: string) => {
  return TAG_ICONS[type] || 'Tag';
};

const TagsPage = () => {
  const navigate = useNavigate();
  const allTags = getAllTags();

  const tagsByType = allTags.reduce((acc, tag) => {
    if (!acc[tag.type]) {
      acc[tag.type] = [];
    }
    acc[tag.type].push(tag);
    return acc;
  }, {} as Record<string, typeof allTags>);

  const handleTagClick = (tag: string) => {
    navigate(`/search?tag=${encodeURIComponent(tag)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Все <span className="text-primary">теги</span>
          </h1>
          <p className="text-muted-foreground">Исследуйте видео по категориям, актёрам, странам и праздникам</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(tagsByType).map(([type, tags]) => (
            <Card key={type} className="bg-card border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg ${getTagColor(type)} flex items-center justify-center`}>
                  <Icon name={getTagIcon(type)} size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold capitalize">{type}</h2>
                  <p className="text-sm text-muted-foreground">{tags.length} тегов</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <Badge
                    key={`${tag.name}-${tag.type}`}
                    className={`${getTagColor(tag.type)} text-white border-0 cursor-pointer hover:opacity-80 transition-opacity font-medium`}
                    onClick={() => handleTagClick(tag.name)}
                  >
                    {tag.name}
                    <span className="ml-1.5 text-xs opacity-70">({tag.count})</span>
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TagsPage;
