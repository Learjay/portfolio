export type ThemeMode = 'dark' | 'light';

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  summary: string;
  problem: string;
  role: string;
  features: string[];
  tech: string[];
};

export type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
