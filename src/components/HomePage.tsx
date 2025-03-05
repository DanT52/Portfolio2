// HomePage.js
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from './Hero';
import { About } from './About';
import { Education } from './Education';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Blog } from './Blog';
import { Contact } from './Contact';

export const HomePage = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.state?.scrollToBlog) {
      const blogSection = document.getElementById('blog');
      if (blogSection) {
        // Jump immediately (no smooth scroll)
        window.scrollTo(0, blogSection.offsetTop);
      }
    }
  }, [location]);

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
