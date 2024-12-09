import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const About = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-background-50 dark:bg-background-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-text-900 dark:text-text-50 text-center">About Me</h2>
          <p className="text-lg text-text-700 dark:text-text-200 leading-relaxed">
            👋 I'm Daniel, a computer science student with an interest in software engineering and web development. 
            Currently pursuing my Bachelor's degree at WSUv, I'm set to graduate in 2025.
            I enjoy working with various technologies, creating interactive applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};