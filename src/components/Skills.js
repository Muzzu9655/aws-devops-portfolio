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
      className="py-20 px-6 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-down">
          <h2 className="text-4xl font-extrabold">Skills</h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 animate-fade-in-up">
          {Object.entries(skills).map(([category, skillList], i) => (
            <div
              key={category}
              className="bg-gray-900 border border-gray-700 p-6 rounded-xl shadow hover:shadow-lg transform transition duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-teal-400 mb-4 border-b border-teal-700 pb-2">
                {category.replaceAll('_', ' ')}
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {skillList.map((skill) => (
                  <li key={skill} className="transition hover:text-teal-300">{skill}</li>
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
