import { useState } from "react";
import {
    PlusCircle,
    ThumbsUp,
    TrendingUp,
    TrendingDown,
    MessageCircle,
    SendHorizonal
} from "lucide-react";

type Comment = {
    id: number;
    user: string;
    text: string;
};

type Post = {
    id: number;
    title: string;
    img: string;
    user: string;
    likes: number;
    sentiment: "bullish" | "bearish" | null;
    comments: Comment[];
};

export default function EditorsPicks() {
    const [posts, setPosts] = useState<Post[]>([
        {
            id: 1,
            title: "EUROPA LEAGUE WRAP: Villa win as Forest and Scottish clubs lose",
            img: "/images/villa.png",
            user: "John Doe",
            likes: 0,
            sentiment: null,
            comments: [],
        },
        {
            id: 2,
            title:
                "FIRST-TIMERS: Crystal Palace beat Dynamo Kyiv in Conference League opener",
            img: "/images/palace.png",
            user: "Sarah Lee",
            likes: 0,
            sentiment: null,
            comments: [],
        },
        {
            id: 3,
            title: "SERIE A: Milan seek fifth straight win in showdown with Juventus",
            img: "/images/milan.png",
            user: "David Kim",
            likes: 0,
            sentiment: null,
            comments: [],
        },
    ]);

    const [newPost, setNewPost] = useState<{ title: string; img: string | null }>(
        {
            title: "",
            img: null,
        }
    );

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setNewPost({
                ...newPost,
                img: URL.createObjectURL(e.target.files[0]),
            });
        }
    };

    const handleAddPost = () => {
        if (newPost.title && newPost.img) {
            setPosts([
                {
                    id: Date.now(),
                    title: newPost.title,
                    img: newPost.img,
                    user: "You",
                    likes: 0,
                    sentiment: null,
                    comments: [],
                },
                ...posts,
            ]);
            setNewPost({ title: "", img: null });
        }
    };

    const handleLike = (id: number) => {
        setPosts(
            posts.map((post) =>
                post.id === id ? { ...post, likes: post.likes + 1 } : post
            )
        );
    };

    const handleSentiment = (id: number, choice: "bullish" | "bearish") => {
        setPosts(
            posts.map((post) =>
                post.id === id
                    ? { ...post, sentiment: post.sentiment === choice ? null : choice }
                    : post
            )
        );
    };

    const handleAddComment = (id: number, text: string) => {
        if (!text.trim()) return;
        setPosts(
            posts.map((post) =>
                post.id === id
                    ? {
                        ...post,
                        comments: [
                            ...post.comments,
                            { id: Date.now(), user: "You", text },
                        ],
                    }
                    : post
            )
        );
    };

    const getInitials = (name: string) =>
        name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase();

    return (
        <section className="bg-[#0b0d17] text-white py-6 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Left Featured Post */}
                <div className="md:col-span-6">
                    {posts[0] && (
                        <div className="bg-[#1a1d29] rounded-md overflow-hidden">
                            {/* User Info */}
                            <div className="flex items-center gap-2 p-3">
                                <div className="bg-red-600 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
                                    {getInitials(posts[0].user)}
                                </div>
                                <span className="text-sm font-medium">{posts[0].user}</span>
                            </div>

                            <div className="relative">
                                <img
                                    src={posts[0].img}
                                    alt={posts[0].title}
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                            <div className="p-4 text-sm font-semibold">{posts[0].title}</div>

                            {/* Actions */}
                            <div className="flex items-center justify-between px-4 pb-3 text-xs">
                                <button
                                    onClick={() => handleLike(posts[0].id)}
                                    className="flex items-center gap-1 hover:text-red-400"
                                >
                                    <ThumbsUp size={14} /> {posts[0].likes}
                                </button>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleSentiment(posts[0].id, "bullish")}
                                        className={`flex items-center gap-1 px-2 py-1 rounded ${posts[0].sentiment === "bullish"
                                            ? "bg-green-600 text-white"
                                            : "bg-[#11131a]"
                                            }`}
                                    >
                                        <TrendingUp size={14} /> Bullish
                                    </button>
                                    <button
                                        onClick={() => handleSentiment(posts[0].id, "bearish")}
                                        className={`flex items-center gap-1 px-2 py-1 rounded ${posts[0].sentiment === "bearish"
                                            ? "bg-red-600 text-white"
                                            : "bg-[#11131a]"
                                            }`}
                                    >
                                        <TrendingDown size={14} /> Bearish
                                    </button>
                                </div>
                            </div>

                            {/* Comments */}
                            <div className="px-4 pb-4">
                                <h4 className="text-xs mb-2 flex items-center gap-1 font-semibold">
                                    <MessageCircle size={14} /> Comments
                                </h4>
                                {posts[0].comments.map((c) => (
                                    <div key={c.id} className="flex items-start gap-2 mb-2">
                                        <div className="bg-red-600 text-white text-[10px] font-bold rounded-full w-6 h-6 flex items-center justify-center">
                                            {getInitials(c.user)}
                                        </div>
                                        <div className="bg-[#11131a] p-2 rounded text-xs flex-1">
                                            <span className="font-semibold">{c.user}:</span> {c.text}
                                        </div>
                                    </div>
                                ))}
                                <CommentBox onSend={(text) => handleAddComment(posts[0].id, text)} />
                            </div>
                        </div>
                    )}
                </div>

                {/* Middle Smaller Posts */}
                <div className="md:col-span-3 space-y-4">
                    {posts.slice(1, 5).map((post) => (
                        <div
                            key={post.id}
                            className="bg-[#1a1d29] rounded-md flex flex-col overflow-hidden"
                        >
                            {/* User Info */}
                            <div className="flex items-center gap-2 p-2">
                                <div className="bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                                    {getInitials(post.user)}
                                </div>
                                <span className="text-xs font-medium">{post.user}</span>
                            </div>

                            <div className="flex">
                                <img
                                    src={post.img}
                                    alt={post.title}
                                    className="w-24 h-20 object-cover"
                                />
                                <div className="p-2 text-xs font-medium">{post.title}</div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center justify-between p-2 text-xs">
                                <button
                                    onClick={() => handleLike(post.id)}
                                    className="flex items-center gap-1 hover:text-red-400"
                                >
                                    <ThumbsUp size={12} /> {post.likes}
                                </button>
                                <div className="flex gap-1">
                                    <button
                                        onClick={() => handleSentiment(post.id, "bullish")}
                                        className={`px-2 py-1 rounded ${post.sentiment === "bullish"
                                            ? "bg-green-600 text-white"
                                            : "bg-[#11131a]"
                                            }`}
                                    >
                                        <TrendingUp size={12} />
                                    </button>
                                    <button
                                        onClick={() => handleSentiment(post.id, "bearish")}
                                        className={`px-2 py-1 rounded ${post.sentiment === "bearish"
                                            ? "bg-red-600 text-white"
                                            : "bg-[#11131a]"
                                            }`}
                                    >
                                        <TrendingDown size={12} />
                                    </button>
                                </div>
                            </div>

                            {/* Comments */}
                            <div className="px-2 pb-2">
                                {post.comments.map((c) => (
                                    <div key={c.id} className="flex items-start gap-1 mb-1">
                                        <div className="bg-red-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                            {getInitials(c.user)}
                                        </div>
                                        <div className="bg-[#11131a] p-1 rounded text-[10px] flex-1">
                                            <span className="font-semibold">{c.user}:</span> {c.text}
                                        </div>
                                    </div>
                                ))}
                                <CommentBox onSend={(text) => handleAddComment(post.id, text)} />

                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Ads + Upload */}
                <div className="md:col-span-3 space-y-4">
                    {/* Ad Placeholder */}
                    <div className="bg-[#1a1d29] h-40 flex items-center justify-center rounded">
                        <span className="text-gray-400">Advertisement</span>
                    </div>

                    {/* Upload New Post */}
                    <div className="bg-[#1a1d29] p-4 rounded-md">
                        <h3 className="text-sm font-bold mb-2">Add Your Post</h3>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="mb-2 text-xs text-gray-400"
                        />
                        <input
                            type="text"
                            value={newPost.title}
                            onChange={(e) =>
                                setNewPost({ ...newPost, title: e.target.value })
                            }
                            placeholder="Write your thoughts..."
                            className="w-full p-2 mb-2 rounded bg-[#11131a] text-xs text-white outline-none"
                        />
                        <button
                            onClick={handleAddPost}
                            className="flex items-center gap-1 text-xs bg-red-600 hover:bg-red-700 px-3 py-2 rounded w-full justify-center"
                        >
                            <PlusCircle size={14} /> Post
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CommentBox({ onSend }: { onSend: (text: string) => void }) {
    const [text, setText] = useState("");

    const handleSend = () => {
        if (!text.trim()) return;
        onSend(text);
        setText("");
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write a comment..."
                className="w-full p-2 pr-8 rounded bg-[#11131a] text-xs text-white outline-none"
            />
            {text && (
                <button
                    onClick={handleSend}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-400"
                >
                    <SendHorizonal size={16} />
                </button>
            )}
        </div>
    );
}
