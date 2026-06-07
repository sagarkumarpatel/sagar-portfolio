'use client';

import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import Button from '@/app/components/ui/Button';
import { personalInfo } from '@/app/lib/data';
import ParticleBackground from '@/app/components/ui/ParticleBackground';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-500/20">
            ✨ Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Title */}
        <motion.h2 
          variants={itemVariants}
          className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-4"
        >
          {personalInfo.title}
        </motion.h2>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
        >
          {personalInfo.shortIntro}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button 
            href={personalInfo.resumeUrl}
            variant="primary"
            icon={<FiDownload />}
            download
          >
            Download Resume
          </Button>
          <Button 
            href={`mailto:${personalInfo.email}`}
            variant="outline"
            icon={<FiMail />}
          >
            Email Me
          </Button>
          <Button 
            href={personalInfo.linkedin}
            variant="outline"
            icon={<FiLinkedin />}
            external
          >
            LinkedIn
          </Button>
          <Button 
            href={personalInfo.github}
            variant="outline"
            icon={<FiGithub />}
            external
          >
            GitHub
          </Button>
        </motion.div>
      </motion.div>
      <ParticleBackground />
    </section>
  );
}