// src/components/Projects.js
import React from 'react';

const projects = [
  {
    title: "Automated Web Hosting on AWS",
    description: `Deployed a static website using Amazon S3 for storage and EC2 for dynamic content. 
    Configured IAM roles and policies for secure access management. Integrated CloudWatch for performance monitoring 
    and demonstrated VPC setup, security groups, and elastic IP management.`,
    tools: ['EC2', 'S3', 'IAM', 'VPC', 'CloudWatch'],
  },
  {
    title: "CI/CD Pipeline with AWS CodePipeline and Lambda",
    description: `Implemented a CI/CD pipeline using AWS CodePipeline integrated with GitHub and CodeDeploy. 
    Used Lambda for automated notifications and post-deployment tasks, achieving zero-downtime deployment. 
    Monitored deployments using CloudWatch Logs and alarms.`,
    tools: ['CodePipeline', 'GitHub', 'Lambda', 'CodeDeploy', 'CloudWatch'],
  },
  {
    title: "High Availability Architecture with Route 53 and Auto Scaling",
    description: `Built a scalable and highly available web application using EC2 Auto Scaling Groups and Elastic Load Balancer.
    Configured Route 53 for DNS management and failover routing to ensure application uptime during traffic spikes.`,
    tools: ['EC2', 'Auto Scaling', 'Load Balancer', 'Route 53'],
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-100 to-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-down">
          <h2 className="text-4xl font-extrabold text-gray-900">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 animate-fade-in-up">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
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
