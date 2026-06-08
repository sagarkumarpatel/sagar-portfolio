import { Project, Experience, Education, Achievement, Skill } from './types';

export const personalInfo = {
  name: 'Sagar Kumar Patel',
  title: 'Full Stack Developer & AI Enthusiast',
  shortIntro: 'Building scalable web applications with modern tech stack. Passionate about AI-driven solutions and microservices architecture.',
  email: 'sagarkumarpatel018@gmail.com',
  location: 'Coimbatore, India',
  resumeUrl: 'https://drive.google.com/file/d/17RAt1Bitqp7HCNLUcSwHMjfU2rs6yl1M/view?usp=drive_link',
  github: 'https://github.com/sagarkumarpatel',
  linkedin: 'https://www.linkedin.com/in/sagar-patel-8aa0b8324/',
  leetcode: 'https://leetcode.com/u/SagarPatel98212/',
};

// Add codingStats here
export const codingStats = {
  leetcodeRating: 1928,
  leetcodeRank: 'Top 11%',
  leetcodeProblems: 400,  // Updated from 350 to 400
  skillrackRank: 9909,
  skillrackProblems: 1430,
  hackathonWins: 3,
  projectsCompleted: 6,
};

export const skills: Skill[] = [
  // Programming Languages
  { name: 'C/C++', level: 85, category: 'languages' },
  { name: 'Java', level: 80, category: 'languages' },
  { name: 'JavaScript', level: 90, category: 'languages' },
  { name: 'Python', level: 85, category: 'languages' },
  { name: 'TypeScript', level: 85, category: 'languages' },
  
  // Frontend
  { name: 'React.js', level: 88, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Bootstrap', level: 85, category: 'frontend' },
  { name: 'EJS', level: 80, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 88, category: 'backend' },
  { name: 'Express.js', level: 90, category: 'backend' },
  { name: 'REST APIs', level: 92, category: 'backend' },
  { name: 'Socket.io', level: 85, category: 'backend' },
  { name: 'WebRTC', level: 80, category: 'backend' },
  
  // Databases
  { name: 'MongoDB', level: 88, category: 'databases' },
  { name: 'PostgreSQL', level: 80, category: 'databases' },
  { name: 'MySQL', level: 85, category: 'databases' },
  
  // Tools
  { name: 'Git/GitHub', level: 90, category: 'tools' },
  { name: 'Docker', level: 75, category: 'tools' },
  { name: 'GitHub Actions', level: 80, category: 'tools' },
  { name: 'AWS', level: 70, category: 'tools' },
  { name: 'Postman', level: 88, category: 'tools' },
  
  // Core CS
  { name: 'Data Structures', level: 90, category: 'core' },
  { name: 'Algorithms', level: 88, category: 'core' },
  { name: 'OOP', level: 92, category: 'core' },
  { name: 'DBMS', level: 85, category: 'core' },
  { name: 'Computer Networks', level: 80, category: 'core' },
  { name: 'OS', level: 78, category: 'core' },
];

export const projects: Project[] = [
  {
    id: 'tourism-platform',
    title: 'Tourism Recommendation Platform',
    description: 'AI-powered travel recommendation system using microservices architecture',
    longDescription: 'Built a comprehensive tourism platform that suggests destinations based on user preferences using machine learning. Implemented microservices for user auth, place management, and AI recommendations.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Python', 'REST APIs'],
    features: [
      'AI-based destination recommendations',
      'Microservices architecture with API gateway',
      'Secure JWT authentication',
      'User preference tracking',
      'Real-time place recommendations'
    ],
    challenges: [
      'Service-to-service communication optimization',
      'ML model integration with Node.js backend',
      'Scalable architecture design'
    ],
    githubUrl: 'https://github.com/sagarkumarpatel/Tourist_Ai',
    liveUrl: 'https://tourist-ai-4.onrender.com/',
    images: ['/projects/tourism-1.jpg', '/projects/tourism-2.jpg'],
    year: 2026,
    category: 'fullstack'
  },
  {
    id: 'video-conferencing',
    title: 'Real-Time Video Conferencing Platform',
    description: 'WebRTC-based video conferencing with real-time chat and room management',
    longDescription: 'Developed a full-stack video conferencing app with peer-to-peer video/audio, live chat, and secure room management.',
    techStack: ['ReactJS', 'Node.js', 'Socket.io', 'WebRTC', 'MongoDB'],
    features: [
      'Peer-to-peer video/audio streaming',
      'Real-time chat messaging',
      'Dynamic meeting rooms with unique codes',
      'User authentication with bcrypt',
      'Screen sharing support'
    ],
    challenges: [
      'WebRTC signaling implementation',
      'Real-time synchronization across peers',
      'Handling network disconnections'
    ],
    githubUrl: 'https://github.com/sagarkumarpatel/LTalk',
    liveUrl: 'https://ltalkfrontend.onrender.com/',
    images: ['/projects/video-1.jpg', '/projects/video-2.jpg'],
    year: 2026,
    category: 'fullstack'
  },
  {
    id: 'saree-store',
    title: 'Saree Store E-Commerce Platform',
    description: 'Full-featured e-commerce platform with admin dashboard and inventory management',
    longDescription: 'Built an online saree store with complete product catalog, shopping cart, checkout flow, and role-based admin panel.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Passport', 'Cloudinary'],
    features: [
      'Product catalog with image uploads',
      'Shopping cart and checkout',
      'Admin dashboard with role-based access',
      'Order management system',
      'Secure session-based authentication'
    ],
    challenges: [
      'Implementing role-based access control',
      'Optimizing image uploads with Cloudinary',
      'Building responsive admin interface'
    ],
    githubUrl: 'https://github.com/sagarkumarpatel/Saree-e-commerce',
    images: ['/projects/saree-1.jpg', '/projects/saree-2.jpg'],
    year: 2025,
    category: 'ecommerce'
  }
];

export const experiences: Experience[] = [
  {
    id: 'livora',
    title: 'Full Stack Developer Intern',
    company: 'Livora',
    location: 'Remote',
    startDate: '2025-06',
    endDate: '2025-12',
    current: false,
    description: [
      'Developed full-stack vacation rental marketplace with Node.js and MongoDB',
      'Implemented image uploads with Cloudinary and geocoding with OpenStreetMap',
      'Added user authentication and review system with star ratings',
      'Deployed application on Render with MongoDB Atlas'
    ],
    techStack: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Cloudinary', 'Leaflet']
  }
];

export const education: Education[] = [
  {
    id: 'college',
    degree: 'Bachelor of Engineering',
    institution: 'Sri Eshwar College of Engineering',
    location: 'Coimbatore, India',
    startDate: '2024',
    endDate: '2028',
    score: '8.32 CGPA (3rd Semester)',
    coursework: ['Data Structures', 'Algorithms', 'DBMS', 'Computer Networks', 'Operating Systems', 'Web Development']
  },
  {
    id: 'schooling-12',
    degree: 'Higher Secondary Education',
    institution: 'Alpine Secondary School',
    location: 'Nepal',
    startDate: '2021',
    endDate: '2023',
    score: '73%',
    coursework: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science']
  },
  {
    id: 'schooling-10',
    degree: 'Secondary Education',
    institution: 'Ideal Academy Pvt Ltd',
    location: 'Nepal',
    startDate: '2020',
    endDate: '2021',
    score: '87.50%',
    coursework: ['Science', 'Mathematics', 'English', 'Social Studies']
  }
];

export const achievements: Achievement[] = [
  {
    id: 'iit-hyderabad',
    title: 'Winner - Tech Expo 2026',
    description: 'Secured first place at IIT Hyderabad Tech Expo for innovative tech project',
    date: '2026',
    type: 'hackathon',
    image: '/achievements/iit-hyderabad.jpg',  // Add your photo/certificate image
    certificate: '/certificates/iit-hyderabad.pdf',  // Add PDF certificate if available
  },
  {
    id: 'aiml-hackathon',
    title: 'Winner - 5Hrs AIML Hackathon',
    description: 'First place at Sri Eshwar College of Engineering, Coimbatore',
    date: '2025',
    type: 'hackathon',
    image: '/achievements/aiml-hackathon.jpg',  // Add your photo/certificate image
    certificate: '/certificates/aiml-hackathon.pdf',  // Add PDF certificate if available
  },
  {
    id: 'leetcode',
    title: 'LeetCode Rating 1928',
    description: 'Top 11% globally | 400+ problems solved',
    date: '2026',
    type: 'coding',
    link: 'https://leetcode.com/u/SagarPatel98212/',
    image: '/achievements/Leetcode.png',  // Screenshot of your LeetCode profile/stats
  },
  {
    id: 'skillrack',
    title: 'SkillRack Rank #9909',
    description: '1430+ problems solved',
    date: '2026',
    type: 'coding',
    image: '/achievements/skillrack-stats.jpg',  // Screenshot of your SkillRack profile
  },
  {
    id: 'dsa-cert',
    title: 'DSA Using C/C++',
    description: 'Udemy Certification',
    date: '2025',
    type: 'certification',
    image: '/achievements/data_structure certipicate.jpg',  // Certificate image
    certificate: '/certificates/DATA_STRUCTURE CERTIPICATE',  // PDF certificate
  },
  {
    id: 'oracle-java',
    title: 'Java Oracle Badge',
    description: 'Oracle Certification',
    date: '2025',
    type: 'certification',
    image: '/achievements/Oracle.png',  // Badge screenshot
    certificate: '/certificates/oracle-java.pdf',  // PDF certificate
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=YOUR_BADGE_ID',  // Oracle badge link
  },
  {
    id: 'mysql-cert',
    title: 'MySQL (Easy/Intermediate)',
    description: 'HackerRank Certification',
    date: '2025',
    type: 'certification',
    image: '/achievements/mysql-cert.jpg',  // Certificate screenshot
    link: 'https://www.hackerrank.com/certificates/YOUR_CERTIFICATE_ID',  // HackerRank verification link
  },
];