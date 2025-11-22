import { Search, MoreHorizontal } from "lucide-react";

export default function SidebarRight() {
    return (
        <div className="sticky top-0 h-screen overflow-y-auto no-scrollbar">
            <style>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
            {/* Search Bar */}
            <div className="sticky top-0 bg-black py-2 z-10">
                <div className="bg-gray-900 rounded-full flex items-center px-4 py-2 focus-within:bg-black focus-within:ring-1 focus-within:ring-sky-500 border border-transparent focus-within:border-sky-500 transition">
                    <Search className="text-gray-500 mr-3" size={20} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent outline-none text-white placeholder-gray-500 w-full"
                    />
                </div>
            </div>

            {/* What's Happening */}
            <div className="bg-[#16181c] rounded-2xl mt-4 p-4">
                <h2 className="font-bold text-xl mb-4">What's happening</h2>
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="py-3 hover:bg-white/5 cursor-pointer transition -mx-4 px-4">
                        <div className="flex justify-between items-start">
                            <div className="text-xs text-gray-500">Trending in Finance</div>
                            <MoreHorizontal size={16} className="text-gray-500" />
                        </div>
                        <div className="font-bold text-sm mt-0.5">#ForexTrading</div>
                        <div className="text-xs text-gray-500 mt-0.5">50.4K posts</div>
                    </div>
                ))}
                <div className="text-sky-500 text-sm mt-4 cursor-pointer hover:underline">
                    Show more
                </div>
            </div>

            {/* Who to follow */}
            <div className="bg-[#16181c] rounded-2xl mt-4 p-4">
                <h2 className="font-bold text-xl mb-4">Who to follow</h2>
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between py-3 hover:bg-white/5 cursor-pointer transition -mx-4 px-4">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-gray-700" />
                            <div>
                                <div className="font-bold text-sm hover:underline">Trader {i}</div>
                                <div className="text-gray-500 text-sm">@trader{i}</div>
                            </div>
                        </div>
                        <button className="bg-white text-black font-bold text-sm px-4 py-1.5 rounded-full hover:bg-gray-200 transition">
                            Follow
                        </button>
                    </div>
                ))}
                <div className="text-sky-500 text-sm mt-4 cursor-pointer hover:underline">
                    Show more
                </div>
            </div>
        </div>
    );
}
