"use client";

import { useState } from "react";
import Image from "next/image";
import { FaQuestionCircle, FaLightbulb } from "react-icons/fa";
import TextLight from "./TextLight";

const HrRes = () => {
  const [faqs] = useState([
    {
        question: "Tell me about yourself.",
        explanation: "This question aims to assess your background, experience, and motivations. Focus on your professional journey, relevant skills, and what excites you about recruitment.",
        answer: "I have over five years of experience in recruitment, primarily in the technology sector. I began my career as a recruitment coordinator, where I learned the fundamentals of sourcing and screening candidates. Over time, I advanced to a senior recruiter position at XYZ Company, where I managed full-cycle recruitment for technical roles. I’m passionate about matching talent with opportunities and love the challenge of finding the right fit for both the candidate and the organization.",
    },
    {
        question: "What attracted you to a career in recruitment?",
        explanation: "This question seeks to understand your motivation for choosing this profession. Highlight your passion for connecting people with jobs and contributing to organizational success.",
        answer: "I was drawn to recruitment because it allows me to make a meaningful impact by connecting talented individuals with opportunities that align with their skills and career goals. I enjoy the challenge of identifying top talent and contributing to a company’s growth through effective hiring.",
    },
    {
        question: "What are your key strengths as a recruiter?",
        explanation: "This question helps the interviewer gauge your self-awareness and how your strengths can benefit their organization.",
        answer: "One of my key strengths is my ability to build relationships with candidates, which fosters trust and openness. Additionally, I have strong analytical skills that enable me to assess candidate qualifications effectively and make data-driven decisions in the recruitment process.",
    },
    {
        question: "What is your approach to sourcing candidates?",
        explanation: "Here, the interviewer wants to know your strategies for finding potential candidates.",
        answer: "I employ a multi-channel approach to sourcing candidates. I utilize LinkedIn for passive candidate sourcing and leverage job boards for active candidates. I also attend networking events and industry conferences to connect with potential hires and tap into employee referrals for quality leads.",
    },
    {
        question: "How do you assess a candidate’s qualifications?",
        explanation: "This question evaluates your methodology in determining if a candidate meets the job requirements.",
        answer: "I assess qualifications through a combination of resume reviews, behavioral interviews, and skills assessments. I focus on their past experiences, asking for specific examples of how they handled challenges relevant to the role, ensuring they possess both the technical and soft skills necessary for success.",
    },
    {
        question: "Describe a time when you filled a difficult position.",
        explanation: "The interviewer wants to hear about your problem-solving skills and perseverance in challenging situations.",
        answer: "I once had to fill a niche role for a data scientist in a highly competitive market. To find suitable candidates, I expanded my search to include passive candidates and leveraged LinkedIn and specialized forums. After several rounds of outreach, I found a candidate who not only met the technical requirements but also aligned well with our company culture, resulting in a successful hire.",
    },
    {
        question: "How do you handle rejection from candidates?",
        explanation: "This question assesses your empathy and communication skills when delivering disappointing news.",
        answer: "I handle rejection with sensitivity and transparency. I provide constructive feedback to candidates, explaining the decision respectfully and highlighting their strengths. I also encourage them to apply for future opportunities, maintaining a positive relationship for potential future interactions.",
    },
    {
        question: "What recruitment software and tools do you use?",
        explanation: "The interviewer is interested in your familiarity with technology that can streamline recruitment processes.",
        answer: "I am proficient with several applicant tracking systems, including Greenhouse and Workable. I also use LinkedIn Recruiter for sourcing candidates and tools like Zoom for conducting virtual interviews. Familiarity with these tools has enhanced my efficiency in managing the recruitment process.",
    },
    {
        question: "How do you ensure a positive candidate experience?",
        explanation: "Candidate experience is crucial for employer branding; the interviewer wants to know how you prioritize this aspect.",
        answer: "I ensure a positive candidate experience by maintaining clear communication throughout the hiring process, providing timely feedback, and being transparent about timelines. I also personalize the interview experience by understanding each candidate’s unique journey and interests, making them feel valued and engaged.",
    },
    {
        question: "How do you keep up with industry trends?",
        explanation: "Staying informed about industry trends is vital for effective recruitment. The interviewer wants to gauge your commitment to professional development.",
        answer: "I stay updated with industry trends by subscribing to HR publications, participating in webinars, and attending conferences. Networking with fellow HR professionals also provides insights into best practices and emerging trends in recruitment.",
    },
    {
        question: "Can you describe your interview process?",
        explanation: "This question allows you to detail your structured approach to interviewing candidates.",
        answer: "My interview process typically starts with a phone screening to assess the candidate's basic qualifications and cultural fit. If they pass, I conduct a more in-depth behavioral interview to evaluate their skills and experiences. I also incorporate skill assessments when applicable, ensuring a thorough evaluation before presenting candidates to the hiring manager.",
    },
    {
        question: "How do you approach diversity and inclusion in recruitment?",
        explanation: "D&I is an important focus in modern recruitment. The interviewer wants to know your strategies for fostering diversity.",
        answer: "I actively promote diversity in recruitment by sourcing candidates from a wide range of backgrounds and partnering with organizations that support underrepresented groups. I also ensure that job descriptions are inclusive and avoid biased language, creating a welcoming environment for all applicants.",
    },
    {
        question: "What do you think is the most challenging aspect of recruiting?",
        explanation: "The interviewer wants to hear your perspective on recruitment challenges and how you address them.",
        answer: "One of the most challenging aspects is competing for top talent, especially in a tight labor market. To tackle this, I focus on enhancing our employer brand and leveraging employee testimonials to showcase our company culture, making us more attractive to potential candidates.",
    },
    {
        question: "How do you prioritize multiple open positions?",
        explanation: "This question assesses your organizational and time-management skills.",
        answer: "I prioritize open positions based on factors such as urgency, impact on the business, and hiring manager feedback. I use project management tools to track progress and ensure I allocate time effectively across all roles, regularly reassessing priorities based on changing needs.",
    },
    {
        question: "What metrics do you track in your recruitment process?",
        explanation: "The interviewer wants to understand your data-driven approach to recruitment.",
        answer: "I track several metrics, including time-to-fill, cost-per-hire, and candidate satisfaction scores. These metrics help me evaluate the effectiveness of our recruitment strategies and identify areas for improvement to streamline our hiring process.",
    },
    {
        question: "How do you handle a difficult hiring manager?",
        explanation: "This question assesses your interpersonal skills and ability to collaborate with others.",
        answer: "I approach difficult hiring managers by initiating open conversations to understand their expectations and concerns. I make it a point to provide data on candidate availability and market trends, aligning our recruitment strategy with their needs and ensuring a collaborative relationship.",
    },
    {
        question: "What role does employer branding play in your recruitment strategy?",
        explanation: "This question seeks to understand how you leverage employer branding in attracting candidates.",
        answer: "Employer branding is crucial in attracting quality candidates. I promote our brand through social media and employee engagement initiatives, highlighting our culture and values. A strong employer brand helps differentiate us from competitors and appeals to candidates who resonate with our mission.",
    },
    {
        question: "How do you identify top talent?",
        explanation: "The interviewer wants to know your criteria and methods for recognizing high-potential candidates.",
        answer: "I identify top talent by looking for candidates who not only meet the technical requirements but also demonstrate a growth mindset and strong soft skills. I assess their problem-solving abilities and cultural fit during interviews, ensuring they align with our company values.",
    },
    {
        question: "Describe a time when you had to deal with a high volume of applications.",
        explanation: "This question evaluates your ability to manage workload and maintain efficiency.",
        answer: "During a recent recruitment drive for a new product launch, I received over 300 applications within a week. To manage this, I utilized filters in our ATS to quickly identify candidates who met key qualifications. I also prioritized applications based on urgency and scheduled batch screenings, which helped me maintain efficiency and make timely decisions.",
    },
    {
        question: "What is your experience with remote hiring?",
        explanation: "Remote work has become common; the interviewer wants to know how you adapt your recruiting process to this trend.",
        answer: "I have extensive experience with remote hiring, utilizing virtual interview platforms like Zoom and Google Meet. I ensure that our interviews are engaging and interactive, simulating a real work environment. Additionally, I pay attention to candidates’ communication skills and adaptability to remote work during the selection process.",
    },
    {
        question: "How do you maintain relationships with candidates?",
        explanation: "This question focuses on your candidate relationship management skills.",
        answer: "I maintain relationships with candidates by regularly updating them about their application status, even if they are not selected. I also follow up periodically, sharing relevant job openings or company news, ensuring they feel valued and engaged with our brand.",
    },
    {
        question: "What is your approach to salary negotiations?",
        explanation: "The interviewer wants to know how you handle sensitive discussions around compensation.",
        answer: "I approach salary negotiations by first understanding the candidate’s expectations and the market rate for the position. I aim for transparency and fairness, discussing the overall compensation package, including benefits and growth opportunities, to help candidates see the full value of joining our team.",
    },
    {
        question: "How do you ensure compliance with employment laws?",
        explanation: "This question assesses your knowledge of legal requirements in recruitment.",
        answer: "I ensure compliance with employment laws by staying updated on local and national regulations. I integrate these practices into our recruitment process, providing training for hiring managers on legal requirements and ensuring that our practices are fair and non-discriminatory.",
    },
    {
        question: "Can you give an example of a successful recruitment campaign you’ve run?",
        explanation: "The interviewer wants to hear about a tangible achievement in your recruiting career.",
        answer: "I launched a recruitment campaign aimed at increasing our software engineering team’s diversity. We partnered with diverse organizations, attended career fairs, and used targeted advertising on social media. As a result, we increased our diverse candidate pool by 40%, leading to several successful hires and enhancing our team dynamics.",
    },
    {
        question: "What do you think makes a great recruiter?",
        explanation: "This question evaluates your understanding of the qualities essential for success in recruitment.",
        answer: "A great recruiter possesses strong communication skills, empathy, and adaptability. They should be detail-oriented and data-driven, able to leverage metrics to refine their processes. Additionally, a good recruiter is proactive in building relationships and creating positive candidate experiences.",
    },
    {
        question: "How do you handle high-pressure situations in recruitment?",
        explanation: "The interviewer is interested in your ability to maintain composure and effectiveness under pressure.",
        answer: "I handle high-pressure situations by staying organized and prioritizing tasks. I often create checklists and use project management tools to keep track of my progress. When faced with tight deadlines, I communicate clearly with stakeholders to manage expectations and ensure that I allocate my time effectively.",
    },
    {
        question: "What questions do you ask in interviews to assess culture fit?",
        explanation: "This question helps the interviewer understand your approach to evaluating candidates beyond skills.",
        answer: "I often ask candidates about their preferred work environment and how they handle teamwork and conflict. Questions like 'Can you describe a time when you had to work with a difficult team member?' help gauge their approach to collaboration and their values, ensuring they align with our company culture.",
    },
    {
        question: "How do you deal with candidate ghosting?",
        explanation: "The interviewer wants to know how you handle situations where candidates suddenly stop communicating.",
        answer: "I address ghosting by maintaining regular communication with candidates throughout the process. If a candidate goes silent, I reach out via email or phone to check in and see if they have any questions or concerns. This proactive approach helps me understand their situation and keeps the lines of communication open.",
    },
    {
        question: "What role does social media play in your recruiting efforts?",
        explanation: "The interviewer wants to understand how you leverage social media for recruitment purposes.",
        answer: "Social media plays a significant role in my recruiting efforts. I use platforms like LinkedIn to network with potential candidates and showcase our employer brand. Additionally, I engage with industry-specific groups on Facebook and Twitter, where I can share job openings and connect with passive candidates.",
    },
    {
        question: "Where do you see yourself in five years?",
        explanation: "This question assesses your career goals and ambition within the recruitment field.",
        answer: "In five years, I see myself in a leadership role within recruitment, possibly overseeing a larger team or focusing on strategic talent acquisition initiatives. I aim to continue developing my skills and knowledge in employer branding and diversity recruitment, contributing to building a strong talent pipeline for the organization.",
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
            Are you preparing for a HR Recruiter interview? Here are 30
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
                    <p className="text-gray-700 leading-relaxed">
                        {faq.explanation}
                      </p>
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