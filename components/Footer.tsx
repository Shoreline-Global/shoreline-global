import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-zinc-400 py-16 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-white/5 pb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-xl font-medium tracking-tighter text-white">
                Shoreline<span className="text-zinc-500">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6 font-light">
              Applied AI and intelligent automation solutions built by engineers for the modern enterprise.
            </p>
            <p className='text-xs text-zinc-500'>&copy; {new Date().getFullYear()} Shoreline Global. All rights reserved.</p>
          </div>
          
          <div>
            <h4 className="font-medium tracking-widest uppercase text-zinc-200 text-xs mb-5">
              Solutions
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li><Link href="/services" className="hover:text-white transition-colors">AI Workflow Automation</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Knowledge & Search Systems</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Internal Copilots</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Engineering Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium tracking-widest uppercase text-zinc-200 text-xs mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium tracking-widest uppercase text-zinc-200 text-xs mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li>contact@shoreline-global.com</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
          <p>Built with precision in California.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
