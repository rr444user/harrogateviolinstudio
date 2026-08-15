import React from "react";
import { Page } from "../types";
import { STUDIO_INFO } from "../data";
import { Calendar, MapPin, Clock } from "lucide-react";
import { BannerHeader } from "./BannerHeader";
import { bannerImage, getBackgroundImageSet } from "../assets/media";

interface TeachingViewProps {
  setCurrentPage: (page: Page) => void;
}

export const TeachingView: React.FC<TeachingViewProps> = ({
  setCurrentPage,
}) => {
  const handleContactClick = () => {
    setCurrentPage("contact");
    window.history.pushState({}, "", "/contact/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const lessonStructures = [
    {
      duration: "30 Minutes",
      recommendation: "Recommended for young beginners (ages 4-8)",
      focus:
        "Focuses on posture, rhythm games, Suzuki/Kodály ear training, and small progress habits.",
      benefits: [
        "High focus window",
        "Interactive violin holding drills",
        "Bowing foundation",
      ],
    },
    {
      duration: "45 Minutes",
      recommendation: "Recommended for older beginners & adult learners",
      focus:
        "Balances technical development (scales and shifts) with pieces, rhythm drills, and basic music theory.",
      benefits: [
        "Sustained steady pacing",
        "Time for standard method books",
        "Sight-reading foundation",
      ],
    },
    {
      duration: "60 Minutes",
      recommendation: "Recommended for intermediate to advanced (Grades 5-8)",
      focus:
        "Designed for intensive preparation of ABRSM/Trinity board pieces, vibrato exploration, complex shifting, and performance mastery.",
      benefits: [
        "Advanced phrasing coaching",
        "Extensive technical audits",
        "Full musical analysis",
      ],
    },
  ];

  return (
    <div className="animate-fadeIn">
      <BannerHeader
        title="Violin Lessons with"
        titleItalic="Katherine"
        backgroundImage={bannerImage.fallback}
        backgroundImageSet={getBackgroundImageSet(bannerImage)}
      />

      {/* Main Philosophy & Background */}
      <section className="p-5 sm:py-10 sm:px-6 bg-wood-light">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Main Bio/Philosophy Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-wood-dark tracking-tight">
              My Teaching
            </h2>
            <div className="font-sans text-wood-muted text-sm sm:text-base leading-relaxed space-y-5">
              <p>
                Having taught throughout her undergraduate studies, Katherine
                established a full-time teaching practice in 2021, working
                between the{" "}
                <strong className="font-semibold text-wood-dark">
                  North London Conservatoire
                </strong>{" "}
                and a private studio in Notting Hill and then in East Finchley.
                She has extensive experience preparing students for both{" "}
                <strong className="font-semibold text-wood-dark">
                  ABRSM and Trinity examinations
                </strong>
                , as well as auditions, competitions, and youth orchestra
                placements.
              </p>
              <p>
                Her students have gained places with the{" "}
                <strong className="font-semibold text-wood-dark">
                  National Youth String Orchestra of Great Britain
                </strong>
                ,{" "}
                <strong className="font-semibold text-wood-dark">
                  Pro-Corda
                </strong>
                , and the{" "}
                <strong className="font-semibold text-wood-dark">
                  National Schools Symphony Orchestra
                </strong>
                , and have received awards at the North London Festival, Ealing
                Festival of Music, and Greenwich Festival of Music.
              </p>
              <p>
                Alongside her teaching practice, she maintains an active
                freelance career as a violinist. She has appeared at the Wigmore
                Hall with both piano trio and piano quintet ensembles. Her wider
                performance experience includes chamber music recitals,
                orchestral concerts, educational outreach projects, and festival
                engagements across London and the South East.
              </p>
              <p className="bg-wood-beige p-5 rounded-sm border border-wood-border italic">
                Now based in Harrogate, Katherine specialises in teaching young
                children, while also working extensively with adult beginners
                and returners, who together make up a significant proportion of
                her studio. Her teaching focuses on building secure technical
                foundations and disciplined practice habits, alongside
                developing musical curiosity, confidence, and enjoyment.
              </p>
            </div>
          </div>

          {/* Side Column Content (Pricing Table, Loan Info & CTA) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Studio Pricing Card */}
            <div className="bg-white rounded-sm border border-wood-border shadow-xs p-6 space-y-5">
              <div className="border-b border-wood-border pb-3">
                <h3 className="font-serif font-bold text-2xl text-wood-dark tracking-tight">
                  Lesson Pricing
                </h3>
              </div>

              <div className="overflow-x-auto -mx-6">
                <table className="w-full text-left font-sans text-sm">
                  <thead>
                    <tr className="border-b border-wood-border text-wood-dark font-bold text-xs uppercase tracking-wider font-mono">
                      <th className="py-2 pl-6 pr-2">Duration</th>
                      <th className="py-2 px-2 text-right">Standard</th>
                      <th className="py-2 pl-2 pr-6 text-right text-wood-sand">
                        Daytime*
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-wood-border/40 text-wood-dark">
                    <tr className="bg-wood-beige/60">
                      <td className="py-3.5 pl-6 pr-2 font-semibold text-wood-dark flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-wood-sand flex-shrink-0" />
                        Trial (30m)
                      </td>
                      <td className="py-3.5 px-2 text-right font-mono font-bold text-wood-dark">
                        £20
                      </td>
                      <td className="py-3.5 pl-2 pr-6 text-right font-mono font-medium text-wood-muted">
                        -
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 pl-6 pr-2 font-medium flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-wood-sand flex-shrink-0" />
                        30 Minutes
                      </td>
                      <td className="py-3.5 px-2 text-right font-mono font-semibold">
                        £25
                      </td>
                      <td className="py-3.5 pl-2 pr-6 text-right font-mono font-bold text-wood-sand">
                        £20
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 pl-6 pr-2 font-medium flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-wood-sand flex-shrink-0" />
                        45 Minutes
                      </td>
                      <td className="py-3.5 px-2 text-right font-mono font-semibold">
                        £37.50
                      </td>
                      <td className="py-3.5 pl-2 pr-6 text-right font-mono font-bold text-wood-sand">
                        £30
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 pl-6 pr-2 font-medium flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-wood-sand flex-shrink-0" />
                        60 Minutes
                      </td>
                      <td className="py-3.5 px-2 text-right font-mono font-semibold">
                        £50
                      </td>
                      <td className="py-3.5 pl-2 pr-6 text-right font-mono font-bold text-wood-sand">
                        £40
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-wood-muted italic pt-2 border-t border-wood-border/50">
                * Reduced rate applies to{" "}
                <strong className="font-semibold text-wood-dark">
                  weekday
                </strong>{" "}
                lessons that finish by 3:30pm.
              </p>
            </div>

            {/* Free Instrument Loan Card */}
            <div className="bg-wood-beige/40 rounded-sm border border-wood-border p-4 space-y-2.5">
              <h4 className="font-serif font-bold text-sm text-wood-dark">
                Free Violin Loan
              </h4>
              <p className="text-xs text-wood-muted leading-relaxed">
                Not ready to invest in an instrument just yet? Borrow a violin
                to take home to start learning right away. No purchase required,
                just a refundable deposit.
              </p>
              <ul className="text-xs text-wood-muted space-y-1.5 list-disc list-inside"></ul>
            </div>

            {/* CTA Section */}
            <div className="text-center">
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

      {/* What is a Trial Lesson Section */}
      <section className="py-10 px-6 bg-white border-t border-wood-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-wood-dark tracking-tight">
            What is a Trial Lesson?
          </h2>
          <p className="font-sans text-wood-muted text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            A trial lesson is a low-pressure, 30-minute introductory session
            with no ongoing commitment. It’s an easy opportunity to experience a
            lesson and discuss your goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
            <div className="bg-wood-beige/40 p-5 rounded-sm border border-wood-border space-y-2">
              <h3 className="font-serif font-bold text-base text-wood-dark">
                1. Meet & Goal Setting
              </h3>
              <p className="text-xs text-wood-muted leading-relaxed font-sans">
                We’ll discuss prior music background, learning goals, and any
                preferred musical styles or exam aspirations.
              </p>
            </div>

            <div className="bg-wood-beige/40 p-5 rounded-sm border border-wood-border space-y-2">
              <h3 className="font-serif font-bold text-base text-wood-dark">
                2. Practical Hands-On
              </h3>
              <p className="text-xs text-wood-muted leading-relaxed font-sans">
                Beginners get to hold a violin and make their first notes.
                Continuing players can bring a piece to play together.
              </p>
            </div>

            <div className="bg-wood-beige/40 p-5 rounded-sm border border-wood-border space-y-2">
              <h3 className="font-serif font-bold text-base text-wood-dark">
                3. Tailored Advice
              </h3>
              <p className="text-xs text-wood-muted leading-relaxed font-sans">
                We’ll discuss instrument sizing, practice routines, and
                recommend the best lesson duration going forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Section & Location Details */}
      <section className="bg-wood-light py-10 px-6 border-t border-b border-wood-border">
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
                  Katherine teaches from her home near{" "}
                  <strong className="font-semibold text-wood-dark">
                    Valley Gardens{" "}
                  </strong>{" "}
                  in Harrogate (HG2).
                </p>
                <p>
                  The studio is just 15 minutes from Harrogate Train Station and
                  has plenty of parking, making it accessible for students
                  living across Harrogate, Knaresborough, Pannal, and Leeds.
                </p>

                <div className="bg-wood-beige p-4 rounded-sm border border-wood-border font-mono text-xs space-y-2 text-wood-dark">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-wood-sand mt-0.5 flex-shrink-0" />
                    <span>Valley Gardens, Harrogate, HG2</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-wood-sand flex-shrink-0" />
                    <span>Lessons by Appointment Only</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleContactClick}
                  className="px-6 py-3 bg-wood-dark hover:bg-wood-sand text-white rounded-sm font-mono text-xs font-bold uppercase tracking-widest flex items-center space-x-2"
                >
                  <span>Schedule a Trial Lesson</span>
                </button>
              </div>
            </div>

            {/* Right Map Visual Column */}
            <div className="lg:col-span-7">
              <div className="rounded-sm overflow-hidden border border-wood-border shadow-xs bg-wood-beige relative">
                <iframe
                  title="Harrogate Violin Studio location map on Valley Gardens"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  src={`https://maps.google.com/maps?q=${STUDIO_INFO.coordinates.lat},${STUDIO_INFO.coordinates.lng}&hl=en&z=14&output=embed`}
                  allowFullScreen
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px]"
                  loading="lazy"
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
