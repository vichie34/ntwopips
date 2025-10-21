import Header from "./UI/header";
import SportsCarousel from "./UI/livesection";
import EditorsPicks from "./UI/posts";
import NewsSection from "./UI/news_section";
import Footer from "./UI/footer";

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
