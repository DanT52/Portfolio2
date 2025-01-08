
import { motion } from 'framer-motion';
import { Hero } from './Hero';
import { About } from './About';
import { Education } from './Education';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Blog } from './Blog';
import { Contact } from './Contact';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
};