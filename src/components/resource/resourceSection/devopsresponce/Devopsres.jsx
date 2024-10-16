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
        "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) aimed at shortening the development lifecycle while delivering features, fixes, and updates frequently in close alignment with business objectives. It emphasizes collaboration, automation, and continuous improvement.",
    },
    {
      question: "What are the key benefits of adopting DevOps?",
      answer:
        "Key benefits include faster delivery of features, improved collaboration between teams, higher quality software due to continuous testing, greater efficiency through automation, and improved customer satisfaction.",
    },
    {
      question: "What is Continuous Integration (CI)?",
      answer:
        "Continuous Integration (CI) is a DevOps practice where developers frequently integrate their code changes into a shared repository, triggering automated builds and tests to detect issues early in the development process.",
    },
    {
      question: "What is Continuous Delivery (CD)?",
      answer:
        "Continuous Delivery (CD) is the practice of ensuring that code changes are automatically prepared for release to production. It involves automated testing and deployment processes that allow teams to deliver new features and updates rapidly and safely.",
    },
    {
      question: "What is the difference between Continuous Delivery and Continuous Deployment?",
      answer:
        "Continuous Delivery prepares code for a production release, but the deployment is a manual process. Continuous Deployment automatically releases every change that passes automated tests directly to production.",
    },
    {
      question: "What tools do you use for CI/CD?",
      answer:
        "Common CI/CD tools include Jenkins, GitLab CI/CD, CircleCI, Travis CI, and Azure DevOps. These tools automate the processes of building, testing, and deploying applications.",
    },
    {
      question: "What is Infrastructure as Code (IaC)?",
      answer:
        "Infrastructure as Code (IaC) is a practice that involves managing and provisioning infrastructure through code and automation rather than manual processes. Tools like Terraform, AWS CloudFormation, and Ansible are commonly used for IaC.",
    },
    {
      question: "What is Docker, and why is it used in DevOps?",
      answer:
        "Docker is a platform that enables developers to automate the deployment of applications within lightweight containers. It ensures that applications run consistently across different environments, enhancing portability and scalability.",
    },
    {
      question: "What is Kubernetes?",
      answer:
        "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It allows developers to manage large clusters of containers seamlessly.",
    },
    {
      question: "What is a microservices architecture?",
      answer:
        "A microservices architecture is an approach to software development where applications are composed of small, loosely coupled services that communicate over APIs. This architecture enables teams to develop, deploy, and scale services independently.",
    },
    {
      question: "What is a deployment pipeline?",
      answer:
        "A deployment pipeline is an automated process that moves code changes through various stages of development (build, test, deploy) until they are ready for production. It helps ensure that code changes are thoroughly tested and validated before release.",
    },
    {
      question: "How do you ensure security in a DevOps environment?",
      answer:
        "Security in a DevOps environment (DevSecOps) is ensured by integrating security practices throughout the development lifecycle, automating security testing, and regularly auditing code and dependencies for vulnerabilities.",
    },
    {
      question: "What are some common CI/CD tools, and what are their features?",
      answer:
        "Common CI/CD tools include:\nJenkins: Highly customizable, open-source automation server with a wide range of plugins.\nGitLab CI/CD: Integrated CI/CD tool within GitLab that offers version control and CI/CD features.\nCircleCI: Cloud-based CI/CD platform that automates software builds, tests, and deployments.\nTravis CI: Continuous integration service for GitHub repositories that automates testing and deployment.",
    },
    {
      question: "What is configuration management?",
      answer:
        "Configuration management is the practice of systematically managing, organizing, and maintaining configurations of software and hardware systems. Tools like Ansible, Puppet, and Chef automate the configuration process, ensuring consistency across environments.",
    },
    {
      question: "What are the best practices for implementing DevOps?",
      answer:
        "Best practices include:\nEstablishing a culture of collaboration and communication between teams.\nAutomating repetitive tasks to increase efficiency.\nImplementing continuous testing and monitoring.\nEmphasizing security at every stage of the development process.\nUsing version control for all code and configuration files.",
    },
    {
      question: "What is a load balancer, and why is it important?",
      answer:
        "A load balancer distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed. This improves availability and reliability, allowing applications to handle high traffic volumes effectively.",
    },
    {
      question: "What is monitoring, and what tools do you use for it?",
      answer:
        "Monitoring involves tracking system performance and application health in real-time to ensure optimal functioning. Common monitoring tools include Prometheus, Grafana, Nagios, and ELK Stack (Elasticsearch, Logstash, Kibana).",
    },
    {
      question: "How do you handle secrets and sensitive data in DevOps?",
      answer:
        "Secrets and sensitive data can be managed using tools like HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault. These tools securely store and manage access to sensitive information, ensuring it is not hard-coded into application code.",
    },
    {
      question: "What is a rollback, and when would you use it?",
      answer:
        "A rollback is the process of reverting an application to a previous stable version due to issues or failures in the current version. Rollbacks are essential for maintaining service availability and stability when deployments do not go as planned.",
    },
    {
      question: "What is a service mesh?",
      answer:
        "A service mesh is a dedicated infrastructure layer that manages service-to-service communication in a microservices architecture. It provides features like traffic management, security, and observability without requiring changes to application code. Examples include Istio and Linkerd.",
    },
    {
      question: "What is Kanban, and how does it relate to DevOps?",
      answer:
        "Kanban is a visual workflow management method that helps teams visualize work, limit work in progress, and optimize flow. In DevOps, Kanban can be used to manage development and deployment processes, promoting transparency and efficiency.",
    },
    {
      question: "What is the 12-Factor App methodology?",
      answer:
        "The 12-Factor App is a methodology for building scalable and maintainable web applications. It includes principles like codebase management, dependency management, config management, and logging, promoting best practices for cloud-native applications.",
    },
    {
      question: "What is blue-green deployment?",
      answer:
        "Blue-green deployment is a technique that reduces downtime and risk by running two identical production environments, called 'blue' and 'green.' One environment serves live traffic while the other is idle. New releases are deployed to the idle environment, allowing for quick rollback if issues arise.",
    },
    {
      question: "What are some key metrics to measure DevOps success?",
      answer:
        "Key metrics include:\nDeployment frequency\nChange lead time\nMean time to recovery (MTTR)\nChange failure rate\nCustomer satisfaction and user feedback.",
    },
    {
      question: "What is a canary release?",
      answer:
        "A canary release is a deployment strategy where a new version of an application is rolled out to a small subset of users before a full-scale deployment. This approach allows teams to monitor performance and gather feedback on the new version before wider release.",
    },
    {
      question: "How do you handle infrastructure scaling in DevOps?",
      answer:
        "Infrastructure scaling can be handled through horizontal scaling (adding more instances) or vertical scaling (upgrading existing instances). Automated tools like Kubernetes can help manage scaling dynamically based on traffic and resource usage.",
    },
    {
      question: "What are artifacts in DevOps?",
      answer:
        "Artifacts are files produced during the build process, such as compiled code, libraries, Docker images, and configuration files. They are essential for tracking versions of software and facilitating deployments.",
    },
    {
      question: "What is a monolithic architecture, and how does it differ from microservices?",
      answer:
        "A monolithic architecture is a traditional model where all components of an application are bundled together as a single unit. In contrast, microservices architecture decomposes the application into smaller, independent services that can be developed, deployed, and scaled separately.",
    },
    {
      question: "What is serverless architecture?",
      answer:
        "Serverless architecture allows developers to build and run applications without managing servers. Instead, developers write code that is executed in response to events, with cloud providers handling infrastructure management and scaling. Services like AWS Lambda and Azure Functions are examples of serverless computing.",
    },
    {
      question: "What are some common DevOps tools for testing?",
      answer:
        "Common DevOps testing tools include:\nSelenium: For automated web application testing.\nJUnit: For unit testing in Java applications.\nPostman: For API testing.\nJMeter: For performance and load testing.\nCucumber: For behavior-driven development (BDD) testing.",
    },
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
            Are you preparing for a Devops interview? Here are 30
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
