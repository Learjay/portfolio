import type { Project, SkillGroup } from '../../types/portfolio';

export const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

export const skillGroups: SkillGroup[] = [
  { title: 'Programming Languages', items: ['Java', 'Python', 'PHP', 'JavaScript', 'C#', 'TypeScript'] },
  { title: 'Frontend Development', items: ['React', 'React Native', 'HTML', 'CSS', 'Responsive Web Design'] },
  { title: 'Backend Development', items: ['ASP.NET Core / .NET', 'REST APIs', 'PHP'] },
  { title: 'Database Management', items: ['MySQL', 'PostgreSQL', 'Firebase', 'Supabase'] },
  { title: 'Developer Tools', items: ['Git and GitHub', 'Visual Studio', 'VS Code', 'SourceTree', 'Figma', 'Canva'] },
  { title: 'Software Engineering Practices', items: ['Clean Architecture', 'SOLID', 'DRY', 'Debugging', 'Testing', 'API Integration'] },
];

export const projects: Project[] = [
  {
    title: 'AgriAssist',
    summary:
      'A web-based agricultural management platform concept built to support cooperative operations, crop planning, and farm productivity tracking.',
    problem:
      'Agricultural organizations need a more structured way to monitor activities, coordinate with farmers, and turn field data into insights that can inform decisions.',
    role: 'Developer',
    features: [
      'Farmer and crop management',
      'Harvest and activity monitoring',
      'Market price tracking and forecasting',
      'Marketplace functionality',
      'Data visualization and reporting',
      'AI-assisted agricultural features',
    ],
    tech: ['React', 'TypeScript', 'REST APIs', 'MySQL', 'Supabase'],
  },
];

export const services = [
  'Web Application Development',
  'Frontend Development',
  'Backend Development',
  'REST API Integration',
  'Database Management',
  'System Development and Maintenance',
];
