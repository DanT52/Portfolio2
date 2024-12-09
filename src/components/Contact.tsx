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
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-600 to-accent-500 dark:from-primary-800 dark:to-accent-700 text-background-50">
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
          <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
          <div className="flex flex-col items-center space-y-6">
            <motion.button 
              onClick={handleEmailCopy}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-background-50 text-primary-600 dark:text-primary-700 px-6 py-3 rounded-full 
                       hover:bg-primary-100 transition-all duration-300 flex items-center"
            >
              <MailIcon className="mr-2" /> 
              {copiedEmail ? 'Copied!' : 'danbas.dev@gmail.com'}
            </motion.button>
            <div className="flex space-x-6">
              <motion.a 
                href="https://github.com/DanT52" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-background-50 hover:text-background-200 transition-colors"
              >
                <GitHubIcon className="w-8 h-8" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/daniel-basarab/" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-background-50 hover:text-background-200 transition-colors"
              >
                <LinkedInIcon className="w-8 h-8" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};