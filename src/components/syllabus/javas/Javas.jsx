"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBook, FaCalendarAlt } from "react-icons/fa";
import TextLight from "./TextLight";

const Javas = () => {
  const [syllabus] = useState([
    {
      title: "Introduction to Java",
      duration: "1 week",
      content: "Overview of Java, its history, and the Java Virtual Machine (JVM).",
    },
    {
      title: "Object-Oriented Programming in Java",
      duration: "2 weeks",
      content: "Understanding classes, objects, inheritance, polymorphism, and encapsulation.",
    },
    {
      title: "Data Types, Variables, and Operators",
      duration: "1 week",
      content: "Exploring primitive data types, variable declarations, and operators in Java.",
    },
    {
      title: "Control Statements and Loops",
      duration: "1 week",
      content: "Conditional statements, loops, and switch-case statements.",
    },
    {
      title: "Exception Handling",
      duration: "1 week",
      content: "Handling errors and exceptions using try-catch, throw, throws, and finally.",
    },
    {
      title: "Collections Framework",
      duration: "2 weeks",
      content: "Introduction to Java Collections: List, Set, Map, and how to use them.",
    },
    {
      title: "File Handling in Java",
      duration: "1 week",
      content: "Working with files, reading/writing data, and using I/O streams.",
    },
    {
      title: "Multithreading in Java",
      duration: "1 week",
      content: "Understanding threads, the lifecycle of threads, and concurrency control.",
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
              src="/assets/resourse/interview/java.jpg"
              alt="Java Course Image"
              width={1200}
              height={600}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-extrabold z-10">
              Java Course Syllabus
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
            Java Syllabus
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

export default Javas;
