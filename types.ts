export type Card = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  technologies?: string[];
  githubUrl?: string;
  websiteUrl?: string;
  date?: string;
  url: string;
  color?: string;
  backgroundImage?: string;
};

export type Size = { width: number; height: number };


