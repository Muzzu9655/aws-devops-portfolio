// src/components/About.js
import React from 'react';

function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-br from-white to-blue-50 text-gray-800"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Left Side */}
        <div className="flex justify-center md:justify-start animate-fade-in-left">
          <img
            src="/profile.jpg"
            alt="Muzammil Khazi"
            className="w-48 h-48 md:w-64 md:h-64 rounded-2xl shadow-xl border-4 border-blue-500 object-cover"
          />
        </div>

        {/* Text Right Side */}
        <div className="animate-fade-in-up">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
            I’m <span className="font-semibold text-blue-600">Muzammil Khazi</span>, an AWS & DevOps Engineer from Bengaluru with a passion for
            automation, scalability, and cloud-native architecture. I'm certified in <strong>CCNA, CCNP, AWS</strong>,
            and constantly evolving my skills through real-world DevOps projects.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            At <strong>WNS</strong>, I support 500+ users and maintain top-notch IT operations with 95% SLA compliance.
            Previously at <strong>Globiva</strong>, I improved support efficiency by 20%.
          </p>
          <p className="text-lg leading-relaxed">
            I’m currently enhancing my AWS & DevOps expertise through hands-on training at
            <strong> Hyper Tech Global Technologies</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
