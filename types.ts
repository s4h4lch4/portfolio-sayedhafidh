export interface MainData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface Project {
  title: string;
  industry: string;
  description: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location:string;
  description: string[];
  projects?: Project[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  details: string;
  period: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  period: string;
}

export interface LeadershipItem {
  organization: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface PortfolioData {
  main: MainData;
  about: string;
  experiences: ExperienceItem[];
  skills: SkillCategory[];
  education: EducationItem[];
  certifications: CertificationItem[];
  leadership: LeadershipItem[];
}
