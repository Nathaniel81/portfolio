import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { tech } from '@/lib/data';

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className='bg-secondary pb-20 pt-20' id='skills'>
      <h1 className='text-[40px] font-bold uppercase leading-[3rem] md:px-0 container pb-10'>
        <span className='under-line'>skills</span>
      </h1>
      <div className='center flex justify-center py-8 container'>
        <motion.div
          ref={ref}
          variants={containerVariant}
          initial='hidden'
          animate={controls}
          className='flex flex-wrap justify-between items-center md:gap-4 gap-8 w-full'
        >
          {tech.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              className='flex justify-center items-center'
            >
              <img
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.alt}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
