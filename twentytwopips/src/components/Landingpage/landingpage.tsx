import Header from "./Layout/header";
import SportsCarousel from "./Layout/livesection";
import EditorsPicks from "./Layout/posts";
import NewsSection from "./Layout/news_section";
import Footer from "./Layout/footer";

const Landingpage = () => {
    return (
        <>
            <Header />
            <SportsCarousel />
            <EditorsPicks />
            <NewsSection />
            <Footer />
        </>
    );
};

export default Landingpage;
