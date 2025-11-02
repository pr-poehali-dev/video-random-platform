import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const ProfileTab = () => {
  return (
    <div className="min-h-screen p-4 pb-24 pt-20">
      <div className="max-w-2xl mx-auto">
        <Card className="overflow-hidden">
          <div className="relative h-48 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
              <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
                <AvatarImage src="https://cdn.poehali.dev/projects/af14ec10-0732-4a26-8058-102b5deac697/files/4374dd72-52a4-46ae-a15f-7a6be02be820.jpg" />
                <AvatarFallback>ВЫ</AvatarFallback>
              </Avatar>
            </div>
            <Button 
              variant="secondary" 
              size="sm" 
              className="absolute top-4 right-4"
            >
              <Icon name="Settings" size={16} />
            </Button>
          </div>

          <div className="pt-16 pb-6 px-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">Ваше имя</h2>
            <p className="text-gray-600 mb-4">25 лет • Москва</p>
            
            <div className="flex justify-center gap-4 mb-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">128</p>
                <p className="text-xs text-gray-500">Лайков</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">45</p>
                <p className="text-xs text-gray-500">Матчей</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">87</p>
                <p className="text-xs text-gray-500">Друзей</p>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
              Редактировать профиль
            </Button>
          </div>
        </Card>

        <Card className="mt-4 p-6">
          <h3 className="font-semibold text-gray-800 mb-3">О себе</h3>
          <p className="text-gray-600 mb-4">
            Люблю путешествия, хорошую музыку и интересные разговоры. Ищу единомышленников для совместных приключений!
          </p>
          
          <h3 className="font-semibold text-gray-800 mb-3">Интересы</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Путешествия</Badge>
            <Badge variant="secondary">Музыка</Badge>
            <Badge variant="secondary">Фотография</Badge>
            <Badge variant="secondary">Кофе</Badge>
            <Badge variant="secondary">Йога</Badge>
          </div>
        </Card>

        <Card className="mt-4 p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Настройки</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <Icon name="Bell" size={20} className="text-gray-600" />
                <span className="text-gray-700">Уведомления</span>
              </div>
              <Icon name="ChevronRight" size={20} className="text-gray-400" />
            </button>
            
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <Icon name="Shield" size={20} className="text-gray-600" />
                <span className="text-gray-700">Приватность</span>
              </div>
              <Icon name="ChevronRight" size={20} className="text-gray-400" />
            </button>
            
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <Icon name="HelpCircle" size={20} className="text-gray-600" />
                <span className="text-gray-700">Помощь</span>
              </div>
              <Icon name="ChevronRight" size={20} className="text-gray-400" />
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfileTab;
