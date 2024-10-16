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
        ".NET is a software development framework by Microsoft that enables developers to create applications for Windows, web, and mobile platforms using various programming languages.",
    },
    {
      question: "What are the different types of .NET frameworks?",
      answer:
        "The primary types are: \n• .NET Framework: Windows-only framework. \n• .NET Core: Cross-platform framework. \n• .NET 5/6: Unifies .NET Framework and .NET Core for building applications across platforms.",
    },
    {
      question: "What is the Common Language Runtime (CLR)?",
      answer:
        "CLR is the execution engine for .NET applications, managing memory, thread execution, and providing services like garbage collection and exception handling.",
    },
    {
      question: "What is the Global Assembly Cache (GAC)?",
      answer:
        "GAC is a machine-wide cache for storing .NET assemblies that are shared across multiple applications, allowing for versioning and side-by-side execution.",
    },
    {
      question: "What are value types and reference types?",
      answer:
        "• Value Types: Store actual data (e.g., int, float, struct). \n• Reference Types: Store references to data (e.g., class, array, string).",
    },
    {
      question: "Explain the concept of delegates in C#.",
      answer:
        "Delegates are type-safe function pointers that allow methods to be passed as parameters, enabling event handling and callback functionality.",
    },
    {
      question: "What is an interface? How does it differ from an abstract class?",
      answer:
        "An interface defines a contract without implementation, allowing multiple implementations. An abstract class can have both abstract methods (without implementation) and concrete methods (with implementation) and supports single inheritance.",
    },
    {
      question: "What is the purpose of the using statement in C#?",
      answer:
        "The using statement ensures that IDisposable objects are disposed of correctly and promptly, freeing up resources automatically.",
    },
    {
      question: "What is Entity Framework?",
      answer:
        "Entity Framework (EF) is an Object-Relational Mapping (ORM) framework for .NET that allows developers to work with databases using .NET objects instead of SQL queries.",
    },
    {
      question: "What is LINQ?",
      answer:
        "LINQ (Language Integrated Query) is a feature in .NET that provides a consistent way to query and manipulate data from various sources (e.g., collections, databases) using C# syntax.",
    },
    {
      question: "What are the differences between == and Equals() in C#?",
      answer:
        "== compares the references of two objects (for reference types) or values (for value types), while Equals() is a method that can be overridden to compare object content.",
    },
    {
      question: "What is garbage collection in .NET?",
      answer:
        "Garbage collection is the automatic memory management feature of the CLR, which reclaims memory occupied by objects that are no longer in use, preventing memory leaks.",
    },
    {
      question: "What is dependency injection?",
      answer:
        "Dependency injection is a design pattern used to achieve Inversion of Control (IoC) by injecting dependencies into a class rather than the class creating them, promoting decoupling and testability.",
    },
    {
      question: "What is middleware in ASP.NET Core?",
      answer:
        "Middleware is software that is assembled into an application pipeline to handle requests and responses, allowing for functionalities like logging, authentication, and error handling.",
    },
    {
      question: "What is the purpose of async and await in C#?",
      answer:
        "async and await are used to write asynchronous code, allowing operations to run in the background without blocking the main thread, improving application responsiveness.",
    },
    {
      question: "What is ASP.NET MVC?",
      answer:
        "ASP.NET MVC is a web application framework that follows the Model-View-Controller design pattern, allowing for separation of concerns, making applications easier to manage and test.",
    },
    {
      question: "What is the difference between REST and SOAP?",
      answer:
        "REST (Representational State Transfer) is an architectural style that uses HTTP requests for communication, typically with JSON or XML data. SOAP (Simple Object Access Protocol) is a protocol that relies on XML for message formatting and typically uses HTTP or SMTP for message negotiation and transmission.",
    },
    {
      question: "How do you handle exceptions in .NET?",
      answer:
        "Exceptions can be handled using try-catch blocks to catch and respond to exceptions, ensuring that the application can continue running or fail gracefully.",
    },
    {
      question: "What is caching, and how is it used in .NET?",
      answer:
        "Caching is storing data in memory to improve performance by reducing data retrieval times. In .NET, caching can be implemented using the MemoryCache class or distributed cache solutions like Redis.",
    },
    {
      question: "Explain the concept of attributes in C#.",
      answer:
        "Attributes are metadata added to program elements (classes, methods, properties) that provide additional information and can be accessed at runtime using reflection.",
    },
    {
      question: "What is the difference between IEnumerable and IQueryable?",
      answer:
        "IEnumerable is used for in-memory collections, allowing iteration, while IQueryable is designed for querying data from an external data source (like a database) and allows for building SQL queries.",
    },
    {
      question: "How do you implement logging in a .NET application?",
      answer:
        "Logging can be implemented using built-in frameworks like ILogger in ASP.NET Core or third-party libraries like Serilog or NLog, capturing different log levels (e.g., Information, Warning, Error).",
    },
    {
      question: "What is a ViewModel in ASP.NET MVC?",
      answer:
        "A ViewModel is a model specifically designed for a particular view in an ASP.NET MVC application, combining data from multiple models and including additional properties needed for the view.",
    },
    {
      question: "What is the difference between a thread and a task in .NET?",
      answer:
        "A thread is a lower-level construct that represents a single path of execution, while a task is a higher-level abstraction that represents an asynchronous operation, managed by the Task Parallel Library.",
    },
    {
      question: "How do you perform unit testing in .NET?",
      answer:
        "Unit testing in .NET can be done using testing frameworks like xUnit, NUnit, or MSTest, allowing developers to create and run tests to validate the functionality of code.",
    },
    {
      question: "What is the role of the Startup class in ASP.NET Core?",
      answer:
        "The Startup class is where the application configuration takes place, including service registration and middleware configuration in the ConfigureServices and Configure methods.",
    },
    {
      question: "What are the different types of authentication in ASP.NET?",
      answer:
        "Common authentication methods include: \n• Basic Authentication: Simple username/password authentication. \n• Forms Authentication: Custom login forms for web applications. \n• Token-Based Authentication: Using tokens (e.g., JWT) for stateless authentication. \n• OAuth/OpenID Connect: Delegated authorization using third-party identity providers.",
    },
    {
      question: "What is the purpose of the Web.config file?",
      answer:
        "Web.config is an XML configuration file used in ASP.NET applications to manage application settings, including database connections, authentication settings, and custom configurations.",
    },
    {
      question: "Explain the MVC design pattern.",
      answer:
        "The MVC pattern separates an application into three main components: \n• Model: Represents the data and business logic. \n• View: Represents the UI elements that display data to the user. \n• Controller: Acts as an intermediary between the Model and View, handling user input and updating the Model.",
    },
    {
      question: "What is the difference between asynchronous and parallel programming?",
      answer:
        "Asynchronous programming is about non-blocking operations, allowing the program to continue executing while waiting for a task to complete. Parallel programming involves executing multiple tasks simultaneously, utilizing multiple threads to perform computations faster.",
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
            Are you preparing for a DotNet interview? Here are 30
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
