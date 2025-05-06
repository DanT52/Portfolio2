import { motion } from 'framer-motion';
import { CodeIcon, MailIcon, ChevronDownIcon } from './icons/Icons';

// Add smooth-scroll class to the html element
document.documentElement.classList.add('smooth-scroll');

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 to-accent-500/90 dark:from-primary-800/90 dark:to-accent-700/90" />
        <img
          src="herobg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white opacity-15 dark:bg-black" /> {/* This is the overlay */}
      </div>
      
      <div className="z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-background-950 dark:text-background-50 dark:drop-shadow-lg">Daniel Basarab</h1>
            <h2 className="text-3xl mb-8 text-background-950 dark:text-background-50 dark:drop-shadow-lg">Program Maker</h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex justify-center space-x-4">
              <motion.button
                onClick={() => scrollToSection('#projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-background-50 text-primary-600 dark:bg-primary-800 dark:text-text-50 px-6 py-3 rounded-full hover:bg-primary-100 transition-all duration-300 flex items-center font-semibold"
              >
                <CodeIcon className="mr-2" /> Projects
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-background-50 text-accent-600 dark:bg-primary-800 dark:text-text-50 px-6 py-3 rounded-full hover:bg-accent-100 transition-all duration-300 flex items-center font-semibold"
              >
                <MailIcon className="mr-2" /> Contact
              </motion.button>
            </div>
            <motion.button
              onClick={() => scrollToSection('#blog')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-background-50 text-secondary-600 dark:bg-primary-800 dark:text-text-50 px-6 py-3 rounded-full hover:bg-secondary-100 transition-all duration-300 flex items-center font-semibold"
            >
              Blog
            </motion.button>
          </div>
        </motion.div>
      </div>
      <ChevronDownIcon
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-10 animate-bounce text-background-50 w-10 h-10 cursor-pointer"
      />
    </header>
  );
};