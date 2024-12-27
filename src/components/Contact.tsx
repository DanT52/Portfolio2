import { useState } from 'react';
import { motion } from 'framer-motion';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons/Icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [ref, controls] = useScrollAnimation();

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('danbas.dev@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-accent-300 to-primary-400 dark:from-primary-900 dark:to-accent-800 text-background-50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-16">Get in Touch</h2>
          <div className="flex flex-col items-center space-y-8">
            <motion.button 
              onClick={handleEmailCopy}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-background-50 text-primary-800 dark:bg-primary-800 dark:text-text-50 px-8 py-4 rounded-full 
                       hover:bg-primary-100 transition-all duration-300 flex items-center"
            >
              <MailIcon className="mr-2" /> 
              {copiedEmail ? 'Copied!' : 'danbas.dev@gmail.com'}
            </motion.button>
            <div className="flex space-x-8">
              <motion.a 
                href="https://github.com/DanT52" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-background-50 hover:text-background-200 transition-colors"
              >
                <GitHubIcon className="w-10 h-10" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/daniel-basarab/" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-background-50 hover:text-background-200 transition-colors"
              >
                <LinkedInIcon className="w-10 h-10" />
              </motion.a>
            </div>
            <motion.a 
              href="daniel_basarab_resume.pdf" 
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-background-50 text-primary-800 dark:bg-primary-800 dark:text-text-50 px-8 py-4 rounded-full 
                       hover:bg-primary-100 transition-all duration-300 flex items-center"
            >
              View Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};