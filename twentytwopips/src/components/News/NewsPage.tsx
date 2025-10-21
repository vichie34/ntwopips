import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../News/button";
import NavigationHeader from "./NavigationHeader";
import NewsArticleCard from "./NewsArticleCard";
import PartnerSidebar from "./PartnerSidebar";
// import CTABanner from "./CTABanner";
import Footer from "./Footer";
import type { NewsPageRootProps } from "./types";

export default function NewsPage({
  articles,
  partners,
  currentPage = 1,
  totalPages = 10,
  onPageChange,
}: NewsPageRootProps) {
  const [page, setPage] = useState(currentPage);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    onPageChange?.(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0d17] text-foreground">
      {/* Header */}
      <NavigationHeader />

      {/* Page Title */}
      <section className="bg-gray-800 py-8 mb-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="bg-[#0b0d17] text-white px-6 py-2 rounded-full font-semibold text-xl inline-block">
            Market News
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 mb-8 flex flex-col md:flex-row gap-8">
        {/* Articles */}
        <div className="flex-1">
          {articles.map((article) => (
            <NewsArticleCard key={article.id} article={article} />
          ))}

          {/* Pagination */}
          <div className="flex justify-center gap-4 mt-6 text-white">
            <Button
              variant="outline"
              disabled={page === 1}
              onClick={() => handlePageChange(page - 1)}
              className="flex items-center gap-2 min-w-[100px] font-semibold"
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </Button>

            <Button
              variant="default"
              disabled={page === totalPages}
              onClick={() => handlePageChange(page + 1)}
              className="flex items-center gap-2 min-w-[100px] font-semibold"
            >
              Next <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full md:w-[300px]">
          <PartnerSidebar partners={partners} />
        </aside>
      </main>

      <Footer />
    </div>
  );
}
