import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Social from './Social';

const Hero = () => {
  return (
    <section className='w-full py-40' id='hero'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col items-center justify-between gap-10 xl:flex-row xl:pt-8'>
          {/* text */}
          <div className='text-center xl:text-left'>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello I&apos;m
            </motion.span>
            <motion.h1
              className='text-[40px] font-bold capitalize leading-[3rem]'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Nathaniel <br />
              <motion.span
                className='under-line'
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Demissie
              </motion.span>
            </motion.h1>
            <motion.div
              className='py-8'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
            <p className='xl:max-w-[80%]'>
              As a dedicated web developer, I create dynamic and user-friendly applications using a modern stack including React, Tailwind CSS, Django, and PostgreSQL. My expertise in TypeScript ensures robust and scalable solutions. Let's bring your vision to life with exceptional web experiences.
            </p>
            </motion.div>
            <a
              href='https://res.cloudinary.com/dqm9mc5da/image/upload/fl_attachment/v1721564414/kwit7sofqelaeuyzslfu.pdf'
              download
              rel="noopener noreferrer"
              className='mt-4 flex flex-col items-center justify-center xl:flex-row xl:justify-start xl:space-x-8'>
              <motion.div
                className='flex gap-x-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.div
                  className='flex items-center space-x-2 rounded-full border-2 border-blue px-6 py-3 font-medium uppercase text-blue transition-all hover:bg-blue/80 hover:text-lighted cursor-pointer'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className='text-sm'>Resume</span>
                  <Download className='size-5' />
                </motion.div>
              </motion.div>
              <motion.div
                className='flex py-4 xl:py-0'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Social />
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
