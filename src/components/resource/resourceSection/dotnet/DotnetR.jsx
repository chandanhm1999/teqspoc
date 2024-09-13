"use client";

import { useState } from "react";
import Image from "next/image";
import { FaQuestionCircle, FaLightbulb } from "react-icons/fa";
import TextLight from "./TextLight";

const DotnetR = () => {
  const [faqs] = useState([
    {
      question: "What is .NET?",
      answer:
        ".NET is a free, open-source developer platform created by Microsoft for building various applications like web, mobile, desktop, and cloud. It supports multiple languages, such as C#, F#, and VB.NET.",
    },
    {
      question: "What is the Common Language Runtime (CLR)?",
      answer:
        "The CLR is the virtual machine component of .NET that manages code execution. It provides services like memory management, security, and exception handling.",
    },
    {
      question: "What is the difference between .NET Framework and .NET Core?",
      answer:
        ".NET Framework is a Windows-only platform for building apps, while .NET Core is a cross-platform framework that supports Windows, macOS, and Linux. .NET Core is also faster and more modular.",
    },
    {
      question: "What is an Assembly in .NET?",
      answer:
        "An assembly is a compiled code library used by .NET applications. It can be an executable (.exe) or a dynamic link library (.dll). Assemblies contain metadata, code, and resources.",
    },
    {
      question: "What is a Garbage Collector in .NET?",
      answer:
        "Garbage Collection (GC) in .NET automatically manages memory by reclaiming memory used by objects that are no longer needed by the application, improving performance and preventing memory leaks.",
    },
    {
      question: "What is ASP.NET?",
      answer:
        "ASP.NET is a web development framework that is part of the .NET platform. It allows developers to build dynamic web applications, web services, and APIs.",
    },
    {
      question: "What are the different types of JIT compilers in .NET?",
      answer:
        "There are three types of Just-In-Time (JIT) compilers in .NET: Pre-JIT (compiles entire code at once), Econo-JIT (compiles only called methods), and Normal-JIT (compiles methods on first call).",
    },
    {
      question: "What is LINQ?",
      answer:
        "LINQ (Language Integrated Query) is a .NET framework component that adds native data querying capabilities to .NET languages like C#. It allows querying of various data sources like collections, databases, and XML.",
    },
    {
      question: "What is an Interface in .NET?",
      answer:
        "An interface in .NET defines a contract that a class must follow. It contains method signatures without implementation, and any class that implements the interface must provide implementations for these methods.",
    },
    {
      question: "What is the difference between an abstract class and an interface?",
      answer:
        "An abstract class can have method implementations, fields, and constructors, while an interface can only contain method signatures. A class can inherit from one abstract class but implement multiple interfaces.",
    },
    {
      question: "What is dependency injection in .NET?",
      answer:
        "Dependency injection is a design pattern used in .NET to achieve Inversion of Control (IoC) by providing dependencies from outside the class instead of the class itself creating them. It helps in making applications more modular and testable.",
    },
    {
      question: "What is Entity Framework?",
      answer:
        "Entity Framework (EF) is an Object-Relational Mapping (ORM) framework that simplifies data access in .NET applications by allowing developers to work with data as objects rather than directly writing SQL queries.",
    },
    {
      question: "What is the purpose of async/await in .NET?",
      answer:
        "Async/await is used in .NET to write asynchronous code that allows the application to perform non-blocking operations, improving performance and responsiveness, especially for I/O-bound operations.",
    },
    {
      question: "What are .NET Namespaces?",
      answer:
        "Namespaces in .NET are used to organize classes and other types in a hierarchical manner. They help prevent naming conflicts and allow easier code management.",
    },
    {
      question: "What is a NuGet package?",
      answer:
        "A NuGet package is a collection of reusable code that developers can share and use in .NET applications. NuGet is the package manager for .NET, providing access to thousands of third-party libraries and tools.",
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
              src="/assets/resourse/interview/dotnetint.jpg"
              alt="Featured Image"
              width={1200}
              height={600}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-extrabold z-10">
              DotNet Interview Questions
            </h2>
          </div>
          <p className="text-gray-700 mt-6 mb-4 leading-relaxed">
            Are you preparing for a DotNet interview? Here are 15
            essential questions to help you succeed in your interview and
            demonstrate your mastery of Scrum.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Top DotNet Interview Questions & Answers
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

export default DotnetR;
