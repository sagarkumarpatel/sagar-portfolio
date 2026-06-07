'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { personalInfo } from '@/app/lib/data';

export default function FloatingSocial() {
  const socials = [
    { icon: FiGithub, href: personalInfo.github, label: 'GitHub', color: 'hover:bg-gray-800' },
    { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:bg-red-500' },
    { icon: FiTwitter, href: 'https://twitter.com/sagarpatel', label: 'Twitter', color: 'hover:bg-blue-400' },
  ];

  return (
    <div className="fixed left-4 bottom-1/2 translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      {socials.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.1, x: 5 }}
          className={`p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg ${social.color} transition-all duration-300 hover:text-white`}
        >
          <social.icon className="text-xl" />
        </motion.a>
      ))}
    </div>
  );
}