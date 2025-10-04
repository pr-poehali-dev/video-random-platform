export type Language = 'ru' | 'en';

export const translations = {
  ru: {
    // Header
    'header.title': 'VIDEOHUB',
    'header.popular': 'Популярные',
    'header.random': 'Случайные',
    'header.new': 'Новые',
    'header.tags': 'Теги',
    'header.analytics': 'Аналитика',
    
    // Home page
    'home.title': 'случайных видео',
    'home.subtitle': 'Обновите страницу для новой подборки',
    'home.refresh': 'Обновить',
    
    // Video page
    'video.views': 'просмотров',
    'video.related': 'Похожие видео',
    'video.tags': 'Теги',
    'video.description': 'Описание',
    'video.notFound': 'Видео не найдено',
    'video.goHome': 'На главную',
    
    // Search page
    'search.title': 'Поиск',
    'search.subtitle': 'видео',
    'search.placeholder': 'Поиск по названию или тегам...',
    'search.filterByTags': 'Фильтр по тегам',
    'search.selected': 'Выбрано:',
    'search.results': 'Результаты поиска',
    'search.videosCount': 'видео',
    'search.noResults': 'Ничего не найдено',
    'search.tryAgain': 'Попробуйте изменить параметры поиска',
    
    // Popular page
    'popular.title': 'Популярные',
    'popular.subtitle': 'видео',
    'popular.description': 'Самые просматриваемые видео на платформе',
    
    // New page
    'new.title': 'Новые',
    'new.subtitle': 'видео',
    'new.description': 'Последние добавленные видео на платформе',
    
    // Tags page
    'tags.title': 'Все',
    'tags.subtitle': 'теги',
    'tags.description': 'Исследуйте видео по категориям, актёрам, странам и праздникам',
    'tags.count': 'тегов',
    
    // Analytics page
    'analytics.title': 'Аналитика',
    'analytics.subtitle': 'платформы',
    'analytics.description': 'Статистика просмотров и популярный контент',
    'analytics.totalVideos': 'Всего видео',
    'analytics.totalViews': 'Всего просмотров',
    'analytics.avgViews': 'Средние просмотры',
    'analytics.popularTags': 'Популярные теги',
    'analytics.topVideos': 'Топ по просмотрам',
    'analytics.mostPopular': 'Самые популярные',
    
    // Tag types
    'tagType.actor': 'актёр',
    'tagType.country': 'страна',
    'tagType.category': 'категория',
    'tagType.holiday': 'праздник',
  },
  en: {
    // Header
    'header.title': 'VIDEOHUB',
    'header.popular': 'Popular',
    'header.random': 'Random',
    'header.new': 'New',
    'header.tags': 'Tags',
    'header.analytics': 'Analytics',
    
    // Home page
    'home.title': 'random videos',
    'home.subtitle': 'Refresh the page for a new selection',
    'home.refresh': 'Refresh',
    
    // Video page
    'video.views': 'views',
    'video.related': 'Related videos',
    'video.tags': 'Tags',
    'video.description': 'Description',
    'video.notFound': 'Video not found',
    'video.goHome': 'Go home',
    
    // Search page
    'search.title': 'Search',
    'search.subtitle': 'videos',
    'search.placeholder': 'Search by title or tags...',
    'search.filterByTags': 'Filter by tags',
    'search.selected': 'Selected:',
    'search.results': 'Search results',
    'search.videosCount': 'videos',
    'search.noResults': 'No results found',
    'search.tryAgain': 'Try changing search parameters',
    
    // Popular page
    'popular.title': 'Popular',
    'popular.subtitle': 'videos',
    'popular.description': 'Most viewed videos on the platform',
    
    // New page
    'new.title': 'New',
    'new.subtitle': 'videos',
    'new.description': 'Latest videos added to the platform',
    
    // Tags page
    'tags.title': 'All',
    'tags.subtitle': 'tags',
    'tags.description': 'Explore videos by categories, actors, countries and holidays',
    'tags.count': 'tags',
    
    // Analytics page
    'analytics.title': 'Analytics',
    'analytics.subtitle': 'platform',
    'analytics.description': 'View statistics and popular content',
    'analytics.totalVideos': 'Total videos',
    'analytics.totalViews': 'Total views',
    'analytics.avgViews': 'Average views',
    'analytics.popularTags': 'Popular tags',
    'analytics.topVideos': 'Top by views',
    'analytics.mostPopular': 'Most popular',
    
    // Tag types
    'tagType.actor': 'actor',
    'tagType.country': 'country',
    'tagType.category': 'category',
    'tagType.holiday': 'holiday',
  },
};

export const useTranslation = (lang: Language = 'ru') => {
  const t = (key: keyof typeof translations.ru): string => {
    return translations[lang][key] || translations.ru[key] || key;
  };

  return { t, lang };
};
