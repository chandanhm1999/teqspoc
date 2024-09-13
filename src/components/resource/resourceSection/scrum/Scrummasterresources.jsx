"use client";

import { useState } from "react";
import Image from "next/image";
import { FaQuestionCircle, FaLightbulb } from "react-icons/fa";
import TextLight from "./TextLight";

const Scrummasterresources = () => {
  const [faqs] = useState([
    {
      question: "What is Scrum, and what are its key principles?",
      answer:
        "Scrum is an agile framework used to manage complex projects. Its key principles include transparency, inspection, and adaptation.",
    },
    {
      question: "What are the roles in a Scrum team?",
      answer:
        "The three core roles in Scrum are the Scrum Master, Product Owner, and Development Team.",
    },
    {
      question: "What does a Scrum Master do?",
      answer:
        "A Scrum Master facilitates the Scrum process, helps the team remove obstacles, and ensures adherence to Scrum practices.",
    },
    {
      question: "What is a Sprint in Scrum?",
      answer:
        "A Sprint is a time-boxed iteration of work, typically lasting 1-4 weeks, during which a usable increment of the product is developed.",
    },
    {
      question: "What are user stories in Scrum?",
      answer:
        "User stories are short, simple descriptions of a feature told from the perspective of the person who desires it, typically in the format of 'As a [user], I want [feature] so that [reason].'",
    },
    {
      question: "How do you handle changes in Scrum?",
      answer:
        "Changes are managed by incorporating feedback during sprint reviews and backlog refinement sessions, ensuring the product stays relevant to the user’s needs.",
    },
    {
      question: "What is the definition of 'Done' in Scrum?",
      answer:
        "The 'Definition of Done' is a shared understanding of what it means for work to be considered complete.",
    },
    {
      question: "How do you measure the success of a Scrum team?",
      answer:
        "Success can be measured by the team's ability to deliver high-quality increments, meet customer expectations, and continuously improve their processes.",
    },
    {
      question: "What are Scrum artifacts?",
      answer:
        "Scrum artifacts include the Product Backlog, Sprint Backlog, and Increment, each representing work to be done or work completed.",
    },
    {
      question: "How do you conduct a Sprint Retrospective?",
      answer:
        "A Sprint Retrospective is conducted by reflecting on what went well, what could be improved, and creating actionable plans for improvement.",
    },
    {
      question: "What is velocity in Scrum?",
      answer:
        "Velocity is a measure of the amount of work a Scrum team can complete during a single Sprint, typically measured in story points.",
    },
    {
      question: "What is the role of a Product Owner?",
      answer:
        "The Product Owner is responsible for maximizing the value of the product by managing and prioritizing the Product Backlog.",
    },
    {
      question: "How do you handle team conflicts as a Scrum Master?",
      answer:
        "Conflicts are managed by encouraging open communication, fostering a culture of respect, and mediating discussions to ensure collaboration.",
    },
    {
      question: "What is backlog refinement in Scrum?",
      answer:
        "Backlog refinement is the process of reviewing and prioritizing the items in the Product Backlog, ensuring they are ready for future Sprints.",
    },
    {
      question: "How do you ensure continuous improvement in a Scrum team?",
      answer:
        "Continuous improvement is achieved through regular retrospectives, encouraging feedback, and experimenting with new practices to enhance team performance.",
    },
    // ... Add more questions and answers
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
            Are you preparing for a Scrum Master interview? Here are 15
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
