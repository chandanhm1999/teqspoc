"use client";

import { useState } from "react";
import Image from "next/image";
import { FaLightbulb } from "react-icons/fa";
import TextLight from "./TextLight";

const Testingress = () => {
  const [faqs] = useState([
    {
      question: "What is manual testing?",
      answer: [
        "Manual testing is the process of manually checking software for defects by executing test cases without the use of automation tools.",
        "It involves evaluating the application’s behavior and user interface to ensure it meets requirements."
      ]
    },
    {
      question: "What is the difference between manual testing and automated testing?",
      answer: [
        "Manual testing requires human intervention to execute test cases, making it suitable for exploratory and usability testing.",
        "Automated testing uses scripts and tools to execute tests automatically, which is efficient for repetitive tasks and regression testing."
      ]
    },
    {
      question: "What are the different levels of testing?",
      answer: [
        "Unit Testing: Tests individual components.",
        "Integration Testing: Tests interactions between integrated components.",
        "System Testing: Tests the entire system as a whole.",
        "Acceptance Testing: Validates the system against business requirements."
      ]
    },
    {
      question: "What is a test case?",
      answer: [
        "A test case is a documented set of conditions and variables under which a tester determines whether a system behaves as expected.",
        "It typically includes test case ID, description, preconditions, steps to execute, and expected results."
      ]
    },
    {
      question: "What is a bug? How do you report it?",
      answer: [
        "A bug is an error or flaw in software that produces incorrect or unexpected results.",
        "To report it, you typically include a bug ID, summary, steps to reproduce, expected and actual results, and severity/priority levels."
      ]
    },
    {
      question: "What is regression testing?",
      answer: [
        "Regression testing involves retesting the application after changes (like bug fixes or new features) to ensure that existing functionalities remain unaffected."
      ]
    },
    {
      question: "What is the difference between severity and priority?",
      answer: [
        "Severity refers to the impact of a bug on the application's functionality, while priority indicates how quickly a bug should be fixed based on business needs."
      ]
    },
    {
      question: "What are the different types of testing?",
      answer: [
        "Functional Testing: Validates functionalities against requirements.",
        "Non-Functional Testing: Evaluates performance, usability, and security.",
        "Smoke Testing: Quick checks of critical functionalities.",
        "User Acceptance Testing (UAT): Conducted by end-users to ensure the software meets their needs."
      ]
    },
    {
      question: "What is a test plan?",
      answer: [
        "A test plan is a document outlining the testing strategy, scope, resources, schedule, and activities for a project, serving as a roadmap for the testing process."
      ]
    },
    {
      question: "What are the steps involved in the Software Testing Life Cycle (STLC)?",
      answer: [
        "Requirement analysis",
        "Test planning",
        "Test case design",
        "Test environment setup",
        "Test execution",
        "Defect reporting",
        "Test closure activities"
      ]
    },
    {
      question: "What is exploratory testing?",
      answer: [
        "Exploratory testing is an informal testing approach where testers explore the application without predefined test cases, using their intuition and experience to identify defects."
      ]
    },
    {
      question: "How do you ensure test coverage?",
      answer: [
        "Test coverage is ensured by creating comprehensive test cases that cover all functional requirements, performing traceability analysis, and using testing techniques like boundary value analysis."
      ]
    },
    {
      question: "What is boundary value analysis?",
      answer: [
        "Boundary value analysis is a testing technique that focuses on testing at the boundaries between equivalence classes.",
        "It involves checking values at, just above, and just below the boundaries."
      ]
    },
    {
      question: "What is equivalence partitioning?",
      answer: [
        "Equivalence partitioning divides input data into valid and invalid partitions to minimize the number of test cases while ensuring adequate coverage by testing one representative value from each partition."
      ]
    },
    {
      question: "What is alpha testing?",
      answer: [
        "Alpha testing is a type of acceptance testing performed by internal teams before releasing the software to external users, aimed at identifying bugs and gathering feedback."
      ]
    },
    {
      question: "What is beta testing?",
      answer: [
        "Beta testing is a type of acceptance testing performed by external users in a real-world environment to gather feedback and identify any remaining defects before the official product launch."
      ]
    },
    {
      question: "What are some common challenges faced in manual testing?",
      answer: [
        "Common challenges include managing tight deadlines, handling frequent requirement changes, maintaining documentation, and dealing with complex applications."
      ]
    },
    {
      question: "What is a smoke test?",
      answer: [
        "A smoke test is a preliminary test to check the basic functionality of an application after a build, ensuring that critical features work before more detailed testing."
      ]
    },
    {
      question: "What is a sanity test?",
      answer: [
        "A sanity test is a focused test conducted to verify that specific functionality or bug fixes work as expected after changes, ensuring the application is stable for further testing."
      ]
    },
    {
      question: "What is the role of documentation in manual testing?",
      answer: [
        "Documentation is crucial for providing references for test cases, ensuring consistent testing practices, facilitating communication, and recording testing outcomes and defect reports."
      ]
    },
    {
      question: "How do you prioritize testing tasks?",
      answer: [
        "Testing tasks are prioritized based on business impact, risk assessment, complexity, and feedback from customers or stakeholders."
      ]
    },
    {
      question: "What is a test suite?",
      answer: [
        "A test suite is a collection of test cases that are intended to be executed together, helping organize and manage tests related to specific functionalities or modules."
      ]
    },
    {
      question: "What is user acceptance testing (UAT)?",
      answer: [
        "UAT is the final testing phase where end-users validate the software against their requirements and ensure it meets their expectations before the product is released."
      ]
    },
    {
      question: "What are some common bug tracking tools?",
      answer: [
        "Common bug tracking tools include JIRA, Bugzilla, Mantis, Trello, and Redmine, which help in tracking and managing bugs and issues."
      ]
    },
    {
      question: "How do you define 'done' for a testing phase?",
      answer: [
        "A testing phase is considered 'done' when all planned test cases are executed, all critical bugs are resolved, and the application meets the defined acceptance criteria and quality standards."
      ]
    }
  ]);
  

  return (
    <main className="container mx-auto mt-8 px-4">
      <div className="flex flex-wrap justify-between">
        {/* Left column for questions */}
        <div className="w-full md:w-3/12 mb-8">
          <h3 className="text-2xl font-extrabold mb-4">
            Questions
            <TextLight text={"Manual Testing"} />
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
              Software Testing (Manual/Automation) Interview Questions
            </h2>
          </div>
          <p className="text-gray-700 mt-6 mb-4 leading-relaxed">
            Are you preparing for a Software Testing interview? Here are 25
            (Manual/Automation) essential questions to help you succeed in your interview and
            demonstrate your mastery of Scrum.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Top Manual Testing Interview Questions & Answers
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
                      <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        {faq.answer.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
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
