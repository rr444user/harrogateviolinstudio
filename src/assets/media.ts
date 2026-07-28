import bannerFallback from './images/banners/catbanner.jpg';
import bannerAvif960 from './optimized/catbanner-960.avif';
import bannerAvif1600 from './optimized/catbanner-1600.avif';
import bannerWebp960 from './optimized/catbanner-960.webp';
import bannerWebp1600 from './optimized/catbanner-1600.webp';

import logoFallback from './images/studio_logo_1782572398426.jpg';
import logoAvif71 from './optimized/studio-logo-71.avif';
import logoAvif142 from './optimized/studio-logo-142.avif';
import logoWebp71 from './optimized/studio-logo-71.webp';
import logoWebp142 from './optimized/studio-logo-142.webp';

import profileFallback from './images/profile.png';
import profileAvif248 from './optimized/profile-248.avif';
import profileAvif496 from './optimized/profile-496.avif';
import profileWebp248 from './optimized/profile-248.webp';
import profileWebp496 from './optimized/profile-496.webp';

import galleryThumb1Fallback from './homeGallery/Screenshot 2026-06-29 at 16-57-17 Instagram.png';
import galleryThumb1Avif274 from './optimized/gallery-1-274.avif';
import galleryThumb1Avif548 from './optimized/gallery-1-548.avif';
import galleryThumb1Webp274 from './optimized/gallery-1-274.webp';
import galleryThumb1Webp548 from './optimized/gallery-1-548.webp';

import galleryThumb2Fallback from './homeGallery/Screenshot 2026-06-29 at 16-57-56 Instagram.png';
import galleryThumb2Avif274 from './optimized/gallery-2-274.avif';
import galleryThumb2Avif548 from './optimized/gallery-2-548.avif';
import galleryThumb2Webp274 from './optimized/gallery-2-274.webp';
import galleryThumb2Webp548 from './optimized/gallery-2-548.webp';

import verticalFallback from './images/verticalViolin.jpg';
import verticalAvif400 from './optimized/vertical-400.avif';
import verticalAvif800 from './optimized/vertical-800.avif';
import verticalWebp400 from './optimized/vertical-400.webp';
import verticalWebp800 from './optimized/vertical-800.webp';

export interface ResponsiveImageAsset {
  fallback: string;
  avif1x: string;
  avif2x: string;
  webp1x: string;
  webp2x: string;
}

export const bannerImage: ResponsiveImageAsset = {
  fallback: bannerFallback,
  avif1x: bannerAvif960,
  avif2x: bannerAvif1600,
  webp1x: bannerWebp960,
  webp2x: bannerWebp1600,
};

export const logoImage: ResponsiveImageAsset = {
  fallback: logoFallback,
  avif1x: logoAvif71,
  avif2x: logoAvif142,
  webp1x: logoWebp71,
  webp2x: logoWebp142,
};

export const profileImage: ResponsiveImageAsset = {
  fallback: profileFallback,
  avif1x: profileAvif248,
  avif2x: profileAvif496,
  webp1x: profileWebp248,
  webp2x: profileWebp496,
};

export const galleryThumb1Image: ResponsiveImageAsset = {
  fallback: galleryThumb1Fallback,
  avif1x: galleryThumb1Avif274,
  avif2x: galleryThumb1Avif548,
  webp1x: galleryThumb1Webp274,
  webp2x: galleryThumb1Webp548,
};

export const galleryThumb2Image: ResponsiveImageAsset = {
  fallback: galleryThumb2Fallback,
  avif1x: galleryThumb2Avif274,
  avif2x: galleryThumb2Avif548,
  webp1x: galleryThumb2Webp274,
  webp2x: galleryThumb2Webp548,
};

export const verticalViolinImage: ResponsiveImageAsset = {
  fallback: verticalFallback,
  avif1x: verticalAvif400,
  avif2x: verticalAvif800,
  webp1x: verticalWebp400,
  webp2x: verticalWebp800,
};

export const getResponsiveSrcSets = (asset: ResponsiveImageAsset) => ({
  avif: `${asset.avif1x} 1x, ${asset.avif2x} 2x`,
  webp: `${asset.webp1x} 1x, ${asset.webp2x} 2x`,
});

export const getBackgroundImageSet = (asset: ResponsiveImageAsset) =>
  `image-set(url(${asset.avif2x}) type("image/avif") 2x, url(${asset.avif1x}) type("image/avif") 1x, url(${asset.webp2x}) type("image/webp") 2x, url(${asset.webp1x}) type("image/webp") 1x, url(${asset.fallback}) 1x)`;
