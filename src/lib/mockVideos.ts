import { Video } from '@/types/video';

export const MOCK_VIDEOS: Video[] = [
  {
    id: '1',
    title: 'Кинематографическое путешествие через современные пейзажи',
    description: 'Захватывающее визуальное путешествие',
    thumbnail: '/img/1a80dd0b-6771-40ec-ab2f-2b5d365fffa9.jpg',
    tags: [
      { name: 'Джон Доу', type: 'actor' },
      { name: 'США', type: 'country' },
      { name: 'Драма', type: 'category' },
    ],
    duration: '29:54',
    views: 15420,
    uploadDate: '2024-10-01',
    relatedVideos: ['2', '3']
  },
  {
    id: '2',
    title: 'Динамичный экшн: Городские приключения',
    description: 'Захватывающая история в городских джунглях',
    thumbnail: '/img/1d5d0fb1-e85c-467a-b060-5d28d2283420.jpg',
    tags: [
      { name: 'Джейн Смит', type: 'actor' },
      { name: 'Франция', type: 'country' },
      { name: 'Экшн', type: 'category' },
    ],
    duration: '42:18',
    views: 28950,
    uploadDate: '2024-10-02',
    relatedVideos: ['1', '4']
  },
  {
    id: '3',
    title: 'Художественная визуализация: Творческий подход',
    description: 'Уникальный взгляд на современное искусство',
    thumbnail: '/img/c6d4dd4f-ef92-487e-b959-4127c736eeb6.jpg',
    tags: [
      { name: 'Майкл Браун', type: 'actor' },
      { name: 'Великобритания', type: 'country' },
      { name: 'Арт', type: 'category' },
    ],
    duration: '18:45',
    views: 9340,
    uploadDate: '2024-10-03',
    relatedVideos: ['1', '5']
  },
  {
    id: '4',
    title: 'Эпический финал: Последняя глава',
    description: 'Грандиозное завершение саги',
    thumbnail: '/img/1a80dd0b-6771-40ec-ab2f-2b5d365fffa9.jpg',
    tags: [
      { name: 'Сара Джонсон', type: 'actor' },
      { name: 'Канада', type: 'country' },
      { name: 'Приключения', type: 'category' },
      { name: 'Хэллоуин', type: 'holiday' },
    ],
    duration: '35:22',
    views: 45200,
    uploadDate: '2024-09-28',
    relatedVideos: ['2', '6']
  },
  {
    id: '5',
    title: 'Ночная история: Тайны города',
    description: 'Мистический триллер о ночных секретах',
    thumbnail: '/img/1d5d0fb1-e85c-467a-b060-5d28d2283420.jpg',
    tags: [
      { name: 'Том Уилсон', type: 'actor' },
      { name: 'Германия', type: 'country' },
      { name: 'Триллер', type: 'category' },
    ],
    duration: '27:11',
    views: 18750,
    uploadDate: '2024-10-04',
    relatedVideos: ['3', '4']
  },
  {
    id: '6',
    title: 'Праздничная магия: Зимняя сказка',
    description: 'Волшебное путешествие в зимнюю страну',
    thumbnail: '/img/c6d4dd4f-ef92-487e-b959-4127c736eeb6.jpg',
    tags: [
      { name: 'Эмили Дэвис', type: 'actor' },
      { name: 'Норвегия', type: 'country' },
      { name: 'Семейное', type: 'category' },
      { name: 'Новый Год', type: 'holiday' },
    ],
    duration: '31:08',
    views: 52300,
    uploadDate: '2024-09-25',
    relatedVideos: ['4', '1']
  },
  {
    id: '7',
    title: 'Документальный взгляд: Реальные истории',
    description: 'Правдивые истории из жизни',
    thumbnail: '/img/1a80dd0b-6771-40ec-ab2f-2b5d365fffa9.jpg',
    tags: [
      { name: 'Дэвид Ли', type: 'actor' },
      { name: 'Австралия', type: 'country' },
      { name: 'Документальное', type: 'category' },
    ],
    duration: '48:30',
    views: 12450,
    uploadDate: '2024-10-05',
    relatedVideos: ['5', '3']
  },
  {
    id: '8',
    title: 'Комедийная развязка: Смех до слез',
    description: 'Веселая история с неожиданным финалом',
    thumbnail: '/img/1d5d0fb1-e85c-467a-b060-5d28d2283420.jpg',
    tags: [
      { name: 'Роберт Кларк', type: 'actor' },
      { name: 'Испания', type: 'country' },
      { name: 'Комедия', type: 'category' },
    ],
    duration: '22:15',
    views: 33800,
    uploadDate: '2024-09-30',
    relatedVideos: ['6', '2']
  },
  {
    id: '9',
    title: 'Романтическая история: Любовь в Париже',
    description: 'Нежная история о любви',
    thumbnail: '/img/c6d4dd4f-ef92-487e-b959-4127c736eeb6.jpg',
    tags: [
      { name: 'Лиза Мартин', type: 'actor' },
      { name: 'Франция', type: 'country' },
      { name: 'Романтика', type: 'category' },
      { name: '14 Февраля', type: 'holiday' },
    ],
    duration: '38:42',
    views: 41500,
    uploadDate: '2024-09-26',
    relatedVideos: ['6', '8']
  },
  {
    id: '10',
    title: 'Фантастическое будущее: 2050',
    description: 'Взгляд в будущее человечества',
    thumbnail: '/img/1a80dd0b-6771-40ec-ab2f-2b5d365fffa9.jpg',
    tags: [
      { name: 'Алекс Тейлор', type: 'actor' },
      { name: 'Япония', type: 'country' },
      { name: 'Фантастика', type: 'category' },
    ],
    duration: '44:55',
    views: 36200,
    uploadDate: '2024-09-29',
    relatedVideos: ['7', '3']
  },
  {
    id: '11',
    title: 'Мистический детектив: Загадка особняка',
    description: 'Детективное расследование с мистическими элементами',
    thumbnail: '/img/1d5d0fb1-e85c-467a-b060-5d28d2283420.jpg',
    tags: [
      { name: 'Джеймс Андерсон', type: 'actor' },
      { name: 'Великобритания', type: 'country' },
      { name: 'Детектив', type: 'category' },
    ],
    duration: '51:20',
    views: 19800,
    uploadDate: '2024-10-01',
    relatedVideos: ['5', '7']
  },
  {
    id: '12',
    title: 'Спортивный триумф: Путь к победе',
    description: 'Вдохновляющая история спортсмена',
    thumbnail: '/img/c6d4dd4f-ef92-487e-b959-4127c736eeb6.jpg',
    tags: [
      { name: 'Марк Джонс', type: 'actor' },
      { name: 'США', type: 'country' },
      { name: 'Спорт', type: 'category' },
    ],
    duration: '33:17',
    views: 27600,
    uploadDate: '2024-09-27',
    relatedVideos: ['10', '4']
  },
  {
    id: '13',
    title: 'Историческая сага: Великие империи',
    description: 'Путешествие через великие цивилизации',
    thumbnail: '/img/1a80dd0b-6771-40ec-ab2f-2b5d365fffa9.jpg',
    tags: [
      { name: 'Ричард Томас', type: 'actor' },
      { name: 'Италия', type: 'country' },
      { name: 'История', type: 'category' },
    ],
    duration: '56:08',
    views: 15900,
    uploadDate: '2024-10-02',
    relatedVideos: ['7', '11']
  },
  {
    id: '14',
    title: 'Музыкальное шоу: Ночь звезд',
    description: 'Грандиозное музыкальное представление',
    thumbnail: '/img/1d5d0fb1-e85c-467a-b060-5d28d2283420.jpg',
    tags: [
      { name: 'София Мур', type: 'actor' },
      { name: 'Бразилия', type: 'country' },
      { name: 'Музыка', type: 'category' },
    ],
    duration: '40:25',
    views: 58700,
    uploadDate: '2024-09-24',
    relatedVideos: ['9', '6']
  },
  {
    id: '15',
    title: 'Кулинарное путешествие: Вкусы мира',
    description: 'Гастрономическое приключение по странам',
    thumbnail: '/img/c6d4dd4f-ef92-487e-b959-4127c736eeb6.jpg',
    tags: [
      { name: 'Антонио Росси', type: 'actor' },
      { name: 'Италия', type: 'country' },
      { name: 'Кулинария', type: 'category' },
    ],
    duration: '29:33',
    views: 23400,
    uploadDate: '2024-10-03',
    relatedVideos: ['14', '8']
  },
  {
    id: '16',
    title: 'Природные чудеса: Дикая планета',
    description: 'Удивительная красота дикой природы',
    thumbnail: '/img/1a80dd0b-6771-40ec-ab2f-2b5d365fffa9.jpg',
    tags: [
      { name: 'Дэниел Грин', type: 'actor' },
      { name: 'Кения', type: 'country' },
      { name: 'Природа', type: 'category' },
    ],
    duration: '47:12',
    views: 34100,
    uploadDate: '2024-09-28',
    relatedVideos: ['13', '10']
  },
  {
    id: '17',
    title: 'Технологии будущего: Инновации сегодня',
    description: 'Последние достижения науки и техники',
    thumbnail: '/img/1d5d0fb1-e85c-467a-b060-5d28d2283420.jpg',
    tags: [
      { name: 'Кевин Уайт', type: 'actor' },
      { name: 'Южная Корея', type: 'country' },
      { name: 'Технологии', type: 'category' },
    ],
    duration: '35:48',
    views: 29300,
    uploadDate: '2024-10-04',
    relatedVideos: ['10', '16']
  },
  {
    id: '18',
    title: 'Художественная галерея: Шедевры веков',
    description: 'Обзор величайших произведений искусства',
    thumbnail: '/img/c6d4dd4f-ef92-487e-b959-4127c736eeb6.jpg',
    tags: [
      { name: 'Изабелла Лопес', type: 'actor' },
      { name: 'Испания', type: 'country' },
      { name: 'Искусство', type: 'category' },
    ],
    duration: '42:55',
    views: 17800,
    uploadDate: '2024-09-30',
    relatedVideos: ['3', '15']
  },
  {
    id: '19',
    title: 'Приключения в джунглях: Затерянный мир',
    description: 'Экспедиция в неизведанные джунгли',
    thumbnail: '/img/1a80dd0b-6771-40ec-ab2f-2b5d365fffa9.jpg',
    tags: [
      { name: 'Райан Харрис', type: 'actor' },
      { name: 'Перу', type: 'country' },
      { name: 'Приключения', type: 'category' },
    ],
    duration: '53:22',
    views: 39600,
    uploadDate: '2024-09-26',
    relatedVideos: ['16', '4']
  },
  {
    id: '20',
    title: 'Космическая одиссея: За пределами орбиты',
    description: 'Захватывающее путешествие в космос',
    thumbnail: '/img/1d5d0fb1-e85c-467a-b060-5d28d2283420.jpg',
    tags: [
      { name: 'Наталья Волкова', type: 'actor' },
      { name: 'Россия', type: 'country' },
      { name: 'Космос', type: 'category' },
    ],
    duration: '61:15',
    views: 64200,
    uploadDate: '2024-09-23',
    relatedVideos: ['10', '17']
  },
];

export const getRandomVideos = (count: number): Video[] => {
  const shuffled = [...MOCK_VIDEOS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getVideoById = (id: string): Video | undefined => {
  return MOCK_VIDEOS.find(v => v.id === id);
};

export const getVideosByTag = (tagName: string): Video[] => {
  return MOCK_VIDEOS.filter(v => 
    v.tags.some(t => t.name.toLowerCase() === tagName.toLowerCase())
  );
};

export const getRelatedVideos = (videoId: string): Video[] => {
  const video = getVideoById(videoId);
  if (!video || !video.relatedVideos) return [];
  return video.relatedVideos.map(id => getVideoById(id)).filter(Boolean) as Video[];
};

export const getAllTags = () => {
  const tagsMap = new Map();
  MOCK_VIDEOS.forEach(video => {
    video.tags.forEach(tag => {
      const key = `${tag.name}-${tag.type}`;
      if (!tagsMap.has(key)) {
        tagsMap.set(key, { ...tag, count: 0 });
      }
      tagsMap.get(key).count += 1;
    });
  });
  return Array.from(tagsMap.values()).sort((a, b) => b.count - a.count);
};

export const getPopularVideos = (count: number = 10): Video[] => {
  return [...MOCK_VIDEOS].sort((a, b) => b.views - a.views).slice(0, count);
};

export const getNewVideos = (count: number = 10): Video[] => {
  return [...MOCK_VIDEOS]
    .sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime())
    .slice(0, count);
};
