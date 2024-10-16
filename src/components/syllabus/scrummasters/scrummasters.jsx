"use client";

import { useState } from "react";
import Image from "next/image";
import TextLight from "./TextLight";

const Scrummasters = () => {
  const [syllabus] = useState([
    {
      section: "Module 1: Introduction to Agile and Scrum",
      topics: [
        "Overview of Agile Methodology",
        "History and evolution of Agile",
        "Agile principles and values (Agile Manifesto)",
        "Benefits of Agile vs. traditional project management",
        "Introduction to Scrum",
        "What is Scrum?",
        "Key roles: Scrum Master, Product Owner, Development Team",
        "Scrum framework overview",
      ],
    },
    {
      section: "Module 2: Scrum Roles and Responsibilities",
      topics: [
        "Scrum Master Role",
        "Responsibilities and duties",
        "Servant leadership and coaching",
        "Facilitating Scrum events",
        "Product Owner Role",
        "Responsibilities and duties",
        "Managing the product backlog",
        "Prioritization techniques",
        "Development Team Role",
        "Characteristics of a self-organizing team",
        "Cross-functional skills and collaboration",
        "Team dynamics and collaboration tools",
      ],
    },
    {
      section: "Module 3: Scrum Events",
      topics: [
        "Sprint Planning",
        "Purpose and process",
        "Defining the sprint goal and scope",
        "Daily Scrum (Stand-up)",
        "Purpose and format",
        "Techniques for effective stand-ups",
        "Sprint Review",
        "Purpose and process",
        "Demonstrating work completed and gathering feedback",
        "Sprint Retrospective",
        "Purpose and process",
        "Continuous improvement and action items",
      ],
    },
    {
      section: "Module 4: Scrum Artifacts",
      topics: [
        "Product Backlog",
        "Definition and importance",
        "Backlog refinement techniques",
        "User stories and acceptance criteria",
        "Sprint Backlog",
        "Definition and purpose",
        "Creating and managing the sprint backlog",
        "Increment",
        "Definition and importance of a potentially shippable product increment",
        "Definition of Done (DoD) and its significance",
      ],
    },
    {
      section: "Module 5: Agile Metrics and Reporting",
      topics: [
        "Common Agile Metrics",
        "Velocity, burn-down and burn-up charts",
        "Cumulative flow diagrams",
        "Lead time and cycle time",
        "Using Metrics for Improvement",
        "Interpreting metrics to drive decisions",
        "Measuring team performance and productivity",
      ],
    },
    {
      section: "Module 6: Facilitating Scrum and Agile Practices",
      topics: [
        "Facilitation Skills",
        "Active listening, questioning, and conflict resolution",
        "Techniques for effective facilitation",
        "Coaching the Team",
        "Supporting team members and promoting collaboration",
        "Building a culture of trust and accountability",
        "Scaling Scrum",
        "Introduction to frameworks like SAFe, LeSS, and Nexus",
        "Challenges and best practices in scaling Scrum",
      ],
    },
    {
      section: "Module 7: Real-World Scenarios and Case Studies",
      topics: [
        "Common Challenges in Scrum",
        "Addressing team dysfunctions and impediments",
        "Handling stakeholder expectations",
        "Case Studies",
        "Analyzing real-world Scrum implementations",
        "Lessons learned and best practices",
        "Recommended Tools and Technologies",
        "Project Management Tools: Jira, Trello, or Asana",
        "Collaboration Tools: Slack, Microsoft Teams, or Zoom",
        "Agile Metrics Tools: Burndown charts, velocity tracking tools",
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

export default Scrummasters;
