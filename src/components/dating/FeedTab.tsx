import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Post {
  id: number;
  author: string;
  avatar: string;
  timeAgo: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  isLiked: boolean;
}

const mockPosts: Post[] = [
  {
    id: 1,
    author: 'Мария',
    avatar: 'https://cdn.poehali.dev/projects/af14ec10-0732-4a26-8058-102b5deac697/files/4374dd72-52a4-46ae-a15f-7a6be02be820.jpg',
    timeAgo: '2 часа назад',
    content: 'Сегодня отличный день для новых знакомств! ☀️',
    image: 'https://cdn.poehali.dev/projects/af14ec10-0732-4a26-8058-102b5deac697/files/229cd84f-0ae5-4471-b789-c22d187ade21.jpg',
    likes: 24,
    comments: 5,
    isLiked: false,
  },
  {
    id: 2,
    author: 'Александра',
    avatar: 'https://cdn.poehali.dev/projects/af14ec10-0732-4a26-8058-102b5deac697/files/4374dd72-52a4-46ae-a15f-7a6be02be820.jpg',
    timeAgo: '5 часов назад',
    content: 'Ищу компанию для похода в музей современного искусства 🎨',
    likes: 18,
    comments: 12,
    isLiked: true,
  },
  {
    id: 3,
    author: 'Софья',
    avatar: 'https://cdn.poehali.dev/projects/af14ec10-0732-4a26-8058-102b5deac697/files/4374dd72-52a4-46ae-a15f-7a6be02be820.jpg',
    timeAgo: '1 день назад',
    content: 'Кто любит кофе так же сильно, как я? ☕',
    likes: 42,
    comments: 8,
    isLiked: false,
  },
];

const FeedTab = () => {
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  const toggleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  return (
    <div className="min-h-screen p-4 pb-24 pt-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Лента</h1>
        
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar>
                    <AvatarImage src={post.avatar} alt={post.author} />
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-800">{post.author}</p>
                    <p className="text-xs text-gray-500">{post.timeAgo}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-3">{post.content}</p>

                {post.image && (
                  <img 
                    src={post.image}
                    alt="Post"
                    className="w-full h-64 object-cover rounded-lg mb-3"
                  />
                )}

                <div className="flex items-center gap-6 pt-2 border-t border-gray-100">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`flex items-center gap-2 ${post.isLiked ? 'text-red-500' : 'text-gray-600'}`}
                    onClick={() => toggleLike(post.id)}
                  >
                    <Icon name="Heart" size={20} className={post.isLiked ? 'fill-current' : ''} />
                    <span>{post.likes}</span>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <Icon name="MessageCircle" size={20} />
                    <span>{post.comments}</span>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 text-gray-600 ml-auto"
                  >
                    <Icon name="Share2" size={20} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedTab;
