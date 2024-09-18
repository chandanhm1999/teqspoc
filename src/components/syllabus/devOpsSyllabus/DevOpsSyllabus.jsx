"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTools, FaCalendarAlt } from "react-icons/fa";
import TextLight from "./TextLight";

const DevOpsSyllabus = () => {
  const [syllabus] = useState([
    {
      title: "Introduction to DevOps",
      duration: "1 week",
      content: "Overview of DevOps principles, practices, and the DevOps lifecycle.",
    },
    {
      title: "Version Control with Git",
      duration: "1 week",
      content: "Using Git for version control, branching, merging, and managing code repositories.",
    },
    {
      title: "Continuous Integration (CI)",
      duration: "2 weeks",
      content: "Setting up CI pipelines using tools like Jenkins, Travis CI, and CircleCI.",
    },
    {
      title: "Continuous Delivery (CD)",
      duration: "2 weeks",
      content: "Implementing CD pipelines and automated deployments to various environments.",
    },
    {
      title: "Containerization with Docker",
      duration: "2 weeks",
      content: "Creating, managing, and deploying containers using Docker.",
    },
    {
      title: "Orchestration with Kubernetes",
      duration: "2 weeks",
      content: "Managing containerized applications with Kubernetes, including deployment and scaling.",
    },
    {
      title: "Infrastructure as Code (IaC)",
      duration: "1 week",
      content: "Defining infrastructure using code with tools like Terraform and Ansible.",
    },
    {
      title: "Monitoring and Logging",
      duration: "1 week",
      content: "Setting up monitoring and logging solutions with tools like Prometheus, Grafana, and ELK stack.",
    },
    {
      title: "Security in DevOps",
      duration: "1 week",
      content: "Integrating security practices into the DevOps pipeline, including vulnerability scanning and compliance.",
    },
    // Add more syllabus items if needed
  ]);

  return (
    <main className="container mx-auto mt-8 px-4">
      <div className="flex flex-wrap justify-between">
        
        {/* Right column for syllabus details (Now on the left side) */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {syllabus.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-3">
                  <FaTools className="w-6 h-6 text-orange-500" />
                  <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                  <FaCalendarAlt className="w-4 h-4 text-gray-500" />
                  <span>{item.duration}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Left column for syllabus list (Now on the right side) */}
        <div className="w-full md:w-3/12 mb-8">
          <h3 className="text-2xl font-extrabold mb-4 text-center">
            DevOps Syllabus
            <TextLight text={"Courses"} />
          </h3>
          <ul className="list-none space-y-4">
            {syllabus.map((item, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 hover:bg-orange-100 p-3 rounded-lg transition duration-200 ease-in-out cursor-pointer"
              >
                <p className="text-gray-800 font-medium">
                  {index + 1}. {item.title}
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
