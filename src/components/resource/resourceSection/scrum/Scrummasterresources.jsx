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
      question: "What Are the Benefits of Implementing Scrum?",
      answer:
        "Increase productivity, Enhance ability to manage changing priorities, Improve business alignment, Reduce project risk and cost, Enhance software quality, Enhanced project visibility and team morale.",
    },
    {
      question: "What is Sprint 0 and Spike?",
      answer:
        "Sprint Zero: The purpose of Sprint Zero is to create the project's basic structure and plumbing so that future sprints can add value efficiently. Sprint Zero tasks include: Creating the project's skeleton, including research spikes, Acquiring servers or hardware resources, Assembling the team, Developing the initial backlog items, Designing the application architecture. \n\nSpike: A Spike is a research method that helps the Scrum Team maintain control over the delivery and remain committed to the sprint goal. Synonyms for a Spike include Proof of Concept (PoC) and Research Spike.",
    },
    {
      question: "What is Empirical Process Control in Scrum?",
      answer:
        "Empirical process control is a core principle of Scrum that helps teams improve their product development and management practices. It's a way of managing work based on experience and observation, rather than detailed planning and defined processes. Empirical Process works with the help of Transparency, Inspection, and Adaptation.",
    },
    {
      question: "What are the key skills of a Scrum Master?",
      answer:
        "Some key skills for a Scrum Master include: Conflict resolution, Coaching, Project management, Servant leadership, Adaptability, Problem solving, Organizational skills.",
    },
    {
      question: "What is a Burnup and Burndown Chart?",
      answer:
        "Burnup and burndown charts are both visual tools used in project management to track progress and ensure deadlines are met. \n\nBurnup chart: Tracks the amount of work that has been completed and the total project scope. Burnup charts are useful for identifying scope creep and planning for changes in scope. \n\nBurndown chart: Tracks the amount of work remaining for a project. Burndown charts are useful for communicating the total effort against the amount of work within each iteration.",
    },
    {
      question: "How is Estimation Done in a Scrum Project?",
      answer:
        "Estimation in a Scrum project can be done using: \n\nPlanning Poker, T-shirt sizes, Large/Uncertain/Small method, Dot Voting.",
    },
    {
      question: "What are some risks in Scrum? How are they handled?",
      answer:
        "Some risks in Scrum include technical risks, budget risks, scope creep, communication risks, and business risks. These risks are managed through sprint planning, daily scrums, sprint reviews, retrospectives, and iterative risk management.",
    },
    {
      question: "What are the three pillars of Scrum?",
      answer:
        "The three pillars of Scrum are Transparency, Inspection, and Adaptation. Transparency ensures clear communication, Inspection involves regularly assessing progress and outcomes, and Adaptation ensures ongoing development.",
    },
    {
      question: "How can you assure that the user stories meet the requirements?",
      answer:
        "To ensure user stories meet requirements, you can: Define clear acceptance criteria, Collaborate with stakeholders, Refine user stories, Apply the INVEST criteria, Use user story mapping.",
    },
    {
      question: "What are the five steps of Risk Management?",
      answer:
        "The five steps of risk management are: Risk identification, Risk analysis, Risk in order of severity, Solving the risk, Risk review.",
    },
    {
      question: "When should you use Waterfall over Scrum?",
      answer:
        "Waterfall may be a good choice for projects with well-defined requirements and minimal changes, while Scrum is better for projects with unknowns and risks. Waterfall works well for regulated industries and larger teams.",
    },
    {
      question: "What type of metrics or reports have you used?",
      answer:
        "Scrum Masters use various metrics and reports including Sprint Burndown, Velocity, Defect Trend Charts, Sprint Review Reports, and Escaped Defects.",
    },
    {
      question: "How many Scrum teams have you managed at one time?",
      answer:
        "A skilled Scrum Master can effectively manage two to three Scrum teams at once.",
    },
    {
      question: "What techniques do you use for conflict resolution in Scrum?",
      answer:
        "Techniques include active listening, mediation, focusing on common goals, and fostering a collaborative environment.",
    },
    {
      question: "How do you measure the success of a Scrum team?",
      answer:
        "Success can be measured using metrics like velocity, sprint burndown charts, and quality indicators (e.g., defect rates).",
    },
    {
      question: "How do you handle a situation where the Product Owner is not actively engaged or available?",
      answer:
        "If the product owner is not engaged, strategies include talking to the product owner, delegating tasks, pairing with an expert, escalating if necessary, and bringing in an end-user.",
    },
    {
      question: "How do you handle scope changes or feature additions during a sprint?",
      answer:
        "To handle scope changes during a sprint: Understand the change, assess urgency, re-prioritize, document the change, and use agile ceremonies to adjust.",
    },
    {
      question: "What is Scope creep, and how do you handle it?",
      answer:
        "Scope creep refers to uncontrolled changes after the project begins. Handling includes monitoring progress, establishing a baseline scope, and managing all change requests.",
    },
    {
      question: "How do you handle situations where team members resist adopting Scrum practices?",
      answer:
        "Strategies include understanding the resistance, educating, coaching, removing obstacles, and ensuring agile ceremonies are productive.",
    },
    {
      question: "How do you handle situations where the team struggles to meet sprint commitments consistently?",
      answer:
        "Strategies include setting realistic goals, facilitating retrospectives, learning from mistakes, adjusting sprint backlog, and ensuring accountability.",
    },
    {
      question: "How do you ensure that the team embraces a mindset of continuous delivery and frequent releases?",
      answer:
        "Encourage collaboration, automate testing, use infrastructure as code (IaC), implement continuous monitoring, and promote an agile mindset focused on flexibility and responsiveness.",
    },
    {
      question: "How do you handle situations where team members express dissatisfaction or frustration with the Scrum process?",
      answer:
        "Encourage open communication, improve transparency, emphasize retrospectives, and foster a positive work environment.",
    },
    {
      question: "How do you handle situations where the team's velocity is consistently lower than expected?",
      answer:
        "Avoid obsession with metrics, automate processes, focus on removing impediments, reduce work item size, and pay down technical debt.",
    },
    {
      question: "How do you handle situations where the team faces challenges with cross-functional collaboration?",
      answer:
        "Promote communication, set clear goals, celebrate wins, align on shared goals, and provide feedback to build lasting trust.",
    },
    {
      question: "How does a Scrum Master track Sprint progress?",
      answer: 
        "A Scrum Master tracks sprint progress by using a sprint burndown chart to monitor the amount of work remaining to be completed each day and with below activities: Daily Scrum meetings, Scrum retrospectives, Sprint planning, Escaped defects, Defect density, Sprint burndown, Team velocity.",
    },
    {
      question: "What is user story mapping?",
      answer: 
        "User story mapping represents and arranges user stories that help with understanding system functionalities, system backlog, planning releases, and providing value to customers. They arrange user stories based on their priority on the horizontal axis. On the vertical axis, they are represented based on the increasing levels of sophistication.",
    },
    {
      question: "What is the distinction between MVP and MMP?",
      answer: 
        "Minimum Viable Product(MVP) is the prototype of a product with basic features released in the market so that early customers can use and provide critical feedback on the product. Minimum Marketable Product is the functional software that is ready for monetization. It consists of all the minimum essential features. It is ready to be launched in the market. It saves you the time of building the whole product with all functionalities. You can give the customers what they want.",
    },
    {
      question: "Are user stories estimated in hours or days? If not, why?",
      answer: 
        "Using hours or days to estimate user stories may sound practical but isn’t so in reality. Here’s why- Few tasks are impossible to estimate. For instance, legacy tasks. If an estimate is given to one team member, but another completes the task, the estimate is a waste. Everything is dependent on the experience of the developer when it comes to completing the task. Teams face an error of judgment and simply go with the best possible scenario.",
    },
    {
      question: "What is the difference between a Scrum Master and a Project Manager?",
      answer: 
        "A Scrum Master focuses on facilitating the Scrum process and empowering the team, while a Project Manager often has a more directive role in traditional project management.",
    },
    {
      question: "How do you keep the team motivated?",
      answer: 
        "I recognize achievements, promote a positive culture, and encourage team members to share their ideas and contribute to decision-making.",
    },
    {
      question: "What is a potentially shippable product increment?",
      answer: 
        "It is the output of a Sprint that meets the Definition of Done and is ready for release, providing value to the customer.",
    },
    {
      question: "How do you identify and remove impediments?",
      answer: 
        "I regularly check in with team members, observe workflows, and facilitate discussions to identify obstacles and work collaboratively to resolve them.",
    },
    {
      question: "What techniques do you use for team building?",
      answer: 
        "Techniques include team outings, workshops, icebreaker activities, and promoting open communication to build trust and collaboration.",
    },
    {
      question: "What are some common anti-patterns in Scrum?",
      answer: 
        "Common anti-patterns include micromanaging, lack of time-boxing, inadequate communication, and ignoring the retrospective process.",
    },
    {
      question: "How do you help the team manage their workload?",
      answer: 
        "I facilitate capacity planning discussions, encourage the use of velocity metrics, and support the team in setting realistic goals.",
    },
    {
      question: "What are the difference between issue and Risks?",
      answer: 
        "The main difference between a risk and an issue is that a risk is a potential problem that could happen in the future, while an issue is a problem that is already happening or has happened.",
    },
    {
      question: "What is CI/CD pipeline?",
      answer: 
        "A CI/CD pipeline is a series of automated steps that help software development teams streamline the process of creating, testing, and deploying applications.",
    },
    {
      question: "What is DoD?",
      answer: 
        "Definition of Done (DoD) is a checklist of items that need to be completed to declare a project or task as ‘Done.’ The checklist includes written codes, comments on coding, unit tests, integration testing, design documents, and release notes.",
    },
    {
      question: "What are the tools used in Scrum projects?",
      answer: 
        "The popular tools used in Scrum are: Jira, Microsoft Azure DevOps, Trello, Asana.",
    },
    {
      question: "What are the responsibilities of a Product Owner?",
      answer: 
        "Defines the vision for the project. Anticipates the needs of the customer and creates appropriate user stories. Evaluates project progress. Acts as a liaison for all product-related questions.",
    },
    {
      question: "Explain what is scrum of scrum?",
      answer: 
        "Scrum of scrum is used to refer the meeting after the daily scrum. The responsible person from each team attends the meeting and discusses their work and answers the questions like: Since the last meeting, what is the progress of the team? What your team is expected to do or should accomplish before the next meeting? What are the obstacles your team faced while completing the task? Were you going to allot any of your work to the following team?",
    },
    {
      question: "Your team is constantly failing to meet commitments, and its performance velocity is volatile. What might the possible reasons be? How would you address this issue?",
      answer: 
        "There are many possible factors that might combine to make a team’s velocity volatile. Such factors might include: New team members are being onboarded. Team members are leaving. Levels of seniority. Working in uncharted territory. Working with legacy code, probably undocumented. Unexpected technical debt. Holidays and sick leave. Executive intervention.",
    },
    {
      question: "What does the Scrum Master do to enhance the productivity of the development team?",
      answer: 
        "The Scrum Master facilitates their decisions and eliminates hurdles of the development. Take note, the Scrum Master doesn’t manage the development team as they are responsible for their own management. The Scrum Master shields them from extrinsic troubles.",
    },
    {
      question: "Should velocity be increased for optimum productivity?",
      answer: 
        "No, velocity should not be increased for optimum productivity. Velocity matters but it does not equal productivity. Ideally, the higher a team's velocity, the more software functionality they are delivering, and the more value is created for customers. Sprint velocity can be used in sprint project management to evaluate and estimate team productivity.",
    },
    {
      question: "How is a Scrum Master, a servant leader?",
      answer: 
        "Yes, a Scrum Master is a servant leader because their role is to support and facilitate their team members: Coach: Scrum Masters coach team members on Agile and Scrum best practices. They also help team members grow and improve. Remove impediments: Scrum Masters remove obstacles that are blocking the team's progress. Create a safe environment: Scrum Masters create a psychologically safe environment for the team. This allows team members to feel more autonomous and organize themselves. Lead by example: Scrum Masters lead by example by demonstrating adherence to Scrum values. Respect rights: Scrum Masters respect the rights of developers to self-manage. Provide clarity: Scrum Masters provide clarity to the team about what is expected of them. Ensure ethics: Scrum Masters guide the team to deliver the product at the expected value and standard.",
    },
    {
      question: "Explain the distinction between epics, stories, and tasks?",
      answer: 
        "In project management, epics, stories, and tasks are different in the following ways: Epics: The highest-level goal of a project, epics are large items that are broken down into smaller parts. They are often written in a user story format and are used to provide context and direction for planning the development process. Epics are usually developed by the customer or product owner. Stories: Stories are used to plan big projects or to-dos that are part of multiple sprints. They provide further detail on what each team member needs to do. Tasks: Tasks are single to-dos that are assigned to one employee and planned in a specific sprint. They are usually defined by the people doing the work, such as developers or QA. Tasks are often part of a story and cross-linked.",
    },
    {
      question: "What are the three C’s in an User Story?",
      answer: 
        "Card: It is a written account of the story that is utilized to plan and estimate. To keep user stories succinct, they are manually written on index 'cards.' Conversation: The Conversation is required to learn more about the Card. The conversation encourages the agile team to work together in small steps to develop a shared understanding of the problem and potential solutions. Confirmation: Confirmation is an acceptance criteria that contains the fundamental requirements and turns them into test criteria so that we can determine when the user story has been properly provided.",
    },
    {
      question: "What are the obstacles to the Agile process?",
      answer: 
        "Some of the obstacles that could be faced are: Not having appropriate or sufficient tools and technologies. The lack of active involvement from the customers. Team members that are lacking in skills and capability. The inability to design systems based on unseen requirements. Successfully adopting the Agile culture to the organization.",
    },
    {
      question: "What is refactoring?",
      answer: 
        "Refactoring is making changes to code without altering its functionality to increase performance.",
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
