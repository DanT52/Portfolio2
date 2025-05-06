import { motion } from 'framer-motion';
import { GitHubIcon } from './icons/Icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    name: 'Big Rose City Roll',
    description: 'Web application for the Big Rose City Roll 2025 event.',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'FastAPI', 'PostgreSQL'],
    liveLink: 'https://bigrosecityroll.com/',
    githubLink: 'https://github.com/DanT52/roseCityRoll',
    image: 'https://private-user-images.githubusercontent.com/42653318/437649070-bdcfea02-bb0f-4aeb-a2ce-03bf71e9e52a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDY0OTU1OTgsIm5iZiI6MTc0NjQ5NTI5OCwicGF0aCI6Ii80MjY1MzMxOC80Mzc2NDkwNzAtYmRjZmVhMDItYmIwZi00YWViLWEyY2UtMDNiZjcxZTllNTJhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTA2VDAxMzQ1OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJkNjYyOTE0YzczZTliZjYwZjJiMzg3ZDMwZTIwODFiMGRlOGUxZGFhYWU3M2VhOWYxMDRiYmRhOTVlZTA4ZDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.qtM9KZme6V_r7pxdn7ECIcqtlhPSYoOg6kj0K9KdicA'
  },
  {
    name: 'Virtual Vortex',
    description: 'Online play-ground app with terminal emulator, login system, and snake game.',
    technologies: ['ReactJS', 'ChakraUI', 'Firebase'],
    liveLink: 'https://virtualvortex-eff1f.web.app/',
    githubLink: 'https://github.com/DanT52/VirtualVortex',
    image: 'https://camo.githubusercontent.com/eb2537f152061bb46960e8760d9a5dedc5aec759b1ef77c0ecccea523f01c2a6/68747470733a2f2f692e696d6775722e636f6d2f534a75707161782e706e67'
  },
  {
    name: 'CarPricePrediction',
    description: 'A project for predicting used car prices using Random Forest Regression.',
    technologies: ['Python', 'scikit-learn', 'Pandas', 'Matplotlib'],
    githubLink: 'https://github.com/DanT52/CarPricePrediction',
    image: 'https://camo.githubusercontent.com/b8022617265249b0056b28467d89307538489c1725696608217cd3da5cf14578/68747470733a2f2f692e696d6775722e636f6d2f6a7847796858692e706e67'
  },
  {
    name: 'GL City',
    description: 'A Scene created with WebGL, featuring lighting, a Scene Graph with animated objects and a Skybox.',
    technologies: ['WebGL', 'Javascript', 'Computer Graphics'],
    liveLink: 'https://dant52.github.io/gl-city/',
    githubLink: 'https://github.com/DanT52/gl-city',
    image: 'https://camo.githubusercontent.com/16617b7f2caf0bcd1dd9fbc298630dc4ba4876edfcf6ce6bfb50d7e04e40f650/68747470733a2f2f6d65646961322e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45784e57787a615755774f544a6a4e7a4533596a5a7464475134596d39734f544e69597a5133626d45334d584a6c646d3132616d39345a795a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f52656c636c684350646178766142387659772f67697068792e676966'
  },
  {
    name: 'QuoteZone',
    description: 'A full-stack web app for sharing, finding, and saving quotes.',
    technologies: ['ReactJS', 'NextJS', 'TailwindCSS', 'MongoDB', 'NextAuth'],
    liveLink: 'https://quote-zone.vercel.app/',
    githubLink: 'https://github.com/DanT52/QuoteZone',
    image: 'https://github.com/DanT52/QuoteZone/raw/main/homepage.png'
  },
  {
    name: 'Bitmap Visualization',
    description: 'Visualize Bitmap compression methods and B+trees.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'HTML Canvas'],
    liveLink: 'https://benmccamish.github.io/bitmapvisualization/',
    githubLink: 'https://github.com/DanT52/351visualization',
    image: 'https://benmccamish.github.io/bitmapvisualization/assets/animation.gif'
  }
];

export const Projects = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="projects" className="pt-20 pb-20 bg-background-100 dark:bg-background-900">
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
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-600 dark:text-accent-300 hover:text-accent-700 dark:hover:text-accent-200 transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
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