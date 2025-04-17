import React from 'react';

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-4 bg-gray-100 text-gray-800 flex justify-start"
    >
      <div className="max-w-4xl mx-auto text-left animate-fade-in-left w-full">
        <h2 className="text-3xl font-bold mb-6 animate-fade-in-left">
          Contact
        </h2>

        <p className="mb-4 text-lg animate-fade-in-up">
          Feel free to reach out for opportunities, collaboration, or just to connect!
        </p>

        <div className="mb-6 animate-fade-in-up">
          <p className="mb-2"><strong>Phone:</strong> +91 9611914083 📞</p>
          <p className="mb-2">
            <strong>Email:</strong> 
            <a
              href="mailto:muzammilkhazi313@gmail.com"
              className="text-blue-600 hover:underline"
            >
              muzammilkhazi313@gmail.com 📧
            </a>
          </p>
        </div>

        <div className="flex justify-start gap-6 mb-6 animate-fade-in-up">
          <a
            href="https://www.linkedin.com/in/muzammil-khazi-8506851b0/"
            className="text-blue-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn 🔗
          </a>
          <a
            href="https://github.com/Muzzu9655"
            className="text-gray-800 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub 🐱
          </a>
        </div>

        <a
          href={`${process.env.PUBLIC_URL}/Muzamil_kazi_Resume.pdf?updated=true`}
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
