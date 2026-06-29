import React, { useState } from 'react';
import { Page } from '../types';
import { Award, Instagram, ZoomIn } from 'lucide-react';
import { BannerHeader } from './BannerHeader'; 
import bannerBackground from "../assets/images/banners/catbanner.jpg";

// Import all real certificate images from assets
import certx from '../assets/images/exam/certx.jpg';
import certx1 from '../assets/images/exam/certx1.jpg';
import certx3 from '../assets/images/exam/certx3.jpg';
import certx4 from '../assets/images/exam/certx4.jpg';
import certx5 from '../assets/images/exam/certx5.jpg';
import certx6 from '../assets/images/exam/certx6.jpg';
import certx7 from '../assets/images/exam/certx7.jpg';
import certx8 from '../assets/images/exam/certx8.jpg';
import certx9 from '../assets/images/exam/certx9.jpg';
import certx10 from '../assets/images/exam/certx10.jpg';
import certx11 from '../assets/images/exam/certx11.jpg';
import certx12 from '../assets/images/exam/certx12.jpg';

interface GalleryViewProps {
  setCurrentPage: (page: Page) => void;
}

interface RealCertItem {
  id: string;
  title: string;
  imageUrl: string;
  board: 'ABRSM' | 'Trinity' | 'LCME';
  grade: string;
  year: string;
}

const REAL_CERT_ITEMS: RealCertItem[] = [
  { id: 'cert-3', title: 'ABRSM Violin Exam Certificate', imageUrl: certx3, board: 'ABRSM', grade: 'Merit', year: '2026' },
  { id: 'cert-5', title: 'ABRSM Violin Exam Certificate', imageUrl: certx5, board: 'ABRSM', grade: 'Distinction', year: '2025' },
  { id: 'cert-11', title: 'Trinity College London Certificate', imageUrl: certx11, board: 'Trinity', grade: 'Distinction', year: '2023' },
  { id: 'cert-9', title: 'ABRSM Violin Exam Certificate', imageUrl: certx9, board: 'ABRSM', grade: 'Distinction', year: '2023' },
  { id: 'cert-6', title: 'ABRSM Violin Exam Certificate', imageUrl: certx6, board: 'ABRSM', grade: 'Distinction', year: '2023' },
  { id: 'cert-4', title: 'Trinity College London Certificate', imageUrl: certx4, board: 'Trinity', grade: 'Distinction', year: '2023' },
  { id: 'cert-12', title: 'LCME Violin Exam Certificate', imageUrl: certx12, board: 'LCME', grade: 'Distinction', year: '2023' },
  { id: 'cert-8', title: 'ABRSM Violin Exam Certificate', imageUrl: certx8, board: 'ABRSM', grade: 'Distinction', year: '2022' },
  { id: 'cert-2', title: 'ABRSM Violin Exam Certificate', imageUrl: certx1, board: 'ABRSM', grade: 'Distinction', year: '2022' },
  { id: 'cert-10', title: 'ABRSM Violin Exam Certificate', imageUrl: certx10, board: 'ABRSM', grade: 'Distinction', year: '2022' },
  { id: 'cert-1', title: 'ABRSM Violin Exam Certificate', imageUrl: certx, board: 'ABRSM', grade: 'Distinction', year: '2022' },
  { id: 'cert-7', title: 'Trinity College London Certificate', imageUrl: certx7, board: 'Trinity', grade: 'Distinction', year: '2022' }
];

export const GalleryView: React.FC<GalleryViewProps> = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState<'instagram' | 'achievements'>('instagram');
  const [selectedItem, setSelectedItem] = useState<RealCertItem | null>(null);

  const handleContactClick = () => {
    setCurrentPage('contact');
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="animate-fadeIn">

      <BannerHeader 
        title="Life at the Studio & "
        titleItalic="My lessons"
        backgroundImage={bannerBackground}
      />
      

      {/* Tab Selector */}
      <div className="bg-white border-b border-wood-border sticky top-20 z-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab('instagram')}
              className={`py-4 font-mono text-xs uppercase tracking-wider font-bold border-b-2 transition-all flex items-center space-x-2 ${
                activeTab === 'instagram'
                  ? 'border-wood-sand text-wood-sand'
                  : 'border-transparent text-wood-muted hover:text-wood-dark'
              }`}
            >
              <Instagram className="h-4 w-4" />
              <span>Instagram Feed</span>
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`py-4 font-mono text-xs uppercase tracking-wider font-bold border-b-2 transition-all flex items-center space-x-2 ${
                activeTab === 'achievements'
                  ? 'border-wood-sand text-wood-sand'
                  : 'border-transparent text-wood-muted hover:text-wood-dark'
              }`}
            >
              <Award className="h-4 w-4" />
              <span>Board Exam Results</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid Section */}
      <section className="p-5 sm:py-20 sm:px-6 bg-wood-light">
        <div className="max-w-6xl mx-auto space-y-12 animate-fadeIn">

          {activeTab === 'instagram' ? (
            /* ================= INSTAGRAM FEED TAB ================= */
            <div className="space-y-8 max-w-5xl mx-auto">
              <div className="text-center max-w-xl mx-auto py-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-wood-sand font-bold block mb-1">
                  Live Instagram Stream
                </span>
                <p className="font-sans text-xs text-wood-muted leading-relaxed">
                  Follow our weekly updates, practice tips, and student accomplishments directly from Harrogate.
                </p>
              </div>

              {/* Dynamic Fouita Widget Frame */}
              <div className="bg-white border border-wood-border p-4 rounded-sm shadow-xs overflow-hidden">
                <iframe
                  src="https://emb.fouita.com/widget/0x4bbc1c/ftkl1o9ebk"
                  title="Instagram Feed"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  className="w-full min-h-[500px] sm:min-h-[700px] border-0 rounded-xs"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ) : (
            /* ================= BOARD EXAM RESULTS TAB ================= */
            <div className="space-y-12">
              {/* Certificate Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {REAL_CERT_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="bg-white border border-wood-border hover:border-wood-sand p-4 rounded-sm shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between h-[290px] relative overflow-hidden animate-fadeIn"
                  >
                    {/* Visual frame for certificate thumbnail */}
                    <div className="w-full h-52 overflow-hidden bg-wood-beige border border-wood-border/60 rounded-xs relative flex items-center justify-center">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                        referrerPolicy="no-referrer"
                      />
                      {/* Zoom overlay on hover */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <span className="font-mono text-[10px] uppercase font-bold tracking-widest bg-wood-dark/90 px-3 py-1.5 rounded-sm flex items-center space-x-1">
                          <ZoomIn className="h-3.5 w-3.5" />
                          <span>View Full</span>
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-wood-beige/60 mt-2 flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-wood-muted font-bold">
                        {item.board}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-wood-sand font-bold">
                        {item.grade}
                      </span>
                      <span className="font-mono text-[9px] text-wood-muted">
                        {item.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Bottom Callout block */}
          <div className="bg-wood-beige p-8 rounded-sm border border-wood-border max-w-4xl mx-auto text-center space-y-4">
            <h3 className="font-serif font-bold text-xl text-wood-dark">
              Ready to start your child or your own violin success story?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-wood-muted max-w-xl mx-auto">
              Every lesson is structured to move students forward with high accountability and deep musical exploration.
            </p>
            <button
              onClick={handleContactClick}
              className="px-6 py-3 bg-wood-sand hover:bg-wood-brown text-white rounded-sm font-mono text-xs font-bold uppercase tracking-widest transition-all inline-block shadow-md shadow-wood-sand/10"
            >
              Contact Me to Schedule a Trial
            </button>
          </div>

        </div>
      </section>

      {/* Modal for Certificate feedback details */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedItem(null)}
          id="certificate-detail-modal"
        >
          <div 
            className="bg-white max-w-2xl w-full rounded-sm shadow-2xl overflow-hidden border border-wood-border p-6 md:p-8 space-y-4 relative animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title / Board Header */}
            <div className="text-center space-y-1">
              <span className="font-mono text-[9px] uppercase tracking-widest text-wood-muted block">
                {selectedItem.board} — Official Certificate
              </span>
              <h3 className="font-serif font-bold text-xl text-wood-dark tracking-tight">
                {selectedItem.title}
              </h3>
              <p className="font-mono text-[10px] text-wood-sand font-bold uppercase tracking-wider">
                {selectedItem.grade} &bull; {selectedItem.year}
              </p>
            </div>

            {/* Certificate Image Frame */}
            <div className="w-full flex justify-center bg-wood-light border border-wood-border/60 p-2 rounded-sm shadow-inner max-h-[60vh] overflow-y-auto">
              <img 
                src={selectedItem.imageUrl} 
                alt={selectedItem.title} 
                className="max-h-[55vh] object-contain rounded-xs"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Close Button */}
            <div className="pt-2 text-center">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-6 py-2.5 bg-wood-dark hover:bg-wood-sand text-white font-mono text-xs font-bold uppercase tracking-widest rounded-sm transition-colors"
                id="modal-close-btn"
              >
                Close Certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
