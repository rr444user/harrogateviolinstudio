import React from 'react';

interface BannerHeaderProps {
  title: string;
  titleItalic?: string;
}

export const BannerHeader: React.FC<BannerHeaderProps> = ({
  title,
  titleItalic,
}) => {
  return (
    <section className="relative bg-wood-beige text-wood-dark p-4 sm:py-10 sm:px-6 text-center border-b border-wood-border">
      <div className="max-w-4xl mx-auto space-y-3 relative z-10">
        <h1 className="font-serif font-normal text-3xl sm:text-5xl tracking-tight leading-tight">
          {title} {titleItalic && <><br /><span className="italic text-wood-sand">{titleItalic}</span></>}
        </h1>
      </div>
    </section>
  );
};