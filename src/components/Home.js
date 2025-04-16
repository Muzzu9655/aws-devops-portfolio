// src/components/Home.js
import React from 'react';

function Home() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-blue-800 text-white">
      <img
        src="/profile.jpg"
        alt="Muzamil Khazi"
        className="w-32 h-32 rounded-full object-cover border-4 border-white mb-6 shadow-md"
      />
      <h2 className="text-4xl font-bold mb-4">AWS & DevOps Engineer</h2>
      <p className="text-lg mb-8">Cloud Enthusiast | Automation Advocate | Continuous Learning</p>
      <a href="#projects" className="bg-yellow-400 text-black py-2 px-6 rounded-full hover:bg-yellow-500 transition">
        View Projects
      </a>
    </section>
  );
}

export default Home;
