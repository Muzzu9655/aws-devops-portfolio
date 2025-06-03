// src/components/Skills.js
import React from 'react';

const skills = {
  Cloud_and_DevOps: [
    'AWS (EC2, S3, IAM, Lambda, CloudWatch, VPC, Route 53, CodePipeline)',
    'Kubernetes',
    'Terraform',
    'Ansible',
    'Dockers',
  ],
  Networking: [
    'CCNA',
    'CCNP',
    'TCP/IP',
    'Routing & Switching (OSPF, BGP, STP)',
    'VPN',
    'DNS',
    'DHCP',
  ],
  ITSM_Management: [
    'ServiceNow',
    'Active Directory',
    'Microsoft Intune',
    'Tanium',
    'Citrix',
    'IT Care Console',
  ],
  Tools_and_Tech: [
    'Git',
    'Office 365',
    'Microsoft Identity Management',
    'Linux',
    'Bash (basic)',
    'YAML',
    'JSON',
  ],
};

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white text-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-down">
          <h2 className="text-4xl font-extrabold text-gray-800">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 animate-fade-in-up">
          {Object.entries(skills).map(([category, skillList], i) => (
            <div
              key={category}
              className="bg-white border border-blue-100 p-6 rounded-xl shadow hover:shadow-md transform transition duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">
                {category.replaceAll('_', ' ')}
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {skillList.map((skill) => (
                  <li key={skill} className="transition hover:text-blue-600">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
