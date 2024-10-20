"use client";

import { useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import TextLight from "./TextLight";

const Testingressauto = () => {
  const [faqs] = useState([
    {
      question: "What is automation testing?",
      answer: [
        "Automation testing is the use of specialized software tools to execute tests automatically, compare actual outcomes with expected results, and report the findings.",
        "It aims to enhance efficiency and accuracy in the testing process, especially for repetitive tasks."
      ]
    },
    {
      question: "What are the advantages of automation testing over manual testing?",
      answer: [
        "Speed: Tests can run much faster than manual execution.",
        "Consistency: Automation eliminates human error, ensuring consistent test execution.",
        "Reusability: Test scripts can be reused across different versions of the application.",
        "Coverage: Automation allows for extensive testing that might be impractical manually.",
        "Continuous Integration: Automated tests can easily be integrated into CI/CD pipelines for regular feedback."
      ]
    },
    {
      question: "What types of testing can be automated?",
      answer: [
        "Regression testing",
        "Smoke testing",
        "Performance testing",
        "Load testing",
        "Functional testing",
        "API testing",
        "End-to-end testing"
      ]
    },
    {
      question: "What is Selenium?",
      answer: [
        "Selenium is an open-source framework for automating web applications.",
        "It supports multiple programming languages (like Java, Python, C#, etc.) and can work with various browsers.",
        "It allows testers to write test scripts that interact with web applications."
      ]
    },
    {
      question: "What is a test automation framework?",
      answer: [
        "A test automation framework is a set of guidelines and tools that provide a structured approach to test automation.",
        "It includes standards for test script development, test data management, reporting, and integration with other tools."
      ]
    },
    {
      question: "What are some popular automation testing tools?",
      answer: [
        "Selenium",
        "TestNG",
        "JUnit",
        "Cypress",
        "Appium (for mobile testing)",
        "Postman (for API testing)",
        "LoadRunner (for performance testing)"
      ]
    },
    {
      question: "What programming languages are commonly used in automation testing?",
      answer: [
        "Java",
        "Python",
        "C#",
        "JavaScript",
        "Ruby"
      ]
    },
    {
      question: "What is the Page Object Model (POM)?",
      answer: [
        "The Page Object Model is a design pattern in test automation where each page of the application is represented by a separate class.",
        "This encapsulates the page's elements and interactions, promoting code reusability and maintainability."
      ]
    },
    {
      question: "How do you handle dynamic elements in Selenium?",
      answer: [
        "XPath or CSS selectors that use attributes likely to remain constant.",
        "Explicit waits to ensure that elements are available before interacting with them.",
        "Strategies like retry mechanisms to handle timing issues."
      ]
    },
    {
      question: "What is a test case and a test script?",
      answer: [
        "Test Case: A high-level document that defines a specific test scenario, including inputs, execution steps, and expected results.",
        "Test Script: A lower-level, executable script that automates the execution of a test case using a programming language."
      ]
    },
    {
      question: "What is the difference between smoke testing and sanity testing?",
      answer: [
        "Smoke Testing: A basic test to verify that critical functionalities work after a new build.",
        "Sanity Testing: A focused test conducted to verify that a specific functionality or bug fix works as expected after changes."
      ]
    },
    {
      question: "What is regression testing?",
      answer: [
        "Regression testing is a type of testing conducted to confirm that recent changes in the code have not adversely affected existing functionalities.",
        "It ensures that the application still performs as expected after modifications."
      ]
    },
    {
      question: "What is a test execution report?",
      answer: [
        "A test execution report summarizes the results of automated test executions, detailing passed, failed, and skipped tests.",
        "It provides insights into test coverage and application quality."
      ]
    },
    {
      question: "What is data-driven testing?",
      answer: [
        "Data-driven testing is an automation testing methodology where test scripts are executed with multiple sets of data inputs.",
        "It separates the test logic from test data, allowing the same test to run with different data sets stored in external files or databases."
      ]
    },
    {
      question: "What is keyword-driven testing?",
      answer: [
        "Keyword-driven testing is a testing approach that uses keywords to represent actions in the application.",
        "Test cases are created using a table of keywords and parameters, allowing non-technical users to design tests without extensive programming knowledge."
      ]
    },
    {
      question: "How do you perform cross-browser testing?",
      answer: [
        "Cross-browser testing is performed by executing test scripts on different browsers (like Chrome, Firefox, Safari) and operating systems to ensure that the web application behaves consistently across platforms.",
        "Tools like Selenium Grid or BrowserStack can facilitate this process."
      ]
    },
    {
      question: "What is continuous integration (CI)?",
      answer: [
        "Continuous Integration is a software development practice where code changes are automatically built, tested, and merged into a shared repository frequently.",
        "It allows teams to detect issues early and improve software quality."
      ]
    },
    {
      question: "What are assertions in automation testing?",
      answer: [
        "Assertions are statements that validate whether a particular condition is true in the application under test.",
        "They check if actual outcomes match expected results, determining the pass or fail status of a test."
      ]
    },
    {
      question: "What is a locator in Selenium?",
      answer: [
        "A locator in Selenium is a method used to find and interact with web elements.",
        "Common locator types include: ID, Name, Class Name, XPath, CSS Selector."
      ]
    },
    {
      question: "What is the role of an automation testing engineer?",
      answer: [
        "An automation testing engineer is responsible for designing, developing, and maintaining automated test scripts.",
        "Their role includes identifying test cases for automation, selecting appropriate tools, collaborating with developers, and analyzing test results."
      ]
    },
    {
      question: "What is the defect lifecycle?",
      answer: [
        "The defect lifecycle refers to the stages a defect goes through, from identification to resolution.",
        "Common stages include: New, Assigned, Fixed, Retest, Closed, Reopened (if necessary)."
      ]
    },
    {
      question: "What are some common challenges in automation testing?",
      answer: [
        "Maintaining test scripts as the application changes.",
        "Identifying which tests to automate.",
        "Dealing with dynamic elements.",
        "Ensuring test data is consistent and reliable."
      ]
    },
    {
      question: "What is performance testing?",
      answer: [
        "Performance testing is the process of evaluating the speed, scalability, and stability of an application under various conditions.",
        "It includes load testing (checking how the system performs under expected load) and stress testing (pushing the system beyond its limits)."
      ]
    },
    {
      question: "What is a framework in automation testing?",
      answer: [
        "A framework in automation testing is a structured approach that defines guidelines for writing and organizing automated tests.",
        "It includes tools, libraries, and processes that facilitate the development and maintenance of test scripts."
      ]
    },
    {
      question: "How do you manage test data in automation testing?",
      answer: [
        "Test data can be managed by using external files (like Excel, CSV, or JSON) to store test data.",
        "Utilizing databases to manage and retrieve data as needed.",
        "Implementing data generation techniques to create dynamic datasets during test execution."
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
            <TextLight text={"Automation Testing"} />
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
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Top Automation Testing Interview Questions & Answers
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

export default Testingressauto;
