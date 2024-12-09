import { motion } from 'framer-motion';
import { GitHubIcon } from './icons/Icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    name: 'QuoteZone',
    description: 'A full-stack web app for sharing, finding, and saving quotes.',
    technologies: ['React', 'Next', 'TailwindCSS', 'MongoDB', 'NextAuth'],
    liveLink: 'https://quote-zone.vercel.app/',
    githubLink: 'https://github.com/DanT52/QuoteZone',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop'
  },
  {
    name: 'Virtual Vortex',
    description: 'Online play-ground app with terminal emulator, login system, and snake game.',
    technologies: ['React', 'ChakraUI', 'Firebase'],
    liveLink: 'https://virtualvortex.net/',
    githubLink: 'https://github.com/DanT52/VirtualVortex',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&auto=format&fit=crop'
  },
  {
    name: 'NetDots Game',
    description: 'Networked Dots and Boxes game with local and network play modes.',
    technologies: ['Java', 'Swing', 'Networking'],
    liveLink: 'https://replit.com/@DanT52/DotsandBoxes',
    githubLink: 'https://github.com/DanT52/DotsGame/tree/main/NetDots',
    image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?w=800&auto=format&fit=crop'
  }
];

export const Projects = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="projects" className="py-20 bg-background-100 dark:bg-background-900">
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
          <h2 className="text-4xl font-bold mb-12 text-text-900 dark:text-text-50 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.2 }
                  }
                }}
                className="bg-background-50 dark:bg-background-700 rounded-lg shadow-lg overflow-hidden"
              >
                <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-text-900 dark:text-text-50">{project.name}</h3>
                  <p className="text-text-700 dark:text-text-200 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-100 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-600 dark:text-accent-300 hover:text-accent-700 dark:hover:text-accent-200 transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-text-600 dark:text-text-200 hover:text-text-700 dark:hover:text-text-100 transition-colors"
                    >
                      <GitHubIcon className="w-4 h-4 mr-1" /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};