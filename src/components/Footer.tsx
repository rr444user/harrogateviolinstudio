import React from 'react';
import { Page } from '../types';
import { STUDIO_INFO } from '../data';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-wood-dark text-white border-t border-wood-border/10 pt-5 pb-5 font-sans">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 border-wood-border/10">
          {/* Column 1: Contact Details */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm tracking-wide text-wood-beige font-semibold">
              Contact Katherine
            </h3>
            <ul className="space-y-3 font-mono text-xs text-wood-beige/80">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-wood-sand flex-shrink-0" />
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="hover:text-wood-sand hover:underline break-all"
                >
                  {STUDIO_INFO.email}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-wood-sand flex-shrink-0" />
                <a href={`tel:${STUDIO_INFO.phone}`} className="hover:text-wood-sand hover:underline">
                  {STUDIO_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-wood-sand mt-0.5 flex-shrink-0" />
                <a href={`https://maps.app.goo.gl/vAnDS3CXtYdEL7Xa9`} target="_blank" rel="noopener noreferrer" className="hover:text-wood-sand hover:underline">
                  {STUDIO_INFO.address}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Social Links */}
          <div className="flex flex-col items-start md:items-center justify-center space-y-4">
            <h3 className="font-serif text-sm tracking-wide text-wood-beige font-semibold self-start md:self-center">
              Follow Me
            </h3>
            <div className="flex space-x-4">
              <a
                href={STUDIO_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-wood-sand text-wood-beige hover:text-white rounded-full transition-all"
                aria-label="Visit Harrogate Violin Studio on Instagram"
                id="footer-instagram-link"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4 md:text-right">
            <h3 className="font-serif text-sm tracking-wide text-wood-beige font-semibold">
              Quick Links
            </h3>
            <div className="flex flex-wrap md:flex-col gap-3 md:gap-2.5 md:items-end justify-start">
              {(['home', 'teaching', 'gallery', 'contact', 'faq'] as Page[]).map((page) => (
                <button
                  key={page}
                  id={`footer-nav-${page}`}
                  onClick={() => handleNavClick(page)}
                  className="font-mono text-xs capitalize text-wood-beige/80 hover:text-wood-sand hover:underline focus:outline-none"
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
