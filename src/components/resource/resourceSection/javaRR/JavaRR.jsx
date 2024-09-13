"use client";

import { useState } from "react";
import Image from "next/image";
import {FaLightbulb } from "react-icons/fa";
import TextLight from "./TextLight";

const JavaRR = () => {
  const [faqs] = useState([
    {
      question: "What is Java?",
      answer:
        "Java is a high-level, object-oriented programming language developed by Sun Microsystems. It is designed to be platform-independent, which means that Java programs can run on any device that has a Java Virtual Machine (JVM).",
    },
    {
      question: "What is the JVM?",
      answer:
        "The Java Virtual Machine (JVM) is an abstract machine that provides the environment in which Java bytecode can be executed. It enables Java's platform independence by translating bytecode into machine code for the host system.",
    },
    {
      question: "What is the difference between JDK and JRE?",
      answer:
        "The Java Development Kit (JDK) is a software development kit used to develop Java applications, including the JRE and development tools like the compiler and debugger. The Java Runtime Environment (JRE) provides the libraries and JVM needed to run Java applications but does not include development tools.",
    },
    {
      question: "What are Java's access modifiers?",
      answer:
        "Java has four access modifiers: `public`, `protected`, `default` (no modifier), and `private`. They determine the visibility of classes, methods, and variables across different parts of the program.",
    },
    {
      question: "What is inheritance in Java?",
      answer:
        "Inheritance is a fundamental concept in object-oriented programming where a new class (subclass) inherits properties and behaviors from an existing class (superclass). It allows for code reusability and hierarchical class organization.",
    },
    {
      question: "What is polymorphism in Java?",
      answer:
        "Polymorphism in Java allows objects to be treated as instances of their parent class rather than their actual class. It enables a single method to have different implementations, which is typically achieved through method overriding and method overloading.",
    },
    {
      question: "What is encapsulation in Java?",
      answer:
        "Encapsulation is the concept of wrapping data (variables) and code (methods) together as a single unit called a class. It restricts direct access to some of the object's components, which is achieved by using access modifiers and getter/setter methods.",
    },
    {
      question: "What are Java interfaces?",
      answer:
        "Interfaces in Java are abstract types that allow you to specify methods that a class must implement. Unlike classes, interfaces cannot have instance variables or method implementations (prior to Java 8). They are used to achieve abstraction and multiple inheritance.",
    },
    {
      question: "What is the difference between `==` and `.equals()` in Java?",
      answer:
        "`==` checks if two references point to the same object in memory, while `.equals()` checks if two objects are logically equivalent, based on the implementation of the `equals()` method in the class.",
    },
    {
      question: "What is exception handling in Java?",
      answer:
        "Exception handling in Java is a mechanism to handle runtime errors, allowing the program to continue executing or to perform specific actions when an error occurs. It is done using `try`, `catch`, `finally`, and `throw` statements.",
    },
    {
      question: "What is a Java thread?",
      answer:
        "A thread in Java is a lightweight process that allows concurrent execution of two or more parts of a program. Threads share the same memory space and can be managed using the `Thread` class or implementing the `Runnable` interface.",
    },
    {
      question: "What is the Java Collections Framework?",
      answer:
        "The Java Collections Framework is a set of classes and interfaces that implement commonly used data structures and algorithms, such as lists, sets, maps, and queues. It provides standard methods for storing, retrieving, and manipulating collections of objects.",
    },
    {
      question: "What is a Java lambda expression?",
      answer:
        "A lambda expression in Java provides a clear and concise way to represent a single method interface (functional interface) using an expression. It allows you to write anonymous methods that can be passed as arguments or assigned to variables.",
    },
    {
      question: "What is the difference between `ArrayList` and `LinkedList` in Java?",
      answer:
        "`ArrayList` uses a dynamic array to store elements, which provides fast random access but slower insertions and deletions. `LinkedList`, on the other hand, uses a doubly linked list, which provides faster insertions and deletions but slower access times.",
    },
    {
      question: "What is the `final` keyword in Java?",
      answer:
        "The `final` keyword in Java is used to define constants, prevent method overriding, and inheritance. It can be applied to variables (to make them constants), methods (to prevent overriding), and classes (to prevent inheritance).",
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
              src="/assets/resourse/interview/javamain.jpg"
              alt="Featured Image"
              width={1200}
              height={600}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-extrabold z-10">
              Java Interview Questions
            </h2>
          </div>
          <p className="text-gray-700 mt-6 mb-4 leading-relaxed">
            Are you preparing for a Java interview? Here are 15
            essential questions to help you succeed in your interview and
            demonstrate your mastery of Scrum.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Top Java Interview Questions & Answers
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

export default JavaRR;
