import Icon from '@/components/ui/icon';
import { TabType } from '@/pages/DatingApp';

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  const tabs = [
    { id: 'discover' as TabType, icon: 'Flame', label: 'Открыть' },
    { id: 'feed' as TabType, icon: 'Users', label: 'Лента' },
    { id: 'chats' as TabType, icon: 'MessageCircle', label: 'Чаты' },
    { id: 'profile' as TabType, icon: 'User', label: 'Профиль' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe">
      <div className="flex justify-around items-center h-16 px-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center gap-1 flex-1 py-2 transition-colors ${
              activeTab === tab.id 
                ? 'text-primary' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Icon name={tab.icon} size={24} />
            <span className="text-xs font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
