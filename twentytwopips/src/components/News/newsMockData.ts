import type { Article, Partner } from './types';

// Mock data for news articles
export const mockRootProps = {
  articles: [
    {
      id: "1",
      category: "Trading Systems",
      title: "Manual Trading vs. Algorithmic Trading: Key Differences",
      description: "Learn how manual and algorithmic trading differ in speed, discipline, and strategy. A clear comparison to guide traders exploring automation.",
      thumbnail: "https://bpcdn.co/images/2025/09/27121905/forexrova-360x200.jpg",
      url: "/trading/manual-vs-algorithmic-trading",
      isSponsored: true as const,
      sponsor: {
        name: "ForexRova",
        logo: "https://bpcdn.co/images/2025/09/27122455/forexrova.png",
        url: "https://forexrova.com/?utm_source=babypips&utm_campaign=educational_articles"
      },
      timestamp: new Date("2025-10-03T10:00:00Z"),
      author: null
    },

    {
      id: "2",
      category: "News",
      title: "Swiss CPI Comes In Line With Expectations of a 0.2% Dip for September",
      description: "The Swiss economy printed another decline in inflation as expected, supporting expectations of further easing by the SNB. Here's how CHF pairs reacted.",
      thumbnail: "https://bpcdn.co/images/2025/10/02185402/swiss-cpi-2025-10-02-360x187.png",
      url: "/news/headline-swiss-cpi-line-expectations-dip-september-2025-10-03",
      isSponsored: false as const,
      timestamp: new Date("2025-10-03T06:00:00Z"),
      author: "Pippo"
    },
    {
      id: "3",
      category: "News",
      title: "Daily Broad Market Recap – October 2, 2025",
      description: "Markets weathered Russia missile tensions & US government shutdown news as tech stocks lifted equities to fresh records despite political dysfunction.",
      thumbnail: "https://bpcdn.co/images/2025/10/03085818/Market-Recap-2025-10-02-360x187.png",
      url: "/news/daily-broad-market-recap-2025-10-02",
      isSponsored: false as const,
      timestamp: new Date("2025-10-02T19:00:00Z"),
      author: "Pippo"
    },
    {
      id: "4",
      category: "News",
      title: "Event Guide: U.S. Non-Farm Payrolls Report (September 2025)",
      description: "With Fed policymakers still mildly concerned about the U.S. labor market, will the upcoming NFP report tip the scales back in favor of more easing?",
      thumbnail: "https://bpcdn.co/images/2023/01/05185659/trading-the-us-nfp-report-360x188.png",
      url: "/analysis/event-guide-forex-us-non-farm-payrolls-august-2025-10-02",
      isSponsored: false as const,
      isPremium: true as const,
      timestamp: new Date("2025-10-01T12:00:00Z"),
      author: "Pippo"
    },
    {
      id: "5",
      category: "News",
      title: "Dollar Shrugs Off Manufacturing Weakness, Finishes Higher After ISM Report",
      description: "The dollar, already pressured by the soft ADP, bounced from its lows after the ISM headline PMI came in stronger than expected.",
      thumbnail: "https://bpcdn.co/images/2025/10/02091421/US-ISM-2025-10-02-360x187.png",
      url: "/news/headline-dollar-shrugs-off-manufacturing-weakness-finishes-higher-after-ism-report-2025-10-02",
      isSponsored: false as const,
      timestamp: new Date("2025-10-01T18:00:00Z"),
      author: "Pippo"
    },
    {
      id: "6",
      category: "News",
      title: "U.S. ADP September Jobs Report Falls Short with Surprise 32K Drop in Hiring",
      description: "The U.S. private sector unexpectedly shed 32,000 jobs in September versus the projected gain of 54,000, according to ADP's National Employment Report.",
      thumbnail: "https://bpcdn.co/images/2025/10/02091544/US-adp-news-2025-10-02-360x187.png",
      url: "/news/headline-adp-jobs-report-falls-short-surprise-32k-hiring-drop-september-2025-10-02",
      isSponsored: false as const,
      timestamp: new Date("2025-10-02T14:00:00Z"),
      author: "Pippo"
    }
  ] as Article[],
  partners: [
    {
      name: "Vantage",
      logo: "https://bpcdn.co/images/partners/vantage-logo.png",
      url: "https://vantage.com"
    },
    {
      name: "TradingView",
      logo: "https://bpcdn.co/images/partners/tradingview-logo.png",
      url: "https://tradingview.com"
    }
  ] as Partner[]
};