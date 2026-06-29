import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { STUDIO_INFO } from '../data';
import { Menu, X } from 'lucide-react';
import studioLogo from '../assets/images/studio_logo_1782572398426.jpg';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = currentPage === 'home';
  const isTransparent = !isScrolled;

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Teaching', page: 'teaching' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Contact', page: 'contact' },
    { label: 'FAQ', page: 'faq' },
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
        isTransparent
          ? 'bg-transparent text-white border-b border-transparent'
          : 'bg-white/95 backdrop-blur-md text-wood-dark border-b border-wood-border shadow-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo / Brand */}
            <div className="flex items-center">
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center space-x-3 group text-left focus:outline-none"
                id="header-logo-btn"
              >
                <div className="h-12 flex items-center justify-center transition-all group-hover:scale-105">
                  <img
                    src={studioLogo}
                    alt="Harrogate Violin Studio Logo"
                    className="h-full w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className={`block font-serif font-bold text-lg sm:text-xl leading-tight tracking-tight transition-colors ${
                    isTransparent
                      ? 'text-white group-hover:text-white/80'
                      : 'text-wood-dark group-hover:text-wood-sand'
                  }`}>
                    Harrogate Violin Studio
                  </span>
                  <span className={`block font-mono text-[9px] uppercase tracking-widest transition-colors ${
                    isTransparent ? 'text-white/70' : 'text-wood-muted'
                  }`}>
                    Katherine Rosin
                  </span>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <button
                    key={item.page}
                    id={`nav-${item.page}-desktop`}
                    onClick={() => handleNavClick(item.page)}
                    className={`px-4 py-2 font-mono text-xs uppercase tracking-wider font-semibold transition-all ${
                      isTransparent
                        ? isActive
                          ? 'text-white border-b-2 border-white rounded-none pb-1'
                          : 'text-white/80 hover:text-white hover:bg-white/10 rounded-md'
                        : isActive
                          ? 'text-wood-sand border-b-2 border-wood-sand rounded-none pb-1'
                          : 'text-wood-muted hover:text-wood-sand hover:bg-wood-beige/40 rounded-md'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className={`ml-4 px-4 py-2 border rounded-sm font-mono text-[10px] font-bold uppercase tracking-widest transition-all ${
                  isTransparent
                    ? 'border-white/30 hover:bg-white hover:border-white text-white hover:text-wood-dark'
                    : 'border-wood-border hover:bg-wood-sand hover:border-wood-sand text-wood-muted hover:text-white'
                }`}
              >
                Email Katherine
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md transition-all focus:outline-none ${
                  isTransparent
                    ? 'text-white/80 hover:text-white hover:bg-white/10'
                    : 'text-wood-muted hover:text-wood-dark hover:bg-wood-beige/40'
                }`}
                aria-label="Toggle navigation menu"
                id="mobile-menu-toggle-btn"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Slide-out (Moved outside <header> and isolated with z-50) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex justify-end" id="mobile-navigation-drawer">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Drawer content panel (Aligned Right) */}
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white pt-5 pb-4 border-l border-wood-border">
            {/* Close button shifted left relative to container */}
            <div className="absolute top-0 left-0 -ml-12 pt-2">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="mr-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                id="drawer-close-btn"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            <div className="flex-shrink-0 flex items-center px-6">
              <div className="flex items-center space-x-2">
                <div className="h-10 flex items-center justify-center">
                  <img
                    src={studioLogo}
                    alt="Harrogate Violin Studio Logo"
                    className="h-full w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-serif font-bold text-wood-dark text-base leading-tight">
                  Harrogate Violin Studio
                </span>
              </div>
            </div>

            <div className="mt-8 flex-1 h-0 overflow-y-auto px-4">
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.page}
                    id={`nav-${item.page}-mobile`}
                    onClick={() => handleNavClick(item.page)}
                    className={`w-full text-left px-4 py-3 rounded-md font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-between ${
                      currentPage === item.page
                        ? 'bg-wood-sand text-white'
                        : 'text-wood-muted hover:text-wood-sand hover:bg-wood-beige/40'
                    }`}
                  >
                    <span>{item.label}</span>
                    {currentPage === item.page && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-wood-border text-xs text-wood-muted font-mono space-y-2 px-4">
                <p className="font-bold text-wood-dark">Katherine Rosin</p>
                <a href={`mailto:${STUDIO_INFO.email}`} className="block text-wood-sand hover:underline">
                  {STUDIO_INFO.email}
                </a>
                <p className="block">{STUDIO_INFO.phoneDisplay}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};