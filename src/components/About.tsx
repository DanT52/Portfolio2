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
        src: 'https://i.imgur.com/A5gjuFa.jpeg',
        description: '',
    },
    {
      src: 'https://i.imgur.com/q15ImPd.jpeg',
      description: 'Ski!',
    },
    {
      src: 'https://i.imgur.com/WXwEGTW.jpeg',
      description: 'Flip!',
    },
    {
        src: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2x4bDl1aTFqY2pkc3AwYWFodnd2aHd5dGpkNTlicWhvZHp3a2gwbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rgP5fev9HtxezjPNMc/giphy.gif',
        description: 'On the rollerblades.',
    },
    {
        src: 'https://i.imgur.com/Ig6OFfm.jpeg',
        description: 'Beacon Rock!',
    },
    {
        src: 'https://i.imgur.com/3H0ODYE.jpeg',
        description: 'hike and think',
    },
    {
        src: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjY0b3d2Y2Zxc2xpY3JhZzNkcXpsaGJiejN4bDBnOGJiNjlzb2F5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/omSh7OpQ9bKB40Ypqu/giphy.gif',
        description: 'A little frontflip',
    },
    {
        src: 'https://i.imgur.com/P6thHdH.jpeg',
        description: 'From a road trip to Montana.',
    },
    {
        src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZ0dWh1bzgzdGFjdGsxZXR0OGhoODRpb241c3AxeWY2OXRocWd1cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Zc7AKroqjhQn5mDFgp/giphy.gif',
        description: 'Hawaii water jump.',
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
                👋 I'm Daniel, a computer science graduate with an interest in software engineering and fullstack
                development. I earned my Bachelor's degree from WSUv in 2025. I enjoy working with various technologies
                to create interactive applications.
                </p>
            </div>

            {/* Swiper Slideshow */}
            <div className="lg:w-1/2 w-full order-none lg:order-1">
  <Swiper
    modules={[Autoplay, Navigation]}
    autoplay={{ delay: 8000 }}
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
