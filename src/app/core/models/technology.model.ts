export interface Technology {
  name: TechnologyName;
  displayName: string;
  category: TechnologyCategory;
  logo?: string; // SVG string or URL
  color?: string; // Brand color
  url?: string; // Official website
}

export enum TechnologyName {
  // Frontend
  Angular = 'Angular',
  React = 'React',
  Vue = 'Vue.js',
  TypeScript = 'TypeScript',
  JavaScript = 'JavaScript',
  HTML = 'HTML',
  CSS = 'CSS',
  SCSS = 'SCSS',
  D3 = 'D3.js',
  ReactNative = 'React Native',

  // Backend
  NodeJS = 'Node.js',
  Express = 'Express',
  Python = 'Python',
  FastAPI = 'FastAPI',
  Go = 'Go',
  CSharp = 'C#',
  FSharp = 'F#',
  DotNet = '.NET',
  ASPNet = 'ASP.NET Core',
  Java = 'Java',

  // Databases
  Sqlite = 'SQLite',
  MSSQL = 'MSSQL',
  PostgreSQL = 'PostgreSQL',
  MongoDB = 'MongoDB',
  MySQL = 'MySQL',
  Redis = 'Redis',

  // Cloud & DevOps
  AWS = 'AWS',
  Azure = 'Azure',
  Docker = 'Docker',
  Kubernetes = 'Kubernetes',
  Terraform = 'Terraform',
  GitLabCI = 'GitLab CI',
  Jenkins = 'Jenkins',
  GitHub = 'GitHub',

  // AI/ML
  TensorFlow = 'TensorFlow',
  PyTorch = 'PyTorch',
  ScikitLearn = 'Scikit-learn',
  MLNet = 'ML.NET',

  // Other
  Git = 'Git',
  WebSockets = 'WebSockets',
  WebRTC = 'WebRTC',
  SocketIO = 'Socket.io',
  JWT = 'JWT',
  Stripe = 'Stripe',
  Prometheus = 'Prometheus',
  GraphQL = 'GraphQL',
  REST = 'REST API'
}

export enum TechnologyCategory {
  Frontend = 'Frontend',
  Backend = 'Backend',
  Database = 'Database',
  Cloud = 'Cloud & DevOps',
  AI_ML = 'AI/ML',
  Other = 'Other'
}

