import { Home, Search, Bell, Mail, User, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

export default function SidebarLeft() {
    const navItems = [
        { icon: Home, label: "Home", path: "/dashboard" },
        { icon: Search, label: "Explore", path: "#" },
        { icon: Bell, label: "Notifications", path: "#" },
        { icon: Mail, label: "Messages", path: "#" },
        { icon: User, label: "Profile", path: "#" },
        { icon: MoreHorizontal, label: "More", path: "#" },
    ];

    return (
        <div className="hidden sm:flex flex-col w-[80px] xl:w-[275px] h-screen sticky top-0 px-2 py-4 overflow-y-auto">
            {/* Logo */}
            <div className="p-3 mb-2 rounded-full hover:bg-gray-900 w-fit cursor-pointer transition">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl">
                    X
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2 mb-4">
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        to={item.path}
                        className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-900 transition w-fit xl:w-full"
                    >
                        <item.icon size={26} />
                        <span className="hidden xl:block text-xl font-medium">{item.label}</span>
                    </Link>
                ))}
            </nav>

            {/* Post Button */}
            <button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full p-4 xl:py-3 xl:px-8 font-bold shadow-lg transition w-fit xl:w-full mt-2">
                <span className="hidden xl:block">Post</span>
                <span className="block xl:hidden">+</span>
            </button>

            {/* User Profile (Bottom) */}
            <div className="mt-auto flex items-center gap-3 p-3 rounded-full hover:bg-gray-900 cursor-pointer transition w-fit xl:w-full">
                <div className="w-10 h-10 rounded-full bg-gray-700" />
                <div className="hidden xl:block">
                    <p className="font-bold text-sm">User Name</p>
                    <p className="text-gray-500 text-sm">@username</p>
                </div>
                <MoreHorizontal className="hidden xl:block ml-auto" size={18} />
            </div>
        </div>
    );
}
