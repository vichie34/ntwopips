import NewsPage from './NewsPage';
import { mockRootProps } from './newsMockData';

export default function News() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NewsPage
        articles={mockRootProps.articles}
        partners={mockRootProps.partners}
      />
    </div>
  );
}
