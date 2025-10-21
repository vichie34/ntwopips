import { Clock, Star } from "lucide-react";
import type { Article } from "./types";
import { formatTimeAgo } from "./utils";

interface NewsArticleCardProps {
  article: Article;
}

export default function NewsArticleCard({ article }: NewsArticleCardProps) {
  return (
    <div className="flex flex-col md:flex-row border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 mb-6 bg-white dark:bg-neutral-900">
      {/* Thumbnail */}
      <img
        src={article.thumbnail}
        alt={article.title}
        className="w-full md:w-72 h-48 object-cover flex-shrink-0"
      />

      {/* Content */}
      <div className="flex flex-col justify-between p-4 flex-1">
        <div>
          {/* Sponsored Section */}
          {article.isSponsored && article.sponsor && (
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
                Sponsored By
              </span>
              <a href={article.sponsor.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={article.sponsor.logo}
                  alt={article.sponsor.name}
                  className="h-5"
                />
              </a>
            </div>
          )}

          {/* Category + Premium */}
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-gray-800 text-white text-[11px] font-semibold px-2 py-0.5 rounded">
              {article.category}
            </span>

            {article.isPremium && (
              <span className="flex items-center gap-1 bg-yellow-400 text-black text-[11px] font-bold px-2 py-0.5 rounded">
                <Star className="w-3 h-3" /> Premium
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-semibold mb-2 leading-snug">
            <a
              href={article.url}
              className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
            >
              {article.title}
            </a>
          </h3>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-2">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{formatTimeAgo(article.timestamp)}</span>
            </div>
            {article.author && (
              <span>
                by <strong>{article.author}</strong>
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
            {article.description}
          </p>

          {/* Read More */}
          <a
            href={article.url}
            className="inline-flex items-center text-blue-600 font-semibold text-sm hover:underline"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
