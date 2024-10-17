"use client";

import { useState } from "react";
import Image from "next/image";
import TextLight from "./TextLight";

const ScrummastersS = () => {
  const [syllabus] = useState([
    {
      section: "Scrum Master Syllabus",
      topics: [
        "Waterfall model overview and drawbacks",
        "Agile Methodology Introduction",
        "Agile Principles & Values",
        "Scrum Introduction",
        "Scrum Theory",
        "Transparency",
        "Inspection",
        "Adoption",
        "Scrum Values",
      ],
    },
    {
      section: "Scrum Roles",
      topics: [
        "Product Owner",
        "Development Team",
        "Scrum Master",
      ],
    },
    {
      section: "Scrum Artifacts",
      topics: [
        "Product Backlog",
        "Sprint Backlog",
        "Product Increment",
        "Epic/User story/Enabler/Bug",
      ],
    },
    {
      section: "Estimation Techniques & Capacity",
      topics: [
        "Estimation techniques",
        "Capacity Calculation",
      ],
    },
    {
      section: "Scrum Events",
      topics: [
        "The Sprint",
        "Sprint Planning",
        "Daily Scrum",
        "Sprint Review",
        "Sprint Retrospective",
      ],
    },
    {
      section: "DOR/DOD and Metrics",
      topics: [
        "DOR (Definition of Ready)",
        "DOD (Definition of Done)",
        "Metrics",
      ],
    },
    {
      section: "Additional Topics",
      topics: [
        "DevOps Overview",
        "JIRA Activities for Scrum Master",
        "SAFe/Kanban framework overview",
        "Real-World Scenarios and Case Studies",
        "Workshops for Scrum Master activities",
        "Resume Preparation and Explanation",
        "Interview questions and answers",
        "Mock Interviews",
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
              src="/assets/resourse/interview/scrum.jpg"
              alt="Scrum Master Course Image"
              width={1200}
              height={600}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-extrabold z-10">
              Scrum Master Course Syllabus
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
          <h3 className="text-2xl font-extrabold mb-4 text-center">
            Scrum Master
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

export default ScrummastersS;
