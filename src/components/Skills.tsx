import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// List of skills
const skills = [
  'Python', 'JavaScript', 'HTML', 'CSS', 'C/C++', 'Java', 
  'ReactJS', 'Next.js', 'MongoDB', 'SQL', 'Firebase', 
  'Git/Github'
];

// AWS Certification details
const awsCertification = {
  name: 'AWS Cloud Practitioner',
  image: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png',
  link: 'https://www.credly.com/badges/172549f1-a2bf-4886-ae5b-550ffff862c1/linked_in_profile'
};

export const Skills = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="skills" className="py-20 bg-background-50 dark:bg-background-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.4 }}
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
                    transition: { delay: index * 0.05 }
                  }
                }}
                className="
                  px-6 py-3 
                  bg-primary-200 dark:bg-primary-800 
                  text-primary-800 dark:text-primary-100 
                  rounded-full text-lg font-medium 
                  transition-colors duration-300 
                  group hover:bg-gradient-to-r 
                  hover:from-primary-300 hover:to-primary-400 
                  dark:hover:from-primary-600 dark:hover:to-primary-700
                "
              >
                {skill}
              </motion.div>
            ))}
            <motion.a
              href={awsCertification.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0 }}
              whileHover={{ scale: 1.05 }}
              className="
                flex items-center px-6 py-3 
                bg-primary-200 dark:bg-primary-700 
                text-primary-800 dark:text-primary-200 
                rounded-full text-lg font-medium 
                transition-transform duration-300 
              "
            >
              <img src={awsCertification.image} alt={awsCertification.name} className="w-7 h-7 mr-2" />
              {awsCertification.name}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};