"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBook } from "react-icons/fa";
import TextLight from "./TextLight";

const Testings = () => {
  const [manualTestingSyllabus] = useState([
    {
      title: "Introduction to testing",
      content: [
        "Verification vs validation",
        "Types of Applications",
        "Probabilities of getting an error in an application",
      ],
    },
    {
      title: "SDLC – Software Development Life Cycle",
      content: [
        "Waterfall",
        "Prototype",
        "Spiral",
        "Incremental (Agile methodology and Scrum Framework)",
        "V-Model",
        "Advantages and Disadvantages of each software development life cycle",
      ],
    },
    {
      title: "Principles of Testing",
      content: [
        "STLC –Software Testing Life Cycle",
        "Difference between Test case, Use case and Scenario",
        "How to prepare test plan and strategy",
        "How to prepare a test case template?",
      ],
    },
    {
      title: "Test Case Design Technique",
      content: [
        "Boundary Value Analysis",
        "Equivalence Partitioning",
        "Decision Table",
        "State Transition Diagram",
        "Use Case Testing",
      ],
    },
    {
      title: "Bug Life cycle",
      content: [
        "How to Prepare the Bug template?",
        "Bug Tracking tool",
        "Types of Testing",
      ],
    },
    {
      title: "Difference between Static and Dynamic testing",
      content: [
        "Difference between Functional and Non-functional testing",
        "Black box testing and its types",
        "White box testing and its types",
        "System Integration Testing vs User Acceptance Testing",
      ],
    },
    {
      title: "Integration testing",
      content: [
        "Incremental Approach – Top-Down, Bottom-up, and Hybrid",
        "Requirement traceability matrix",
      ],
    },
  ]);

  const [automationTestingSyllabus] = useState([
    {
      title: "Pre-Selenium",
      content: [
        "Setup Java environment – Download JDK and Setup eclipse",
        "Core Java - Keywords and Syntax",
        "Variables, operators, and control flows",
        "OOPs overview from Java context",
        "Exception Handling, File and DB handling",
      ],
    },
    {
      title: "Selenium",
      content: [
        "Introduction to Automation Testing",
        "What is Selenium? Components of Selenium Suite",
        "Selenium WebDriver Basics",
        "Handling WebElements, Alerts, and Pop-ups",
        "WebDriver TestNG - Annotations, Parallel Execution",
        "Reports using TestNG, ReportNG",
      ],
    },
    {
      title: "Post Selenium",
      content: [
        "Maven Project Management Tool",
        "Version Control Tool GITHUB",
        "Continuous Integration Testing using Jenkins",
        "Log4j",
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
              src="/assets/resourse/interview/testing.jpg"
              alt="Software Testing Course Image"
              width={1200}
              height={600}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-extrabold z-10">
              Software Testing Course Syllabus
            </h2>
          </div>

          {/* Manual Testing Syllabus */}
          <section className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Manual Testing Course Syllabus
            </h3>
            {manualTestingSyllabus.map((item, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-xl font-semibold text-gray-700">{item.title}</h4>
                <ul className="list-disc list-inside ml-5 text-gray-600">
                  {item.content.map((contentItem, idx) => (
                    <li key={idx}>{contentItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Automation Testing Syllabus */}
          <section className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Automation Testing Course Syllabus
            </h3>
            {automationTestingSyllabus.map((item, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-xl font-semibold text-gray-700">{item.title}</h4>
                <ul className="list-disc list-inside ml-5 text-gray-600">
                  {item.content.map((contentItem, idx) => (
                    <li key={idx}>{contentItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>

        {/* Left column for syllabus list */}
        <div className="w-full md:w-3/12 mb-8">
          <h3 className="text-2xl font-extrabold mb-4 text-center">
            Software Testing Syllabus
            <TextLight text={"Courses"} />
          </h3>
          <ul className="list-none space-y-4">
            {[...manualTestingSyllabus, ...automationTestingSyllabus].map(
              (item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 hover:bg-blue-100 p-3 rounded-lg transition duration-200 ease-in-out cursor-pointer"
                >
                  <FaBook className="w-6 h-6 text-blue-500" />
                  <p className="text-gray-800 font-medium">
                    {index + 1}. {item.title}
                  </p>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Testings;
