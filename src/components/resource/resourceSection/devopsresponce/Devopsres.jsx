"use client";

import { useState } from "react";
import Image from "next/image";
import { FaQuestionCircle, FaLightbulb } from "react-icons/fa";
import TextLight from "./TextLight";

const Devopsres = () => {
  const [faqs] = useState([
    {
      question: "What is DevOps?",
      answer:
        "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and deliver high-quality software continuously. It emphasizes collaboration, automation, and integration between development and operations teams.",
    },
    {
      question: "What are the key principles of DevOps?",
      answer:
        "Key principles of DevOps include automation of processes, continuous integration and delivery (CI/CD), infrastructure as code (IaC), monitoring and logging, collaboration between teams, and iterative improvement.",
    },
    {
      question: "What is Continuous Integration (CI)?",
      answer:
        "Continuous Integration (CI) is a DevOps practice where code changes are frequently integrated into a shared repository. Each integration is automatically tested to detect errors early and ensure that the software remains in a deployable state.",
    },
    {
      question: "What is Continuous Delivery (CD)?",
      answer:
        "Continuous Delivery (CD) extends CI by automatically deploying code changes to a staging or production environment after passing automated tests. It ensures that software can be released to production at any time with minimal manual intervention.",
    },
    {
      question: "What is Infrastructure as Code (IaC)?",
      answer:
        "Infrastructure as Code (IaC) is a practice where infrastructure is managed and provisioned using code and automation tools. It allows for consistent, repeatable, and scalable infrastructure deployment by defining infrastructure in configuration files.",
    },
    {
      question: "What are some popular tools used in DevOps?",
      answer:
        "Popular DevOps tools include Jenkins for CI/CD, Docker for containerization, Kubernetes for container orchestration, Terraform for IaC, Ansible and Puppet for configuration management, and Prometheus for monitoring and alerting.",
    },
    {
      question: "What is Docker?",
      answer:
        "Docker is a platform that enables developers to create, deploy, and run applications in containers. Containers are lightweight, portable, and ensure consistency across different environments by packaging an application with its dependencies.",
    },
    {
      question: "What is Kubernetes?",
      answer:
        "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It provides features such as load balancing, self-healing, and rolling updates.",
    },
    {
      question: "What is a CI/CD pipeline?",
      answer:
        "A CI/CD pipeline is an automated workflow that involves Continuous Integration and Continuous Delivery. It includes stages such as code commit, build, test, deploy, and release, which are executed automatically to streamline the development and deployment process.",
    },
    {
      question: "What is a microservices architecture?",
      answer:
        "Microservices architecture is a design approach where an application is composed of small, loosely coupled services that communicate over APIs. Each service is independently deployable and scalable, allowing for easier maintenance and faster development.",
    },
    {
      question: "What is the purpose of monitoring in DevOps?",
      answer:
        "Monitoring in DevOps involves tracking the performance, availability, and health of applications and infrastructure. It helps in identifying issues, analyzing system behavior, and ensuring that the software meets performance and reliability expectations.",
    },
    {
      question: "What is a rollback in DevOps?",
      answer:
        "A rollback is the process of reverting a system or application to a previous stable state after a failed deployment or issue. It helps in minimizing downtime and restoring service while investigating and fixing the problem.",
    },
    {
      question: "What is a deployment strategy?",
      answer:
        "A deployment strategy defines how new code changes are released to production. Common strategies include rolling updates, blue-green deployments, canary releases, and feature toggles, each with different approaches to minimize risk and ensure a smooth deployment.",
    },
    {
      question: "What is the role of configuration management in DevOps?",
      answer:
        "Configuration management involves maintaining and managing the configuration of servers, applications, and infrastructure. It ensures consistency and reproducibility by automating the configuration and deployment of system settings and software.",
    },
    {
      question: "What are some common challenges in DevOps implementation?",
      answer:
        "Common challenges in DevOps implementation include cultural resistance, integrating diverse tools and technologies, ensuring security and compliance, managing complex environments, and maintaining effective communication between development and operations teams.",
    },
    // ... Add more questions and answers
  ]);

  return (
    <main className="container mx-auto mt-8 px-4">
      <div className="flex flex-wrap justify-between">
        {/* Left column for questions */}
        <div className="w-full md:w-3/12 mb-8">
          <h3 className="text-2xl font-extrabold mb-4">
            Questions
            <TextLight text={"Courses"} />
          </h3>
          <ul className="list-none space-y-4">
            {faqs.map((faq, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded transition duration-200 ease-in-out cursor-pointer"
              >
                <p className="text-gray-800 font-light">
                  {index + 1}. {faq.question}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column for answers */}
        <div className="w-full md:w-8/12 mb-8">
          <div className="relative">
            <Image
              src="/assets/resourse/interview/devops.jpg"
              alt="Featured Image"
              width={1200}
              height={600}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-extrabold z-10">
              Devops Interview Questions
            </h2>
          </div>
          <p className="text-gray-700 mt-6 mb-4 leading-relaxed">
            Are you preparing for a Devops interview? Here are 15
            essential questions to help you succeed in your interview and
            demonstrate your mastery of Scrum.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Top Devops Interview Questions & Answers
            </h3>
            <div className="divide-y divide-gray-300">
              {faqs.map((faq, index) => (
                <div key={index} className="py-4 flex items-start space-x-4">
                  <div>
                    <h4 className="text-lg font-semibold bg-gradient-to-b from-[#47aff9] via-[#10a1bb] to-[#0c130f] text-transparent bg-clip-text">
                      {index + 1}. {faq.question}
                    </h4>
                    <div className="flex items-start mt-2 space-x-2">
                      <FaLightbulb className="w-5 h-5 text-yellow-500" />
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Devopsres;
