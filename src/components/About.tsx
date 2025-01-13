import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export const About = () => {
  const [ref, controls] = useScrollAnimation();

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1735306005581-e09d7dda15b1?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Enjoying a beautiful sunset hike.',
    },
    {
      src: 'https://images.unsplash.com/photo-1735263759278-ed793ef6f1e7?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: '',
    },
    {
      src: 'https://i.pinimg.com/originals/9a/3c/3f/9a3c3fb5f73822af8514df07f6676392.gif',
      description: '',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background-50 dark:bg-background-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: .6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
            {/* About Me Text */}
            <div className="lg:w-1/2 w-full order-1 lg:order-none">
              <h2 className="text-4xl font-bold mb-8 text-text-900 dark:text-text-50 text-center lg:text-left">
                About Me
              </h2>
              <p className="text-lg text-text-900 dark:text-text-200 leading-relaxed">
                👋 I'm Daniel, a computer science student with an interest in software engineering and fullstack
                development. I am Currently pursuing my Bachelor's degree at WSUv, I'm set to graduate in 2025. I enjoy
                working with various technologies to create interactive applications.
              </p>
            </div>

            {/* Swiper Slideshow */}
            <div className="lg:w-1/2 w-full order-none lg:order-1">
  <Swiper
    modules={[Autoplay, Navigation]}
    autoplay={{ delay: 3000 }}
    navigation
    loop
    className="rounded-lg max-w-[500px] mx-auto" // Added max-width and center
    style={{
      '--swiper-navigation-color': 'var(--background-600)',
      '--swiper-navigation-size': '30px',
    }}
  >
    {images.map(({ src, description }, index) => (
      <SwiperSlide key={index}>
        <div className="relative flex justify-center items-center">
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="rounded-lg object-cover max-h-[400px] w-auto" // Added max-height and auto width
          />
          {description && (
            <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/20 text-white text-sm px-2 py-1 rounded">
              {description}
            </p>
          )}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
