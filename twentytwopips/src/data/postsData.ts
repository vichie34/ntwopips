export type Comment = {
    id: number;
    user: string;
    text: string;
};

export type Post = {
    id: number;
    title: string;
    img: string;
    user: string;
    likes: number;
    sentiment: "bullish" | "bearish" | null;
    comments: Comment[];
};

export const initialPosts: Post[] = [
    {
        id: 1,
        title: "EUROPA LEAGUE WRAP: Villa win as Forest and Scottish clubs lose",
        img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=800&auto=format&fit=crop&q=60",
        user: "John Doe",
        likes: 0,
        sentiment: null,
        comments: [],
    },
    {
        id: 2,
        title: "FIRST-TIMERS: Crystal Palace beat Dynamo Kyiv in Conference League opener",
        img: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=800&auto=format&fit=crop&q=60",
        user: "Sarah Lee",
        likes: 0,
        sentiment: null,
        comments: [],
    },
    {
        id: 3,
        title: "SERIE A: Milan seek fifth straight win in showdown with Juventus",
        img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=60",
        user: "David Kim",
        likes: 0,
        sentiment: null,
        comments: [],
    },
];

const USERS = ["Alex Thompson", "Maria Garcia", "James Wilson", "Linda Chen", "Robert Taylor", "Emily Davis", "Michael Brown", "Sophie Martin"];
const TITLES = [
    "Market analysis suggests a bullish trend for the upcoming quarter.",
    "Breaking: Central bank announces new interest rate decision.",
    "Tech stocks rally as earnings reports exceed expectations.",
    "Crypto markets seeing increased volatility this week.",
    "Oil prices stabilize after recent fluctuations.",
    "Global trade volume shows signs of recovery.",
    "New regulations expected to impact fintech sector.",
    "Investment strategies for the current economic climate.",
    "Startup funding reaches new highs in Q3.",
    "Real estate market trends vary across regions."
];
const IMAGES = [
    "https://images.unsplash.com/photo-1611974765270-ca1258634369?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1535320903710-d9cf113d2061?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1611974765270-ca1258634369?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1526304640152-d4619684e484?w=800&auto=format&fit=crop&q=60"
];

export const generateMorePosts = (count: number, startId: number): Post[] => {
    return Array.from({ length: count }).map((_, i) => ({
        id: startId + i,
        title: TITLES[Math.floor(Math.random() * TITLES.length)],
        img: Math.random() > 0.3 ? IMAGES[Math.floor(Math.random() * IMAGES.length)] : "",
        user: USERS[Math.floor(Math.random() * USERS.length)],
        likes: Math.floor(Math.random() * 500),
        sentiment: Math.random() > 0.5 ? "bullish" : "bearish",
        comments: []
    }));
};
