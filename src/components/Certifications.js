// src/components/Certifications.js
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
    <section id="certifications" className="py-16 px-4 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Certifications & Training</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {certifications.map((cert, index) => (
            <li key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-lg font-semibold">{cert.name}</h3>
              <p className="text-sm text-gray-600">{cert.provider}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Certifications;
