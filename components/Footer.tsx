import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 relative overflow-hidden">
      {/* Supply chain connection pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 L25 50 M75 50 L100 50" stroke="#f97316" strokeWidth="0.5" fill="none"/>
          <ellipse cx="35" cy="50" rx="10" ry="15" stroke="#f97316" strokeWidth="0.5" fill="none"/>
          <ellipse cx="65" cy="50" rx="10" ry="15" stroke="#f97316" strokeWidth="0.5" fill="none"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-amber-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="font-bold text-white">Shoreline Global</span>
            </div>
            <p className="text-sm">
              Connecting every link in your supply chain journey.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <div className="h-0.5 w-6 bg-gradient-to-r from-orange-600 to-amber-600"></div>
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-orange-400 transition-colors">Inventory Management</Link></li>
              <li><Link href="/services" className="hover:text-orange-400 transition-colors">Global Logistics</Link></li>
              <li><Link href="/services" className="hover:text-orange-400 transition-colors">Supply Chain Analytics</Link></li>
              <li><Link href="/services" className="hover:text-orange-400 transition-colors">Warehousing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <div className="h-0.5 w-6 bg-gradient-to-r from-orange-600 to-amber-600"></div>
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">News</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <div className="h-0.5 w-6 bg-gradient-to-r from-orange-600 to-amber-600"></div>
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@shorelineglobal.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: [To be updated]</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Shoreline Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
