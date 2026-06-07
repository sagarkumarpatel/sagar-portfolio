// src/components/sections/Achievements.tsx

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiCode, FiExternalLink, FiCalendar } from 'react-icons/fi';
import { achievements, codingStats } from '@/app/lib/data';  // Add codingStats import
import { FaTrophy } from 'react-icons/fa';
const typeIcons = {
  hackathon: FaTrophy,
  certification: FiAward,
  coding: FiCode,
  award: FaTrophy,
};

const typeColors = {
  hackathon: 'from-purple-500 to-pink-500',
  certification: 'from-blue-500 to-cyan-500',
  coding: 'from-green-500 to-emerald-500',
  award: 'from-yellow-500 to-orange-500',
};

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section ref={ref} id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Recognitions, hackathon wins, and certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = typeIcons[achievement.type];
            const colors = typeColors[achievement.type];

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredId(achievement.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${colors} mb-4`}>
                    <Icon className="text-white text-2xl" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {achievement.description}
                  </p>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                    <FiCalendar className="text-blue-500" />
                    <span>{achievement.date}</span>
                  </div>

                  {/* Link */}
                  {achievement.link && (
                    <motion.a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: hoveredId === achievement.id ? 1 : 0,
                        height: hoveredId === achievement.id ? 'auto' : 0,
                        marginTop: hoveredId === achievement.id ? 12 : 0
                      }}
                      className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600"
                    >
                      <FiExternalLink />
                      View Profile
                    </motion.a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Coding Stats Summary - Now using dynamic codingStats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">Coding Journey Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{codingStats.leetcodeRating}</div>
              <div className="text-sm opacity-90">LeetCode Rating</div>
              <div className="text-xs opacity-75">{codingStats.leetcodeRank} Globally</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{codingStats.leetcodeProblems}+</div>
              <div className="text-sm opacity-90">Problems Solved</div>
              <div className="text-xs opacity-75">Across LeetCode</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{codingStats.skillrackProblems}+</div>
              <div className="text-sm opacity-90">SkillRack Problems</div>
              <div className="text-xs opacity-75">Global Rank #{codingStats.skillrackRank}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}