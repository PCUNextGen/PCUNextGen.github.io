import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const teamMembers = [
  { name: 'Affan Pathan', role: 'President' },
  { name: 'Pradnya Jadhav', role: 'Vice President' },
  { name: 'Ashraf Pathan', role: 'Technical Head' },
  { name: 'Ms. Manisha Khadse', role: 'Faculty Mentor' },
];

const cardVariant = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", duration: 0.8 } }
};

const Team = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-accent mb-12">Our Team</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {teamMembers.map((member, index) => (
          <motion.div key={index} variants={cardVariant}>
            <div className="w-24 h-24 md:w-32 md:h-32 bg-secondary rounded-full mx-auto mb-4 border-2 border-accent">
              {/* Placeholder for image */}
            </div>
            <h3 className="text-lg font-bold text-text-primary">{member.name}</h3>
            <p className="text-text-secondary">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Team, 'team');