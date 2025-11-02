import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Chat {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  online: boolean;
}

const mockChats: Chat[] = [
  {
    id: 1,
    name: 'Анна',
    avatar: 'https://cdn.poehali.dev/projects/af14ec10-0732-4a26-8058-102b5deac697/files/4374dd72-52a4-46ae-a15f-7a6be02be820.jpg',
    lastMessage: 'Привет! Как дела?',
    timestamp: '10:30',
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: 'Елена',
    avatar: 'https://cdn.poehali.dev/projects/af14ec10-0732-4a26-8058-102b5deac697/files/4374dd72-52a4-46ae-a15f-7a6be02be820.jpg',
    lastMessage: 'Спасибо за совет!',
    timestamp: 'Вчера',
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: 'Мария',
    avatar: 'https://cdn.poehali.dev/projects/af14ec10-0732-4a26-8058-102b5deac697/files/4374dd72-52a4-46ae-a15f-7a6be02be820.jpg',
    lastMessage: 'Может встретимся в выходные?',
    timestamp: 'Вчера',
    unread: 1,
    online: true,
  },
];

const ChatsTab = () => {
  return (
    <div className="min-h-screen p-4 pb-24 pt-20">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Чаты</h1>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            {mockChats.reduce((sum, chat) => sum + chat.unread, 0)} новых
          </Badge>
        </div>

        <div className="space-y-2">
          {mockChats.map((chat) => (
            <Card 
              key={chat.id} 
              className="p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar className="w-14 h-14">
                    <AvatarImage src={chat.avatar} alt={chat.name} />
                    <AvatarFallback>{chat.name[0]}</AvatarFallback>
                  </Avatar>
                  {chat.online && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-800 truncate">{chat.name}</h3>
                    <span className="text-xs text-gray-500">{chat.timestamp}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                    {chat.unread > 0 && (
                      <Badge className="ml-2 bg-primary text-white min-w-[20px] h-5 rounded-full flex items-center justify-center text-xs">
                        {chat.unread}
                      </Badge>
                    )}
                  </div>
                </div>

                <Icon name="ChevronRight" size={20} className="text-gray-400" />
              </div>
            </Card>
          ))}
        </div>

        {mockChats.length === 0 && (
          <div className="text-center py-12">
            <Icon name="MessageCircle" size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Пока нет чатов</h3>
            <p className="text-gray-500">Начните общаться с людьми из вкладки "Открыть"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatsTab;
