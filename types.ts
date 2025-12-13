export interface NavItem {
  label: string;
  href: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
}

export interface TravelItem {
  title: string;
  location: string;
  date: string;
  imageUrl: string;
}

export interface SectionProps {
  id: string;
  className?: string;
}