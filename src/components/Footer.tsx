import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className="relative mt-12 bg-gradient-to-b from-[#0a1929] via-[#0d1f35] to-[#0a1929] py-12 overflow-hidden">
        {/* Star Pattern Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0),
              radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)
            `,
            backgroundSize: '50px 50px, 100px 100px',
            backgroundPosition: '0 0, 25px 25px',
          }}
        />
        
        {/* Geometric Network Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" style={{ zIndex: 1 }}>
          <defs>
            <pattern id="footer-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>

        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-8">
            {/* Column 1: Academic.Avengers Header */}
            <div className="lg:col-span-1">
       
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Image
                  src="/images/academic.png"
                  alt="Academic Avengers Logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="text-white text-lg font-semibold">Academic.Avengers</span>
              </Link>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-1">
              <h3 className="text-white font-bold mb-5 text-base uppercase tracking-wide">Quick Links</h3>
              <ul className="space-y-3 list-none">
                <li>
                  <Link href="/#about" className="text-white/80 hover:text-secondary transition-colors text-sm inline-block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/e-lab" className="text-white/80 hover:text-secondary transition-colors text-sm inline-block">
                    E-Lab Challenges
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-white/80 hover:text-secondary transition-colors text-sm inline-block">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/prototype" className="text-white/80 hover:text-secondary transition-colors text-sm inline-block">
                    Prototype
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Us */}
            <div className="lg:col-span-1">
              <h3 className="text-white font-bold mb-5 text-base uppercase tracking-wide">Contact Us</h3>
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-phone text-secondary mt-1 text-sm"></i>
                  <a href="tel:+250798636824" className="text-white/80 hover:text-secondary transition-colors text-sm">
                    +250 798 636 824
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-envelope text-secondary mt-1 text-sm"></i>
                  <a href="mailto:aca.avengers@gmail.com" className="text-white/80 hover:text-secondary transition-colors text-sm break-all">
                    aca.avengers@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-location-dot text-secondary mt-1 text-sm"></i>
                  <span className="text-white/80 text-sm">Kigali, Rwanda</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="lg:col-span-1">
              <h3 className="text-white font-bold mb-5 text-base uppercase tracking-wide">Newsletter</h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                Subscribe to our newsletter for updates and news.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-secondary transition-colors text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-[#daa94f] transition-colors text-white font-semibold py-3 rounded-lg text-sm flex items-center justify-center gap-2"
                  aria-label="Subscribe"
                >
                  <span>Subscribe</span>
                  <i className="fa-solid fa-paper-plane text-xs"></i>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="text-white/70 text-xs text-center md:text-left">
                © {new Date().getFullYear()} Academic.Avengers. All rights reserved.
              </span>
              <div className="flex gap-6 text-xs">
                <Link href="#" className="text-white/70 hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-white/70 hover:text-secondary transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
