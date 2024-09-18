"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBook, FaCalendarAlt } from "react-icons/fa";
import TextLight from "./TextLight";

const Scrummasters = () => {
  const [syllabus] = useState([
    {
      title: "Introduction to Scrum Framework",
      duration: "1 week",
      content: "Overview of Scrum, roles, artifacts, and ceremonies.",
    },
    {
      title: "Scrum Roles and Responsibilities",
      duration: "2 weeks",
      content: "Deep dive into Scrum Master, Product Owner, and Development Team roles.",
    },
    {
      title: "Agile Principles & Practices",
      duration: "1 week",
      content: "Agile manifesto, principles, and how Scrum fits within Agile.",
    },
    {
      title: "Sprint Planning and Estimation",
      duration: "1 week",
      content: "How to plan sprints, estimation techniques like story points and velocity.",
    },
    {
      title: "Product Backlog & User Stories",
      duration: "2 weeks",
      content: "Writing user stories, managing product backlogs, and prioritization techniques.",
    },
    {
      title: "Sprint Reviews & Retrospectives",
      duration: "1 week",
      content: "Conducting effective sprint reviews and retrospectives for continuous improvement.",
    },
    {
      title: "Scrum Metrics and Reporting",
      duration: "1 week",
      content: "Measuring team performance with velocity, burndown charts, and other metrics.",
    },
    {
      title: "Handling Stakeholders and Changes",
      duration: "2 weeks",
      content: "Managing stakeholders and incorporating changes during sprints.",
    },
  ]);

  return (
    <main className="container mx-auto mt-8 px-4">
      <div className="flex flex-wrap justify-between">
        
        {/* Right column for syllabus details (Now on the left side) */}
        <div className="w-full md:w-8/12 mb-8">
          <div className="relative">
            <Image
              src="/assets/resourse/interview/scrum.jpg"
              alt="Featured Image"
              width={1200}
              height={600}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-extrabold z-10">
              Scrum Master Course Syllabus
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
            Scrum Master Syllabus
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

export default Scrummasters;