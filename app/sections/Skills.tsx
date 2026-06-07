'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/app/lib/data';
import { SkillCategory } from '@/app/lib/types';

const categoryNames = {
  languages: '💻 Programming Languages',
  frontend: '🎨 Frontend Technologies',
  backend: '⚙️ Backend Technologies',
  databases: '🗄️ Databases',
  tools: '🛠️ Tools & Platforms',
  core: '📚 Core Computer Science'
};

const categoryColors = {
  languages: 'from-red-500 to-orange-500',
  frontend: 'from-blue-500 to-cyan-500',
  backend: 'from-green-500 to-emerald-500',
  databases: 'from-purple-500 to-pink-500',
  tools: 'from-yellow-500 to-amber-500',
  core: 'from-indigo-500 to-violet-500'
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categories = Object.keys(categoryNames) as SkillCategory[];

  return (
    <section id="skills" ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400">Technologies I work with</p>
        </motion.div>

        {categories.map((category, catIndex) => {
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
              <h3 className="text-xl font-semibold mb-6">{categoryNames[category]}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: catIndex * 0.1 + index * 0.05 }}
                        className={`h-full bg-gradient-to-r ${categoryColors[category]} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}