"use client";

import { useState } from "react";
import Image from "next/image";
import { FaQuestionCircle, FaLightbulb } from "react-icons/fa";
import TextLight from "./TextLight";

const Scrummasterresources = () => {
  const [faqs] = useState([
    {
      question: "What is Scrum?",
      answer:
        "Scrum is an Agile framework for managing complex projects through iterative progress, promoting collaboration, accountability, and continuous improvement.",
    },
    {
      question: "What are the roles in Scrum?",
      answer:
        "The three key roles are the Scrum Master (facilitates the process), the Product Owner (manages the product backlog), and the Development Team (delivers the product increment).",
    },
    {
      question: "What is a Sprint?",
      answer:
        "A Sprint is a time-boxed iteration (typically 1-4 weeks) during which a specific set of work is completed and delivered.",
    },
    {
      question: "What is the Product Backlog?",
      answer:
        "The Product Backlog is an ordered list of all desired work on the project, maintained by the Product Owner, and continuously refined.",
    },
    {
      question: "What is the Definition of Done (DoD)?",
      answer:
        "The Definition of Done is a shared understanding among the team of what it means for work to be complete, ensuring quality and consistency.",
    },
    {
      question: "What are the key Scrum events?",
      answer:
        "The key events are Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective.",
    },
    {
      question: "How do you handle conflicts in a Scrum team?",
      answer:
        "I promote open communication, facilitate discussions, and encourage a collaborative approach to resolving conflicts.",
    },
    {
      question: "What is the difference between a Scrum Master and a Project Manager?",
      answer:
        "A Scrum Master focuses on facilitating the Scrum process and empowering the team, while a Project Manager often has a more directive role in traditional project management.",
    },
    {
      question: "What techniques do you use for backlog refinement?",
      answer:
        "Techniques include user story mapping, estimation using Planning Poker, and conducting regular refinement meetings.",
    },
    {
      question: "How do you measure the success of a Scrum team?",
      answer:
        "Success can be measured using metrics like velocity, sprint burndown charts, and quality indicators (e.g., defect rates).",
    },
    {
      question: "What is Agile?",
      answer:
        "Agile is a project management methodology emphasizing flexibility, collaboration, and iterative progress, aimed at delivering high-quality products.",
    },
    {
      question: "How do you ensure the team follows Agile principles?",
      answer:
        "I promote Agile values through training, fostering a culture of transparency, and encouraging regular reflection and adaptation.",
    },
    {
      question: "How do you facilitate a Daily Scrum?",
      answer:
        "I ensure the meeting stays focused, encourages each team member to share progress and impediments, and keeps it time-boxed (usually 15 minutes).",
    },
    {
      question: "What is a Sprint Review?",
      answer:
        "A Sprint Review is a meeting at the end of the sprint where the team demonstrates the work completed to stakeholders and gathers feedback.",
    },
    {
      question: "What is a Sprint Retrospective?",
      answer:
        "A Sprint Retrospective is a meeting where the team reflects on the sprint, discussing what went well, what didn’t, and how to improve in the next sprint.",
    },
    {
      question: "How do you deal with a non-communicative team member?",
      answer:
        "I would address the issue privately, seek to understand their concerns, and encourage participation in a supportive way.",
    },
    {
      question: "What is the role of a Scrum Master during a Sprint?",
      answer:
        "The Scrum Master facilitates Scrum events, removes impediments, coaches the team, and ensures adherence to Scrum practices.",
    },
    {
      question: "What is Agile estimation?",
      answer:
        "Agile estimation involves predicting the effort required to complete backlog items, often using story points or ideal hours.",
    },
    {
      question: "How do you handle changing requirements?",
      answer:
        "Scrum is designed to embrace change. I would facilitate discussions with the Product Owner to prioritize and integrate changes into the backlog.",
    },
    {
      question: "What tools do you use for Scrum project management?",
      answer:
        "Common tools include Jira, Trello, and Confluence for tracking tasks and managing documentation.",
    },
    {
      question: "What is a user story?",
      answer:
        "A user story is a brief description of a feature from the perspective of an end user, focusing on the value delivered.",
    },
    {
      question: "What is a burndown chart?",
      answer:
        "A burndown chart is a visual representation of work completed versus remaining work in a sprint, helping track progress.",
    },
    {
      question: "How do you handle a Product Owner who is unavailable?",
      answer:
        "I encourage collaboration with other stakeholders for clarifications and document questions for the Product Owner to address when they are available.",
    },
    {
      question: "What is the significance of the velocity metric?",
      answer:
        "Velocity measures the amount of work completed in a sprint, helping teams estimate future sprints and plan capacity.",
    },
    {
      question: "How do you promote collaboration among team members?",
      answer:
        "I encourage open communication, team-building activities, and collaborative tools to foster a supportive team environment.",
    },
    {
      question: "What are the challenges of being a Scrum Master?",
      answer:
        "Challenges include managing team dynamics, addressing resistance to change, and balancing stakeholder expectations.",
    },
    {
      question: "How do you ensure effective communication in a remote team?",
      answer:
        "I promote the use of communication tools (e.g., Slack, Zoom), schedule regular check-ins, and encourage face-to-face interactions when possible.",
    },
    {
      question: "What do you do if the team does not meet the sprint goal?",
      answer:
        "I would facilitate a discussion during the Sprint Retrospective to analyze the reasons, identify lessons learned, and adjust future plans.",
    },
    {
      question: "How do you keep the team motivated?",
      answer:
        "I recognize achievements, promote a positive culture, and encourage team members to share their ideas and contribute to decision-making.",
    },
    {
      question: "What is scaling Scrum?",
      answer:
        "Scaling Scrum involves adapting the Scrum framework for larger projects or organizations, using frameworks like SAFe, LeSS, or Nexus to coordinate multiple teams.",
    },
    {
      question: "What are Agile ceremonies, and why are they important?",
      answer:
        "Agile ceremonies include Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective. They are essential for maintaining team alignment, collaboration, and continuous improvement.",
    },
    {
      question: "How do you handle a team member who consistently misses deadlines?",
      answer:
        "I would have a one-on-one conversation to understand their challenges, offer support, and help them develop a plan for improvement.",
    },
    {
      question: "What are the advantages of using Scrum?",
      answer:
        "Advantages include increased flexibility, better collaboration, faster delivery of high-quality products, and improved stakeholder engagement.",
    },
    {
      question: "How do you prioritize the backlog?",
      answer:
        "The Product Owner prioritizes the backlog based on factors like business value, stakeholder feedback, and team capacity.",
    },
    {
      question: "What is a spike in Agile?",
      answer:
        "A spike is a time-boxed research activity to explore a problem or gather information for better estimation and decision-making.",
    },
    {
      question: "What techniques do you use for conflict resolution in Scrum?",
      answer:
        "Techniques include active listening, mediation, focusing on common goals, and fostering a collaborative environment.",
    },
    {
      question: "What is the role of a Scrum Master in a cross-functional team?",
      answer:
        "The Scrum Master facilitates collaboration among team members with diverse skills, ensuring effective communication and a shared understanding of goals.",
    },
    {
      question: "How do you encourage feedback from stakeholders?",
      answer:
        "I encourage stakeholders to participate in Sprint Reviews and create open channels of communication to gather continuous feedback.",
    },
    {
      question: "What is a potentially shippable product increment?",
      answer:
        "It is the output of a Sprint that meets the Definition of Done and is ready for release, providing value to the customer.",
    },
    {
      question: "What is the Scrum value of courage?",
      answer:
        "Courage encourages team members to take risks, voice their opinions, and make difficult decisions, fostering a culture of transparency and growth.",
    },
    {
      question: "How do you identify and remove impediments?",
      answer:
        "I regularly check in with team members, observe workflows, and facilitate discussions to identify obstacles and work collaboratively to resolve them.",
    },
    {
      question: "What is the importance of a Scrum board?",
      answer:
        "A Scrum board visually represents the status of work items, enhancing transparency and helping the team track progress and manage tasks effectively.",
    },
    {
      question: "What techniques do you use for team building?",
      answer:
        "Techniques include team outings, workshops, icebreaker activities, and promoting open communication to build trust and collaboration.",
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
            Are you preparing for a Scrum Master interview? Here are 43
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

export default Scrummasterresources;
