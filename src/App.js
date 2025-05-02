import Certifications from './components/Certifications';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      
      {/* Sections with unique IDs for smooth scrolling */}
      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="certifications">
        <Certifications />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
