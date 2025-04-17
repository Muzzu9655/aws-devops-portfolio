// src/components/Hero.js
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <section
      id="home"
      className="px-6 py-20 bg-[#f7f9fc] text-gray-800 flex flex-col md:flex-row items-center justify-center md:justify-start"
    >
      {/* Profile & Animated Title */}
      <div className="flex flex-col items-center md:items-start md:w-[180px] animate-fade-in-left">
        <img
          src={`${process.env.PUBLIC_URL}/profile.jpg`}
          alt="Muzamil Khazi"
          className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-xl mb-3 transition-transform duration-300 hover:scale-105"
        />

        <h1 className="text-xl md:text-2xl font-extrabold text-yellow-500 text-center md:text-left">
          <TypeAnimation
            sequence={[
              'AWS Engineer',
              2000,
              'DevOps Engineer',
              2000,
              'Cloud Enthusiast',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
      </div>

      {/* About Me Section */}
      <div className="md:w-[60%] md:ml-12 mt-8 md:mt-0 animate-fade-in-up text-left text-gray-700">

        <h2 className="text-2xl md:text-3xl font-bold mb-3">About Me</h2>
        <p className="text-base leading-relaxed mb-2">
          I’m <span className="font-semibold text-yellow-500">Muzammil Khazi</span>, an AWS & DevOps Engineer from Bengaluru with a passion for automation, scalability, and cloud-native architecture.
        </p>
        <p className="text-base leading-relaxed mb-2">
          I'm certified in <strong className="text-yellow-500">CCNA, CCNP, AWS</strong> and currently enhancing my skills through hands-on training at <strong className="text-yellow-500">Hyper Tech Global Technologies</strong>.
        </p>
       
      </div>
    </section>
  );
}

export default Hero;
