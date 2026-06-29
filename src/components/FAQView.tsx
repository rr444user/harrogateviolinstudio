import React, { useState } from 'react';
import { Page } from '../types';
import { FAQ_ITEMS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { BannerHeader } from './BannerHeader'; 
import bannerBackground from "../assets/images/banners/catbanner.jpg";

interface FAQViewProps {
  setCurrentPage: (page: Page) => void;
}

export const FAQView: React.FC<FAQViewProps> = ({ setCurrentPage }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleContactClick = () => {
    setCurrentPage('contact');
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="animate-fadeIn">

      <BannerHeader 
        title="Frequently Asked"
        titleItalic="Questions"
        backgroundImage={bannerBackground}
      />

      {/* Accordions List Section */}
      <section className="p-5 sm:py-20 sm:px-6 bg-wood-light">
        <div className="max-w-3xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-wood-sand font-bold">
              Helpful Information
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-wood-dark tracking-tight">
              Studio Guidelines & FAQ
            </h2>
            <p className="font-sans text-wood-muted text-sm leading-normal">
              Click on any question below to view detailed answers on scheduling, student practice, and instrument loans.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-sm border border-wood-border overflow-hidden hover:border-wood-sand transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-wood-dark hover:text-wood-sand focus:outline-none transition-colors"
                    aria-expanded={isOpen}
                    id={`faq-btn-${faq.id}`}
                  >
                    <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                    <span className="text-wood-muted flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="h-4 w-4 text-wood-sand" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-wood-sand" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 border-t border-wood-beige bg-wood-beige/10 animate-slideDown" id={`faq-panel-${faq.id}`}>
                      <p className="font-sans text-xs sm:text-sm text-wood-muted leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Help callout card */}
          <div className="p-8 rounded-sm bg-wood-beige border border-wood-border text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex p-3 rounded-full bg-white text-wood-sand shadow-xs">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-wood-dark">
              Have a question not listed here?
            </h3>
            <p className="font-sans text-xs text-wood-muted leading-relaxed">
              I am always happy to discuss specific scheduling arrangements, special needs learning, or custom study pathways.
            </p>
            <button
              onClick={handleContactClick}
              className="px-6 py-2.5 bg-wood-dark text-white hover:bg-wood-sand font-mono text-xs font-bold uppercase tracking-widest rounded-sm transition-all"
            >
              Ask Katherine Directly
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};