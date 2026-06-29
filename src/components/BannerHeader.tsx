import React from 'react';

interface BannerHeaderProps {
  title: string;
  titleItalic?: string;
  backgroundImage: string;
}

export const BannerHeader: React.FC<BannerHeaderProps> = ({
  title,
  titleItalic,
  backgroundImage,
}) => {
  return (
    <section 
      className="relative text-white p-4 sm:py-8 sm:px-6 text-center border-b border-wood-border bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 md:bg-gradient-to-r md:from-black/60 md:via-black/30 md:to-black/80" />

      {/* Content wrapper - Ensure z-10 keeps text above the overlay */}
      <div className="max-w-4xl mx-auto space-y-3 relative z-10">
        <h1 className="font-serif font-normal text-3xl pt-15 sm:text-5xl tracking-tight leading-tight">
          {title} {titleItalic && <><br /><span className="italic text-[#C29B68]">{titleItalic}</span></>}
        </h1>
      </div>
    </section>
  );
};