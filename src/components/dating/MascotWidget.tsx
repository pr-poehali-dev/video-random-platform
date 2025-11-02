import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface MascotState {
  health: number;
  hunger: number;
  happiness: number;
}

const MascotWidget = () => {
  const [mascot, setMascot] = useState<MascotState>({
    health: 80,
    hunger: 60,
    happiness: 70,
  });
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMascot(prev => ({
        health: Math.max(0, prev.health - 0.5),
        hunger: Math.max(0, prev.hunger - 1),
        happiness: Math.max(0, prev.happiness - 0.7),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const feedMascot = () => {
    setMascot(prev => ({
      ...prev,
      hunger: Math.min(100, prev.hunger + 20),
      happiness: Math.min(100, prev.happiness + 5),
    }));
  };

  const playWithMascot = () => {
    setMascot(prev => ({
      ...prev,
      happiness: Math.min(100, prev.happiness + 15),
      health: Math.min(100, prev.health + 5),
    }));
  };

  const healMascot = () => {
    setMascot(prev => ({
      ...prev,
      health: Math.min(100, prev.health + 25),
    }));
  };

  const avgHealth = (mascot.health + mascot.hunger + mascot.happiness) / 3;

  return (
    <div className="fixed top-4 right-4 z-50">
      <Card 
        className="bg-white/95 backdrop-blur-sm shadow-xl border-2 border-pink-200 cursor-pointer transition-all duration-300"
        style={{ width: isExpanded ? '280px' : '80px' }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/af14ec10-0732-4a26-8058-102b5deac697/files/50ca94cc-26d6-449c-b643-d874a0cc0573.jpg"
                alt="Mascot"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-pink-300"
              />
              <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                avgHealth > 70 ? 'bg-green-500' : avgHealth > 40 ? 'bg-yellow-500' : 'bg-red-500'
              }`} />
            </div>

            {isExpanded && (
              <div className="flex-1">
                <h3 className="font-semibold text-sm text-gray-800">Мой питомец</h3>
                <p className="text-xs text-gray-500">Уровень {Math.floor(avgHealth / 10)}</p>
              </div>
            )}
          </div>

          {isExpanded && (
            <div className="mt-4 space-y-3" onClick={(e) => e.stopPropagation()}>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-red-600">
                    <Icon name="Heart" size={12} />
                    Здоровье
                  </span>
                  <span className="font-medium">{Math.round(mascot.health)}%</span>
                </div>
                <Progress value={mascot.health} className="h-1.5" />
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-orange-600">
                    <Icon name="Apple" size={12} />
                    Сытость
                  </span>
                  <span className="font-medium">{Math.round(mascot.hunger)}%</span>
                </div>
                <Progress value={mascot.hunger} className="h-1.5" />
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-yellow-600">
                    <Icon name="Smile" size={12} />
                    Настроение
                  </span>
                  <span className="font-medium">{Math.round(mascot.happiness)}%</span>
                </div>
                <Progress value={mascot.happiness} className="h-1.5" />
              </div>

              <div className="flex gap-2 pt-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 h-8 text-xs"
                  onClick={feedMascot}
                >
                  <Icon name="Apple" size={14} />
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 h-8 text-xs"
                  onClick={playWithMascot}
                >
                  <Icon name="Gamepad2" size={14} />
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 h-8 text-xs"
                  onClick={healMascot}
                >
                  <Icon name="Heart" size={14} />
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default MascotWidget;
