import React from 'react';

const skills = {
  Cloud_and_DevOps: [
    'AWS (EC2, S3, IAM, Lambda, CloudWatch, VPC, Route 53, CodePipeline)',
    'Azure DevOps',
    'Terraform',
    'Ansible'
  ],
  Networking: [
    'CCNA',
    'CCNP',
    'TCP/IP',
    'Routing & Switching (OSPF, BGP, STP)',
    'VPN',
    'DNS',
    'DHCP'
  ],
  ITSM_Management: [
    'ServiceNow',
    'Active Directory',
    'Microsoft Intune',
    'Tanium',
    'Citrix',
    'IT Care Console'
  ],
  Tools_and_Tech: [
    'Git',
    'Office 365',
    'Microsoft Identity Management',
    'Linux',
    'Bash (basic)',
    'YAML',
    'JSON'
  ]
};

function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-2">
                {category.replaceAll('_', ' ')}
              </h3>
              <ul className="list-disc ml-6">
                {skillList.map((skill) => (
                  <li key={skill}>{skill}</li>
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
