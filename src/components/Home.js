// src/components/Hero.js
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <section
      id="home"
      className="px-6 py-20 text-gray-800 flex flex-col md:flex-row items-center justify-center md:justify-start"
    >
      {/* Profile & Animated Title */}
      <div className="flex flex-col items-center md:items-start md:w-[200px] animate-fade-in-left">
        <img
          src={`${process.env.PUBLIC_URL}/profile.jpg`}
          alt="Muzamil Khazi"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg mb-4 transition-transform duration-500 hover:scale-105"
        />

        <h1 className="text-lg md:text-2xl font-medium text-gray-700 text-center md:text-left mt-3">
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
            className="text-gray-700"
          />
        </h1>
      </div>

      {/* About Me Section */}
      <div className="md:w-[60%] md:ml-12 mt-8 md:mt-0 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
          About Me
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-4">
          Hello, I’m <span className="font-semibold text-teal-500">Muzamil Khazi</span>, a passionate <strong>AWS & DevOps Engineer</strong> based in Bengaluru.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-4">
          I’m certified in <span className="text-teal-500">CCNA, CCNP, AWS</span> and currently upskilling through hands-on training at <span className="text-teal-500">Hyper Tech Global Technologies</span>.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-4">
          I specialize in building scalable cloud architectures, automating deployments, and optimizing DevOps workflows.
        </p>
      </div>
    </section>
  );
}

export default Hero;
