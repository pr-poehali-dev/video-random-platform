import { useState } from 'react';
import MascotWidget from '@/components/dating/MascotWidget';
import BottomNav from '@/components/dating/BottomNav';
import DiscoverTab from '@/components/dating/DiscoverTab';
import FeedTab from '@/components/dating/FeedTab';
import ChatsTab from '@/components/dating/ChatsTab';
import ProfileTab from '@/components/dating/ProfileTab';

export type TabType = 'discover' | 'feed' | 'chats' | 'profile';

const DatingApp = () => {
  const [activeTab, setActiveTab] = useState<TabType>('discover');

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden">
      <MascotWidget />
      
      <div className="flex-1 overflow-y-auto pb-20">
        {activeTab === 'discover' && <DiscoverTab />}
        {activeTab === 'feed' && <FeedTab />}
        {activeTab === 'chats' && <ChatsTab />}
        {activeTab === 'profile' && <ProfileTab />}
      </div>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default DatingApp;
