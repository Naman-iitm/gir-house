export interface CouncilMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  email?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  category: 'Tech' | 'Culture' | 'Sports' | 'General';
  image: string;
  description: string;
  location: string;
  organizer?: string;
}

export interface Community {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  memberCount: number;
  schedule?: string[];
  leads?: string[];
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  link: string;
  type: 'PDF' | 'Link' | 'Form';
  category: 'Academic' | 'Admin' | 'Events' | 'Sports';
}

export interface LegacyItem {
  id: string;
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  category: 'Events' | 'Campus' | 'Students' | 'Sports';
  caption: string;
}

export interface Alumni {
  id: string;
  name: string;
  batch: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
  linkedin?: string;
}