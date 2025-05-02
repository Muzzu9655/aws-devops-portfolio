import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section
      id="home"
      className="px-6 pt-24 pb-12 text-white bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex flex-col md:flex-row items-center justify-start"
    >
      {/* Profile & Animated Title */}
      <div className="flex flex-col items-center md:items-start md:w-[250px] mb-6 md:mb-0">
        <img
          src={`${process.env.PUBLIC_URL}/profile.jpg`}
          alt="Muzamil Khazi"
          className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-lg mb-3"
        />

        <h1 className="text-md md:text-xl font-medium text-white text-center md:text-left mt-2">
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
            className="text-teal-300 font-semibold"
          />
        </h1>
      </div>

      {/* About Me Section */}
      <motion.div
        className="md:w-[60%] md:ml-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          About Me
        </h2>
        <p className="text-md md:text-lg leading-relaxed mb-2">
          Hi, I’m <span className="font-semibold text-teal-400">Muzamil Khazi</span>, a dedicated <strong>AWS & DevOps Engineer</strong> based in Bengaluru.
        </p>
        <p className="text-md md:text-lg leading-relaxed mb-2">
          Certified in <span className="text-teal-400">CCNA, CCNP</span> and currently pursuing training on AWS and DevOps at <span className="text-teal-400">Hyper Tech Global Technologies</span>.
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;
