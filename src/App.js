// src/App.js
import Certifications from './components/Certifications';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';




function App() {
  return (
    <div>
      <Navbar />
      <Home />
     
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
     
    </div>
  );
}

export default App;
