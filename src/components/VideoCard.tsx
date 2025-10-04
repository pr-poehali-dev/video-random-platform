import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface Tag {
  name: string;
  type: 'actor' | 'country' | 'category' | 'holiday';
}

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  tags: Tag[];
  duration: string;
  views: number;
  onTagClick: (tag: string) => void;
}

const TAG_COLORS: Record<string, string> = {
  actor: 'bg-[hsl(var(--tag-actor))]',
  country: 'bg-[hsl(var(--tag-country))]',
  category: 'bg-[hsl(var(--tag-category))]',
  holiday: 'bg-[hsl(var(--tag-holiday))]',
};

const getTagColor = (type: string) => {
  return TAG_COLORS[type] || 'bg-[hsl(var(--tag-actor))]';
};

const VideoCard = ({ id, title, thumbnail, tags, duration, views, onTagClick }: VideoCardProps) => {
  return (
    <Card className="bg-card border-border overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
      <Link to={`/video/${id}`}>
        <div className="relative aspect-video bg-secondary overflow-hidden">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/90 text-xs">
              <Icon name="Eye" size={14} />
              <span>{views.toLocaleString()}</span>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
              <Icon name="Play" size={28} className="ml-1 text-white" />
            </div>
          </div>
          <div className="absolute top-2 right-2 bg-black/90 px-2.5 py-1 rounded text-xs font-semibold">
            {duration}
          </div>
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/video/${id}`}>
          <h3 className="font-semibold mb-3 line-clamp-2 text-sm hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <div className="flex flex-wrap gap-1.5">
          {tags.slice(0, 4).map(tag => (
            <Badge 
              key={`${tag.name}-${tag.type}`}
              className={`${getTagColor(tag.type)} text-white border-0 text-xs px-2 py-0.5 cursor-pointer hover:opacity-80 transition-opacity font-medium`}
              onClick={(e) => {
                e.preventDefault();
                onTagClick(tag.name);
              }}
            >
              {tag.name}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default VideoCard;