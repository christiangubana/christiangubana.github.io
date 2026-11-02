export type SEODataType = {
  title: string;
  description: string;
  author: string;
  image: string;
  url: string;
  keywords: string[];
};

export type ProfileType = {
  name: string;
  role: string;
  location: string;
  email: string;
  avatar: string;
  resumeLink: string;
  availability: string;
};

export type SocialLinksType = {
  email: string;
  linkedin: string;
  github: string;
  twitter?: string;
};

export type WorkType = {
  name: string;
  summary: string;
  desc: string;
  role: string;
  period?: string;
  stack?: string[];
  highlights?: string[];
  link?: string;
  linkLabel?: string;
  featured?: boolean;
};

export type EarlierWorkType = {
  name: string;
  desc: string;
  link: string;
};

export type ServiceType = {
  title: string;
  forWho: string;
  desc: string;
  examples: string[];
};

export type ProcessStepType = {
  title: string;
  desc: string;
};

export type EngagementType = {
  title: string;
  desc: string;
};

export type ExperienceType = {
  role: string;
  company: string;
  date: string;
  desc: string;
};

export type FeedbackType = {
  name: string;
  role: string;
  feedback: string;
};

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingMinutes: number;
};

export type Post = PostMeta & { html: string };
