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
        "Java is a high-level, object-oriented programming language designed for platform independence and security.",
    },
    {
      question: "What are the main features of Java?",
      answer:
        "Platform independence, object-oriented, robustness, security, multithreading, and rich API.",
    },
    {
      question: "What is the difference between JDK, JRE, and JVM?",
      answer:
        "JDK (Java Development Kit) is for development, JRE (Java Runtime Environment) is for running applications, and JVM (Java Virtual Machine) executes Java bytecode.",
    },
    {
      question: "What is an object in Java?",
      answer:
        "An object is an instance of a class, encapsulating data and behavior.",
    },
    {
      question: "What is a class in Java?",
      answer:
        "A class is a blueprint for creating objects, defining attributes and methods.",
    },
    {
      question: "Explain inheritance in Java.",
      answer:
        "Inheritance allows one class to inherit the properties and methods of another, promoting code reuse.",
    },
    {
      question: "What is polymorphism in Java?",
      answer:
        "Polymorphism allows methods to do different things based on the object calling them, achieved through method overloading and overriding.",
    },
    {
      question: "What are interfaces in Java?",
      answer:
        "An interface defines a contract of methods without implementation. Classes that implement it must provide concrete methods.",
    },
    {
      question: "What is the difference between an interface and an abstract class?",
      answer:
        "Abstract classes can have both abstract and concrete methods and support single inheritance, while interfaces can only have abstract methods and support multiple inheritance.",
    },
    {
      question: "What are Java Collections?",
      answer:
        "Java Collections is a framework for storing and manipulating groups of objects, including lists, sets, and maps.",
    },
    {
      question: "What is the difference between ArrayList and LinkedList?",
      answer:
        "ArrayList provides fast random access and slower insertions, while LinkedList provides faster insertions and deletions but slower access.",
    },
    {
      question: "What is exception handling in Java?",
      answer:
        "Exception handling is a mechanism to handle runtime errors using try, catch, finally, throw, and throws.",
    },
    {
      question: "What is a constructor in Java?",
      answer:
        "A constructor initializes objects when they are created and has the same name as the class.",
    },
    {
      question: "What are static members in Java?",
      answer:
        "Static members belong to the class rather than instances and can be accessed without creating an object.",
    },
    {
      question: "What is the final keyword in Java?",
      answer:
        "The final keyword restricts modifications: final variables cannot be reassigned, final methods cannot be overridden, and final classes cannot be extended.",
    },
    {
      question: "What is multithreading in Java?",
      answer:
        "Multithreading is the ability of Java to perform multiple tasks concurrently using threads.",
    },
    {
      question: "What is the Java Virtual Machine (JVM)?",
      answer:
        "JVM is an abstract machine that executes Java bytecode, enabling platform independence.",
    },
    {
      question: "What is the difference between == and equals() in Java?",
      answer:
        "== compares object references, while equals() compares the content of objects.",
    },
    {
      question: "What is garbage collection in Java?",
      answer:
        "Garbage collection automatically reclaims memory by removing objects that are no longer referenced.",
    },
    {
      question: "What is the Singleton design pattern?",
      answer:
        "The Singleton pattern ensures a class has only one instance and provides a global access point.",
    },
    {
      question: "What is method overloading?",
      answer:
        "Method overloading allows multiple methods with the same name but different parameters in a class.",
    },
    {
      question: "What is method overriding?",
      answer:
        "Method overriding provides a specific implementation of a method in a subclass that already exists in the superclass.",
    },
    {
      question: "What is the use of the this keyword in Java?",
      answer:
        "this refers to the current instance of a class and is used to differentiate instance variables from parameters.",
    },
    {
      question: "What is the difference between an abstract class and an interface?",
      answer:
        "An abstract class can have both abstract and concrete methods; an interface can only have abstract methods (prior to Java 8).",
    },
    {
      question: "What are Java annotations?",
      answer:
        "Annotations provide metadata about the program and can be used for various purposes, including documentation and compile-time checking.",
    },
    {
      question: "What is a Java try-with-resources statement?",
      answer:
        "This statement ensures that resources (like files) are closed automatically after use, improving resource management.",
    },
    {
      question: "What are lambda expressions in Java?",
      answer:
        "Lambda expressions provide a concise way to represent functional interfaces (single abstract method interfaces) using an expression instead of an implementation.",
    },
    {
      question: "What is the Stream API in Java?",
      answer:
        "The Stream API allows processing sequences of elements (like collections) in a functional style, enabling operations like filtering, mapping, and reducing.",
    },
    {
      question: "What is the difference between ArrayList and Vector?",
      answer:
        "ArrayList is not synchronized and is generally faster; Vector is synchronized and thread-safe but slower due to overhead.",
    },
    {
      question: "What is the volatile keyword in Java?",
      answer:
        "The volatile keyword indicates that a variable's value may be changed by different threads, ensuring visibility of changes to the variable across threads.",
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
            Are you preparing for a Java interview? Here are 30
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
