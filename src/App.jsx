import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Events from './components/Events';
import Team from './components/Team';
import Gallery from './components/Gallery';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';


function App() {
  return (
    <div className="bg-light-primary text-text-light-primary dark:bg-black dark:text-text-dark-primary min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Events />
        <Team />
        <Gallery />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;