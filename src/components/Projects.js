// src/components/Projects.js
import React from 'react';

const projects = [
  {
    title: "Automated Web Hosting on AWS",
    description: `Deployed a static website using Amazon S3 for storage and EC2 for dynamic content. 
    Configured IAM roles and policies for secure access management. Integrated CloudWatch for performance monitoring 
    and demonstrated VPC setup, security groups, and elastic IP management.`,
    tools: ['EC2', 'S3', 'IAM', 'VPC', 'CloudWatch']
  },
  {
    title: "CI/CD Pipeline with AWS CodePipeline and Lambda",
    description: `Implemented a CI/CD pipeline using AWS CodePipeline integrated with GitHub and CodeDeploy. 
    Used Lambda for automated notifications and post-deployment tasks, achieving zero-downtime deployment. 
    Monitored deployments using CloudWatch Logs and alarms.`,
    tools: ['CodePipeline', 'GitHub', 'Lambda', 'CodeDeploy', 'CloudWatch']
  },
  {
    title: "High Availability Architecture with Route 53 and Auto Scaling",
    description: `Built a scalable and highly available web application using EC2 Auto Scaling Groups and Elastic Load Balancer.
    Configured Route 53 for DNS management and failover routing to ensure application uptime during traffic spikes.`,
    tools: ['EC2', 'Auto Scaling', 'Load Balancer', 'Route 53']
  }
];

function Projects() {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
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
