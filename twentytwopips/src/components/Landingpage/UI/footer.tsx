export default function Footer() {
    return (
        <footer className="bg-[#0b0d17] text-gray-400 text-xs border-t border-gray-700 border-opacity-50 py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4">
                {/* Logos */}
                <div className="flex items-center space-x-6">
                    <img src="/images/multichoice.png" alt="Multichoice" className="h-10 object-contain" />
                    <img src="/images/supersport.png" alt="Supersport" className="h-8 object-contain" />
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-4 text-[11px]">
                    <a href="#" className="hover:text-white">MultiChoice Website</a>
                    <span>|</span>
                    <a href="#" className="hover:text-white">Terms & Conditions</a>
                    <span>|</span>
                    <a href="#" className="hover:text-white">Privacy & Cookie Notice</a>
                    <span>|</span>
                    <a href="#" className="hover:text-white">Responsible Disclosure Policy</a>
                    <span>|</span>
                    <a href="#" className="hover:text-white">Copyright</a>
                    <span>|</span>
                    <a href="#" className="hover:text-white">Careers</a>
                </div>

                {/* Copyright */}
                <div className="text-center text-[11px] text-gray-500">
                    © 2013 - 2025 MultiChoice (Pty) Ltd. All rights reserved.
                    <br />
                    SuperSport, from MultiChoice, delivers{" "}
                    <a href="#" className="text-blue-400 hover:underline">live sports</a>{" "}
                    across Africa. Find out more at{" "}
                    <a href="#" className="text-blue-400 hover:underline">Multichoice</a>.
                </div>
            </div>
        </footer>
    );
}
