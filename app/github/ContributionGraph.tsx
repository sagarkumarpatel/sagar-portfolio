'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export default function ContributionGraph() {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch GitHub contributions
    fetch('https://github-contributions-api.jogruber.de/v4/sagarpatel')
      .then(res => res.json())
      .then(data => {
        // Transform data
        setContributions([]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const getColor = (level: number) => {
    const colors = [
      'bg-gray-200 dark:bg-gray-700',
      'bg-green-200 dark:bg-green-900',
      'bg-green-400 dark:bg-green-700',
      'bg-green-600 dark:bg-green-500',
      'bg-green-800 dark:bg-green-300'
    ];
    return colors[level];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl"
    >
      <h3 className="text-xl font-bold mb-4">GitHub Activity</h3>
      {loading ? (
        <div className="h-32 flex items-center justify-center">
          <div className="animate-pulse text-gray-500">Loading contributions...</div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Contribution grid placeholder - you can implement actual grid here */}
            <div className="text-center text-gray-500 py-8">
              <p>GitHub contributions graph will appear here</p>
              <p className="text-sm mt-2">350+ problems solved on LeetCode | 1430+ on SkillRack</p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}