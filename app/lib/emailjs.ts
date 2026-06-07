// src/app/lib/emailjs.ts

export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
};

// Optional: Add validation
if (typeof window !== 'undefined') {
  // Only log in development
  if (process.env.NODE_ENV === 'development') {
    if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
      console.warn('⚠️ EmailJS credentials are not configured. Please check your .env.local file.');
    }
  }
}