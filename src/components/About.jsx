import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const textVariant = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", duration: 1 } }
};

const About = () => {
  return (
    <div>
      <motion.h2 variants={textVariant} className="text-3xl font-bold text-center text-accent dark:text-accent mb-8">About Us</motion.h2>
      <motion.p variants={textVariant} className="text-lg text-text-primary text-center max-w-3xl mx-auto">
        Nextgen Innovation is a student-led club at the forefront of artificial intelligence and emerging technologies. Our mission is to foster a community of passionate innovators, providing them with the resources, mentorship, and opportunities to turn their ideas into reality. We believe in collaborative learning, hands-on projects, and pushing the boundaries of what's possible.
      </motion.p>
    </div>
  );
};

export default SectionWrapper(About, 'about');