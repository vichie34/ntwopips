import { TrendingUp, TrendingDown } from "lucide-react";

type Sentiment = "bullish" | "bearish";

type Props = {
    active?: Sentiment | null;
    onSentiment: (s: Sentiment) => void;
};

export default function SentimentBar({ active, onSentiment }: Props) {
    return (
        <div className="flex gap-4">
            <button
                onClick={() => onSentiment("bullish")}
                className={`flex items-center gap-2 px-3 py-1 rounded-lg transition ${active === "bullish"
                    ? "bg-green-600 text-white"
                    : "bg-green-100 text-green-700 hover:bg-green-200"
                    }`}
            >
                <TrendingUp size={18} />
            </button>

            <button
                onClick={() => onSentiment("bearish")}
                className={`flex items-center gap-2 px-3 py-1 rounded-lg transition ${active === "bearish"
                    ? "bg-red-600 text-white"
                    : "bg-red-100 text-red-700 hover:bg-red-200"
                    }`}
            >
                <TrendingDown size={18} />
            </button>
        </div>
    );
}
