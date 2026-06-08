'use client';
import { codingStats } from '@/app/lib/data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FiGithub, FiLinkedin, FiTwitter, FiInstagram, 
  FiHeart, FiCode, FiMail, FiMapPin,
  FiArrowUp
} from 'react-icons/fi';
import { personalInfo } from '@/app/lib/data';

// Define proper types for footer links
interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
  download?: boolean;
}

interface FooterSection {
  [key: string]: FooterLink[];
}

const footerLinks: FooterSection = {
  'Quick Links': [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],
  'Resources': [
    { name: 'Resume', href: personalInfo.resumeUrl, download: true },
    { name: 'GitHub', href: personalInfo.github, external: true },
    { name: 'LinkedIn', href: personalInfo.linkedin, external: true },
    { name: 'LeetCode', href: 'https://leetcode.com/sagarpatel', external: true },
  ],
  'Tech Stack': [
    { name: 'React/Next.js', href: '#' },
    { name: 'Node.js/Express', href: '#' },
    { name: 'MongoDB/PostgreSQL', href: '#' },
    { name: 'TypeScript', href: '#' },
  ],
};

const socialLinks = [
  { icon: FiGithub, href: personalInfo.github, label: 'GitHub', color: 'hover:bg-gray-800' },
  { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:bg-blue-600' },
  { icon: FiInstagram, href: personalInfo.instagram, label: 'Instagram', color: 'hover:bg-pink-600' },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:bg-red-500' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const renderLink = (link: FooterLink) => {
    const isExternal = link.external === true;
    const isDownload = link.download === true;
    const isHashLink = link.href.startsWith('#');
    
    // Handle hash links (smooth scroll)
    if (isHashLink) {
      return (
        <button
          onClick={() => {
            const element = document.getElementById(link.href.substring(1));
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="text-gray-400 hover:text-blue-400 transition-colors text-sm cursor-pointer"
        >
          {link.name}
        </button>
      );
    }
    
    // Handle external links
    if (isExternal) {
      return (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-colors text-sm inline-block"
        >
          {link.name}
        </a>
      );
    }
    
    // Handle download links
    if (isDownload) {
      return (
        <a
          href={link.href}
          download
          className="text-gray-400 hover:text-blue-400 transition-colors text-sm inline-block"
        >
          {link.name}
        </a>
      );
    }
    
    // Handle internal Next.js links
    return (
      <Link
        href={link.href}
        className="text-gray-400 hover:text-blue-400 transition-colors text-sm inline-block"
      >
        {link.name}
      </Link>
    );
  };

  return (
    <footer className="relative bg-gray-900 dark:bg-black text-white">
      {/* Animated Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sagar<span className="text-white">.dev</span>
              </h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Full Stack Developer passionate about building scalable web applications 
                and solving complex problems with elegant solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FiMail className="text-blue-400" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FiMapPin className="text-blue-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -3 }}
                    className={`p-2 rounded-full bg-gray-800 text-gray-400 transition-all ${social.color} hover:text-white`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], colIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: colIndex * 0.1 }}
            >
              <h4 className="font-semibold mb-4 text-gray-300">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {renderLink(link)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="py-6 mb-6 border-y border-gray-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
                <div className="text-2xl font-bold text-blue-400">{codingStats.leetcodeProblems}+</div>
                <div className="text-xs text-gray-500">LeetCode Problems</div>
            </div>
            <div>
                <div className="text-2xl font-bold text-purple-400">{codingStats.skillrackProblems}+</div>
                <div className="text-xs text-gray-500">SkillRack Problems</div>
            </div>
            <div>
                <div className="text-2xl font-bold text-green-400">{codingStats.projectsCompleted}+</div>
                <div className="text-xs text-gray-500">Projects Completed</div>
            </div>
            <div>
                <div className="text-2xl font-bold text-yellow-400">{codingStats.hackathonWins}</div>
                <div className="text-xs text-gray-500">Hackathon Wins</div>
            </div>
            </div>
        </motion.div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            © {currentYear} Sagar Kumar Patel. 
            <span className="hidden md:inline">All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <FiHeart className="text-red-500 animate-pulse" size={14} />
            <span>using</span>
            <FiCode className="text-blue-400" size={14} />
            <span>Next.js & Tailwind CSS</span>
          </div>

          {/* Back to Top Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FiArrowUp size={16} />
            <span>Back to Top</span>
          </motion.button>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
}