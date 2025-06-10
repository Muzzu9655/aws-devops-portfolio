import React from 'react';

const certifications = [
  {
    name: 'AWS Cloud Practitioner Essentials',
    provider: 'Amazon Web Services',
  },
  {
    name: 'CCNA (Cisco Certified Network Associate)',
    provider: 'Cisco',
  },
  {
    name: 'CCNP (Cisco Certified Network Professional)',
    provider: 'Cisco',
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 px-6 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-down">
          <h2 className="text-4xl font-extrabold">Certifications</h2>
          <div className="w-24 h-1 bg-teal-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-6 animate-fade-in-up">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 p-6 rounded-xl shadow hover:shadow-lg transform transition duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-teal-400">
                {cert.name}
              </h3>
              <p className="text-gray-300">
                <span className="font-medium text-white">Issued by:</span> {cert.provider}
              </p>
              <p className="text-gray-400">
                <span className="font-medium text-white">Date:</span> {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
