'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaAws } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa6';
import { 
  SiCplusplus, SiJavascript, SiPython, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiNodedotjs,
  SiExpress, SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiDocker, SiPostman, SiGithubactions, SiSocketdotio, SiWebrtc
} from 'react-icons/si';
import { skills } from '@/app/lib/data';

const skillIcons: Record<string, any> = {
  // Programming Languages
  'C/C++': SiCplusplus,
  'Java': FaJava,
  'JavaScript': SiJavascript,
  'Python': SiPython,
  'TypeScript': SiTypescript,
  
  // Frontend
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'Bootstrap': SiBootstrap,
  'EJS': SiReact,
  
  // Backend
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'REST APIs': SiReact,
  'Socket.io': SiSocketdotio,
  'WebRTC': SiWebrtc,
  
  // Databases
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,
  
  // Tools
  'Git/GitHub': SiGit,
  'Docker': SiDocker,
  'GitHub Actions': SiGithubactions,
  'AWS': FaAws,
  'Postman': SiPostman,
};

// Helper function to get tailwind color class from gradient
const getColorFromGradient = (gradient: string) => {
  const colorMap: Record<string, string> = {
    'from-red-500': 'text-red-500',
    'from-blue-500': 'text-blue-500',
    'from-green-500': 'text-green-500',
    'from-purple-500': 'text-purple-500',
    'from-yellow-500': 'text-yellow-500',
    'from-indigo-500': 'text-indigo-500',
  };
  
  for (const [key, value] of Object.entries(colorMap)) {
    if (gradient.includes(key)) {
      return value;
    }
  }
  return 'text-blue-500';
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = {
    languages: { title: '💻 Programming Languages', color: 'from-red-500 to-orange-500' },
    frontend: { title: '🎨 Frontend', color: 'from-blue-500 to-cyan-500' },
    backend: { title: '⚙️ Backend', color: 'from-green-500 to-emerald-500' },
    databases: { title: '🗄️ Databases', color: 'from-purple-500 to-pink-500' },
    tools: { title: '🛠️ Tools', color: 'from-yellow-500 to-amber-500' },
    core: { title: '📚 Core CS', color: 'from-indigo-500 to-violet-500' },
  };

  // Calculate circle circumference
  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  return (
    <section ref={ref} id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Technologies I work with
          </p>
        </motion.div>

        {Object.entries(categories).map(([category, { title, color }], catIndex) => {
          const categorySkills = skills.filter(s => s.category === category);
          if (categorySkills.length === 0) return null;

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="mb-12"
            >
              <h3 className="text-xl font-semibold mb-6">{title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {categorySkills.map((skill, index) => {
                  const Icon = skillIcons[skill.name];
                  const progressColor = getColorFromGradient(color);
                  
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: catIndex * 0.1 + index * 0.02 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                        style={{ background: `linear-gradient(135deg, ${color.split(' ')[1]}, ${color.split(' ')[3]})` }}
                      />
                      <div className="relative bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                        {Icon && <Icon className="text-3xl mx-auto mb-2 text-gray-700 dark:text-gray-300" />}
                        <div className="font-medium text-sm">{skill.name}</div>
                        
                        {/* Circular Progress Ring */}
                        <div className="relative mt-3 flex justify-center">
                          <svg className="w-14 h-14 transform -rotate-90">
                            {/* Background circle */}
                            <circle
                              className="text-gray-200 dark:text-gray-700"
                              strokeWidth="3"
                              stroke="currentColor"
                              fill="transparent"
                              r={radius}
                              cx="28"
                              cy="28"
                            />
                            {/* Progress circle */}
                            <motion.circle
                              className={progressColor}
                              strokeWidth="3"
                              strokeDasharray={circumference}
                              initial={{ strokeDashoffset: circumference }}
                              animate={{ 
                                strokeDashoffset: isInView 
                                  ? circumference * (1 - skill.level / 100)
                                  : circumference
                              }}
                              transition={{ duration: 1, delay: catIndex * 0.1 + index * 0.02 }}
                              stroke="currentColor"
                              fill="transparent"
                              r={radius}
                              cx="28"
                              cy="28"
                            />
                          </svg>
                          {/* Percentage text inside circle */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-bold">{skill.level}%</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}