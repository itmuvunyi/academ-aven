'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import CelestialBackground from './CelestialBackground';

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Handle hash navigation on page load
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;
          
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          });
        }
      }, 300);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About Us', isAnchor: true },
    { href: '/e-lab', label: 'E-Lab Challenges' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/prototype', label: 'Prototype' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isAnchor?: boolean) => {
    setIsMobileMenuOpen(false);
    if (isAnchor && href.startsWith('/#')) {
      e.preventDefault();
      if (pathname === '/') {
        const targetId = href.split('#')[1];
        // Use setTimeout to ensure DOM is ready
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            const navbarHeight = 80; // Approximate navbar height
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;
            
            window.scrollTo({
              top: Math.max(0, offsetPosition),
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        // Navigate to home first, then scroll after page loads
        window.location.href = href;
      }
    } else if (href === '/' && pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isHomePage = pathname === '/';

  // Hero Navigation for Home Page - becomes sticky when scrolled
  if (isHomePage) {
    return (
      <>
        {/* Sticky Navigation Bar */}
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-transparent'
        }`}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Image
                  src="/images/academic.png"
                  alt="Academic Avengers Logo"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <span className={`font-bold text-xl transition-colors ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}>
                  Academic.Avengers
                </span>
              </Link>
              
              {/* Desktop Navigation */}
              <ul className="hidden md:flex gap-8 list-none">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href, link.isAnchor)}
                      className={`font-medium transition-colors relative ${
                        isScrolled
                          ? 'text-gray-700 hover:text-primary'
                          : 'text-white hover:text-secondary'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden text-2xl transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                aria-label="Toggle menu"
              >
                <i className={isMobileMenuOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'}></i>
              </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className={`md:hidden mt-4 pb-4 border-t ${
                isScrolled ? 'border-gray-200' : 'border-white/20'
              }`}>
                <ul className="flex flex-col gap-4 pt-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href, link.isAnchor)}
                        className={`block py-2 font-medium transition-colors ${
                          isScrolled
                            ? 'text-gray-700 hover:text-primary'
                            : 'text-white hover:text-secondary'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section with Celestial Background - only visible when at top */}
        {!isScrolled && (
          <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden" style={{ minHeight: '100vh' }}>
            {/* Celestial Background Canvas */}
            <CelestialBackground />

            {/* Hero Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
              <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
              
              <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight drop-shadow-lg">
                Stay positive, work hard, make it happen
              </h1>
              
              <p className="text-white text-lg md:text-xl leading-relaxed mb-16 max-w-3xl mx-auto drop-shadow-md">
              We believe in collective effort-because working together 
              strengthens impact, builds community, and drives lasting positive change.
              </p>

              <div className="flex gap-4 justify-center flex-wrap mt-8">
                <Link
                  href="/#about"
                  className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1f6e3e] transition-colors shadow-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                      const navbarHeight = 80;
                      const elementPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - navbarHeight;
                      
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Learn More
                </Link>
                <Link
                  href="/#mission"
                  className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#daa94f] transition-colors shadow-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    const missionSection = document.getElementById('mission');
                    if (missionSection) {
                      const navbarHeight = 80;
                      const elementPosition = missionSection.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - navbarHeight;
                      
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Our Mission
                </Link>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }

  // Regular Navigation for Other Pages
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-[#eceaea]'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/images/academic.png"
              alt="Academic Avengers Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <span className={`font-bold text-xl ${isScrolled ? 'text-primary' : 'text-gray-800'}`}>
              Academic.Avengers
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.isAnchor)}
                  className={`font-medium transition-colors relative ${
                    pathname === link.href
                      ? 'text-primary'
                      : isScrolled
                      ? 'text-gray-700 hover:text-primary'
                      : 'text-gray-800 hover:text-primary'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden text-2xl ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`}
            aria-label="Toggle menu"
          >
            <i className={isMobileMenuOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <ul className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.isAnchor)}
                    className={`block py-2 font-medium transition-colors ${
                      pathname === link.href
                        ? 'text-primary'
                        : isScrolled
                        ? 'text-gray-700 hover:text-primary'
                        : 'text-gray-800 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
