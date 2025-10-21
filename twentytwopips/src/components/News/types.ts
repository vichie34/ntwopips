// Props types
export interface Article {
  id: string;
  category: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  isSponsored: boolean;
  sponsor?: {
    name: string;
    logo: string;
    url: string;
  };
  isPremium?: boolean;
  timestamp: Date;
  author: string | null;
}

export interface Partner {
  name: string;
  logo: string;
  url: string;
}

export interface NewsPageProps {
  articles: Article[];
  partners: Partner[];
}

// Root component props for the News Page
export interface NewsPageRootProps {
  articles: Article[];
  partners: Partner[];
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}