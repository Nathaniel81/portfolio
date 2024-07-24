import { motion } from 'framer-motion';
import FadeIn from '@/lib/variants';
import AnimatedCounter from '../lib/animatedCounter';

const Services = () => {
  return (
    <section id='services' className='z-30 -translate-y-1 bg-secondary'>
      <div className='container w-full py-[100px] lg:py-[200px]'>
        <div className='flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0'>
          <motion.div
            variants={FadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className='justify-between lg:mr-8 flex w-full flex-col lg:w-1/2'
          >
            <h1 className='pb-4 text-[40px] font-bold leading-[3rem]'>
              What I Offer
            </h1>
            <p>
              With a strong foundation in both front-end and back-end
              development, I provide comprehensive web development services.
              Whether you need a visually stunning front-end or a robust
              back-end, I've got you covered.
            </p>
            <div className='flex justify-between space-x-4 py-8'>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-lg font-semibold uppercase'>
                  {' '}
                  Projects
                </p>
                <p className='text-[36px] font-bold text-blue'>
                  + <AnimatedCounter from={0} to={45} />
                </p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-lg font-semibold uppercase'>
                  Technologies Mastered
                </p>
                <p className='text-[36px] font-bold text-blue'>
                  + <AnimatedCounter from={0} to={10} />
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={FadeIn('left', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className='flex h-full flex-col gap-8'
          >
            <div className='flex items-center space-x-6 bg-primary p-4'>
              <p className='text-6xl font-bold text-blue'>01</p>
              <div>
                <h2 className='mb-2 text-2xl font-bold'>Front-end Development</h2>
                <p>
                  Convert your Figma/XD designs into fully responsive web apps using
                  React paired with modern CSS frameworks like
                  Tailwind CSS.
                </p>
              </div>
            </div>
            <div className='flex items-center space-x-6 bg-primary p-4'>
              <p className='text-6xl font-bold text-blue'>02</p>
              <div>
                <h2 className='mb-2 text-2xl font-bold'>Back-end Development</h2>
                <p>
                  Build scalable and efficient backend systems with Django, Node.js,
                  or other cutting-edge technologies to power your web applications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
