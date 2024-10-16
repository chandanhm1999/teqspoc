"use client";

import { useState } from "react";
import Image from "next/image";
import TextLight from "./TextLight";

const DevOpsSyllabus = () => {
  const [syllabus] = useState([
    {
      section: "Introduction to DevOps",
      topics: [
        "Definition and key concepts",
        "History and evolution of DevOps",
        "The DevOps culture and mindset",
        "Benefits of adopting DevOps",
        "DevOps vs. traditional software development methodologies",
      ],
    },
    {
      section: "DevOps Lifecycle",
      topics: [
        "Overview of the DevOps lifecycle",
        "Continuous Development",
        "Continuous Integration (CI)",
        "Continuous Testing (CT)",
        "Continuous Deployment (CD)",
        "Continuous Monitoring",
      ],
    },
    {
      section: "Version Control Systems",
      topics: [
        "Introduction to version control",
        "Git basics: repositories, branches, commits",
        "Working with Git: Cloning, staging, and committing changes",
        "Merging branches and resolving conflicts",
        "Git workflows (feature branching, GitFlow, etc.)",
        "Using Git with remote repositories (GitHub, GitLab, Bitbucket)",
      ],
    },
    {
      section: "Continuous Integration (CI)",
      topics: [
        "Overview of CI",
        "Setting up a CI/CD pipeline",
        "Popular CI tools (Jenkins, Travis CI, CircleCI)",
        "Writing CI scripts and automating builds",
        "Integrating testing in CI pipelines",
      ],
    },
    {
      section: "Continuous Delivery and Continuous Deployment",
      topics: [
        "Difference between continuous delivery and continuous deployment",
        "Deploying applications to different environments",
        "Using tools like Jenkins, GitLab CI/CD, or CircleCI for CD",
        "Rollback strategies and handling deployment failures",
      ],
    },
    {
      section: "Configuration Management",
      topics: [
        "Introduction to configuration management",
        "Infrastructure as Code (IaC)",
        "Tools overview: Ansible, Puppet, Chef",
        "Managing configurations using IaC principles",
        "Version controlling configuration files",
      ],
    },
    {
      section: "Containerization",
      topics: [
        "Understanding containers and virtualization",
        "Introduction to Docker: Installing Docker, Creating and managing containers",
        "Docker images and Dockerfile",
        "Docker Compose for multi-container applications",
        "Container orchestration with Kubernetes",
        "Basic concepts of Kubernetes",
        "Deploying applications on Kubernetes",
        "Scaling and managing containerized applications",
      ],
    },
    {
      section: "Monitoring and Logging",
      topics: [
        "Importance of monitoring and logging in DevOps",
        "Overview of monitoring tools (Prometheus, Grafana, ELK Stack)",
        "Setting up alerts and notifications",
        "Log management and analysis",
        "Analyzing application performance and user experience",
      ],
    },
    {
      section: "Cloud Computing in DevOps",
      topics: [
        "Introduction to cloud computing",
        "Overview of cloud service models (IaaS, PaaS, SaaS)",
        "Major cloud providers (AWS, Azure, Google Cloud)",
        "Setting up environments in the cloud",
        "Using cloud services for CI/CD, storage, and computing",
      ],
    },
    {
      section: "Security in DevOps (DevSecOps)",
      topics: [
        "Introduction to DevSecOps",
        "Integrating security practices in the DevOps lifecycle",
        "Security tools and best practices",
        "Automated security testing and compliance checks",
        "Monitoring and managing vulnerabilities",
      ],
    },
    {
      section: "Collaboration and Communication",
      topics: [
        "Importance of collaboration in DevOps",
        "Tools for communication (Slack, Microsoft Teams)",
        "Agile methodologies in DevOps",
        "Working effectively in cross-functional teams",
        "The role of feedback loops in DevOps",
      ],
    },
    {
      section: "Case Studies and Best Practices",
      topics: [
        "Real-world case studies of DevOps implementations",
        "Common pitfalls and challenges in DevOps adoption",
        "Best practices for successful DevOps transformation",
        "Measuring DevOps success (KPIs and metrics)",
      ],
    },
    {
      section: "Project Work",
      topics: [
        "Hands-on project to implement a CI/CD pipeline",
        "Working with Docker and Kubernetes for deployment",
        "Setting up monitoring and logging for applications",
        "Creating a DevOps strategy for a sample project",
      ],
    },
    {
      section: "Future Trends in DevOps",
      topics: [
        "Emerging technologies and practices in DevOps",
        "The impact of AI and machine learning on DevOps",
        "The evolution of DevOps tools and frameworks",
      ],
    },
  ]);

  return (
    <main className="container mx-auto mt-8 px-4">
      <div className="flex flex-wrap justify-between">
        {/* Right column for syllabus details */}
        <div className="w-full md:w-8/12 mb-8">
          <div className="relative">
            <Image
              src="/assets/resourse/interview/devops.jpg"
              alt="DevOps Course Image"
              width={1200}
              height={600}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-extrabold z-10">
              DevOps Course Syllabus
            </h2>
          </div>

          <div className="mt-6 ml-4">
            {syllabus.map((module, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-bold text-gray-600 mb-4">{module.section}</h3>
                <ul className="list-disc list-inside space-y-2">
                  {module.topics.map((topic, idx) => (
                    <li key={idx} className="text-gray-700 text-[16px]">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Left column for syllabus list */}
        <div className="w-full md:w-3/12 mb-8">
          <h3 className="text-2xl font-extrabold mb-4 text-start">
            DevOps <TextLight text={"Syllabus"} />
          </h3>
          <ul className="list-none space-y-4">
            {syllabus.map((module, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 hover:bg-blue-100 p-3 rounded-lg transition duration-200 ease-in-out cursor-pointer"
              >
                <p className="text-gray-800 font-medium">
                  {index + 1}. {module.section}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default DevOpsSyllabus;


