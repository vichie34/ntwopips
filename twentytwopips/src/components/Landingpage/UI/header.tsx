import { useState } from "react";
import { Menu, Search, User, X } from "lucide-react";

interface NavLink {
    name: string;
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks: NavLink[] = [
        { name: "Learn Forex" },
        { name: "Learn Crypto" },
        { name: "Tools" },
        { name: "Traders Sentiments" },
        { name: "Traders Calendar" },
    ];

    return (
        <header className="bg-[#0b0d17] text-white w-full fixed top-0 left-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img
                        src="/logo-supersport.png"
                        alt="Supersport Logo"
                        className="h-8"
                    />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6 text-sm">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            className="hover:text-red-500 transition-colors duration-200"
                        >
                            {link.name}
                        </button>
                    ))}
                </nav>

                {/* Icons */}
                <div className="flex items-center space-x-4">
                    <Search className="h-5 w-5 cursor-pointer hover:text-red-500 transition" />
                    <User className="h-5 w-5 cursor-pointer hover:text-red-500 transition" />
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? (
                            <X className="h-6 w-6 hover:text-red-500 transition" />
                        ) : (
                            <Menu className="h-6 w-6 hover:text-red-500 transition" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={`md:hidden bg-[#1a1d29] overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="flex flex-col space-y-3 px-6 py-4 text-sm">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            className="text-left hover:text-red-500 transition-colors duration-200"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
}
