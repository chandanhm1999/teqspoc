"use client";

import { useState } from "react";
import Image from "next/image";
import { FaLightbulb } from "react-icons/fa";
import TextLight from "./TextLight";

const Scrummasterresources = () => {
  const [faqs] = useState([
    {
      question: "What is Scrum?",
      answer: [
        "Scrum is an Agile framework for managing complex projects through iterative progress.",
        "It promotes collaboration, accountability, and continuous improvement.",
      ],
    },
    {
      question: "What Are the Benefits of Implementing Scrum?",
      answer: [
        "Increase productivity",
        "Enhance ability to manage changing priorities",
        "Improve business alignment",
        "Reduce project risk and cost",
        "Enhance software quality",
        "Enhanced project visibility and team morale",
      ],
    },
    {
      question: "What is Sprint 0 and Spike?",
      answer: [
        "Sprint Zero: It creates the project's basic structure and plumbing so that future sprints can add value efficiently.",
        "Creating the projects skeleton, including research spikes",
        "Acquiring servers or hardware resources",
        "Assembling the team",
        "Developing the initial backlog items",
        "Designing the application architecture",
        "Spike: A Spike is a research method that helps the Scrum Team maintain control over the delivery and remain committed to the sprint goal. Synonyms for a Spike include Proof of Concept",
        "(PoC) and Research Spike"
      ],
    },
    {
      question: "What is Empirical Process Control in Scrum?",
      answer: [
        "Empirical process control is a core principle of Scrum that helps teams improve based on experience and observation.",
        "It works with transparency, inspection, and adaptation.",
      ],
    },
    {
      question: "What are the key skills of a Scrum Master?",
      answer: [
        "Conflict resolution",
        "Coaching",
        "Project management",
        "Servant leadership",
        "Adaptability",
        "Problem solving",
        "Organizational skills",
      ],
    },
    {
      question: "What is a Burnup and Burndown Chart?",
      answer: [
        "Burnup chart: Tracks the amount of work completed and the total project scope.",
        "Burndown chart: Tracks the amount of work remaining in the project.",
      ],
    },
    {
      question: "How is Estimation Done in a Scrum Project?",
      answer: [
        "Planning Poker",
        "T-shirt sizes",
        "Large/Uncertain/Small",
        "Dot Voting",
      ],
    },
    {
      question: "What are some risks in Scrum? How are they handled?",
      answer: [
        "Technical risks: Handle with the development team.",
        "Budget risk: Monitor changes in needs and conditions.",
        "Scope creep: Mitigate through planning and stakeholder alignment.",
        "Business risk: Assess project marketability and problem-solving ability.",
      ],
    },
    {
      question: "What are the three pillars of Scrum?",
      answer: [
        "Transparency: Ensures clear communication.",
        "Inspection: Regularly assesses progress and outcomes.",
        "Adaptation: Develops the product, processes, and practices.",
      ],
    },
    {
      question:
        "How can you assure that the user stories meet the requirements?",
      answer: [
        "Define clear acceptance criteria.",
        "Collaborate with stakeholders.",
        "Use the INVEST criteria.",
        "Apply user story mapping.",
      ],
    },
    {
      question: "What are the five steps of Risk Management?",
      answer: [
        "Risk identification",
        "Risk analysis",
        "Rank risks in order of severity",
        "Solve the risk",
        "Risk review",
      ],
    },
    {
      question: "When should you use Waterfall over Scrum?",
      answer: [
        "Waterfall: For projects with well-defined requirements and minimal changes.",
        "Scrum: For projects with more unknowns and risks requiring regular client involvement.",
      ],
    },
    {
      question: "What type of metrics or reports have you used?",
      answer: [
        "Sprint burndown",
        "Velocity",
        "Defect trend chart",
        "Sprint review report",
        "Escaped defects",
      ],
    },
    {
      question: "How many Scrum teams have you managed at one time?",
      answer: ["Two to three Scrum teams."],
    },
    {
      question: "What techniques do you use for conflict resolution in Scrum?",
      answer: [
        "Active listening",
        "Mediation",
        "Focusing on common goals",
        "Fostering collaboration",
      ],
    },
    {
      question: "How do you measure the success of a Scrum team?",
      answer: [
        "Velocity",
        "Sprint burndown charts",
        "Quality indicators (e.g., defect rates)",
      ],
    },
    {
      question:
        "How do you handle a situation where the Product Owner is not actively engaged or available?",
      answer: [
        "Talk to the product owner.",
        "Consider the reasons for disengagement.",
        "Delegate tasks, pair with an expert, or escalate if needed.",
      ],
    },
    {
      question:
        "How do you handle scope changes or feature additions during a sprint?",
      answer: [
        "Understand the change and its impact.",
        "Re-prioritize the backlog if necessary.",
        "Document and keep everyone informed.",
      ],
    },
    {
      question: "What is Scope creep, and how do you handle it?",
      answer: [
        "Scope creep refers to uncontrolled changes after project initiation.",
        "Handle by establishing a baseline scope, monitoring changes, and taking preventive actions.",
      ],
    },
    {
      question:
        "How do you handle situations where team members resist adopting Scrum practices?",
      answer: [
        "Understand the resistance.",
        "Educate and inspire team members.",
        "Coach and mentor, provide guidance, and facilitate productive meetings.",
      ],
    },
    {
      question:
        "How do you handle situations where the team struggles to meet sprint commitments consistently?",
      answer: [
        "Set realistic expectations.",
        "Identify root causes.",
        "Facilitate retrospectives and learn from mistakes.",
      ],
    },
    {
      question:
        "How do you ensure that the team embraces a mindset of continuous delivery and frequent releases?",
      answer: [
        "Foster collaboration.",
        "Automate testing.",
        "Implement infrastructure as code and continuous monitoring.",
      ],
    },
    {
      question:
        "How do you handle situations where team members express dissatisfaction or frustration with the Scrum process?",
      answer: [
        "Encourage open communication.",
        "Spend more time on retrospectives.",
        "Create a positive work environment.",
      ],
    },
    {
      question:
        "How do you handle situations where the team's velocity is consistently lower than expected?",
      answer: [
        "Automate processes.",
        "Focus on removing impediments.",
        "Pay down technical debt.",
      ],
    },
    {
      question:
        "How do you handle situations where the team faces challenges with cross-functional collaboration?",
      answer: [
        "Communicate consistently.",
        "Set clear goals and roles.",
        "Encourage feedback and start with small projects.",
      ],
    },
    {
      question: "How does a Scrum Master track Sprint progress?",
      answer: [
        "A Scrum Master tracks sprint progress by using a sprint burndown chart to monitor the amount of work remaining to be completed each day.",
        "Daily Scrum meetings, Scrum retrospectives, Sprint planning, Escaped defects, Defect density, Sprint burndown, and Team velocity are all used to monitor progress.",
      ],
    },
    {
      question: "What is user story mapping?",
      answer: [
        "User story mapping represents and arranges user stories to help understand system functionalities, system backlog, plan releases, and provide value to customers.",
        "User stories are arranged based on their priority on the horizontal axis and represented on the vertical axis based on increasing levels of sophistication.",
      ],
    },
    {
      question: "What is the distinction between MVP and MMP?",
      answer: [
        "Minimum Viable Product (MVP) is the prototype of a product with basic features released in the market so early customers can use and provide critical feedback.",
        "Minimum Marketable Product (MMP) is the functional software that is ready for monetization, consisting of all the minimum essential features ready to be launched in the market.",
      ],
    },
    {
      question: "Are user stories estimated in hours or days? If not, why?",
      answer: [
        "Using hours or days to estimate user stories may sound practical but isn’t realistic.",
        "Some tasks are impossible to estimate, estimates can vary based on developer experience, and teams may face errors in judgment and make best-case assumptions.",
      ],
    },
    {
      question:
        "What is the difference between a Scrum Master and a Project Manager?",
      answer: [
        "A Scrum Master focuses on facilitating the Scrum process and empowering the team.",
        "A Project Manager often has a more directive role in traditional project management.",
      ],
    },
    {
      question: "How do you keep the team motivated?",
      answer: [
        "I recognize achievements, promote a positive culture, and encourage team members to share their ideas and contribute to decision-making.",
      ],
    },
    {
      question: "What is a potentially shippable product increment?",
      answer: [
        "It is the output of a Sprint that meets the Definition of Done and is ready for release, providing value to the customer.",
      ],
    },
    {
      question: "How do you identify and remove impediments?",
      answer: [
        "I regularly check in with team members, observe workflows, and facilitate discussions to identify obstacles and work collaboratively to resolve them.",
      ],
    },
    {
      question: "What techniques do you use for team building?",
      answer: [
        "Techniques include team outings, workshops, icebreaker activities, and promoting open communication to build trust and collaboration.",
      ],
    },
    {
      question: "What are some common anti-patterns in Scrum?",
      answer: [
        "Common anti-patterns include micromanaging, lack of time-boxing, inadequate communication, and ignoring the retrospective process.",
      ],
    },
    {
      question: "How do you help the team manage their workload?",
      answer: [
        "I facilitate capacity planning discussions, encourage the use of velocity metrics, and support the team in setting realistic goals.",
      ],
    },
    {
      question: "What are the difference between issue and Risks?",
      answer: [
        "A risk is a potential problem that could happen in the future, while an issue is a problem that is already happening or has happened.",
      ],
    },
    {
      question: "What is CI/CD pipeline?",
      answer: [
        "A CI/CD pipeline is a series of automated steps that help software development teams streamline the process of creating, testing, and deploying applications.",
      ],
    },
    {
      question: "What is DoD?",
      answer: [
        "Definition of Done (DoD) is a checklist of items that need to be completed to declare a project or task as 'Done.'",
        "The checklist includes written codes, comments on coding, unit tests, integration testing, design documents, and release notes.",
      ],
    },
    {
      question: "What are the tools used in Scrum projects?",
      answer: [
        "Popular tools used in Scrum are Jira, Microsoft Azure DevOps, Trello, and Asana.",
      ],
    },
    {
      question: "What are the responsibilities of a Product Owner?",
      answer: [
        "Defines the vision for the project.",
        "Anticipates the needs of the customer and creates appropriate user stories.",
        "Evaluates project progress and acts as a liaison for all product-related questions.",
      ],
    },
    {
      question: "What is Scrum of Scrums?",
      answer: [
        "Scrum of Scrums is a meeting after the daily scrum where a representative from each team discusses their work and answers questions regarding progress, obstacles, and future actions.",
      ],
    },
    {
      question: "Why is your team's velocity volatile?",
      answer: [
        "Factors include new team members, team members leaving, varying levels of seniority, working with legacy code, unexpected technical debt, holidays, and executive intervention.",
      ],
    },
    {
      question:
        "What does the Scrum Master do to enhance the productivity of the development team?",
      answer: [
        "The Scrum Master facilitates decisions and eliminates hurdles for the development team, shielding them from external troubles but not managing them directly.",
      ],
    },
    {
      question: "Should velocity be increased for optimum productivity?",
      answer: [
        "No, velocity does not equal productivity. Increasing velocity artificially can lead to poor quality and burnout, while sustainable velocity provides value over time.",
      ],
    },
    {
      question: "How is a Scrum Master a servant leader?",
      answer: [
        "A Scrum Master is a servant leader because they support their team, remove impediments, create a safe environment, lead by example, respect the team's right to self-manage, and ensure ethical delivery.",
      ],
    },
    {
      question: "What is the distinction between epics, stories, and tasks?",
      answer: [
        "Epics are high-level goals broken down into smaller parts.",
        "Stories detail what needs to be done for each sprint.",
        "Tasks are specific to-dos assigned to team members and planned for a sprint.",
      ],
    },
    {
      question: "What are the three C's in a User Story?",
      answer: [
        "Card: A written account of the story used for planning.",
        "Conversation: A discussion about the story's details.",
        "Confirmation: The acceptance criteria that ensure the story is complete.",
      ],
    },
    {
      question: "What are the obstacles to the Agile process?",
      answer: [
        "Lack of tools and technologies, insufficient customer involvement, team members lacking skills, designing systems based on unseen requirements, and difficulty adopting the Agile culture.",
      ],
    },
    {
      question: "What is refactoring?",
      answer: [
        "Refactoring is making changes to code without altering its functionality to increase performance.",
      ],
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
              src="/assets/resourse/interview/scrum.jpg"
              alt="Featured Image"
              width={1200}
              height={600}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-extrabold z-10">
              Scrum Master Interview Questions
            </h2>
          </div>
          <p className="text-gray-700 mt-6 mb-4 leading-relaxed">
            Are you preparing for a Scrum Master interview? Here are 50
            essential questions to help you succeed in your interview and
            demonstrate your mastery of Scrum.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Top Scrum Master Interview Questions & Answers
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
                      <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        {faq.answer.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
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

export default Scrummasterresources;
