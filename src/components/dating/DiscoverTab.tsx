import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface UserProfile {
  id: number;
  name: string;
  age: number;
  bio: string;
  interests: string[];
  photo: string;
  distance: number;
}

const mockProfiles: UserProfile[] = [
  {
    id: 1,
    name: 'Анна',
    age: 26,
    bio: 'Люблю путешествия, кофе и хорошие книги',
    interests: ['Путешествия', 'Фотография', 'Йога'],
    photo: 'https://cdn.poehali.dev/projects/af14ec10-0732-4a26-8058-102b5deac697/files/4374dd72-52a4-46ae-a15f-7a6be02be820.jpg',
    distance: 3,
  },
  {
    id: 2,
    name: 'Елена',
    age: 24,
    bio: 'Художница и любительница котиков',
    interests: ['Искусство', 'Музыка', 'Кофе'],
    photo: 'https://cdn.poehali.dev/projects/af14ec10-0732-4a26-8058-102b5deac697/files/4374dd72-52a4-46ae-a15f-7a6be02be820.jpg',
    distance: 5,
  },
];

const DiscoverTab = () => {
  const [profiles] = useState<UserProfile[]>(mockProfiles);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (liked: boolean) => {
    if (liked) {
      console.log('Лайк!');
    }
    setCurrentIndex((prev) => (prev + 1) % profiles.length);
  };

  const currentProfile = profiles[currentIndex];

  return (
    <div className="min-h-screen p-4 pt-24">
      <div className="max-w-md mx-auto">
        <Card className="overflow-hidden shadow-2xl border-0">
          <div className="relative">
            <img 
              src={currentProfile.photo}
              alt={currentProfile.name}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-3xl font-bold">{currentProfile.name}</h2>
                <span className="text-2xl">{currentProfile.age}</span>
              </div>
              <div className="flex items-center gap-1 text-sm mb-3">
                <Icon name="MapPin" size={16} />
                <span>{currentProfile.distance} км от вас</span>
              </div>
              <p className="text-sm mb-3">{currentProfile.bio}</p>
              <div className="flex flex-wrap gap-2">
                {currentProfile.interests.map((interest, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-white/20 text-white border-0">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div className="flex justify-center items-center gap-6 mt-6">
          <Button
            size="lg"
            variant="outline"
            className="w-16 h-16 rounded-full border-2 border-red-400 text-red-500 hover:bg-red-50 hover:text-red-600"
            onClick={() => handleSwipe(false)}
          >
            <Icon name="X" size={32} />
          </Button>
          
          <Button
            size="lg"
            className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-lg"
            onClick={() => handleSwipe(true)}
          >
            <Icon name="Heart" size={36} />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="w-16 h-16 rounded-full border-2 border-blue-400 text-blue-500 hover:bg-blue-50 hover:text-blue-600"
          >
            <Icon name="Star" size={32} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverTab;
