import React from 'react';

const projects = [
  {
    title: "Static Website Hosting with Automated Deployment",
    description: `Deployed a static website using Amazon S3 for storage and EC2 for dynamic content. 
    Configured IAM roles and policies for secure access management. Integrated CloudWatch for performance monitoring 
    and demonstrated VPC setup, security groups, and elastic IP management.`,
    tools: ['EC2', 'S3', 'IAM', 'VPC', 'CloudWatch'],
  },
  {
    title: "Serverless Image/Video Processor with CI/CD",
    description: `Built a serverless application that automatically processes images and videos
     uploaded to Amazon S3 using AWS Lambda. Managed metadata storage with DynamoDB and exposed APIs 
     via API Gateway. Automated deployment and version control through AWS SAM and GitHub Actions, ensuring 
     seamless CI/CD workflows.`,
    tools: ['AWS Lambda', 'S3', 'API Gateway', 'DynamoDB', 'AWS SAM'],
  },
  {
    title: "AWS EC2 | CloudWatch | SNS | CodePipeline | GitHub Actions",
    description: `Deployed web applications on AWS EC2 instances with real-time log and metrics collection 
    using CloudWatch Agent. Configured CloudWatch Alarms and SNS notifications 
    for automated incident detection and alerting. Streamlined deployments from GitHub 
    to EC2 through CodePipeline and enhanced system reliability by implementing Auto Recovery for EC2 instances.`,
    tools: ['EC2', 'CodePipeline', 'CloudWatch', 'GitHub Actions','SNS','EC2'],
  },

  {
  title: "Employee Attendance Tracker | Python | MySQL | Excel Reporting",
  description: `Built a MySQL-based employee attendance management system with a Python interface 
  for real-time logging, anomaly detection, and monthly reporting. Automated Excel report generation 
  and enabled trend analysis for HR insights. Designed to improve data accuracy and simplify attendance tracking.`,
  tools: ['Python', 'MySQL', 'SQL', 'Excel', 'HR Analytics'],
},
  
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-down">
          <h2 className="text-4xl font-extrabold">Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 animate-fade-in-up">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-teal-400 mb-3">{project.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="bg-teal-800 text-white text-xs font-medium px-3 py-1 rounded-full transition hover:bg-teal-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
