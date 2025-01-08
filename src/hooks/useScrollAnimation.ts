import { useInView } from 'react-intersection-observer';
import { useAnimation, AnimationControls } from 'framer-motion';
import { useEffect } from 'react';

export const useScrollAnimation = (): [string, AnimationControls] => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return [ref, controls];
};