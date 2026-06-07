'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="text-center"
      >
        <div className="relative w-24 h-24 mx-auto mb-4">
          <motion.div
            animate={{
              rotate: 360,
              borderRadius: ['30%', '50%', '30%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              SP
            </span>
          </motion.div>
        </div>
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-600 dark:text-gray-400"
        >
          Loading portfolio...
        </motion.p>
      </motion.div>
    </div>
  );
}