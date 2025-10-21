import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white px-6 py-12 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Learn Forex */}
        <div>
          <h2 className="text-lg font-bold mb-3">Learn Forex</h2>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li><a href="/learn/forex" className="hover:text-blue-400 hover:underline">How to Trade Forex</a></li>
            <li><a href="/quizzes" className="hover:text-blue-400 hover:underline">Forex Quizzes</a></li>
            <li><a href="https://forums.babypips.com/" className="hover:text-blue-400 hover:underline">Forex Forums</a></li>
            <li><a href="/forexpedia" className="hover:text-blue-400 hover:underline">Forex Glossary</a></li>
            <li><a href="/learn/forex/what-is-margin-trading" className="hover:text-blue-400 hover:underline">Forex Margin 101</a></li>
            <li><a href="/learn/forex/elementary" className="hover:text-blue-400 hover:underline">Technical Analysis 101</a></li>
            <li><a href="/learn/forex/undergraduate-senior" className="hover:text-blue-400 hover:underline">Risk Management 101</a></li>
          </ul>
        </div>

        {/* Forex Tools */}
        <div>
          <h2 className="text-lg font-bold mb-3">Forex Tools</h2>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li><a href="/tools/currency-correlation" className="hover:text-blue-400 hover:underline">Currency Correlation Calculator</a></li>
            <li><a href="/economic-calendar" className="hover:text-blue-400 hover:underline">Economic Calendar</a></li>
            <li><a href="/tools/risk-on-risk-off-meter" className="hover:text-blue-400 hover:underline">Risk-On / Risk-Off Meter</a></li>
            <li><a href="/tools/position-size-calculator" className="hover:text-blue-400 hover:underline">Position Size Calculator</a></li>
            <li><a href="/tools/pip-value-calculator" className="hover:text-blue-400 hover:underline">Pip Value Calculator</a></li>
            <li><a href="/tools/pivot-point-calculator" className="hover:text-blue-400 hover:underline">Pivot Point Calculator</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-lg font-bold mb-3">Company</h2>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li><a href="/about" className="hover:text-blue-400 hover:underline">About</a></li>
            <li><a href="/contact" className="hover:text-blue-400 hover:underline">Contact</a></li>
            <li><a href="/advertise" className="hover:text-blue-400 hover:underline">Advertise</a></li>
            <li><a href="/newsletter" className="hover:text-blue-400 hover:underline">Newsletter</a></li>
            <li><a href="/testimonials" className="hover:text-blue-400 hover:underline">Testimonials</a></li>
            <li><a href="/faq" className="hover:text-blue-400 hover:underline">FAQ</a></li>
            <li><a href="/subscribe" className="hover:text-blue-400 hover:underline">Subscribe</a></li>
          </ul>
        </div>

        {/* Babypips / Social */}
        <div>
          <h2 className="text-lg font-bold mb-3">TwentyTwopips</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com/babypips" className="hover:text-blue-400">
              <Facebook size={22} />
            </a>
            <a href="https://instagram.com/babypips" className="hover:text-pink-400">
              <Instagram size={22} />
            </a>
            <a href="https://twitter.com/babypips" className="hover:text-sky-400">
              <Twitter size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-zinc-800 border-l-4 border-blue-500 rounded-md p-6 mt-10 mb-10">
        <p className="italic text-zinc-300 text-lg mb-2">
          "Give yourself an even greater challenge than the one you are trying to master and you will develop the powers necessary to overcome the original difficulty."
        </p>
        <p className="text-zinc-400 text-sm">— William J. Bennett</p>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-700 my-8" />

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
        <p>Twentytwopips helps new traders learn about the forex and crypto markets without falling asleep.</p>
        <p>Copyright © 2025 Twentytwopips.com LLC. All rights reserved.</p>
      </div>

      {/* Legal Links */}
      <div className="flex justify-center space-x-6 mt-4 text-sm">
        <a href="/privacy" className="hover:text-blue-400 hover:underline">Privacy Policy</a>
        <a href="/risk-disclosure" className="hover:text-blue-400 hover:underline">Risk Disclosure</a>
        <a href="/terms-of-use" className="hover:text-blue-400 hover:underline">Terms of Use</a>
      </div>
    </footer>
  );
}
