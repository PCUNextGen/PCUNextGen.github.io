import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') !== 'light');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navLinks = [
    { id: 'about', title: 'About' },
    { id: 'projects', title: 'Projects' },
    { id: 'events', title: 'Events' },
    { id: 'team', title: 'Team' },
    { id: 'gallery', title: 'Gallery' },
    { id: 'join', title: 'Join Us' },
  ];

  return (
    <nav className="bg-light-primary/80 dark:bg-black/80 backdrop-blur-sm sticky top-0 z-50 w-full shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-accent font-bold text-2xl">Nextgen Innovation</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="nav-link-hover text-text-light-primary dark:text-text-dark-primary text-sm font-medium"
                >
                  {/* This span ensures the text is always on top */}
                  <span className="relative z-10 block px-3 py-2">
                    {link.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button onClick={toggleTheme} className="p-2 rounded-full text-text-light-primary dark:text-text-dark-primary focus:outline-none">
              {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <div className="md:hidden ml-2">
              <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-text-light-primary dark:text-text-dark-primary focus:outline-none">
                {isOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md-hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={() => setIsOpen(false)} className="text-text-light-primary dark:text-text-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary block px-3 py-2 rounded-md text-base font-medium">
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;