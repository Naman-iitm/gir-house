
import { CouncilMember, Event, Community, Notice, LegacyItem, GalleryItem, Alumni } from './types';

// Replace these URLs with the actual paths to your uploaded images
export const BRAND_ASSETS = {
  logo: 'https://cdn.discordapp.com/attachments/1113264560718581761/1218264560718581761/gir_logo.png', // Replace with your Lion Logo
  hero_wins: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?fit=crop&w=1920&q=80', // Replace with 'Gir Wins Saavan 2025' image
  trophy_moment: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?fit=crop&w=1920&q=80', // Replace with 'Winners with Trophy' image
  meetup_1: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?fit=crop&w=800&q=80', // Replace with 'Gorakhpur Meetup'
  meetup_2: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?fit=crop&w=800&q=80', // Replace with 'Banaras Meetup'
  meetup_3: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?fit=crop&w=800&q=80', // Replace with 'Bareilly Meetup'
};

export const NAV_LINKS = [
  { name: 'About', path: '/about' },
  { name: 'Legacy', path: '/legacy' },
  { name: 'Council', path: '/council' },
  { name: 'Teams', path: '/teams' },
  { name: 'Events', path: '/events' },
  { name: 'Resources', path: '/resources' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Alumni', path: '/alumni' },
  { name: 'Contact', path: '/contact' },
];

export const MOCK_COUNCIL: CouncilMember[] = [
  {
    id: '1',
    name: 'Aarav Patel',
    role: 'General Secretary',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400',
    bio: 'Leading Gir House with a vision for inclusivity and innovation.',
    linkedin: '#',
    email: 'sec@girhouse.org'
  },
  {
    id: '2',
    name: 'Sanya Sharma',
    role: 'Sports Secretary',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=400&h=400',
    bio: 'Championing fitness and team spirit across all sports.',
    linkedin: '#'
  },
  {
    id: '3',
    name: 'Rohan Gupta',
    role: 'Cultural Secretary',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=400&h=400',
    bio: 'Bringing art, music, and dance to life within the society.',
    linkedin: '#'
  },
  {
    id: '4',
    name: 'Ishita Singh',
    role: 'Tech Head',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=crop&w=400&h=400',
    bio: 'Managing digital infrastructure and coding competitions.',
    linkedin: '#'
  }
];

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Gir Wins Saavan 2025',
    date: '2025-08-15',
    category: 'Culture',
    image: BRAND_ASSETS.hero_wins,
    description: 'The historic victory of Gir House in the Saavan cultural festival.',
    location: 'Main Auditorium',
    organizer: 'Council'
  },
  {
    id: '2',
    title: 'Gorakhpur Meetup',
    date: '2023-11-12',
    category: 'Culture',
    image: BRAND_ASSETS.meetup_1,
    description: 'Residents gathering for a fun evening of food and conversations.',
    location: 'City Cafe',
    organizer: 'Rohan Gupta'
  },
  {
    id: '3',
    title: 'Banaras Photowalk',
    date: '2023-11-20',
    category: 'Culture',
    image: BRAND_ASSETS.meetup_2,
    description: 'Exploring the ghats and capturing the essence of the holy city.',
    location: 'Varanasi',
    organizer: 'Art Society'
  },
  {
    id: '4',
    title: 'Bareilly Reunion',
    date: '2023-12-05',
    category: 'General',
    image: BRAND_ASSETS.meetup_3,
    description: 'A warm winter meetup for our residents in Bareilly.',
    location: 'Phoenix United',
    organizer: 'Alumni Cell'
  }
];

export const MOCK_COMMUNITIES: Community[] = [
  {
    id: '1',
    name: 'Gir Tech Club',
    description: 'For coding enthusiasts, hackers, and builders.',
    longDescription: 'The Gir Tech Club is the premier community for technology lovers in the house. We organize weekly coding sessions, hackathons, and workshops on everything from Web Dev to AI.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=600&h=400',
    memberCount: 120,
    schedule: ['Wednesdays 6 PM', 'Saturdays 10 AM'],
    leads: ['Ishita Singh', 'Rahul Verma']
  },
  {
    id: '2',
    name: 'The Art Society',
    description: 'Painting, sketching, and digital art community.',
    longDescription: 'Express yourself through colors and strokes. The Art Society decorates the house during festivals and holds regular exhibitions of resident artwork.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?fit=crop&w=600&h=400',
    memberCount: 85,
    schedule: ['Fridays 5 PM'],
    leads: ['Ananya Roy']
  },
  {
    id: '3',
    name: 'Music & Dramatics',
    description: 'Band practice, theater workshops, and jam sessions.',
    longDescription: 'Whether you sing, play an instrument, or love acting, Mad Club is your home. We perform at all major house events and campus cultural fests.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?fit=crop&w=600&h=400',
    memberCount: 95,
    schedule: ['Tuesdays 8 PM', 'Sundays 4 PM'],
    leads: ['Rohan Gupta']
  },
  {
    id: '4',
    name: 'Literary & Debating',
    description: 'For the wordsmiths and critical thinkers.',
    longDescription: 'Engage in fiery debates, poetry slams, and creative writing workshops. We publish the annual house magazine.',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?fit=crop&w=600&h=400',
    memberCount: 60,
    schedule: ['Thursdays 7 PM'],
    leads: ['Karthik N']
  }
];

export const MOCK_NOTICES: Notice[] = [
  {
    id: '1',
    title: 'Semester End Check-out Procedure',
    date: '2023-11-20',
    link: '#',
    type: 'PDF',
    category: 'Admin'
  },
  {
    id: '2',
    title: 'Mess Menu Survey - Dec',
    date: '2023-11-22',
    link: '#',
    type: 'Form',
    category: 'Admin'
  },
  {
    id: '3',
    title: 'Inter-IIT Contingent List',
    date: '2023-11-15',
    link: '#',
    type: 'PDF',
    category: 'Sports'
  },
  {
    id: '4',
    title: 'Hostel Night Ticket Sales',
    date: '2023-11-25',
    link: '#',
    type: 'Link',
    category: 'Events'
  },
  {
    id: '5',
    title: 'Library Renewal Notice',
    date: '2023-11-18',
    link: '#',
    type: 'PDF',
    category: 'Academic'
  }
];

export const MOCK_LEGACY: LegacyItem[] = [
  {
    id: '1',
    year: '2023',
    title: 'General Championship Winners',
    description: 'Gir House lifted the prestigious GC Trophy with record-breaking points in Sports and Tech.',
    image: BRAND_ASSETS.trophy_moment
  },
  {
    id: '2',
    year: '2020',
    title: 'Best Green House Award',
    description: 'Recognized for our sustainable practices and beautiful garden maintenance during the pandemic.',
  },
  {
    id: '3',
    year: '2015',
    title: 'Cultural Cup Victory',
    description: 'A historic win in the Dramatics and Dance categories that set a new benchmark for performance arts.',
  },
  {
    id: '4',
    year: '2008',
    title: 'Foundation',
    description: 'Gir House was established with the first cohort of 200 residents.',
  }
];

export const MOCK_GALLERY: GalleryItem[] = [
  { id: '1', src: BRAND_ASSETS.meetup_1, category: 'Events', caption: 'Gorakhpur Meetup #345' },
  { id: '2', src: BRAND_ASSETS.meetup_2, category: 'Campus', caption: 'Banaras Photowalk' },
  { id: '3', src: BRAND_ASSETS.meetup_3, category: 'Events', caption: 'Bareilly Meetup 2025' },
  { id: '4', src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?fit=crop&w=800&h=600', category: 'Events', caption: 'Tech Meetup' },
  { id: '5', src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?fit=crop&w=800&h=600', category: 'Events', caption: 'Cultural Practice' },
  { id: '6', src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?fit=crop&w=800&h=600', category: 'Campus', caption: 'Library Session' },
];

export const MOCK_ALUMNI: Alumni[] = [
  {
    id: '1',
    name: 'Vikram Seth',
    batch: '2012',
    role: 'Ex-General Secretary',
    company: 'Google',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=400&h=400',
    testimonial: 'My time at Gir House taught me more about leadership than my MBA. The bonds formed here last forever.'
  },
  {
    id: '2',
    name: 'Priya Desai',
    batch: '2015',
    role: 'Cultural Secretary',
    company: 'Spotify',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=400&h=400',
    testimonial: 'Organizing the annual fest gave me the confidence to pursue a career in creative arts management.'
  },
  {
    id: '3',
    name: 'Amit Kumar',
    batch: '2018',
    role: 'Tech Lead',
    company: 'YCombinator Founder',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=400&h=400',
    testimonial: 'The coding club in Gir House was where I wrote my first line of production code. Forever grateful.'
  },
  {
    id: '4',
    name: 'Sarah Khan',
    batch: '2010',
    role: 'Mess Secretary',
    company: 'IAS Officer',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?fit=crop&w=400&h=400',
    testimonial: 'Public service started for me in the mess hall of Gir House. Serving the community is a way of life here.'
  }
];
