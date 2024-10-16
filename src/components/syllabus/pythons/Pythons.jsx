"use client";

import { useState } from "react";
import Image from "next/image";
import TextLight from "./TextLight";

const Pythons = () => {
  const [syllabus] = useState([
    {
      section: "Introduction to Python Programming",
      topics: [
        "History and Features of Python",
        "Installing Python and Setting Up the Environment",
        "Installing Python (Windows, Mac, Linux)",
        "Introduction to Python IDEs (PyCharm, VS Code, Jupyter Notebook)",
        "Running Python Programs",
        "Interactive Mode vs Script Mode",
        "Basic Syntax",
        "Python Keywords and Identifiers",
        "Writing Comments",
      ],
    },
    {
      section: "Variables, Data Types, and Operators",
      topics: [
        "Variables and Assignments",
        "Dynamic Typing, Multiple Assignments",
        "Python Data Types",
        "Numbers (int, float, complex)",
        "Strings, Lists, Tuples, Sets, and Dictionaries",
        "Type Conversion",
        "Basic I/O in Python",
        "input() and print()",
        "Operators",
        "Arithmetic, Relational, Logical, Bitwise, Assignment, and Identity Operators",
        "Operator Precedence",
      ],
    },
    {
      section: "Control Flow Statements",
      topics: [
        "Conditional Statements",
        "if, if-else, if-elif-else",
        "Looping Constructs",
        "for Loop, while Loop",
        "Loop Control Statements (break, continue, pass)",
        "List Comprehensions",
      ],
    },
    {
      section: "Functions and Modules",
      topics: [
        "Defining and Calling Functions",
        "Function Parameters and Arguments",
        "Default Arguments, Keyword Arguments",
        "Variable-length Arguments (*args, **kwargs)",
        "return Statement",
        "Lambda Functions",
        "Recursion",
        "Creating and Importing Modules",
        "Using Built-in Modules (math, random, datetime)",
        "Installing and Using Third-Party Packages (e.g., pip)",
      ],
    },
    {
      section: "Python Data Structures",
      topics: [
        "Lists",
        "Creating, Accessing, Slicing, Modifying Lists",
        "List Methods and Comprehension",
        "Tuples",
        "Creating, Accessing, and Unpacking Tuples",
        "Sets",
        "Set Operations (Union, Intersection, Difference)",
        "Frozen Sets",
        "Dictionaries",
        "Creating, Accessing, and Modifying Dictionaries",
        "Dictionary Methods",
        "String Manipulation",
        "String Operations, Methods, and Formatting",
        "String Slicing",
      ],
    },
    {
      section: "File Handling",
      topics: [
        "Reading and Writing Files (open(), read(), write(), close())",
        "Reading and Writing in Text and Binary Mode",
        "Using with Statement for File Handling",
        "Exception Handling in File I/O",
      ],
    },
    {
      section: "Exception Handling",
      topics: [
        "Types of Errors (Syntax Errors, Logical Errors)",
        "try, except, else, finally Blocks",
        "Raising Exceptions (raise)",
        "Creating Custom Exceptions",
      ],
    },
    {
      section: "Object-Oriented Programming (OOP) in Python",
      topics: [
        "Classes and Objects",
        "Defining Classes and Creating Objects",
        "__init__() Method (Constructor)",
        "Self Parameter",
        "Class Variables and Instance Variables",
        "Inheritance",
        "Single Inheritance, Multiple Inheritance, Multilevel Inheritance",
        "Method Overriding",
        "Encapsulation and Abstraction",
        "Private and Protected Members",
        "Polymorphism",
        "Method Overloading, Method Overriding",
        "super() function",
        "Magic/Dunder Methods",
        "__str__(), __repr__(), __len__(), etc.",
      ],
    },
    {
      section: "Advanced Python Concepts",
      topics: [
        "Iterators and Generators",
        "Creating Iterators using iter() and next()",
        "Generators (yield Statement)",
        "Decorators",
        "Function and Class Decorators",
        "Closures",
        "Context Managers (with Statement)",
      ],
    },
    {
      section: "Working with Libraries",
      topics: [
        "NumPy (for numerical computations)",
        "Creating Arrays, Array Operations",
        "Slicing and Indexing",
        "Pandas (for data manipulation and analysis)",
        "Series and DataFrame",
        "Importing and Exporting Data (CSV, Excel)",
        "Handling Missing Data",
        "DataFrame Operations",
        "Matplotlib (for data visualization)",
        "Plotting Graphs (Line, Bar, Histogram, Scatter)",
        "Customizing Plots (Labels, Titles, Legends)",
      ],
    },
    {
      section: "File Formats and Data Serialization",
      topics: [
        "Working with CSV Files",
        "Reading and Writing CSV Files",
        "Working with JSON",
        "JSON Operations: json.dumps(), json.loads()",
        "Pickle Module",
        "Serializing and Deserializing Python Objects",
      ],
    },
    {
      section: "Working with Databases",
      topics: [
        "SQL vs NoSQL Databases",
        "SQLite Database Operations",
        "Connecting to Database, Creating Tables",
        "CRUD Operations (Create, Read, Update, Delete)",
        "Executing SQL Queries",
        "Introduction to ORM (Object-Relational Mapping)",
        "Using SQLAlchemy",
      ],
    },
    {
      section: "Python for Web Development (Optional)",
      topics: [
        "Overview of Django and Flask",
        "Creating a Simple Web Application",
        "Setting up Flask/Django, Routing, and Templates",
        "Handling Forms and Requests",
        "GET and POST Requests",
        "Working with Databases in Web Apps",
      ],
    },
    {
      section: "Unit Testing and Debugging",
      topics: [
        "Introduction to Unit Testing",
        "Using unittest module",
        "Writing and Running Test Cases",
        "Debugging in Python",
        "Using pdb Module",
        "Common Debugging Techniques",
      ],
    },
    {
      section: "Python and APIs",
      topics: [
        "Introduction to APIs",
        "REST APIs and HTTP Requests",
        "Making API Calls using requests library",
        "Handling JSON Responses",
        "Building Simple APIs using Flask",
      ],
    },
    {
      section: "Python for Data Science (Optional)",
      topics: [
        "Introduction to Data Science Libraries",
        "NumPy for numerical operations",
        "Pandas for data manipulation",
        "Matplotlib and Seaborn for visualization",
        "SciPy for scientific computing",
        "Exploratory Data Analysis (EDA)",
      ],
    },
    {
      section: "Python for Machine Learning (Optional)",
      topics: [
        "Overview of Machine Learning Libraries (Scikit-learn)",
        "Supervised Learning",
        "Linear and Logistic Regression",
        "Decision Trees, Random Forests",
        "Unsupervised Learning",
        "Clustering (K-means)",
        "Model Evaluation",
        "Train/Test Split, Cross-Validation",
        "Performance Metrics (Accuracy, Precision, Recall)",
      ],
    },
    {
      section: "Python for Automation and Scripting (Optional)",
      topics: [
        "Automating Tasks with Python",
        "File and Folder Automation",
        "Web Scraping using BeautifulSoup and Scrapy",
        "Working with OS Module",
        "File/Directory Operations",
        "Working with Email and FTP Automation",
      ],
    },
    {
      section: "Final Projects and Case Studies",
      topics: [
        "Capstone Project",
        "Building a Python Project combining all learned concepts (choose from web development, data science, automation, etc.)",
        "Real-World Case Studies",
        "Implementing case studies related to Python in domains like finance, healthcare, or social media analytics",
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
              src="/assets/sys/mainpyt.jpg"
              alt="Python Course Image"
              width={1200}
              height={600}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-extrabold z-10">
              Python Course Syllabus
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
            Python 
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

export default Pythons;
