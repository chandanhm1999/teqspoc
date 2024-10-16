"use client";

import { useState } from "react";
import Image from "next/image";
import { FaQuestionCircle, FaLightbulb } from "react-icons/fa";
import TextLight from "./TextLight";

const Testingress = () => {
  const [faqs] = useState([
    {
      question: "What is manual testing?",
      answer:
        "Manual testing is the process of manually checking software for defects by executing test cases without the use of automation tools. It involves evaluating the application’s behavior and user interface to ensure it meets requirements.",
    },
    {
      question: "What is the difference between manual testing and automated testing?",
      answer:
        "Manual testing requires human intervention to execute test cases, making it suitable for exploratory and usability testing. Automated testing uses scripts and tools to execute tests automatically, which is efficient for repetitive tasks and regression testing.",
    },
    {
      question: "What are the different levels of testing?",
      answer:
        "The levels include:\n - Unit Testing: Tests individual components.\n - Integration Testing: Tests interactions between integrated components.\n - System Testing: Tests the entire system as a whole.\n - Acceptance Testing: Validates the system against business requirements.",
    },
    {
      question: "What is a test case?",
      answer:
        "A test case is a documented set of conditions and variables under which a tester determines whether a system behaves as expected. It typically includes test case ID, description, preconditions, steps to execute, and expected results.",
    },
    {
      question: "What is a bug? How do you report it?",
      answer:
        "A bug is an error or flaw in software that produces incorrect or unexpected results. To report it, you typically include a bug ID, summary, steps to reproduce, expected and actual results, and severity/priority levels.",
    },
    {
      question: "What is regression testing?",
      answer:
        "Regression testing involves retesting the application after changes (like bug fixes or new features) to ensure that existing functionalities remain unaffected.",
    },
    {
      question: "What is the difference between severity and priority?",
      answer:
        "Severity refers to the impact of a bug on the application's functionality, while priority indicates how quickly a bug should be fixed based on business needs.",
    },
    {
      question: "What are the different types of testing?",
      answer:
        "Common types include:\n - Functional Testing: Validates functionalities against requirements.\n - Non-Functional Testing: Evaluates performance, usability, and security.\n - Smoke Testing: Quick checks of critical functionalities.\n - User Acceptance Testing (UAT): Conducted by end-users to ensure the software meets their needs.",
    },
    {
      question: "What is a test plan?",
      answer:
        "A test plan is a document outlining the testing strategy, scope, resources, schedule, and activities for a project, serving as a roadmap for the testing process.",
    },
    {
      question: "What are the steps involved in the Software Testing Life Cycle (STLC)?",
      answer:
        "The steps include:\n - Requirement analysis\n - Test planning\n - Test case design\n - Test environment setup\n - Test execution\n - Defect reporting\n - Test closure activities",
    },
    {
      question: "What is exploratory testing?",
      answer:
        "Exploratory testing is an informal testing approach where testers explore the application without predefined test cases, using their intuition and experience to identify defects.",
    },
    {
      question: "How do you ensure test coverage?",
      answer:
        "Test coverage is ensured by creating comprehensive test cases that cover all functional requirements, performing traceability analysis, and using testing techniques like boundary value analysis.",
    },
    {
      question: "What is boundary value analysis?",
      answer:
        "Boundary value analysis is a testing technique that focuses on testing at the boundaries between equivalence classes. It involves checking values at, just above, and just below the boundaries.",
    },
    {
      question: "What is equivalence partitioning?",
      answer:
        "Equivalence partitioning divides input data into valid and invalid partitions to minimize the number of test cases while ensuring adequate coverage by testing one representative value from each partition.",
    },
    {
      question: "What is alpha testing?",
      answer:
        "Alpha testing is a type of acceptance testing performed by internal teams before releasing the software to external users, aimed at identifying bugs and gathering feedback.",
    },
    {
      question: "What is beta testing?",
      answer:
        "Beta testing is a type of acceptance testing performed by external users in a real-world environment to gather feedback and identify any remaining defects before the official product launch.",
    },
    {
      question: "What are some common challenges faced in manual testing?",
      answer:
        "Common challenges include managing tight deadlines, handling frequent requirement changes, maintaining documentation, and dealing with complex applications.",
    },
    {
      question: "What is a smoke test?",
      answer:
        "A smoke test is a preliminary test to check the basic functionality of an application after a build, ensuring that critical features work before more detailed testing.",
    },
    {
      question: "What is a sanity test?",
      answer:
        "A sanity test is a focused test conducted to verify that specific functionality or bug fixes work as expected after changes, ensuring the application is stable for further testing.",
    },
    {
      question: "What is the role of documentation in manual testing?",
      answer:
        "Documentation is crucial for providing references for test cases, ensuring consistent testing practices, facilitating communication, and recording testing outcomes and defect reports.",
    },
    {
      question: "How do you prioritize testing tasks?",
      answer:
        "Testing tasks are prioritized based on business impact, risk assessment, complexity, and feedback from customers or stakeholders.",
    },
    {
      question: "What is a test suite?",
      answer:
        "A test suite is a collection of test cases that are intended to be executed together, helping organize and manage tests related to specific functionalities or modules.",
    },
    {
      question: "What is user acceptance testing (UAT)?",
      answer:
        "UAT is the final testing phase where end-users validate the software against their requirements and ensure it meets their expectations before the product is released.",
    },
    {
      question: "What are some common bug tracking tools?",
      answer:
        "Common bug tracking tools include JIRA, Bugzilla, Mantis, Trello, and Redmine, which help in tracking and managing bugs and issues.",
    },
    {
      question: "How do you define 'done' for a testing phase?",
      answer:
        "A testing phase is considered 'done' when all planned test cases are executed, all critical bugs are resolved, and the application meets the defined acceptance criteria and quality standards.",
    },
  ]);
  
  const [automationTestingFaqs] = useState([
    {
      question: "What is automation testing?",
      answer:
        "Automation testing is the use of specialized software tools to execute tests automatically, compare actual outcomes with expected results, and report the findings. It enhances efficiency and accuracy in the testing process, especially for repetitive tasks.",
    },
    {
      question: "What are the advantages of automation testing over manual testing?",
      answer:
        "Advantages include:\n - Speed: Tests run faster than manual execution.\n - Consistency: Automation eliminates human error, ensuring consistent execution.\n - Reusability: Test scripts can be reused across versions.\n - Coverage: Automation allows for extensive testing.\n - Continuous Integration: Automated tests can easily be integrated into CI/CD pipelines.",
    },
    {
      question: "What types of testing can be automated?",
      answer:
        "Types of testing suitable for automation include:\n - Regression testing\n - Smoke testing\n - Performance testing\n - Load testing\n - Functional testing\n - API testing\n - End-to-end testing.",
    },
    {
      question: "What is Selenium?",
      answer:
        "Selenium is an open-source framework for automating web applications. It supports multiple programming languages (Java, Python, C#) and browsers. Testers can write scripts to interact with web applications.",
    },
    {
      question: "What is a test automation framework?",
      answer:
        "A test automation framework is a structured approach for test automation. It includes guidelines for test script development, data management, reporting, and tool integration.",
    },
    {
      question: "What are some popular automation testing tools?",
      answer:
        "Widely used automation testing tools include Selenium, TestNG, JUnit, Cypress, Appium (for mobile testing), Postman (for API testing), and LoadRunner (for performance testing).",
    },
    {
      question: "What programming languages are commonly used in automation testing?",
      answer:
        "Common programming languages include Java, Python, C#, JavaScript, and Ruby.",
    },
    {
      question: "What is the Page Object Model (POM)?",
      answer:
        "The Page Object Model is a design pattern where each page of the application is represented by a separate class, encapsulating elements and interactions. This promotes code reusability and maintainability.",
    },
    {
      question: "How do you handle dynamic elements in Selenium?",
      answer:
        "Dynamic elements can be handled using:\n - XPath or CSS selectors that use stable attributes.\n - Explicit waits to ensure elements are available.\n - Retry mechanisms for timing issues.",
    },
    {
      question: "What is a test case and a test script?",
      answer:
        "A test case defines a scenario, including inputs, steps, and expected results. A test script automates a test case using a programming language.",
    },
    {
      question: "What is the difference between smoke testing and sanity testing?",
      answer:
        "Smoke Testing: Verifies critical functionalities work after a new build.\nSanity Testing: Focused on specific functionality or bug fixes after changes.",
    },
    {
      question: "What is regression testing?",
      answer:
        "Regression testing ensures that recent changes, such as bug fixes or new features, have not negatively impacted the existing functionality of the application.",
    },
    {
      question: "What are locators in Selenium?",
      answer:
        "Locators are methods for identifying elements on a webpage. Examples include:\n - ID\n - Name\n - Class Name\n - Tag Name\n - XPath\n - CSS Selector.",
    },
    {
      question: "What is a test suite in automation testing?",
      answer:
        "A test suite is a collection of automated test scripts grouped to run together. They can be organized based on functionality, modules, or test phases.",
    },
    {
      question: "What is Continuous Integration (CI)?",
      answer:
        "CI is a development practice where code changes are automatically tested and merged into a shared repository. Automated tests ensure the new changes do not break the application.",
    },
    {
      question: "How do you ensure maintainability in automated test scripts?",
      answer:
        "Maintainability is ensured by writing modular, reusable code using design patterns like the Page Object Model, adopting best coding practices, and regularly updating test scripts as the application evolves.",
    },
    {
      question: "What is a headless browser?",
      answer:
        "A headless browser runs without a user interface, allowing automated tests to execute faster and more efficiently. Examples include Headless Chrome and PhantomJS.",
    },
    {
      question: "How do you handle browser compatibility in automation testing?",
      answer:
        "Browser compatibility can be handled by using cross-browser testing tools like Selenium Grid, BrowserStack, or Sauce Labs, which allow testing on multiple browsers and platforms.",
    },
    {
      question: "What is parallel testing?",
      answer:
        "Parallel testing involves running multiple tests concurrently, either on different machines or different browsers, to reduce the overall test execution time.",
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
            Are you preparing for a Software Testing interview? Here are 25
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
