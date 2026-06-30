import React from 'react';
import { Page } from '../types';
import { STUDIO_INFO } from '../data';
import { Calendar, HelpCircle, MapPin, CheckCircle, BookOpen, Music, Shield } from 'lucide-react';
import { BannerHeader } from './BannerHeader'; 
import bannerBackground from "../assets/images/banners/catbanner.jpg";

interface TeachingViewProps {
  setCurrentPage: (page: Page) => void;
}

export const TeachingView: React.FC<TeachingViewProps> = ({ setCurrentPage }) => {
  const handleContactClick = () => {
    setCurrentPage('contact');
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const lessonStructures = [
    {
      duration: '30 Minutes',
      recommendation: 'Recommended for young beginners (ages 4-8)',
      focus: 'Focuses on posture, rhythm games, Suzuki/Kodály ear training, and small progress habits.',
      benefits: ['High focus window', 'Interactive violin holding drills', 'Bowing foundation']
    },
    {
      duration: '45 Minutes',
      recommendation: 'Recommended for older beginners & adult learners',
      focus: 'Balances technical development (scales and shifts) with pieces, rhythm drills, and basic music theory.',
      benefits: ['Sustained steady pacing', 'Time for standard method books', 'Sight-reading foundation']
    },
    {
      duration: '60 Minutes',
      recommendation: 'Recommended for intermediate to advanced (Grades 5-8)',
      focus: 'Designed for intensive preparation of ABRSM/Trinity board pieces, vibrato exploration, complex shifting, and performance mastery.',
      benefits: ['Advanced phrasing coaching', 'Extensive technical audits', 'Full musical analysis']
    }
  ];

  return (
    <div className="animate-fadeIn">

      <BannerHeader 
        title="Violin Lessons with"
        titleItalic="Katherine"
        backgroundImage={bannerBackground}
      />

  {/* Main Philosophy & Background */}
      <section className="p-5 sm:py-20 sm:px-6 bg-wood-light">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch"> {/* Changed items-start to items-stretch */}
          
          {/* Main Bio/Philosophy Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-wood-dark tracking-tight">
              London Conservatoire Origins to Harrogate
            </h2>
            <div className="font-sans text-wood-muted text-sm sm:text-base leading-relaxed space-y-5">
              <p>
                Having taught throughout her undergraduate studies, Katherine established a full-time teaching practice in 2021, working between the <strong className="font-semibold text-wood-dark">North London Conservatoire</strong> and a private studio in Notting Hill and then in East Finchley. She has extensive experience preparing students for both <strong className="font-semibold text-wood-dark">ABRSM and Trinity examinations</strong>, as well as auditions, competitions, and youth orchestra placements.
              </p>
              <p>
                Her students have gained places with the <strong className="font-semibold text-wood-dark">National Youth String Orchestra of Great Britain</strong>, <strong className="font-semibold text-wood-dark">Pro-Corda</strong>, and the <strong className="font-semibold text-wood-dark">National Schools Symphony Orchestra</strong>, and have received awards at the North London Festival, Ealing Festival of Music, and Greenwich Festival of Music.
              </p>
              <p>
                Alongside her teaching practice, she maintains an active freelance career as a violinist. She has appeared at the <strong className="font-semibold text-wood-dark">Wigmore Hall</strong> with both piano trio and piano quintet ensembles. Her wider performance experience includes chamber music recitals, orchestral concerts, educational outreach projects, and festival engagements across London and the South East.
              </p>
              <p className="bg-wood-beige p-5 rounded-sm border border-wood-border italic">
                "Now based in Harrogate, Katherine specialises in teaching young children, while also working extensively with adult beginners and returners, who together make up a significant proportion of her studio. Her teaching focuses on building secure technical foundations and disciplined practice habits, alongside developing musical curiosity, confidence, and enjoyment."
              </p>
            </div>
          </div>

          {/* Side Column Content */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6"> {/* Added flex layout to make sure height fills nicely */}
            
            {/* DESKTOP ONLY: Studio Banner Image Replacement (Now matches left side height) */}
            <div className="hidden md:flex flex-1 overflow-hidden rounded-sm border border-wood-border shadow-xs bg-white p-2 min-h-0">
              <img 
                src={bannerBackground} 
                alt="Studio Banner" 
                className="w-full h-full object-cover rounded-xs" 
              />
            </div>

            {/* MOBILE ONLY: Core Focus Areas Checklist */}
            <div className="md:hidden bg-white p-8 rounded-sm shadow-xs border border-wood-border space-y-6">
              <h3 className="font-serif font-bold text-lg text-wood-dark border-b border-wood-beige pb-3">
                Core Focus Areas
              </h3>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-wood-beige rounded-sm text-wood-sand">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-wood-dark text-sm">Secure Posture First</h4>
                  <p className="text-xs text-wood-muted font-sans mt-1 leading-relaxed">
                    Correct bow hold, balanced violin positioning, and healthy muscle memory patterns to avoid physical tension.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-wood-beige rounded-sm text-wood-sand">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-wood-dark text-sm">Kodály Auditory Play</h4>
                  <p className="text-xs text-wood-muted font-sans mt-1 leading-relaxed">
                    Singing, inner hearing, and ear training exercises that enable students to hear pitch before they play.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-wood-beige rounded-sm text-wood-sand">
                  <Music className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-wood-dark text-sm">Flexible Rep Methodologies</h4>
                  <p className="text-xs text-wood-muted font-sans mt-1 leading-relaxed">
                    Bending standard method books (Suzuki, ABRSM) to match individual student character and interests.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-wood-beige rounded-sm text-wood-sand">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-wood-dark text-sm">No-Cost Borrowing Program</h4>
                  <p className="text-xs text-wood-muted font-sans mt-1 leading-relaxed">
                    Borrow a size-appropriate violin during initial trials to delay instrument buying expenses!
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="text-center pt-2">
              <button
                onClick={handleContactClick}
                className="w-full py-4 bg-wood-sand hover:bg-wood-brown text-white rounded-sm font-mono text-xs font-bold uppercase tracking-widest transition-all shadow-md shadow-wood-sand/10"
              >
                Schedule a Trial Lesson
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Map Embed Section & Location Details */}
      <section className="bg-wood-beige py-20 px-6 border-t border-b border-wood-border">

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Location Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-wood-sand font-bold block">
                Harrogate Studio
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-wood-dark tracking-tight">
                Studio Location & Transport
              </h2>
              
              <div className="font-sans text-wood-muted text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  Katherine teaches from a quiet, dedicated, acoustic-optimized garden studio situated in the <strong className="font-semibold text-wood-dark">Harlow Hill / Otley Road area</strong> of Harrogate (HG2).
                </p>
                <p>
                  The studio is ideally placed close to RHS Harlow Carr, making it highly accessible for students living across Harrogate, Knaresborough, Pannal, and Leeds.
                </p>
                
                <div className="bg-wood-beige p-4 rounded-sm border border-wood-border font-mono text-xs space-y-2 text-wood-dark">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-wood-sand mt-0.5 flex-shrink-0" />
                    <span>Harlow Hill, Harrogate, HG2</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-wood-sand flex-shrink-0" />
                    <span>Lessons by Appointment Only</span>
                  </div>
                </div>

                <p className="text-xs text-wood-muted italic">
                  * Ample complimentary driveway and on-street parking is available directly outside the studio. Bus routes are also within immediate walking distance.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleContactClick}
                  className="px-6 py-3 bg-wood-dark hover:bg-wood-sand text-white rounded-sm font-mono text-xs font-bold uppercase tracking-widest flex items-center space-x-2"
                >
                  <span>Request Studio Address</span>
                </button>
              </div>
            </div>

            {/* Right Map Visual Column */}
            <div className="lg:col-span-7">
              <div className="rounded-sm overflow-hidden border border-wood-border shadow-xs bg-wood-beige relative">
                {/* Embed modern Google Maps static iframe with the exact coords of Otley Road area */}
                <iframe
                  title="Harrogate Violin Studio location map on Harlow Hill"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  src={`https://maps.google.com/maps?q=${STUDIO_INFO.coordinates.lat},${STUDIO_INFO.coordinates.lng}&hl=en&z=14&output=embed`}
                  allowFullScreen
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px]"
                ></iframe>
                
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-sm shadow-sm border border-wood-border text-center">
                  <span className="font-mono text-[10px] text-wood-dark font-bold uppercase tracking-wider block">
                    HG2 Otley Road Area
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};