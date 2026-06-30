import { useState, useEffect, useRef } from 'react';
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
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

interface TrailItem {
  id: number;
  x: number;
  y: number;
  char: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mouseTrail, setMouseTrail] = useState<TrailItem[]>([]);

  // Track last coordinate mapping for visual trail calculations
  const lastMousePos = useRef({ x: 0, y: 0, time: 0 });

  // Handle Violin / Musical Symbol Mouse Trail
  useEffect(() => {
    const symbols = ["♩", "♪", "♫", "♬", "𝄞", "𝄢", "Katherine"];
    let idCounter = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const currentX = e.clientX;
      const currentY = e.clientY;

      // Track last coordinates
      lastMousePos.current = { x: currentX, y: currentY, time: now };

      // Generate the visual trail symbols
      if (Math.random() > 0.25) return;

      const newItem: TrailItem = {
        id: idCounter++,
        x: currentX,
        y: currentY,
        char: symbols[Math.floor(Math.random() * symbols.length)],
      };

      setMouseTrail((prev) => [...prev, newItem]);

      setTimeout(() => {
        setMouseTrail((prev) => prev.filter((item) => item.id !== newItem.id));
      }, 800);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle Neko.js Initialization and Cleanup
  useEffect(() => {
    let nekoInstance: any = null;
    const scriptId = 'neko-script-singleton';
    
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    let isScriptNew = false;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://louisabraham.github.io/nekojs/neko.js";
      script.async = true;
      isScriptNew = true;
    }

    const initNeko = () => {
      const existingCat = document.getElementById('oneko') || document.querySelector('.neko'); 
      if (existingCat) return; 

      if (window.createNeko) {
        nekoInstance = window.createNeko({
          speed: 54,
          fps: 120,
          behaviorMode: 1,
          idleThreshold: 2,
          allowBehaviorChange: true,
          startX: window.innerWidth / 2,
          startY: window.innerHeight / 2
        });
        nekoInstance.start();
      }
    };

    if (window.createNeko) {
      initNeko();
    } else {
      script.addEventListener('load', initNeko);
    }

    if (isScriptNew) {
      document.body.appendChild(script);
    }

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

  // Track Google Analytics page_view events on view transitions
useEffect(() => {
  const logPageView = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: currentPage.charAt(0).toUpperCase() + currentPage.slice(1) + ' | Harrogate Violin Studio',
        page_location: window.location.href,
        page_path: `/#${currentPage}`,
      });
    }
  };

  // If gtag isn't loaded yet, push to dataLayer array safely
  if (typeof window.gtag !== 'function') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_title: currentPage.charAt(0).toUpperCase() + currentPage.slice(1) + ' | Harrogate Violin Studio',
      page_location: window.location.href,
      page_path: `/#${currentPage}`,
    });
  } else {
    logPageView();
  }
}, [currentPage]);

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
    <div className="flex flex-col min-h-screen bg-[#fdfbf7] relative">
      
      {/* Global CSS Inject for Mouse Trail Animation */}
      <style>{`
        @keyframes musicalTrailFade {
          0% {
            transform: translate(-50%, -50%) scale(0.6) translateY(0px) rotate(0deg);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.1) translateY(-20px) rotate(15deg);
            opacity: 0;
          }
        }
        .animate-music-trail {
          animation: musicalTrailFade 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}</style>

      {/* Interactive Music Trail Layer */}
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
        {mouseTrail.map((item) => (
          <span
            key={item.id}
            className="absolute font-serif text-[#C29B68] text-base sm:text-lg select-none mix-blend-multiply filter drop-shadow-[0_0_1px_rgba(253,251,247,0.8)] animate-music-trail"
            style={{
              left: item.x,
              top: item.y,
            }}
          >
            {item.char}
          </span>
        ))}
      </div>

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