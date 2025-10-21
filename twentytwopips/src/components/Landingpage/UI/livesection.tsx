import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

type Match = {
    id: number;
    title: string;
    img: string;
    channel: string;
    time?: string;
};

type MatchData = {
    live: Match[];
    upcoming: Match[];
};

export default function SportsCarousel() {
    const [activeTab, setActiveTab] = useState<"live" | "upcoming">("live");
    const [matches, setMatches] = useState<MatchData>({ live: [], upcoming: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch dynamic data
    useEffect(() => {
        async function fetchMatches() {
            try {
                setLoading(true);
                setError(null);
                // Example API endpoint — replace with your own
                const res = await fetch(``);
                if (!res.ok) throw new Error("Failed to fetch match data");

                const data: MatchData = await res.json();
                setMatches(data);
            } catch (err: any) {
                console.error(err);
                setError("Unable to load live trades. Please try again later.");
            } finally {
                setLoading(false);
            }
        }

        fetchMatches();
    }, []);

    return (
        <section className="bg-[#1a1d29] text-white py-6">
            <div className="max-w-7xl mx-auto px-4">
                {/* Tabs */}
                <div className="flex items-center space-x-8 mb-6 border-b border-gray-700">
                    <button
                        onClick={() => setActiveTab("live")}
                        className={`pb-2 text-sm font-semibold transition ${activeTab === "live"
                            ? "text-red-500 border-b-2 border-red-500"
                            : "text-gray-400 hover:text-white"
                            }`}
                    >
                        ● Live Trade
                    </button>
                    <button
                        onClick={() => setActiveTab("upcoming")}
                        className={`pb-2 text-sm font-semibold transition ${activeTab === "upcoming"
                            ? "text-blue-400 border-b-2 border-blue-400"
                            : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Upcoming
                    </button>
                </div>

                {/* Loading / Error States */}
                {loading && (
                    <div className="text-center py-10 text-gray-400">Loading matches...</div>
                )}
                {error && (
                    <div className="text-center py-10 text-red-400">{error}</div>
                )}

                {/* Matches */}
                {!loading && !error && matches[activeTab]?.length > 0 ? (
                    <div className="scrollbar-hide">
                        <div
                            className="
                flex md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
                gap-6 overflow-x-auto md:overflow-visible pb-2
              "
                        >
                            {matches[activeTab].map((match) => (
                                <div
                                    key={match.id}
                                    className="min-w-[220px] md:min-w-0 bg-[#11131a] rounded-md overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-all"
                                >
                                    {/* Thumbnail */}
                                    <div className="relative">
                                        <img
                                            src={match.img}
                                            alt={match.title}
                                            className="w-full h-32 object-cover"
                                        />
                                        {activeTab === "live" && (
                                            <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                                                LIVE
                                            </span>
                                        )}
                                    </div>

                                    {/* Info */}
                                    <div className="p-3 text-sm flex flex-col justify-between h-[90px]">
                                        <p className="line-clamp-2 leading-snug">{match.title}</p>
                                        <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
                                            {activeTab === "upcoming" && (
                                                <span className="flex items-center gap-1">
                                                    <Clock size={12} /> {match.time}
                                                </span>
                                            )}
                                            <span className="font-bold">{match.channel}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    !loading &&
                    !error && (
                        <div className="text-center py-10 text-gray-400">
                            No {activeTab} matches available.
                        </div>
                    )
                )}
            </div>
        </section>
    );
}
