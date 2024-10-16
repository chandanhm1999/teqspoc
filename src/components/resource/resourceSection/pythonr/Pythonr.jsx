"use client";

import { useState } from "react";
import Image from "next/image";
import { FaQuestionCircle, FaLightbulb } from "react-icons/fa";
import TextLight from "./TextLight";

const Amilr = () => {
  const [faqs] = useState([
    {
      question: "What is Python?",
      answer: 
        "Python is a high-level, interpreted programming language known for its simplicity and readability. It supports multiple programming paradigms including object-oriented, functional, and procedural programming.",
    },
    {
      question: "What are Python’s key features?",
      answer:
        "• Simple and easy to learn\n• Interpreted language\n• Object-oriented\n• Dynamically typed\n• Extensive libraries and frameworks\n• Cross-platform compatibility",
    },
    {
      question: "How is memory managed in Python?",
      answer:
        "Memory management in Python is handled by the Python memory manager.\n\n• Private Heap: Stores all objects and data structures.\n• Garbage Collection: Manages and deallocates unused memory.\n• Reference Counting: Tracks the number of references to objects.",
    },
    {
      question: "What are Python’s built-in data types?",
      answer:
        "• Numeric: int, float, complex\n• Sequences: list, tuple, str\n• Set: set, frozenset\n• Mapping: dict\n• Boolean: bool\n• None: NoneType",
    },
    {
      question: "What is a list, and how is it different from a tuple?",
      answer:
        "• List: Mutable, defined using square brackets [].\n• Tuple: Immutable, defined using parentheses ().",
    },
    {
      question: "What is PEP 8?",
      answer: 
        "PEP 8 is the style guide for writing Python code. It ensures readability and consistency.",
    },
    {
      question: "What is the difference between append() and extend() in Python?",
      answer:
        "• append(): Adds an element to the end of the list as a single item.\n• extend(): Adds elements of an iterable to the list.",
    },
    {
      question: "What are *args and **kwargs?",
      answer:
        "• *args: Used to pass a variable number of positional arguments.\n• **kwargs: Used to pass a variable number of keyword arguments.",
    },
    {
      question: "What is a lambda function?",
      answer:
        "A lambda function is an anonymous function expressed as:\n\nlambda arguments: expression",
    },
    {
      question: "What is the difference between shallow copy and deep copy?",
      answer:
        "• Shallow copy: Creates a new object but inserts references to the original objects.\n• Deep copy: Copies all objects recursively, creating independent copies.",
    },
    {
      question: "How is exception handling done in Python?",
      answer:
        "Using try-except blocks:\n\ntry:\n    # risky code\nexcept ExceptionType:\n    # handling code",
    },
    {
      question: "What is the difference between is and ==?",
      answer:
        "• is: Checks identity (whether two objects are the same in memory).\n• ==: Checks value equality (whether the values are the same).",
    },
    {
      question: "What are Python decorators?",
      answer:
        "Decorators are functions that modify the behavior of another function or method. They extend functionality without modifying the code.",
    },
    {
      question: "What is a generator in Python?",
      answer:
        "A generator is a function that returns an iterator object, using the yield keyword to produce values one at a time.",
    },
    {
      question: "What is a module in Python?",
      answer:
        "A module is a file containing Python code (functions, classes, variables). Modules can be imported and reused in other scripts.",
    },
    {
      question: "How do you create a virtual environment in Python?",
      answer:
        "To create a virtual environment:\n\npython -m venv myenv\n\nActivate it:\n• Windows: myenv\\Scripts\\activate\n• Mac/Linux: source myenv/bin/activate",
    },
    {
      question: "What is GIL (Global Interpreter Lock)?",
      answer:
        "GIL is a mutex in CPython that allows only one thread to execute Python bytecode at a time, limiting multi-threading performance in CPU-bound tasks.",
    },
    {
      question: "What is the difference between __str__() and __repr__()?",
      answer:
        "• __str__(): Provides a human-readable representation.\n• __repr__(): Provides a formal string representation (often used for debugging).",
    },
    {
      question: "What is list comprehension in Python?",
      answer:
        "A concise way to create lists:\n\nsquares = [x**2 for x in range(10)]",
    },
    {
      question: "What is the difference between a function and a method?",
      answer:
        "• Function: A standalone block of code.\n• Method: A function associated with an object (e.g., a method in a class).",
    },
    {
      question: "How do you handle files in Python?",
      answer:
        "Files are opened using the open() function:\n\nwith open('file.txt', 'r') as file:\n    data = file.read()",
    },
    {
      question: "What is monkey patching in Python?",
      answer:
        "Monkey patching allows you to dynamically change a class or module at runtime, often used for testing purposes.",
    },
    {
      question: "What is the use of super() in Python?",
      answer:
        "super() is used to call the parent class method in a child class, ensuring proper method resolution order (MRO) in multiple inheritance.",
    },
    {
      question: "How do you manage packages in Python?",
      answer:
        "Python packages are managed using pip:\n\npip install package_name",
    },
    {
      question: "What is the difference between Python 2 and Python 3?",
      answer:
        "• Python 3 has better Unicode support.\n• Integer division uses / for float division and // for integer division.\n• print() is a function in Python 3.",
    },
    {
      question: "How do you handle multiple exceptions in Python?",
      answer:
        "Using try-except blocks for multiple exceptions:\n\ntry:\n    # code\nexcept (TypeError, ValueError):\n    # handling code",
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
              src="/assets/resourse/interview/ml.jpg"
              alt="Featured Image"
              width={1200}
              height={600}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-extrabold z-10">
            AI/ML Interview Questions
            </h2>
          </div>
          <p className="text-gray-700 mt-6 mb-4 leading-relaxed">
            Are you preparing for a AI/ML interview? Here are 19
            essential questions to help you succeed in your interview and
            demonstrate your mastery of AI/ML.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Top AI/ML Interview Questions & Answers
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

export default Amilr;