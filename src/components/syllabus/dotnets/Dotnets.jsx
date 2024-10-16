"use client";

import { useState } from "react";
import Image from "next/image";
import TextLight from "./TextLight";

const Dotnets = () => {
  const [syllabus] = useState([
    {
      section: "Introduction to .NET",
      topics: [
        "Overview of .NET Framework and .NET Core",
        "Differences between .NET Framework, .NET Core, and .NET 5/6",
        "Introduction to Common Language Runtime (CLR) and Common Type System (CTS)",
        ".NET Standard and its significance",
        "Understanding the .NET ecosystem (NuGet, libraries, tools)",
      ],
    },
    {
      section: "Programming with C#",
      topics: [
        "Introduction to C# language",
        "Data types, variables, and operators",
        "Control structures (if, switch, loops)",
        "Methods and parameters",
        "OOP concepts: Classes and objects, Inheritance, Polymorphism, Encapsulation",
        "Exception handling",
        "Collections (arrays, lists, dictionaries)",
      ],
    },
    {
      section: "Advanced C# Concepts",
      topics: [
        "Delegates and events",
        "Lambda expressions",
        "LINQ (Language Integrated Query)",
        "Asynchronous programming with async/await",
        "Generics in C#",
        "Attributes and reflection",
      ],
    },
    {
      section: "Building Desktop Applications",
      topics: [
        "Introduction to Windows Forms",
        "Creating a Windows Forms application",
        "Working with controls and events",
        "Data binding in Windows Forms",
        "Introduction to WPF (Windows Presentation Foundation)",
        "XAML basics and layout controls",
        "MVVM (Model-View-ViewModel) design pattern",
      ],
    },
    {
      section: "Web Development with ASP.NET",
      topics: [
        "Introduction to ASP.NET Core",
        "Creating your first ASP.NET Core application",
        "MVC (Model-View-Controller) architecture",
        "Routing and middleware",
        "Working with views and layouts",
        "Form handling and validation",
        "Dependency injection in ASP.NET Core",
      ],
    },
    {
      section: "Web API Development",
      topics: [
        "Introduction to RESTful services",
        "Creating and configuring Web APIs with ASP.NET Core",
        "Routing, controllers, and action methods",
        "Working with JSON and XML",
        "Authentication and authorization (JWT, OAuth)",
        "Versioning APIs",
        "Testing APIs with Postman or Swagger",
      ],
    },
    {
      section: "Data Access in .NET",
      topics: [
        "Introduction to Entity Framework Core",
        "Code-first vs. database-first approaches",
        "Database migrations and seeding",
        "CRUD operations with Entity Framework",
        "Working with SQL Server",
        "Introduction to Dapper as an alternative ORM",
      ],
    },
    {
      section: "Front-End Development (Optional)",
      topics: [
        "Overview of front-end technologies (HTML, CSS, JavaScript)",
        "Introduction to Blazor",
        "Building interactive web applications with Blazor",
        "State management in Blazor",
      ],
    },
    {
      section: "Cloud and Deployment",
      topics: [
        "Introduction to Azure services",
        "Deploying .NET applications to Azure",
        "Understanding Azure App Services",
        "Introduction to Azure Functions",
        "Monitoring and logging applications",
      ],
    },
    {
      section: "Best Practices and Design Patterns",
      topics: [
        "Introduction to software design principles (SOLID, DRY, KISS)",
        "Common design patterns in .NET (Repository, Unit of Work, Singleton)",
        "Testing methodologies (unit testing, integration testing)",
        "Introduction to xUnit or NUnit for testing",
        "Continuous integration and continuous deployment (CI/CD)",
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
              src="/assets/resourse/interview/dotnetint.jpg"
              alt=".NET Course Image"
              width={1200}
              height={600}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-extrabold z-10">
              .NET Course Syllabus
            </h2>
          </div>

          <div className="mt-6 ml-4">
            {syllabus.map((module, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-bold text-gray-600 mb-4">{module.section}</h3>
                <ul className="list-disc list-inside space-y-2">
                  {module.topics.map((topic, idx) => (
                    <li key={idx} className="text-gray-700 text-[16px]">
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
          <h3 className="text-2xl font-extrabold mb-4 text-start">
            .NET 
            <TextLight text={"Syllabus"} />
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

export default Dotnets;
