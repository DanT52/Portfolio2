import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skills = [
  'JavaScript', 'Python', 'Node.js', 'React', 'Java', 'C', 
  'Next', 'MongoDB', 'Bash', 'Git', 'Firebase', 
  'TailwindCSS', 'HTML', 'CSS'
];

export const Skills = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="skills" className="py-20 bg-background-50 dark:bg-background-900">
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
        >
          <h2 className="text-4xl font-bold mb-12 text-text-900 dark:text-text-50 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { delay: index * 0.1 }
                  }
                }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-100 
                         rounded-full text-lg font-medium"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};