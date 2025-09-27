import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const JoinUs = () => {
  return (
    <div className="bg-secondary p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-accent mb-8">Join Us</h2>
      <form className="max-w-xl mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-text-primary mb-2">Name</label>
          <input type="text" id="name" className="w-full p-2 rounded bg-primary text-text-primary border border-text-secondary focus:outline-none focus:ring-2 focus:ring-accent" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-text-primary mb-2">Email</label>
          <input type="email" id="email" className="w-full p-2 rounded bg-primary text-text-primary border border-text-secondary focus:outline-none focus:ring-2 focus:ring-accent" />
        </div>
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-accent text-primary font-bold py-2 px-6 rounded hover:bg-opacity-80"
          >
            Become a Member
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default SectionWrapper(JoinUs, 'join');