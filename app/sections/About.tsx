'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiTarget, FiAward } from 'react-icons/fi';
import { personalInfo, education, codingStats } from '@/app/lib/data';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
  { label: 'LeetCode Rating', value: codingStats.leetcodeRating, icon: FiAward, color: 'from-yellow-500 to-orange-500' },
  { label: 'Problems Solved', value: `${codingStats.leetcodeProblems}+`, icon: FiTarget, color: 'from-green-500 to-emerald-500' },
  { label: 'Projects Completed', value: `${codingStats.projectsCompleted}+`, icon: FiBriefcase, color: 'from-blue-500 to-cyan-500' },
];

  return (
    <section id="about" ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Who Am I?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I'm a passionate Full Stack Developer and AI enthusiast currently pursuing my 
              Bachelor's in Engineering at Sri Eshwar College of Engineering, Coimbatore. 
              With a strong foundation in computer science and a knack for building scalable 
              web applications, I strive to create impactful solutions that solve real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              My journey in tech started with competitive programming, where I achieved a 
              LeetCode rating of 1928 (Top 11% globally). This problem-solving mindset has 
              been instrumental in my development work, helping me build efficient and 
              optimized applications.
            </p>
            
            {/* Career Objective */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 shadow-md">
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <FiTarget className="text-blue-500" />
                Career Objective
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                To leverage my full-stack development skills and problem-solving expertise 
                in a challenging software engineering role at a product-based company, 
                where I can contribute to building innovative solutions and grow as a 
                technologist.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md"
                >
                  <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${stat.color} mb-2`}>
                    <stat.icon className="text-white text-xl" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Personal Info & Education Highlight */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Personal Info</h3>
            <div className="space-y-4 mb-8">
              <div className="flex flex-wrap gap-4">
                <div className="flex-1">
                  <label className="text-sm text-gray-500 dark:text-gray-400">Full Name</label>
                  <p className="font-medium">{personalInfo.name}</p>
                </div>
                <div className="flex-1">
                  <label className="text-sm text-gray-500 dark:text-gray-400">Location</label>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1">
                  <label className="text-sm text-gray-500 dark:text-gray-400">Email</label>
                  <p className="font-medium">{personalInfo.email}</p>
                </div>
                <div className="flex-1">
                  <label className="text-sm text-gray-500 dark:text-gray-400">Current CGPA</label>
                  <p className="font-medium">{education[0].score}</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">What Drives Me?</h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-500">🎯</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Problem Solving</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    I love tackling complex challenges and optimizing solutions for better performance.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-500">🚀</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Continuous Learning</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Technology evolves rapidly, and I'm committed to staying at the cutting edge.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-500">💡</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Building Impactful Products</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    I aim to create solutions that make a difference in people's lives.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}