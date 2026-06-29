import { FAQItem, GalleryItem } from './types';

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'complete-beginners',
    question: 'Do you teach complete beginners?',
    answer: 'Absolutely. Most of my students start with no prior musical experience. I believe in building a strong technical foundation from the first lesson, helping students develop excellent habits that support long-term progress.'
  },
  {
    id: 'borrow-instrument',
    question: 'Do I need my own violin to start lessons?',
    answer: "No, not necessarily! If you're just getting started, I have a selection of violins that students can borrow, subject to availability. This can be a great way to begin lessons without the expense of buying an instrument straight away. I simply ask for a refundable deposit while the violin is on loan. If you're interested, feel free to get in touch and I'll let you know what sizes and instruments I currently have available."
  },
  {
    id: 'lesson-length',
    question: 'How long are lessons?',
    answer: "Lesson lengths depend on the student's age, level, and goals. Younger beginners typically start with shorter lessons (30 minutes) once or twice a week, while intermediate and advanced students generally benefit from longer sessions (45 or 60 minutes)."
  },
  {
    id: 'parental-support',
    question: 'How can parents support violin practice at home?',
    answer: "Parents play a crucial role in a child's musical development, especially during the early years. You do not need a musical background to help your child succeed. The most important contribution a parent can make is to establish a consistent practice routine. Short, focused practice sessions every day are far more effective than occasional longer sessions. Young children benefit from having a parent present during practice to help them stay focused and follow the teacher's instructions."
  },
  {
    id: 'practice-progress',
    question: 'How much practice is needed to make good progress?',
    answer: "There is no single practice requirement that suits every student, as age, experience, and individual goals all play a role. However, meaningful progress on the violin requires consistent and disciplined practice between lessons.\n\nRegularity is more important than occasional marathon sessions. A student who practises thoughtfully for just 30 minutes each day will usually make far better progress than one who practises for two hours only twice a week.\n\nParents are often surprised to discover that progress on the violin is built through hundreds of small, consistent improvements rather than dramatic breakthroughs. Students who practise regularly arrive at lessons ready to build on what they have learned, while those who practise infrequently often spend lessons revisiting previous material.\n\nMy expectation is not perfection, but commitment. Students who make steady, consistent practice a part of their routine are the ones who develop strong technique, musical confidence, and lasting enjoyment of the instrument."
  },
  {
    id: 'teach-adults',
    question: 'Do you teach adults?',
    answer: 'Yes. Adult students make up about half of my student base! whether they are complete beginners, returning to the violin after many years, or already playing at an advanced level. Adult learners often bring exceptional motivation and commitment to their studies. Violin lessons are also a great way to use a WFH (Work From Home) lunch break.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'cert-1',
    title: 'ABRSM Grade 8 Violin',
    studentName: 'Hannah (Age 16)',
    grade: 'Grade 8',
    result: 'Distinction',
    board: 'ABRSM',
    comment: 'Outstanding scales and deep maturity. Bow technique in Bach was pristine, showing solid double-stopping and clear projection.',
    year: '2024'
  },
  {
    id: 'cert-2',
    title: 'ABRSM Grade 5 Violin',
    studentName: 'Charlotte (Age 10)',
    grade: 'Grade 5',
    result: 'Distinction',
    board: 'ABRSM',
    comment: 'Lyrical phrasing in the classical selection with highly secure shifting. Excellent intonation and expressive dynamics.',
    year: '2024'
  },
  {
    id: 'cert-3',
    title: 'ABRSM Grade 3 Violin',
    studentName: 'George (Adult Returner)',
    grade: 'Grade 3',
    result: 'Merit',
    board: 'ABRSM',
    comment: 'Confident rhythmic drive. Shifting was crisp and the tone in the traditional folk melody was rich and resonant.',
    year: '2023'
  },
  {
    id: 'cert-4',
    title: 'Trinity College Grade 1 Violin',
    studentName: 'Leo (Age 7)',
    grade: 'Grade 1',
    result: 'Distinction',
    board: 'Trinity College London',
    comment: 'Superb posture and bow hold. Very steady pulse with crisp staccato and excellent, lively phrasing.',
    year: '2023'
  },
  {
    id: 'cert-5',
    title: 'ABRSM Grade 6 Violin',
    studentName: 'Amelie (Age 13)',
    grade: 'Grade 6',
    result: 'Distinction',
    board: 'ABRSM',
    comment: 'Beautiful tone production and control of vibrato. Fast passages in Vivaldi were highly precise and sparkling.',
    year: '2024'
  },
  {
    id: 'cert-6',
    title: 'ABRSM Grade 4 Violin',
    studentName: 'Aiden (Age 11)',
    grade: 'Grade 4',
    result: 'Distinction',
    board: 'ABRSM',
    comment: 'Remarkable memory and clean left-hand placement. The romantic piece was performed with great warmth and musicality.',
    year: '2023'
  },
  {
    id: 'cert-7',
    title: 'Trinity College Grade 5 Violin',
    studentName: 'Sarah (Adult Returner)',
    grade: 'Grade 5',
    result: 'Merit',
    board: 'Trinity College London',
    comment: 'Genuinely engaging performance with solid acoustic presence and excellent preparation of orchestral excerpts.',
    year: '2024'
  },
  {
    id: 'cert-8',
    title: 'ABRSM Grade 2 Violin',
    studentName: 'Noah (Age 8)',
    grade: 'Grade 2',
    result: 'Distinction',
    board: 'ABRSM',
    comment: 'Highly polished scales and fluent sight-reading. Excellent communication of rhythm and lively musical character.',
    year: '2023'
  }
];

export const STUDIO_INFO = {
  email: 'harrogateviolinstudio@gmail.com',
  phone: '07852718587',
  phoneDisplay: '+44 7852 718587',
  address: 'Harrogate Studio, Harlow Hill Area, Harrogate, North Yorkshire, HG2',
  instagram: 'https://www.instagram.com/harrogateviolinstudio',
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeyAYmcM4_6qulNJrpirzJqT4oTiKnoaBOxNTqtX4voyDvREg/viewform',
  coordinates: {
    lat: 53.987996,
    lng: -1.553044
  }
};
