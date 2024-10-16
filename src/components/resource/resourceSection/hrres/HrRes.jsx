"use client";

import { useState } from "react";
import Image from "next/image";
import { FaQuestionCircle, FaLightbulb } from "react-icons/fa";
import TextLight from "./TextLight";

const HrRes = () => {
  const [faqs] = useState([
    {
      question: "Tell me about yourself.",
      answer:
        "This question assesses your background, experience, and motivation. Focus on your journey, key skills, and what excites you about recruitment.\n\nSample Answer:\n'I have over five years of experience in recruitment, primarily within the tech industry. I started as a recruitment coordinator, learning the fundamentals of sourcing and screening candidates. Now, as a senior recruiter, I manage end-to-end recruitment processes for technical roles and enjoy the challenge of finding the perfect fit for both candidates and the organization.'",
    },
    {
      question: "What attracted you to a career in recruitment?",
      answer:
        "This question seeks to understand your motivation for choosing this profession. Highlight your passion for connecting people with jobs and contributing to organizational success.\n\nSample Answer:\n'I was drawn to recruitment because it enables me to make a meaningful impact by matching talented individuals with roles that align with their career goals. I enjoy the challenge of finding high-quality talent and seeing how hiring the right people drives organizational growth.'",
    },
    {
      question: "What are your key strengths as a recruiter?",
      answer:
        "This question helps the interviewer gauge your self-awareness and how your strengths can benefit their organization.\n\nSample Answer:\n'My strengths lie in building strong relationships with candidates and stakeholders. I foster trust and ensure open communication throughout the recruitment process. I also have excellent analytical skills, enabling me to evaluate candidates effectively and make data-driven hiring decisions.'",
    },
    {
      question: "What is your approach to sourcing candidates?",
      answer:
        "Here, the interviewer wants to know your strategies for finding potential candidates.\n\nSample Answer:\n'I follow a multi-channel sourcing strategy that includes using LinkedIn, job boards, and networking events. Additionally, I encourage employee referrals and attend industry conferences to connect with passive candidates.'",
    },
    {
      question: "How do you assess a candidate’s qualifications?",
      answer:
        "This question evaluates your method for determining if a candidate meets the job requirements.\n\nSample Answer:\n'I review resumes, conduct behavioral interviews, and administer relevant skill assessments. I ask for specific examples to understand how candidates applied their skills in real-life scenarios, ensuring they meet both technical and cultural requirements.'",
    },
    {
      question: "Describe a time when you filled a difficult position.",
      answer:
        "The interviewer wants to know about your problem-solving skills and perseverance.\n\nSample Answer:\n'I once needed to fill a specialized data scientist role in a competitive market. I used LinkedIn and niche forums to source passive candidates and eventually found someone who matched the technical needs and cultural values of the organization, resulting in a successful hire.'",
    },
    {
      question: "How do you handle rejection from candidates?",
      answer:
        "This question assesses your empathy and communication skills when delivering disappointing news.\n\nSample Answer:\n'I handle rejection with empathy and provide constructive feedback to candidates. I maintain a positive relationship by explaining the decision clearly, encouraging them to apply for future roles, and offering insights for improvement.'",
    },
    {
      question: "What recruitment software and tools do you use?",
      answer:
        "The interviewer is interested in your familiarity with technology to streamline processes.\n\nSample Answer:\n'I have experience using Greenhouse, Workable, and LinkedIn Recruiter. These tools help me track applications, manage candidate pipelines, and conduct virtual interviews efficiently.'",
    },
    {
      question: "How do you ensure a positive candidate experience?",
      answer:
        "This question assesses how you prioritize candidate satisfaction.\n\nSample Answer:\n'I ensure a positive experience by maintaining transparent communication, giving timely updates, and being respectful of candidates' time. I also tailor the interview process to fit individual needs, making them feel valued throughout the process.'",
    },
    {
      question: "How do you keep up with industry trends?",
      answer:
        "The interviewer wants to gauge your commitment to professional development.\n\nSample Answer:\n'I stay updated by subscribing to industry publications, attending HR conferences, and engaging in professional networks. I also participate in webinars to learn about the latest recruitment strategies and tools.'",
    },
    {
      question: "What is your approach to diversity and inclusion in recruitment?",
      answer:
        "This question assesses your commitment to fostering a diverse workplace.\n\nSample Answer:\n'I ensure diversity by sourcing candidates from underrepresented groups and ensuring that job descriptions are inclusive. I also work closely with hiring managers to avoid unconscious bias during interviews.'",
    },
    {
      question: "What metrics do you track in your recruitment process?",
      answer:
        "This question gauges your data-driven approach.\n\nSample Answer:\n'I track key metrics such as time-to-fill, cost-per-hire, and candidate satisfaction. Monitoring these metrics allows me to continuously improve our hiring process.'",
    },
    {
      question: "How do you deal with candidate ghosting?",
      answer:
        "The interviewer wants to understand how you manage situations where candidates stop communicating.\n\nSample Answer:\n'I maintain regular communication throughout the process to minimize ghosting. If a candidate becomes unresponsive, I follow up with a friendly email or phone call to check in and understand their situation.'",
    },
    {
      question: "What role does employer branding play in recruitment?",
      answer:
        "This question evaluates your understanding of employer branding’s impact.\n\nSample Answer:\n'Employer branding is essential for attracting top talent. I promote our culture through social media and employee testimonials, highlighting the benefits of working with us to engage potential candidates.'",
    },
    {
      question: "What questions do you ask to assess cultural fit?",
      answer:
        "This question helps the interviewer understand your approach beyond technical skills.\n\nSample Answer:\n'I ask questions like, “Describe a time you worked in a team with differing opinions” to gauge how candidates approach teamwork. This helps ensure they align with our company values.'",
    },
    {
      question: "How do you prioritize multiple open positions?",
      answer:
        "The interviewer wants to assess your time-management skills.\n\nSample Answer:\n'I prioritize roles based on their urgency, business impact, and feedback from hiring managers. I use project management tools to stay organized and adjust priorities based on evolving needs.'",
    },
    {
      question: "How do you manage high-pressure recruitment situations?",
      answer:
        "The interviewer is interested in how you handle stressful conditions.\n\nSample Answer:\n'I stay calm under pressure by creating checklists and using project management tools to track my tasks. Clear communication with hiring managers helps align expectations and ensures smooth progress.'",
    },
    {
      question: "How do you handle salary negotiations?",
      answer:
        "This question evaluates your negotiation skills.\n\nSample Answer:\n'I ensure transparency during negotiations by discussing salary ranges early in the process. I focus on the entire compensation package, including benefits and growth opportunities, to highlight the value of joining our team.'",
    },
    {
      question: "Where do you see yourself in five years?",
      answer:
        "This question assesses your career aspirations.\n\nSample Answer:\n'In five years, I aim to take on a leadership role in recruitment, overseeing a team and driving strategic initiatives such as employer branding and talent acquisition strategies.'",
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
              src="/assets/resourse/interview/hrss.jpg"
              alt="Featured Image"
              width={1200}
              height={600}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-extrabold z-10">
            HR Recruiter Interview Questions
            </h2>
          </div>
          <p className="text-gray-700 mt-6 mb-4 leading-relaxed">
            Are you preparing for a HR Recruiter interview? Here are 19
            essential questions to help you succeed in your interview and
            demonstrate your mastery of HR Recruiter.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Top HR Recruiter Interview Questions & Answers
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

export default HrRes;