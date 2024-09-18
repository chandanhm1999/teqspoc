"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBook, FaCalendarAlt } from "react-icons/fa";
import TextLight from "./TextLight";

const Testings = () => {
  const [syllabus] = useState([
    {
      title: "Introduction to Software Testing",
      duration: "1 week",
      content: "Understanding the basics of software testing, types, and importance.",
    },
    {
      title: "Manual Testing Fundamentals",
      duration: "2 weeks",
      content: "Test planning, test case design, execution, and bug reporting.",
    },
    {
      title: "Automation Testing Basics",
      duration: "2 weeks",
      content: "Introduction to automation tools like Selenium, and creating automated scripts.",
    },
    {
      title: "Test Management Tools",
      duration: "1 week",
      content: "Working with tools like JIRA, TestRail, and Bugzilla for tracking and management.",
    },
    {
      title: "API Testing",
      duration: "1 week",
      content: "Testing APIs using tools like Postman and understanding RESTful services.",
    },
    {
      title: "Performance Testing",
      duration: "1 week",
      content: "Introduction to performance testing tools like JMeter and LoadRunner.",
    },
    {
      title: "Security Testing",
      duration: "1 week",
      content: "Basics of security testing, vulnerabilities, and tools like OWASP ZAP.",
    },
    {
      title: "Test Automation Frameworks",
      duration: "2 weeks",
      content: "Building and managing automation frameworks, including keyword-driven and data-driven frameworks.",
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {syllabus.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-3">
                  <FaBook className="w-6 h-6 text-blue-500" />
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
            Software Testing Syllabus
            <TextLight text={"Courses"} />
          </h3>
          <ul className="list-none space-y-4">
            {syllabus.map((item, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 hover:bg-blue-100 p-3 rounded-lg transition duration-200 ease-in-out cursor-pointer"
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

export default Testings;