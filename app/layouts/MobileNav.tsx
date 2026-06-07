'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  FiHome, FiUser, FiCode, FiBriefcase, FiBook, 
  FiAward, FiMail, FiGithub, FiLinkedin, FiDownload,
  FiExternalLink
} from 'react-icons/fi';
import { personalInfo } from '@/app/lib/data';

const navItems = [
  { name: 'Home', href: '/', icon: FiHome },
  { name: 'About', href: '#about', icon: FiUser },
  { name: 'Skills', href: '#skills', icon: FiCode },
  { name: 'Projects', href: '#projects', icon: FiBriefcase },
  { name: 'Experience', href: '#experience', icon: FiBriefcase },
  { name: 'Education', href: '#education', icon: FiBook },
  { name: 'Achievements', href: '#achievements', icon: FiAward },
  { name: 'Contact', href: '#contact', icon: FiMail },
];

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    } else {
      onClose();
    }
  };

  // Fixed variants with proper typing
  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const menuVariants: Variants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0,
      transition: { 
        type: 'spring', 
        damping: 20 
      }
    },
    exit: { 
      x: '100%',
      transition: { type: 'spring', damping: 20 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', damping: 12 }
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
          />
          
          {/* Menu Panel */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white dark:bg-gray-900 shadow-2xl z-50 md:hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Menu
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Navigate through my portfolio
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  ✕
                </button>
              </div>
              
              {/* Profile Quick View */}
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SP</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{personalInfo.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Full Stack Developer</p>
                </div>
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  <FiDownload size={18} />
                </a>
              </div>
            </div>

            {/* Navigation Items */}
            <motion.nav 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex-1 overflow-y-auto py-6"
            >
              <div className="space-y-1 px-4">
                {navItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                    >
                      <item.icon className="text-xl text-gray-500 group-hover:text-blue-500 transition" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />

              {/* Quick Links */}
              <div className="px-4">
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-4">
                  Quick Links
                </h4>
                <motion.div variants={containerVariants} className="space-y-2">
                  <motion.a
                    variants={itemVariants}
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    <div className="flex items-center gap-3">
                      <FiGithub className="text-xl" />
                      <span>GitHub Profile</span>
                    </div>
                    <FiExternalLink size={16} className="text-gray-400" />
                  </motion.a>
                  <motion.a
                    variants={itemVariants}
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    <div className="flex items-center gap-3">
                      <FiLinkedin className="text-xl" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <FiExternalLink size={16} className="text-gray-400" />
                  </motion.a>
                  <motion.a
                    variants={itemVariants}
                    href="https://leetcode.com/sagarpatel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    <div className="flex items-center gap-3">
                      <FiCode className="text-xl" />
                      <span>LeetCode Profile</span>
                    </div>
                    <FiExternalLink size={16} className="text-gray-400" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.nav>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-800">
              <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Sagar Kumar Patel<br />
                Building the future, one line at a time
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}