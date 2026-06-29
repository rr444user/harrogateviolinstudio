import { useState, useEffect } from 'react';
import { Page } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { TeachingView } from './components/TeachingView';
import { GalleryView } from './components/GalleryView';
import { ContactView } from './components/ContactView';
import { FAQView } from './components/FAQView';
import { motion, AnimatePresence } from 'motion/react';
import { CatMouseChaser } from './components/CatMouseChaser';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle URL hash navigation on initial load & popstate (browser back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      const validPages: Page[] = ['home', 'teaching', 'gallery', 'contact', 'faq'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange(); // Run once on mount
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView setCurrentPage={setCurrentPage} />;
      case 'teaching':
        return <TeachingView setCurrentPage={setCurrentPage} />;
      case 'gallery':
        return <GalleryView setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactView />;
      case 'faq':
        return <FAQView setCurrentPage={setCurrentPage} />;
      default:
        return <HomeView setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fdfbf7]">
      {/* Header / Sticky Navigation Bar */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Page Content Wrapper with Animated transitions */}
      <main className={`flex-grow ${currentPage !== 'home' ? 'pt-20' : ''}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Details block */}
      <Footer setCurrentPage={setCurrentPage} />

      <CatMouseChaser />
    </div>
  );
}
