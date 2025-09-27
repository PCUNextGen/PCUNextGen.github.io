import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const events = [
  { name: 'Intro to Machine Learning Workshop', date: 'Oct 15, 2025' },
  { name: 'HackAI 2025 Hackathon', date: 'Nov 5-7, 2025' },
  { name: 'Guest Lecture: AI in Healthcare', date: 'Dec 1, 2025' },
];

const itemVariant = {
  hidden: { x: -50, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { type: "spring" } }
};

const Events = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-accent mb-12">Upcoming Events</h2>
      <div className="max-w-2xl mx-auto">
        {events.map((event, index) => (
          <motion.div key={index} variants={itemVariant} className="bg-secondary p-4 rounded-lg mb-4 flex justify-between items-center shadow-md">
            <p className="text-text-primary font-semibold">{event.name}</p>
            <span className="text-accent text-sm font-mono">{event.date}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Events, 'events');