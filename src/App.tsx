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

declare global {
  interface Window {
    createNeko?: (options: any) => {
      start: () => void;
      stop: () => void;
      destroy: () => void;
    };
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle Neko.js Initialization and Cleanup
  useEffect(() => {
    let nekoInstance: any = null;
    const scriptId = 'neko-script-singleton';
    
    // Find an existing script element or create a new one
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    let isScriptNew = false;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://louisabraham.github.io/nekojs/neko.js";
      script.async = true;
      isScriptNew = true;
    }

    // Single initialization function to guarantee only one runner attaches
    const initNeko = () => {
      // Check if a cat sprite already exists in the DOM to prevent stacking
      const existingCat = document.getElementById('oneko') || document.querySelector('.neko'); 
      if (existingCat) return; 

      if (window.createNeko) {
        nekoInstance = window.createNeko({
          speed: 24,
          fps: 120,
          behaviorMode: 0,
          idleThreshold: 6,
          allowBehaviorChange: true,
          startX: window.innerWidth / 2,
          startY: window.innerHeight / 2
        });
        nekoInstance.start();
      }
    };

    if (window.createNeko) {
      // If script is already cached/loaded globally, run setup immediately
      initNeko();
    } else {
      // Otherwise wait for the script block to load cleanly
      script.addEventListener('load', initNeko);
    }

    if (isScriptNew) {
      document.body.appendChild(script);
    }

    // Cleanup phase
    return () => {
      if (nekoInstance) {
        nekoInstance.stop();
        nekoInstance.destroy();
      }
      if (script) {
        script.removeEventListener('load', initNeko);
      }
    };
  }, []);

  // Handle URL hash navigation
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

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderActiveView = () => {
    switch (currentPage) {
      case 'home': return <HomeView setCurrentPage={setCurrentPage} />;
      case 'teaching': return <TeachingView setCurrentPage={setCurrentPage} />;
      case 'gallery': return <GalleryView setCurrentPage={setCurrentPage} />;
      case 'contact': return <ContactView />;
      case 'faq': return <FAQView setCurrentPage={setCurrentPage} />;
      default: return <HomeView setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fdfbf7]">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main>
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

      <Footer setCurrentPage={setCurrentPage} />

    </div>
  );
}