import Avatar from "../ui/Avatar";
import SentimentBar from "./SentimentBar";
import { Heart, MessageCircle } from "lucide-react";
import { useState } from "react";

type Sentiment = "bullish" | "bearish" | null;

type User = {
    avatar?: string;
    name: string;
    username: string;
};

type Post = {
    id: string;
    user: User;
    content: string;
    asset?: string;
    likes: number;
    comments: number;
    sentiment?: Sentiment;
};

type Props = {
    id: string;
    user: User;
    content: string;
    asset?: string;
    likes: number;
    comments: number;
    sentiment?: Sentiment | null;
    updatePost: (id: string, patch: Partial<Post>) => void;
};

export default function PostCard({
    id,
    user,
    content,
    asset,
    likes,
    comments,
    sentiment,
    updatePost,
}: Props) {
    const [localLikes, setLocalLikes] = useState<number>(likes);
    const [isLiked, setIsLiked] = useState<boolean>(false);

    const toggleLike = () => {
        const newLiked = !isLiked;
        setIsLiked(newLiked);

        const delta = newLiked ? 1 : -1;
        // update local state and call updatePost with the computed new value
        setLocalLikes((prev) => {
            const newLikes = prev + delta;
            try {
                updatePost(id, { likes: newLikes });
            } catch (e) {
                // swallow: updatePost might be optional in some usages
            }
            return newLikes;
        });
    };

    const handleSentiment = (type: Exclude<Sentiment, null>) => {
        const newSentiment: Sentiment = type === sentiment ? null : type;
        updatePost(id, { sentiment: newSentiment });
    };

    return (
        <div className="border-b border-gray-200 p-4 bg-white hover:bg-gray-50 transition dark:bg-transparent">
            <div className="flex gap-3">
                <Avatar src={user?.avatar} size={45} />

                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">{user?.name}</span>
                        <span className="text-gray-500">@{user?.username}</span>
                    </div>

                    <p className="mt-1">{content}</p>

                    {asset && <p className="mt-2 text-sm text-blue-600 font-medium">{asset}</p>}

                    <SentimentBar active={sentiment as any} onSentiment={handleSentiment as any} />

                    <div className="flex items-center gap-6 mt-3 text-gray-500">
                        <button
                            className={`flex items-center gap-1 transition ${isLiked ? "text-red-500" : "hover:text-red-500"}`}
                            onClick={toggleLike}
                            aria-pressed={isLiked}
                        >
                            <Heart size={18} fill={isLiked ? "red" : "none"} />
                            <span>{localLikes}</span>
                        </button>

                        <div className="flex items-center gap-1">
                            <MessageCircle size={18} />
                            <span>{comments}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
