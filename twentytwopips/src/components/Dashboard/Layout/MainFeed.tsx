import { useState, useEffect } from "react";
import { Post, initialPosts, generateMorePosts } from "../../../data/postsData";
import { MessageCircle, Repeat2, Share, BarChart2, Image, List, Smile, CalendarClock, MapPin } from "lucide-react";
import SentimentBar from "../Feed/SentimentBar";

export default function MainFeed() {
    const [posts, setPosts] = useState<Post[]>(initialPosts);
    const [loading, setLoading] = useState(false);

    const getInitials = (name: string) =>
        name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase();

    // Infinite Scroll Handler
    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 100 &&
                !loading
            ) {
                setLoading(true);
                // Simulate network delay
                setTimeout(() => {
                    const newPosts = generateMorePosts(5, posts.length + 1);
                    setPosts((prev) => [...prev, ...newPosts]);
                    setLoading(false);
                }, 1000);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [posts.length, loading]);

    return (
        <main className="flex-1 w-full max-w-[600px] border-x border-gray-800 min-h-screen pb-20">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-black/65 backdrop-blur-md border-b border-gray-800 px-4 py-3">
                <h2 className="text-xl font-bold">Home</h2>
            </div>

            {/* Post Composer Placeholder */}
            <div className="border-b border-gray-800 p-4 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex-shrink-0 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60" alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 pt-2">
                    <input
                        type="text"
                        placeholder="What's happening?"
                        className="w-full bg-transparent text-xl outline-none placeholder-gray-600 text-white mb-4"
                    />
                    <div className="flex justify-between items-center border-t border-gray-800 pt-3">
                        <div className="flex gap-1 sm:gap-2 text-sky-500">
                            <button className="hover:bg-sky-500/10 p-2 rounded-full transition -ml-2">
                                <Image size={20} />
                            </button>
                            <button className="hover:bg-sky-500/10 p-2 rounded-full transition">
                                <div className="border border-current rounded px-1 text-[10px] font-bold h-5 flex items-center">GIF</div>
                            </button>
                            <button className="hover:bg-sky-500/10 p-2 rounded-full transition">
                                <List size={20} />
                            </button>
                            <button className="hover:bg-sky-500/10 p-2 rounded-full transition">
                                <Smile size={20} />
                            </button>
                            <button className="hover:bg-sky-500/10 p-2 rounded-full transition hidden sm:block">
                                <CalendarClock size={20} />
                            </button>
                            <button className="hover:bg-sky-500/10 p-2 rounded-full transition">
                                <MapPin size={20} />
                            </button>
                        </div>
                        <button className="bg-sky-500 text-white font-bold rounded-full px-3 py-1.5 text-xs sm:text-sm sm:px-5 hover:bg-sky-600 transition disabled:opacity-50">
                            Post
                        </button>
                    </div>
                </div>
            </div>

            {/* Feed */}
            <div>
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="border-b border-gray-800 p-4 hover:bg-white/5 transition cursor-pointer"
                    >
                        <div className="flex gap-3">
                            {/* Avatar */}
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold text-sm overflow-hidden">
                                    {/* Random avatar color or image could be improved here, using initials for now */}
                                    {getInitials(post.user)}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                {/* Header */}
                                <div className="flex items-center gap-1 text-gray-500 text-sm">
                                    <span className="font-bold text-white truncate">{post.user}</span>
                                    <span className="truncate">@{post.user.replace(/\s+/g, '').toLowerCase()}</span>
                                    <span>·</span>
                                    <span>{Math.floor(Math.random() * 12) + 1}h</span>
                                </div>

                                {/* Text */}
                                <div className="mt-1 text-[15px] leading-normal whitespace-pre-wrap">
                                    {post.title}
                                </div>

                                {/* Image */}
                                {post.img && (
                                    <div className="mt-3 rounded-2xl overflow-hidden border border-gray-800 w-full">
                                        <img
                                            src={post.img}
                                            alt="Post attachment"
                                            className="w-full h-auto object-cover max-h-[500px]"
                                        />
                                    </div>
                                )}

                                {/* Actions */}
                                <div className="flex justify-between mt-3 text-gray-500 w-full">
                                    <button className="group flex items-center gap-2 hover:text-sky-500 transition">
                                        <div className="p-2 rounded-full group-hover:bg-sky-500/10 transition">
                                            <MessageCircle size={18} />
                                        </div>
                                        <span className="text-xs">{post.comments.length}</span>
                                    </button>

                                    <button className="group flex items-center gap-2 hover:text-green-500 transition">
                                        <div className="p-2 rounded-full group-hover:bg-green-500/10 transition">
                                            <Repeat2 size={18} />
                                        </div>
                                    </button>

                                    <SentimentBar
                                        active={post.sentiment}
                                        onSentiment={(sentiment) => {
                                            setPosts(posts.map(p =>
                                                p.id === post.id ? { ...p, sentiment } : p
                                            ));
                                        }}
                                    />

                                    <button className="group flex items-center gap-2 hover:text-sky-500 transition">
                                        <div className="p-2 rounded-full group-hover:bg-sky-500/10 transition">
                                            <BarChart2 size={18} />
                                        </div>
                                    </button>

                                    <button className="group flex items-center gap-2 hover:text-sky-500 transition">
                                        <div className="p-2 rounded-full group-hover:bg-sky-500/10 transition">
                                            <Share size={18} />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="p-4 text-center text-sky-500">
                        Loading more posts...
                    </div>
                )}
            </div>
        </main>
    );
}
