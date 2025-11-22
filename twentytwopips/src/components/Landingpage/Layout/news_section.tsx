import { ArrowRight } from 'lucide-react';

interface NewsItem {
    id: number;
    title: string;
    description: string;
    category: string;
    timeAgo: string;
    image: string;
    featured?: boolean;
}

const newsData: NewsItem[] = [
    {
        id: 1,
        title: "FIFA unveils Trionda, the official ball of the 2026 World Cup",
        description: "FIFA has unveiled the official match ball for the 2026 World Cup, combining high-tech refinements and design details celebrating the three co-host countries — the United States, Mexico and Canada.",
        category: "Football",
        timeAgo: "2 days ago",
        image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200",
        featured: true
    },
    {
        id: 2,
        title: "England wins toss and bowl against Proteas",
        description: "England captain Jos Buttler won the toss and elected to bowl first in the crucial match against South Africa.",
        category: "Cricket",
        timeAgo: "6 hours ago",
        image: "https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 3,
        title: "Bellingham left out of England squad for October games",
        description: "Real Madrid midfielder Jude Bellingham has been omitted from the England squad for upcoming international fixtures.",
        category: "Football",
        timeAgo: "4 hours ago",
        image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 4,
        title: "Springboks prepare for Rugby Championship finale",
        description: "South Africa's national rugby team intensifies training ahead of the tournament's decisive match.",
        category: "Rugby",
        timeAgo: "8 hours ago",
        image: "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 5,
        title: "London bridge is falling down",
        description: "Hala madrid!!!!!!",
        category: "Man U",
        timeAgo: "2 mins ago",
        image: "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
];

export default function NewsSection() {
    const handleMoreNews = () => {
        window.location.href = '/news';
    };

    return (
        <div className="min-h-screen bg-[#0b0d17]">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-100 mb-8">Read the latest news</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {newsData.map((news) => (
                        news.featured ? (
                            <div
                                key={news.id}
                                className="md:col-span-2 lg:col-span-2 bg-[#0b0d17] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-800"
                            >
                                <div className="aspect-video w-full overflow-hidden">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{news.category}</span>
                                        <span className="text-gray-300">·</span>
                                        <span className="text-xs text-gray-500">{news.timeAgo}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight hover:text-gray-700 transition-colors">
                                        {news.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {news.description}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div
                                key={news.id}
                                className="bg-[#0b0d17] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-800"
                            >
                                <div className="aspect-video w-full overflow-hidden">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{news.category}</span>
                                        <span className="text-gray-300">·</span>
                                        <span className="text-xs text-gray-500">{news.timeAgo}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 leading-tight hover:text-gray-700 transition-colors">
                                        {news.title}
                                    </h3>
                                    {news.description && (
                                        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                                            {news.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )
                    ))}
                </div>

                <div className="flex justify-center py-6">
                    <button
                        onClick={handleMoreNews}
                        className="group inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:shadow-lg"
                    >
                        <span>More News</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}
