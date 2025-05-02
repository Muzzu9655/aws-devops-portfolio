import React from 'react';

const certifications = [
  {
    name: "Cisco Certified Network Associate (CCNA)",
    provider: "Cisco"
  },
  {
    name: "Cisco Certified Network Professional (CCNP)",
    provider: "Cisco"
  },
  {
    name: "AWS Certified - Cloud Computing",
    provider: "Amazon Web Services"
  },
  {
    name: "AWS & DevOps Training",
    provider: "Hyper Tech Global Technologies"
  }
];

function Certifications() {
  return (
    <section id="certifications" className="py-16 px-4 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-8 animate-fade-in-up">
          Certifications & Training
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {certifications.map((cert, index) => (
            <li
              key={index}
              className="p-6 border border-gray-700 rounded-lg shadow-md bg-gray-900 transform transition duration-500 hover:scale-105 hover:shadow-xl animate-fade-in-up"
            >
              <h3 className="text-lg font-semibold text-teal-400">{cert.name}</h3>
              <p className="text-sm text-gray-300">{cert.provider}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Certifications;
