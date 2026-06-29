import React from 'react';
import { Page } from '../types';
import { Award, BookOpen, Clock, Heart, ArrowRight, Music } from 'lucide-react';
import catBanner from '../assets/images/banners/catbanner.jpg';
import profileImage from '../assets/images/profile.png';
import catViolinist from '../assets/images/cat_violinist_1782579871582.jpg';
import catOrchestra from '../assets/images/cat_orchestra_1782579885034.jpg';
import catViolinLesson from '../assets/images/cat_violin_lesson_1782579901070.jpg';

interface HomeViewProps {
  setCurrentPage: (page: Page) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setCurrentPage }) => {
  const handleContactClick = () => {
    setCurrentPage('contact');
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTeachingClick = () => {
    setCurrentPage('teaching');
    window.location.hash = 'teaching';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="animate-fadeIn">
      {/* Hero Banner Section */}
      <section 
        className="relative bg-wood-dark text-white pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden border-b border-wood-border"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.1) 100%), url(${catBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 relative z-10">
          <div className="w-full md:max-w-xl md:w-1/2 space-y-6 text-left animate-fadeIn">
            
            <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              Private Violin tuition in <span className="text-[#C29B68]">Harrogate</span> and online for all ages and abilities.
            </h1>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={handleContactClick}
                className="w-full sm:w-auto px-8 py-4 bg-wood-sand hover:bg-wood-brown text-white rounded-sm font-mono text-xs font-bold uppercase tracking-widest shadow-lg shadow-wood-sand/20 transform active:scale-95 transition-all text-center"
                id="hero-contact-btn"
              >
                Book Intro Lesson
              </button>
              <button
                onClick={handleTeachingClick}
                className="w-full sm:w-auto px-8 py-4 border border-white/40 hover:border-white text-white rounded-sm font-mono text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-center"
                id="hero-teaching-btn"
              >
                Teaching Philosophy
              </button>
            </div>
          </div>

          {/* Column structure maintained without the custom shape as requested */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative min-h-[340px] h-full">
          </div>
        </div>

        {/* Backdrop blob requested by theme */}
        <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-[0.03] text-wood-sand pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.2,88.5,-0.9C86.9,14.4,81.3,28.8,72.4,40.4C63.5,52.1,51.3,61,38.5,67.8C25.7,74.6,12.8,79.3,-1.4,81.7C-15.6,84.1,-31.2,84.3,-44.1,77.7C-57,71.1,-67.2,57.7,-74.3,43.4C-81.4,29.1,-85.4,14.6,-84.3,0.6C-83.2,-13.4,-77,-26.8,-68.8,-38.9C-60.6,-51,-50.4,-61.8,-38.3,-70.3C-26.2,-78.8,-13.1,-85.1,1.1,-86.9C15.3,-88.7,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
      </section>

      {/* Quick Core Values Grid */}
      <section className="bg-wood-beige py-16 px-6 border-b border-wood-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-wood-light p-6 rounded-sm shadow-xs border border-wood-border/60 space-y-3">
              <div className="text-wood-sand">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-lg font-bold text-wood-dark">ABRSM & Trinity</h3>
              <p className="text-xs text-wood-muted leading-relaxed font-sans">
                Extensive success preparing students for board exams, auditions, and competitions with consistent distinctions.
              </p>
            </div>

            <div className="bg-wood-light p-6 rounded-sm shadow-xs border border-wood-border/60 space-y-3">
              <div className="text-wood-sand">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-lg font-bold text-wood-dark">Suzuki & Kodály</h3>
              <p className="text-xs text-wood-muted leading-relaxed font-sans">
                Kodály-focused training for children, building secure physical posture, steady rhythm, and early ear pitch training.
              </p>
            </div>

            <div className="bg-wood-light p-6 rounded-sm shadow-xs border border-wood-border/60 space-y-3">
              <div className="text-wood-sand">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-lg font-bold text-wood-dark">Adult Learners</h3>
              <p className="text-xs text-wood-muted leading-relaxed font-sans">
                Adults make up half the studio base. Flexible slot plans, highly motivating returner programs, and friendly coaching.
              </p>
            </div>

            <div className="bg-wood-light p-6 rounded-sm shadow-xs border border-wood-border/60 space-y-3">
              <div className="text-wood-sand">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-lg font-bold text-wood-dark">Instrument Loan</h3>
              <p className="text-xs text-wood-muted leading-relaxed font-sans">
                Borrow a size-appropriate violin during trial stages to prevent upfront purchase expenses!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Welcome & Intro Section */}
      <section className="py-20 px-6 bg-wood-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex flex-col items-center text-center p-8 bg-white border border-wood-border rounded-sm shadow-sm">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-wood-beige bg-wood-light flex items-center justify-center shadow-inner relative group">
                  <img
                    src={profileImage}
                    alt="Katherine Rosin"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 space-y-2">
                  <h4 className="font-serif font-bold text-xl text-wood-dark">
                    Katherine Rosin
                  </h4>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-wood-sand font-bold">
                    Principal Violin Instructor
                  </p>
                  <p className="font-sans text-xs text-wood-muted max-w-xs leading-relaxed mt-2">
                    Professional, individually tailored lessons at Harrogate Violin Studio.
                  </p>
                </div>
              </div>

              {/* Elegant Quote block */}
              <div className="border-l-4 border-wood-sand pl-6 py-2 bg-wood-beige/30">
                <p className="font-sans italic text-sm text-wood-muted">
                  "Progress on the violin is built through hundreds of small, consistent improvements rather than dramatic breakthroughs."
                </p>
                <p className="font-mono text-[10px] text-wood-sand mt-2 font-bold uppercase tracking-wider">
                  — Katherine Rosin
                </p>
              </div>
            </div>

            {/* Biography Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs uppercase tracking-wider text-wood-sand font-bold block">
                Meet the Teacher
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-wood-dark tracking-tight leading-tight">
                About Katherine Rosin
              </h2>
              
              <div className="font-sans text-wood-muted text-sm sm:text-base leading-relaxed space-y-5">
                <p>
                  Katherine is a violin teacher and performer with a decade of teaching experience spanning individual tuition, chamber music coaching, orchestral training, and classroom-based music education.
                </p>
                <p>
                  She began her musical training at the <strong className="font-semibold text-wood-dark">North London Conservatoire</strong>, before returning after graduation as a member of the teaching faculty. There, she specialised in violin instruction for young children using the Kodály approach, developing strong foundations in technique, rhythm, and aural awareness.
                </p>
                <p>
                  She holds a <strong className="font-semibold text-wood-dark">Bachelor of Music (Honours)</strong> degree from <strong className="font-semibold text-wood-dark">Trinity Conservatoire of Music, London</strong>, where she studied violin with Diana Cummings. Alongside her performance studies, she completed specialist training in instrumental teaching pedagogy and led music workshops in primary schools across Greenwich and Lewisham.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                   onClick={handleTeachingClick}
                   className="px-6 py-3 bg-wood-dark hover:bg-wood-sand text-white hover:text-white rounded-sm font-mono text-xs font-bold uppercase tracking-widest flex items-center space-x-2"
                   id="biography-teaching-philosophy-btn"
                >
                  <span>Teaching Philosophy</span>
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

      {/* Whimsical Cat Violinist & Orchestra Showcase Section */}
      <section className="py-20 px-6 bg-wood-beige border-t border-b border-wood-border">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-wood-sand font-bold flex items-center justify-center space-x-1.5">
              <Music className="h-3.5 w-3.5" />
              <span>Whimsical Studio Inspiration</span>
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-wood-dark tracking-tight leading-tight">
              A Love for Music, Expressed Elegantly
            </h2>
            <p className="font-sans text-wood-muted text-sm leading-relaxed">
              Explore our custom violin-themed imagery. At Harrogate Violin Studio, we blend disciplined, high-level music education with warm, creative inspiration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Violin Lesson */}
            <div className="bg-white border border-wood-border rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-all group">
              <div className="aspect-[4/3] overflow-hidden bg-wood-light relative">
                <img 
                  src={catViolinLesson} 
                  alt="A kitten learning violin posture" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
              <div className="p-5 space-y-2">
                <span className="font-mono text-[9px] text-wood-sand font-bold uppercase tracking-wider">Foundation Training</span>
                <h4 className="font-serif font-bold text-base text-wood-dark">The Joy of Learning</h4>
                <p className="font-sans text-xs text-wood-muted leading-relaxed">
                  Building perfect bow hold habits and secure physical posture right from the very first lesson.
                </p>
              </div>
            </div>

            {/* Card 2: Solo Violinist */}
            <div className="bg-white border border-wood-border rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-all group">
              <div className="aspect-[4/3] overflow-hidden bg-wood-light relative">
                <img 
                  src={catViolinist} 
                  alt="A majestic cat playing violin" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
              <div className="p-5 space-y-2">
                <span className="font-mono text-[9px] text-wood-sand font-bold uppercase tracking-wider">Solo Artistry</span>
                <h4 className="font-serif font-bold text-base text-wood-dark">Expressive Resonance</h4>
                <p className="font-sans text-xs text-wood-muted leading-relaxed">
                  Refining left-hand placement, pristine intonation, and high expressive dynamics for advanced classical works.
                </p>
              </div>
            </div>

            {/* Card 3: Orchestra */}
            <div className="bg-white border border-wood-border rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-all group">
              <div className="aspect-[4/3] overflow-hidden bg-wood-light relative">
                <img 
                  src={catOrchestra} 
                  alt="Cat violin orchestra in a grand hall" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
              <div className="p-5 space-y-2">
                <span className="font-mono text-[9px] text-wood-sand font-bold uppercase tracking-wider">Chamber Music</span>
                <h4 className="font-serif font-bold text-base text-wood-dark">The Symphony of Ensemble</h4>
                <p className="font-sans text-xs text-wood-muted leading-relaxed">
                  Understanding shared pulse, dynamic blending, and deep collaborative musicianship in orchestral play.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
