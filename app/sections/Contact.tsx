'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { 
  FiMail, 
  FiGithub, 
  FiLinkedin, 
  FiMapPin, 
  FiSend, 
  FiCheckCircle,
  FiAlertCircle,
  FiTwitter,
  FiInstagram,
  FiUser,
  FiMessageSquare
} from 'react-icons/fi';
import { personalInfo } from '@/app/lib/data';
import { EMAILJS_CONFIG } from '@/app/lib/emailjs';  // Import from your emailjs config

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setErrorMessage('');

    // Validate form
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setFormStatus('error');
      setErrorMessage('Please fill in all required fields');
      setTimeout(() => setFormStatus('idle'), 3000);
      return;
    }

    // Check if EmailJS is configured
    if (!EMAILJS_CONFIG.SERVICE_ID || EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID') {
      setFormStatus('error');
      setErrorMessage('Email service not configured. Please email me directly at ' + personalInfo.email);
      setTimeout(() => setFormStatus('idle'), 3000);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current!,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setFormStatus('success');
        setFormData({
          user_name: '',
          user_email: '',
          subject: '',
          message: '',
        });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setFormStatus('error');
      setErrorMessage('Failed to send message. Please email me directly at ' + personalInfo.email);
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const contactMethods = [
    { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'bg-red-500' },
    { icon: FiGithub, label: 'GitHub', value: 'github.com/sagarkumarpatel', href: personalInfo.github, color: 'bg-gray-700' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/sagar-patel', href: personalInfo.linkedin, color: 'bg-blue-600' },
  ];

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com/sagarpatel', label: 'Twitter' },
    { icon: FiInstagram, href: 'https://instagram.com/sagarpatel', label: 'Instagram' },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Have a project in mind? Let's collaborate!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Let's Talk</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I'm currently available for internships and full-time opportunities. 
              Feel free to reach out if you'd like to discuss a project or just want to say hi!
            </p>

            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className={`p-3 rounded-lg ${method.color}`}>
                    <method.icon className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{method.label}</div>
                    <div className="font-medium text-gray-800 dark:text-gray-200">{method.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md">
              <div className="p-3 rounded-lg bg-green-500">
                <FiMapPin className="text-white text-xl" />
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                <div className="font-medium text-gray-800 dark:text-gray-200">{personalInfo.location}</div>
              </div>
            </div>

            {/* Response Time Note */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <p className="text-sm text-blue-600 dark:text-blue-400 text-center">
                ⚡ I typically respond within 24-48 hours
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-3 text-gray-600 dark:text-gray-400">Connect on Social Media</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="p-3 bg-white dark:bg-gray-900 rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    <social.icon className="text-gray-700 dark:text-gray-300 text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form ref={formRef} onSubmit={sendEmail} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Name *
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Email Address *
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Project Inquiry / Job Opportunity"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Message *
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className={`w-full py-3 rounded-lg font-medium text-white transition-all flex items-center justify-center gap-2 ${
                    formStatus === 'loading'
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transform hover:scale-[1.02]'
                  }`}
                >
                  {formStatus === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <FiCheckCircle />
                      Message Sent!
                    </>
                  ) : formStatus === 'error' ? (
                    <>
                      <FiAlertCircle />
                      Failed to Send
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </button>

                {formStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 dark:text-green-400 text-sm text-center mt-3"
                  >
                    ✓ Thanks for reaching out! I'll get back to you soon.
                  </motion.p>
                )}

                {formStatus === 'error' && errorMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 dark:text-red-400 text-sm text-center mt-3"
                  >
                    ⚠ {errorMessage}
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}