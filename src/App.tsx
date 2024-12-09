import { motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <div className="bg-background-50 dark:bg-background-900 text-text-900 dark:text-text-50 min-h-screen font-sans transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="bg-background-900 dark:bg-background-950 text-background-50 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Daniel Basarab. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;