import { Home, Search, Bell, Mail } from "lucide-react";

export default function BottomNav() {
    return (
        <nav className="fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 flex justify-around py-3 sm:hidden z-50 text-white">
            <button className="flex flex-col items-center">
                <Home size={26} />
            </button>
            <button className="flex flex-col items-center">
                <Search size={26} />
            </button>
            <button className="flex flex-col items-center">
                <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center -mt-1">
                    <span className="text-2xl font-bold text-white">+</span>
                </div>
            </button>
            <button className="flex flex-col items-center">
                <Bell size={26} />
            </button>
            <button className="flex flex-col items-center">
                <Mail size={26} />
            </button>
        </nav>
    );
}
