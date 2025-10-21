import { useState } from "react";
import {
  Search,
  Menu as MenuIcon,
  ChevronDown,
} from "lucide-react";
import { Button } from "../News/button";

export default function NavigationHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { title: "ANALYSIS", badge: "Premium" },
    { title: "NEWS" },
    { title: "TRADING", dropdown: true },
    { title: "LEARN FOREX" },
    { title: "LEARN CRYPTO" },
    // { title: "FORUMS" },
    { title: "CALENDAR" },
    { title: "TOOLS" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0b0d17] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <img
          src=""
          alt="Twentytwopips"
          className="h-10 cursor-pointer"
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-3">
          {navLinks.map((link) => (
            <div
              key={link.title}
              className="relative group"
              onMouseEnter={() => link.dropdown && setIsDropdownOpen(true)}
              onMouseLeave={() => link.dropdown && setIsDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:bg-white/10 rounded transition"
              >
                {link.title}
                {link.badge && (
                  <span className="ml-1 bg-yellow-400 text-black text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
                    {link.badge}
                  </span>
                )}
                {link.dropdown && <ChevronDown size={14} />}
              </button>

              {/* Dropdown */}
              {link.dropdown && isDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-[#1a1d29] rounded shadow-lg p-4 flex flex-col text-white min-w-[180px]">
                  {[
                    "Crypto",
                    "Trading Systems",
                    "Psychology",
                    "Technical Analysis",
                    "Trade Ideas",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm hover:bg-white/10 cursor-pointer rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-3">
          <Search className="w-5 h-5 hidden md:block cursor-pointer" />
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Sign In
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              Join
            </Button>
          </div>
          <MenuIcon
            className="w-6 h-6 md:hidden cursor-pointer"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#0b0d17] border-t border-[#0b0d17] px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <div key={link.title}>
              <button className="block w-full text-left py-2 text-sm hover:bg-blue-700 rounded px-2">
                {link.title}
              </button>
            </div>
          ))}
          <div className="flex flex-col space-y-2 mt-3">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Sign In
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              Join
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
