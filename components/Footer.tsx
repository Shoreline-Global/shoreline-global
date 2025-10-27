import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 relative overflow-hidden z-50">
      {/* Supply chain connection pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 L25 50 M75 50 L100 50" stroke="#f97316" strokeWidth="0.5" fill="none"/>
          <ellipse cx="35" cy="50" rx="10" ry="15" stroke="#f97316" strokeWidth="0.5" fill="none"/>
          <ellipse cx="65" cy="50" rx="10" ry="15" stroke="#f97316" strokeWidth="0.5" fill="none"/>
        </svg>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt="Shoreline Global"
                width={320}
                height={320}
                className="object-contain"
              />
            </div>
            <p className='text-sm'>&copy; {new Date().getFullYear()} Shoreline Global. All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <div className="h-0.5 w-6 bg-gradient-to-r from-sky-600 to-sky-500"></div>
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-sky-400 transition-colors">Inventory Management</Link></li>
              <li><Link href="/services" className="hover:text-sky-400 transition-colors">Global Logistics</Link></li>
              <li><Link href="/services" className="hover:text-sky-400 transition-colors">Supply Chain Analytics</Link></li>
              <li><Link href="/services" className="hover:text-sky-400 transition-colors">Warehousing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <div className="h-0.5 w-6 bg-gradient-to-r from-sky-600 to-sky-500"></div>
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-sky-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-sky-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <div className="h-0.5 w-6 bg-gradient-to-r from-sky-600 to-sky-500"></div>
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Email: contact@shoreline-global.com</li>
              <li>Phone: +1 (669) 247-2636</li>
              <li>Address: 600 Epic Way, San Jose, CA 95134
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>Built with &#9829; in California.</p>
        </div>
      </div>
    </footer>
  );
}
