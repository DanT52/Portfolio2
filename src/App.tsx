import { motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ThemeToggle } from './components/ThemeToggle';
import { Education } from './components/Education';
import { Blog } from './components/Blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogPost } from './components/BlogPost';
import { HomePage } from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="bg-background-50 dark:bg-background-900 text-text-900 dark:text-text-50 min-h-screen font-sans transition-colors duration-300">
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:postName" element={<BlogPost />} />
        </Routes>
        <footer className="bg-background-300 text-background-950 dark:bg-background-950 dark:text-background-50 py-6">
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} Daniel Basarab. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;