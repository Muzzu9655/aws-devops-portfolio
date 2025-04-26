// src/components/Projects.js
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
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-100 to-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-down">
          <h2 className="text-4xl font-extrabold text-gray-900">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 animate-fade-in-up">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-blue-800 mb-3">{project.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full transition hover:bg-blue-200"
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
