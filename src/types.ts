export type Page = 'home' | 'teaching' | 'gallery' | 'contact' | 'faq';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  studentName?: string;
  grade?: string;
  result?: 'Distinction' | 'Merit' | 'Pass' | string;
  board?: 'ABRSM' | 'Trinity' | string;
  comment?: string;
  year?: string;
  imageUrl?: string;
}
