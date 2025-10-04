export interface Tag {
  name: string;
  type: 'actor' | 'country' | 'category' | 'holiday';
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: Tag[];
  duration: string;
  views: number;
  uploadDate: string;
  relatedVideos?: string[];
}

export interface VideoAnalytics {
  totalViews: number;
  totalVideos: number;
  averageViewTime: number;
  popularTags: Array<{ tag: string; count: number }>;
  popularVideos: Video[];
}
