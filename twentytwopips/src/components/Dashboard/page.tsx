import SidebarLeft from "./Layout/SidebarLeft";
import SidebarRight from "./Layout/SidebarRight";
import MainFeed from "./Layout/MainFeed";
import BottomNav from "./Layout/BottomNav";

export default function Dashboard() {
    return (
        <div className="bg-black min-h-screen w-full text-white flex justify-center overflow-x-hidden">
            <div className="flex w-full max-w-[1265px] justify-center lg:justify-start">
                {/* Left Sidebar (Navigation) */}
                <SidebarLeft />

                {/* Main Feed (Center) */}
                <MainFeed />

                {/* Right Sidebar (Search/Trending) - Hidden on smaller screens */}
                <div className="hidden lg:block w-[350px] pl-8 py-4">
                    <SidebarRight />
                </div>
            </div>
            <BottomNav />
        </div>
    );
}
