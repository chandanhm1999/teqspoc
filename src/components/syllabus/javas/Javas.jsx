"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBook, FaCalendarAlt } from "react-icons/fa";
import TextLight from "./TextLight";

const Javas = () => {
  const [syllabus] = useState([
    {
      section: "Introduction to Java and OOPS",
      topics: [
        "Java Tokens- Comments, Identifiers, Keywords, Separators",
        "Working with Java Editor Softwares – Editplus, NetBeans, Eclipse",
        "Packages with static imports",
        "Working with jar",
      ],
    },
    {
      section: "Modifiers, Datatypes, and Control Flow",
      topics: [
        "Modifiers – File level, Access level and Non-access level",
        "Datatypes, Literals, Variables, Type Conversion, Casting & Promotion",
        "Reading runtime values from keyboard and Properties File",
        "Operators and Control Statements",
      ],
    },
    {
      section: "Methods, Variables, and Constructors",
      topics: [
        "Method and Types of methods",
        "Variable and Types of Variables",
        "Constructor and Types of constructors",
        "Block and Types of Blocks",
      ],
    },
    {
      section: "Execution Flow and Architecture",
      topics: [
        "Declarations, Invocations and Executions",
        "Compiler & JVM Architecture with Reflection API",
        "Static Members and their execution control flow",
        "Non-Static Members and their execution control flow",
        "Final Variables and their rules",
      ],
    },
    {
      section: "OOP Principles and Advanced Concepts",
      topics: [
        "Classes and Types of classes",
        "OOPS- Fundamentals, Models, Relations and Principles",
        "Coupling and Cohesion (MVC and LCRP Architectures)",
        "Types of objects & Garbage Collection",
        "Arrays and Var-arg types",
        "Enum and Annotation",
      ],
    },
    {
      section: "Design Patterns and Java API",
      topics: [
        "Design Patterns",
        "Java API and Project",
        "API and API Documentation",
        "Fundamental Classes – Object, Class, System, Runtime",
        "String Handling",
      ],
    },
    {
      section: "Advanced Java Features",
      topics: [
        "Exception Handling and Assertions",
        "Multithreading with JVM Architecture",
        "IO Streams (File IO)",
        "Wrapper Classes with Auto boxing and unboxing",
        "Collections with Generics",
        "Java 5, 6, 7, 8 new features",
        "Inner classes",
      ],
    },
    {
      section: "Hibernate and ORM",
      topics: [
        "Hibernate Training Course Overview",
        "Advantages of Hibernate compared to JDBC",
        "Introduction to ORM (Object Relational Mapping)",
        "Hibernate Resources",
        "Configuration file",
        "Mapping file",
        "Persistent class or POJO",
        "Client application",
        "Hibernate Architecture",
        "Installation and Directory Structure",
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

          <div className="mt-6">
            {syllabus.map((module, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">{module.section}</h3>
                <ul className="list-disc list-inside space-y-2">
                  {module.topics.map((topic, idx) => (
                    <li key={idx} className="text-gray-700 text-lg">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Left column for syllabus list */}
        <div className="w-full md:w-3/12 mb-8">
          <h3 className="text-2xl font-extrabold mb-4 text-center">
            Java Syllabus
            <TextLight text={"Courses"} />
          </h3>
          <ul className="list-none space-y-4">
            {syllabus.map((module, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 hover:bg-blue-100 p-3 rounded-lg transition duration-200 ease-in-out cursor-pointer"
              >
                <p className="text-gray-800 font-medium">
                  {index + 1}. {module.section}
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