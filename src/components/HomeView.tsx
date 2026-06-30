import React, { useState, useEffect, useRef } from "react";
import { Page } from "../types";
import { Award, BookOpen, Clock, Music2, ArrowRight, X } from "lucide-react";
import catBanner from "../assets/images/banners/catbanner.jpg";
import profileImage from "../assets/images/profile.png";

// Import your sound files here (or use absolute string URLs below)
import eNote from "../assets/strings/Violin Tuner E String.mp3";
import aNote from "../assets/strings/Violin Tuner A String.mp3";
import dNote from "../assets/strings/Violin Tuner D String.mp3";
import gNote from "../assets/strings/Violin Tuner G String.mp3";

const galleryModules = import.meta.glob(
  "../assets/homeGallery/*.{png,jpg,jpeg,svg,mp4,webm}",
  { eager: true },
);
const galleryItems = Object.values(galleryModules).map(
  (module: any) => module.default || module,
);

interface HomeViewProps {
  setCurrentPage: (page: Page) => void;
}

interface FloatingNote {
  id: number;
  char: string;
  x: number; 
  y: number; 
  delay: number;
  scale: number;
  rotation: number;
}

const VIOLIN_STRINGS = ["E", "A", "D", "G"];
// Map each string to its audio file path
const STRING_SOUNDS: Record<string, string> = {
  E: eNote,
  A: aNote,
  D: dNote,
  G: gNote,
};

export const HomeView: React.FC<HomeViewProps> = ({ setCurrentPage }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  // Easter egg states
  const [clickCount, setClickCount] = useState(0);
  const [isFinalEggActive, setIsFinalEggActive] = useState(false);
  const [activeStringLetter, setActiveStringLetter] = useState<string | null>(null);
  const [floatingNotes, setFloatingNotes] = useState<FloatingNote[]>([]);
  const [burstKey, setBurstKey] = useState(0); 
  
  const clickTimer = useRef<NodeJS.Timeout | null>(null);
  const resetTimer = useRef<NodeJS.Timeout | null>(null);
  const activeAudio = useRef<HTMLAudioElement | null>(null);
  const audioStopTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.featurable.com/widget/v2/embed.js";
    script.defer = true;
    script.charset = "UTF-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleProfileClick = () => {
  setClickCount((prev) => {
    const nextCount = prev + 1;
    const currentString = VIOLIN_STRINGS[prev] || VIOLIN_STRINGS[0];
    
    if (clickTimer.current) clearTimeout(clickTimer.current);
    
    // Play the matching violin note audio
    const audioPath = STRING_SOUNDS[currentString];
    if (audioPath) {
      const audio = new Audio(audioPath);
      audio.volume = 1.0; // Start at full volume
      audio.currentTime = 0; 
      
      audio.play()
        .then(() => {
          // Set a timeout to start the fade out after 9 seconds (so it finishes by 10s)
          setTimeout(() => {
            const fadeInterval = setInterval(() => {
              // Decrease volume by 0.1 every 100ms (takes 1 second total)
              if (audio.volume > 0.1) {
                audio.volume = Math.max(0, audio.volume - 0.1);
              } else {
                // Once it hits 0, stop the interval and pause the audio completely
                clearInterval(fadeInterval);
                audio.pause();
                audio.currentTime = 0;
              }
            }, 100);
          }, 9000); // Wait 9 seconds before starting the 1-second fade down
        })
        .catch((err) => console.log("Audio playback blocked or failed:", err));
    }
    
    triggerStringEffect(currentString, nextCount === 4);
    
    if (nextCount === 4) {
      return 0; 
    }
    
    clickTimer.current = setTimeout(() => {
      setClickCount(0);
    }, 3000);
    
    return nextCount;
  });
};

  const triggerStringEffect = (stringLetter: string, isFinal: boolean) => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    
    setBurstKey(prev => prev + 1);
    
    const notes = ["♩", "♪", "♫", "♬", "𝄞", "𝄢"];
    setActiveStringLetter(stringLetter);
    setIsFinalEggActive(isFinal);

    const numNotes = isFinal ? 42 : 16;
    
    // --- CHANGE THROW DISTANCE PIXELS HERE ---
    const maxRadius = isFinal ? 210 : 190; 
    
    const newNotes = Array.from({ length: numNotes }).map((_, i) => {
      const angleInRadians = ((360 / numNotes) * i * Math.PI) / 180;
      const distance = maxRadius * (0.85 + Math.random() * 0.25);
      
      return {
        id: i, 
        char: notes[Math.floor(Math.random() * notes.length)],
        x: Math.cos(angleInRadians) * distance,
        y: Math.sin(angleInRadians) * distance,
        delay: isFinal ? Math.random() * 0.35 : Math.random() * 0.1,
        scale: (isFinal ? 1.4 : 0.9) + Math.random() * 0.5,
        rotation: Math.random() * 50 - 25,
      };
    });
    
    setFloatingNotes(newNotes);

    resetTimer.current = setTimeout(() => {
      setIsFinalEggActive(false);
      setFloatingNotes([]);
      setActiveStringLetter(null);
    }, isFinal ? 3000 : 1800);
  };

  const handleContactClick = () => {
    setCurrentPage("contact");
    window.location.hash = "contact";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTeachingClick = () => {
    setCurrentPage("teaching");
    window.location.hash = "teaching";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isVideo = (path: string) => {
    return path.endsWith(".mp4") || path.endsWith(".webm");
  };

  return (
    <div className="animate-fadeIn relative">
      <style>{`
        @keyframes radialBurstAnimation {
          0% { 
            transform: translate(-50%, -50%) translate(0px, 0px) scale(0.2) rotate(0deg); 
            opacity: 0;
          }
          12% { 
            opacity: 1;
            filter: drop-shadow(0 0 8px rgba(194,155,104,0.95));
          }
          80% {
            opacity: 1;
          }
          100% { 
            transform: translate(-50%, -50%) translate(var(--target-x), var(--target-y)) scale(var(--scale)) rotate(var(--rot)); 
            opacity: 0;
          }
        }
        
        @keyframes letterFadeUpAnimation {
          0% { transform: translate(-50%, -50%) scale(0.4); opacity: 0; filter: blur(2px); }
          15% { transform: translate(-50%, -50%) scale(1.25); opacity: 1; filter: blur(0px); }
          50% { transform: translate(-50%, -50%) scale(1.0); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(0.85); opacity: 0; }
        }

        @keyframes goldenRayGlow {
          0% { transform: translate(-50%, -50%) scale(0.75); opacity: 0; }
          10% { opacity: 0.55; }
          75% { opacity: 0.35; transform: translate(-50%, -50%) scale(1.25); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(1.35); }
        }

        .animate-radial-burst {
          animation: radialBurstAnimation 2.2s cubic-bezier(0.1, 0.8, 0.2, 1) forwards;
        }
        
        .animate-letter-fade {
          animation: letterFadeUpAnimation 2s ease-in-out forwards;
        }

        .animate-ray-glow {
          animation: goldenRayGlow 2.2s cubic-bezier(0.1, 0.8, 0.2, 1) forwards;
        }
        
        .string-letter-shadow {
          text-shadow: 0 0 20px rgba(194, 155, 104, 0.95), 0 0 40px rgba(194, 155, 104, 0.6);
        }
      `}</style>

      {/* Hero Banner Section */}
      <section className="relative bg-[#0a0603] text-white overflow-hidden border-b border-wood-border w-full flex items-center min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px]">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <img
            src={catBanner}
            alt="Studio Banner"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 md:bg-gradient-to-r md:from-black/60 md:via-black/30 md:to-black/80" />
        </div>

        <div className="relative w-full z-10 pt-36 pb-16 px-6 md:px-12 flex items-center">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="hidden md:block md:col-span-6 pointer-events-none" />
            <div className="w-full md:col-span-6 space-y-5 md:space-y-6 text-left animate-fadeIn bg-black/40 md:bg-transparent p-6 md:p-0 rounded-md backdrop-blur-xs md:backdrop-blur-none">
              <h1 className="font-serif font-bold text-2xl sm:text-4xl md:text-4xl lg:text-5xl tracking-tight leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Private Violin tuition in{" "}
                <span className="text-[#C29B68]">Harrogate</span> and online for
                all ages and abilities.
              </h1>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  onClick={handleContactClick}
                  className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-wood-sand hover:bg-wood-brown text-white rounded-sm font-mono text-xs font-bold uppercase tracking-widest shadow-lg shadow-wood-sand/20 transform active:scale-95 transition-all text-center z-20 relative"
                  id="hero-contact-btn"
                >
                  Book Intro Lesson
                </button>
                <button
                  onClick={handleTeachingClick}
                  className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 border border-white/40 hover:border-white text-white rounded-sm font-mono text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-center z-20 relative"
                  id="hero-teaching-btn"
                >
                  My Teaching
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Core Values Grid */}
      <section className="hidden md:block bg-wood-beige py-16 px-6 border-b border-wood-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-wood-light p-6 rounded-sm shadow-xs border border-wood-border/60 space-y-3">
              <div className="text-wood-sand">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-lg font-bold text-wood-dark">
                ABRSM & Trinity
              </h3>
              <p className="text-xs text-wood-muted leading-relaxed font-sans">
                Extensive success preparing students for board exams, auditions,
                and competitions with consistent distinctions.
              </p>
            </div>

            <div className="bg-wood-light p-6 rounded-sm shadow-xs border border-wood-border/60 space-y-3">
              <div className="text-wood-sand">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-lg font-bold text-wood-dark">
                Suzuki & Kodály
              </h3>
              <p className="text-xs text-wood-muted leading-relaxed font-sans">
                Kodály-focused training for children, building secure physical
                posture, steady rhythm, and early ear pitch training.
              </p>
            </div>

            <div className="bg-wood-light p-6 rounded-sm shadow-xs border border-wood-border/60 space-y-3">
              <div className="text-wood-sand">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-lg font-bold text-wood-dark">
                Adult Learners
              </h3>
              <p className="text-xs text-wood-muted leading-relaxed font-sans">
                Adults make up half the studio base. Flexible slot plans, highly
                motivating returner programs, and friendly coaching.
              </p>
            </div>

            <div className="bg-wood-light p-6 rounded-sm shadow-xs border border-wood-border/60 space-y-3">
              <div className="text-wood-sand">
                <Music2 className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-lg font-bold text-wood-dark">
                Instrument Loan
              </h3>
              <p className="text-xs text-wood-muted leading-relaxed font-sans">
                Borrow a size-appropriate Violin during trial stages to prevent
                upfront purchase expenses!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Welcome & Intro Section */}
      <section className="p-5 sm:py-20 sm:px-6 bg-wood-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6 overflow-visible">
              <div className="flex flex-col items-center text-center p-8 bg-white border border-wood-border rounded-sm shadow-sm relative overflow-visible">
                
                {/* Visual Feedback Wrapper */}
                <div 
                  key={burstKey}
                  className="absolute top-[164px] left-[50%] w-0 h-0 flex items-center justify-center overflow-visible z-30 pointer-events-none"
                >
                  {/* Pinned background light ray wash */}
                  {isFinalEggActive && (
                    <div className="absolute w-[440px] h-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen bg-gradient-to-r from-[#C29B68]/15 to-transparent animate-ray-glow pointer-events-none" />
                  )}

                  {/* String Letter */}
                  {activeStringLetter && (
                    <span className={`absolute font-serif font-bold string-letter-shadow select-none z-40 animate-letter-fade ${
                      isFinalEggActive ? "text-[#C29B68] text-8xl" : "text-wood-brown text-5xl"
                    }`}>
                      {activeStringLetter}
                    </span>
                  )}

                  {/* Radial Notes Burst */}
                  {floatingNotes.map((note, idx) => (
                    <span
                      key={idx}
                      className={`absolute font-serif pointer-events-none select-none z-30 animate-radial-burst ${
                        isFinalEggActive ? "text-[#C29B68] font-bold text-2xl" : "text-wood-brown text-base"
                      }`}
                      style={{
                        animationDelay: `${note.delay}s`,
                        "--target-x": `${note.x}px`,
                        "--target-y": `${note.y}px`,
                        "--scale": note.scale,
                        "--rot": `${note.rotation}deg`,
                      } as React.CSSProperties}
                    >
                      {note.char}
                    </span>
                  ))}
                </div>

                {/* Profile Image Trigger */}
                <button 
                  onClick={handleProfileClick}
                  className="focus:outline-none focus:ring-2 focus:ring-wood-sand rounded-full transition-all group p-0 relative z-20"
                  aria-label="Katherine Rosin Profile - Violin String Easter Egg"
                >
                  <div className={`w-64 h-64 rounded-full overflow-hidden border-4 bg-wood-light flex items-center justify-center shadow-inner relative group transition-all duration-500 ${
                    isFinalEggActive ? "border-[#C29B68] scale-105 ring-8 ring-wood-sand/20 shadow-xl" : "border-wood-beige"
                  }`}>
                    <img
                      src={profileImage}
                      alt="Katherine Rosin"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    />
                  </div>
                </button>

                <div className="mt-6 space-y-2">
                  <h4 className="font-serif font-bold text-xl text-wood-dark">
                    Katherine Rosin
                  </h4>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-wood-sand font-bold">
                    Principal Violin Instructor
                  </p>
                  <p className="font-sans text-xs text-wood-muted max-w-xs leading-relaxed mt-2">
                    Professional, individually tailored lessons at Harrogate
                    Violin Studio.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-wood-sand pl-6 py-2 bg-wood-beige/30">
                <p className="font-sans italic text-sm text-wood-muted">
                  "Practise only as many times as you have breakfast."
                </p>
                <p className="font-mono text-[10px] text-wood-sand mt-2 font-bold uppercase tracking-wider">
                  — Shinichi Suzuki
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs uppercase tracking-wider text-wood-sand font-bold block">
                Meet the Teacher
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-wood-dark tracking-tight leading-tight">
                About Katherine Rosin
              </h2>

              <div className="font-sans text-wood-muted text-sm sm:text-base leading-relaxed space-y-5">
                <p>
                  Katherine is a Violin teacher and performer with a decade of
                  teaching experience spanning individual tuition, chamber music
                  coaching, orchestral training, and classroom-based music
                  education.
                </p>
                <p>
                  She began her musical training at the{" "}
                  <strong className="font-semibold text-wood-dark">
                    North London Conservatoire
                  </strong>
                  , before returning after graduation as a member of the
                  teaching faculty. There, she specialised in Violin instruction
                  for young children using the Kodály approach, developing
                  strong foundations in technique, rhythm, and aural awareness.
                </p>
                <p>
                  She holds a{" "}
                  <strong className="font-semibold text-wood-dark">
                    Bachelor of Music (Honours)
                  </strong>{" "}
                  degree from{" "}
                  <strong className="font-semibold text-wood-dark">
                    Trinity Conservatoire of Music, London
                  </strong>
                  , where she studied Violin with Diana Cummings. Alongside her
                  performance studies, she completed specialist training in
                  instrumental teaching pedagogy and led music workshops in
                  primary schools across Greenwich and Lewisham.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={handleTeachingClick}
                  className="px-6 py-3 bg-wood-dark hover:bg-wood-sand text-white hover:text-white rounded-sm font-mono text-xs font-bold uppercase tracking-widest flex items-center space-x-2"
                  id="biography-teaching-philosophy-btn"
                >
                  <span>My Teaching</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={handleContactClick}
                  className="px-6 py-3 border border-wood-border hover:border-wood-sand text-wood-muted hover:text-wood-sand rounded-sm font-mono text-xs font-bold uppercase tracking-widest"
                  id="biography-contact-btn"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="py-16 px-6 bg-wood-beige border-t border-wood-border">
        <div className="max-w-6xl mx-auto">
          {galleryItems.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {galleryItems.map((src, index) => {
                if (isVideo(src)) {
                  return (
                    <div
                      key={index}
                      className="bg-white border border-wood-border/60 rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-all aspect-square flex items-center justify-center relative"
                    >
                      <video
                        src={src}
                        controls
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                }

                return (
                  <button
                    key={index}
                    onClick={() => setActiveImage(src)}
                    className="bg-white border border-wood-border/60 rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-all group aspect-square flex items-center justify-center relative cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-wood-sand"
                  >
                    <img
                      src={src}
                      alt={`Studio Gallery Thumbnail ${index + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    />
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8 text-xs font-mono text-wood-muted uppercase tracking-wider">
              No gallery media found in src/assets/homeGallery
            </div>
          )}
        </div>
      </section>

      {/* Featurable Reviews Section Widget */}
      <section className="py-0 px-6 bg-wood-light border-t border-wood-border">
        <div className="max-w-6xl mx-auto">
          <div 
            id="featurable-8119734b-c899-436c-b7ab-5a7c3f2058d3" 
            data-featurable-async 
          />
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/40 p-2 rounded-full transition-colors backdrop-blur-xs"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage}
              alt="Enlarged Gallery Asset"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[85vh] object-contain rounded-xs shadow-2xl"
            />
          </div>
        </div>
      )}

    </div>
  );
};