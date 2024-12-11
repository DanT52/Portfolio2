import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const educationData = [
  {
    institution: 'Washinton State University',
    date: 'Aug 2023 - May 2025',
    degree: 'Bachelor of Science in Computer Science',
    gpa: '3.9 GPA',
    animation: 'zoom-in-left'
  },
  {
    institution: 'Clark College',
    date: 'Sept 2020 - Jun 2023',
    degree: 'Associate of Science in Computer Science, Associate of Arts',
    gpa: '3.9 GPA',
    animation: 'zoom-in-right'
  }
];

export const Education = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="education" className="pt-20 pb-20 bg-background-100 dark:bg-background-900">
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
          <h2 className="text-4xl font-bold mb-12 text-text-900 dark:text-text-50 text-center" data-aos="zoom-in">Education</h2>
          <div className="flex flex-col items-center">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.institution}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.2 }
                  }
                }}
                className="education-block mb-6 w-full max-w-2xl text-left"
                data-aos={edu.animation}
              >
                <h3 className="text-2xl font-bold mb-2 text-text-900 dark:text-text-50">{edu.institution}</h3>
                <span className="education-date text-text-700 dark:text-text-200">{edu.date}</span>
                <h4 className="text-xl text-text-700 dark:text-text-200">{edu.degree}</h4>
                <div className="bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-100 rounded-full px-3 py-1 inline-block mt-2">
                  {edu.gpa}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
