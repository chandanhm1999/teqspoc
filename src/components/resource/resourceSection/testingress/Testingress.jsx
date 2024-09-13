"use client";

import { useState } from "react";
import Image from "next/image";
import { FaQuestionCircle, FaLightbulb } from "react-icons/fa";
import TextLight from "./TextLight";

const Testingress = () => {
    const [faqs] = useState([
        {
          question: "What is software testing?",
          answer:
            "Software testing is the process of evaluating and verifying that a software application or system meets specified requirements and functions correctly. It aims to identify defects, ensure quality, and improve the reliability of the software.",
        },
        {
          question: "What are the different types of software testing?",
          answer:
            "Software testing can be broadly classified into several types, including manual testing, automated testing, unit testing, integration testing, system testing, acceptance testing, and regression testing.",
        },
        {
          question: "What is the difference between functional and non-functional testing?",
          answer:
            "Functional testing focuses on verifying that the software functions according to the specified requirements and includes types like unit, integration, and system testing. Non-functional testing assesses aspects like performance, usability, and security, such as load testing and stress testing.",
        },
        {
          question: "What is unit testing?",
          answer:
            "Unit testing involves testing individual components or units of a software application in isolation to ensure that they work correctly. It is typically done by developers during the development process.",
        },
        {
          question: "What is integration testing?",
          answer:
            "Integration testing focuses on verifying the interactions between different modules or components of a software system to ensure that they work together as expected. It follows unit testing and precedes system testing.",
        },
        {
          question: "What is regression testing?",
          answer:
            "Regression testing is the process of re-running previously completed tests to ensure that new code changes have not adversely affected the existing functionality of the software.",
        },
        {
          question: "What is the purpose of a test plan?",
          answer:
            "A test plan is a document that outlines the scope, approach, resources, and schedule for testing activities. It defines the objectives, testing criteria, and procedures to ensure that the software meets its requirements and quality standards.",
        },
        {
          question: "What is a test case?",
          answer:
            "A test case is a set of conditions or variables under which a tester will determine whether a software application or system is working correctly. It includes input data, execution steps, and expected results.",
        },
        {
          question: "What is a bug or defect in software testing?",
          answer:
            "A bug or defect is an error, flaw, or unintended behavior in a software application that causes it to produce incorrect or unexpected results or to behave inappropriately.",
        },
        {
          question: "What is the difference between black-box testing and white-box testing?",
          answer:
            "Black-box testing focuses on testing the functionality of the software without knowing the internal code structure, while white-box testing involves examining the internal logic and structure of the code to identify potential issues.",
        },
        {
          question: "What is automated testing?",
          answer:
            "Automated testing uses specialized tools and scripts to automatically execute test cases and compare actual results with expected outcomes. It helps in speeding up the testing process and increasing test coverage.",
        },
        {
          question: "What is the role of a QA engineer?",
          answer:
            "A Quality Assurance (QA) engineer is responsible for ensuring that software meets quality standards and requirements. They design and execute test cases, identify defects, and work with developers to resolve issues.",
        },
        {
          question: "What is load testing?",
          answer:
            "Load testing evaluates how a software application performs under a specific load or number of users. It helps in identifying performance bottlenecks and ensuring that the system can handle expected usage levels.",
        },
        {
          question: "What is user acceptance testing (UAT)?",
          answer:
            "User Acceptance Testing (UAT) is the final phase of testing where end-users validate the software to ensure it meets their needs and requirements before it is deployed to production.",
        },
        {
          question: "What is a test script?",
          answer:
            "A test script is a set of instructions written to perform a specific test case. It details the steps to be executed, the input data, and the expected results, often used in automated testing.",
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
              src="/assets/resourse/interview/softtest.jpg"
              alt="Featured Image"
              width={1200}
              height={600}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-extrabold z-10">
              Software Testing Interview Questions
            </h2>
          </div>
          <p className="text-gray-700 mt-6 mb-4 leading-relaxed">
            Are you preparing for a Software Testing interview? Here are 15
            essential questions to help you succeed in your interview and
            demonstrate your mastery of Scrum.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Top Software Testing Interview Questions & Answers
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

export default Testingress;
