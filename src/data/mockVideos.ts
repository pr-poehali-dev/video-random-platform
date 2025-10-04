export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  duration: string;
  views: number;
  uploadDate: string;
}

const thumbnails = [
  '/img/f3a2043e-5505-4676-b1ba-d66741990865.jpg',
  '/img/6af3e416-826a-4946-b264-17aaf97a1531.jpg',
  '/img/b78d505f-45ed-47f8-8ddf-c8ffc723fcea.jpg'
];

const tags = [
  'Action', 'Drama', 'Comedy', 'Thriller', 'Horror', 'Sci-Fi',
  'Romance', 'Documentary', 'Animation', 'Adventure', 'Mystery',
  'Fantasy', 'Crime', 'Music', 'War', 'History', 'Sport', 'Western'
];

const titles = [
  'The Last Guardian', 'Midnight Chronicles', 'Shadow of Tomorrow',
  'Beyond the Horizon', 'Echoes of Eternity', 'Crimson Dawn',
  'Digital Dreams', 'Urban Legends', 'Silent Storm', 'Neon Nights',
  'Quantum Leap', 'Dark Matter', 'Rising Phoenix', 'Lost Memories',
  'Future Shock', 'Time Paradox', 'Infinite Loop', 'Binary Code',
  'Virtual Reality', 'Cyber Punk', 'Matrix Revolution', 'Ghost Protocol',
  'Phantom Zone', 'Parallel Universe', 'Event Horizon', 'Black Mirror',
  'White Noise', 'Red Alert', 'Blue Velvet', 'Green Mile'
];

const generateRandomVideo = (id: number): Video => {
  const randomTags = [...tags]
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.floor(Math.random() * 4) + 2);
  
  const randomThumbnail = thumbnails[Math.floor(Math.random() * thumbnails.length)];
  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  
  const minutes = Math.floor(Math.random() * 50) + 10;
  const seconds = Math.floor(Math.random() * 60);
  const duration = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  
  const views = Math.floor(Math.random() * 1000000) + 1000;
  
  const daysAgo = Math.floor(Math.random() * 30);
  const uploadDate = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000).toISOString();

  return {
    id: id.toString(),
    title: `${randomTitle} - Episode ${id}`,
    description: `An exciting video featuring ${randomTags.join(', ')}`,
    thumbnail: randomThumbnail,
    tags: randomTags,
    duration,
    views,
    uploadDate
  };
};

export const mockVideos: Video[] = Array.from({ length: 50 }, (_, i) => generateRandomVideo(i + 1));

export const getRandomVideos = (count: number = 20): Video[] => {
  return [...mockVideos].sort(() => Math.random() - 0.5).slice(0, count);
};

export const getVideoById = (id: string): Video | undefined => {
  return mockVideos.find(v => v.id === id);
};

export const getVideosByTag = (tag: string): Video[] => {
  return mockVideos.filter(v => v.tags.includes(tag));
};

export const searchVideos = (query: string, selectedTags: string[] = []): Video[] => {
  return mockVideos.filter(video => {
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => video.tags.includes(tag));
    const matchesSearch = query === '' || 
      video.title.toLowerCase().includes(query.toLowerCase()) ||
      video.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
    return matchesTags && matchesSearch;
  });
};

export const getAllTags = (): string[] => {
  return tags;
};
