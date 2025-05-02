import React from 'react';

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-6 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-5xl mx-auto w-full animate-fade-in-left">
        <h2 className="text-3xl font-bold mb-6 text-blue-400 animate-fade-in-left">
          Contact
        </h2>



        

        <div className="mb-6 animate-fade-in-up">
          <p className="mb-2">
            <strong>Phone:</strong>{' '}
            <span className="text-gray-300">+91 9611914083 📞</span>
          </p>
          <p className="mb-2">
            <strong>Email:</strong>
            <a
              href="mailto:muzammilkhazi313@gmail.com"
              className="text-blue-300 hover:underline ml-1"
            >
              muzammilkhazi313@gmail.com 📧
            </a>
          </p>
        </div>

        <div className="flex flex-wrap justify-start gap-6 mb-6 animate-fade-in-up">
          <a
            href="https://www.linkedin.com/in/muzammil-khazi-8506851b0/"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn 🔗
          </a>
          <a
            href="https://github.com/Muzzu9655"
            className="text-gray-300 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub 🐱
          </a>
        </div>

        <a
          href="/aws-devops-portfolio/Muzamil_kazi_Resume.pdf"
          download
          className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition animate-fade-in-up"
        >
          Download Resume (PDF) 📄
        </a>
      </div>
    </section>
  );
}

export default Contact;
