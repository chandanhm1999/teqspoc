"use client";

import { useState } from "react";
import Image from "next/image";
import TextLight from "./TextLight";

const Hr = () => {
  const [syllabus] = useState([
    {
      section: "Introduction to Recruitment",
      topics: [
        "Definition and Importance of Recruitment",
        "Roles and Responsibilities of Recruiters",
        "Recruitment vs. Talent Acquisition",
        "Understanding the Recruitment Process",
      ],
    },
    {
      section: "Recruitment Planning and Strategy",
      topics: [
        "Workforce Planning and Forecasting",
        "Identifying Staffing Needs",
        "Setting Recruitment Goals",
        "Employer Branding and Attracting Talent",
        "Building Talent Pipelines",
      ],
    },
    {
      section: "Understanding Job Descriptions and Specifications",
      topics: [
        "Writing Effective Job Descriptions",
        "Understanding Job Requirements",
        "Skills, Competencies, and Cultural Fit",
        "Job Market Trends",
      ],
    },
    {
      section: "Sourcing Candidates",
      topics: [
        "Internal vs. External Recruitment",
        "Job Portals and Job Boards",
        "Social Media Recruiting (LinkedIn, Facebook, Twitter)",
        "Employee Referrals",
        "Using Recruitment Agencies and Headhunters",
        "Campus Recruiting",
      ],
    },
    {
      section: "Screening and Shortlisting Candidates",
      topics: [
        "Resumé and CV Screening Techniques",
        "Phone and Video Screening Best Practices",
        "Behavioral Screening",
        "Skills Testing",
        "Application Tracking Systems (ATS) Overview",
      ],
    },
    {
      section: "Interviewing Techniques",
      topics: [
        "Types of Interviews: Structured, Unstructured, Behavioral",
        "Competency-Based Interviewing",
        "Creating Effective Interview Questions",
        "Understanding Body Language",
        "Panel Interviews",
        "Virtual Interviews and Remote Interviewing Best Practices",
      ],
    },
    {
      section: "Selection and Assessment",
      topics: [
        "Candidate Evaluation and Scoring",
        "Pre-Employment Testing and Assessments",
        "Psychometric Testing",
        "Reference Checks",
        "Background and Criminal Record Checks",
      ],
    },
    {
      section: "Legal and Ethical Considerations in Recruitment",
      topics: [
        "Employment Laws (Local and International)",
        "Non-Discriminatory Hiring Practices",
        "Data Privacy (GDPR, CCPA)",
        "Compliance with Labor Laws",
        "Diversity, Equity, and Inclusion (DEI) in Hiring",
      ],
    },
    {
      section: "Salary Negotiation and Offers",
      topics: [
        "Understanding Compensation Structures",
        "Negotiating Salaries and Benefits",
        "Job Offer Preparation",
        "Onboarding and Pre-Employment Processes",
      ],
    },
    {
      section: "Recruitment Metrics and Analytics",
      topics: [
        "Key Recruitment Metrics (Time-to-Hire, Cost-per-Hire, etc.)",
        "Using Data to Improve Recruitment Efficiency",
        "Applicant Tracking System (ATS) Metrics",
        "Measuring Quality of Hire",
        "Understanding Turnover Rates and Retention",
      ],
    },
    {
      section: "Employer Branding and Candidate Experience",
      topics: [
        "Building a Positive Employer Brand",
        "Improving Candidate Experience",
        "Managing Employer Review Sites (Glassdoor, Indeed)",
        "Engaging Passive Candidates",
      ],
    },
    {
      section: "Technology in Recruitment",
      topics: [
        "Overview of Applicant Tracking Systems (ATS)",
        "Recruitment Automation Tools",
        "AI and Machine Learning in Recruitment",
        "Social Media and Mobile Recruiting",
      ],
    },
    {
      section: "Diversity and Inclusion in Recruitment",
      topics: [
        "Creating a Diverse Talent Pool",
        "Addressing Unconscious Bias",
        "Inclusive Hiring Practices",
        "Diversity Recruitment Metrics",
      ],
    },
    {
      section: "Recruitment Marketing",
      topics: [
        "Using Digital Marketing in Recruitment",
        "Social Media Campaigns for Recruitment",
        "Content Marketing for Attracting Talent",
        "Employer Value Proposition (EVP)",
        "Engaging Candidates through Career Pages",
      ],
    },
    {
      section: "Building and Managing Recruitment Teams",
      topics: [
        "Leading and Mentoring Recruitment Teams",
        "Collaborating with Hiring Managers",
        "Managing Cross-functional Teams",
        "Recruitment Process Outsourcing (RPO)",
      ],
    },
    {
      section: "Advanced Recruitment Techniques",
      topics: [
        "Headhunting and Executive Search",
        "Global and Remote Recruitment",
        "Freelance and Contract Hiring",
        "Passive Candidate Recruitment",
      ],
    },
    {
      section: "Trends and Future of Recruitment",
      topics: [
        "Gig Economy and Remote Work",
        "Recruitment and Artificial Intelligence",
        "Predictive Analytics in Hiring",
        "Future of Remote Recruitment and Virtual Onboarding",
      ],
    },
    {
      section: "Case Studies and Practical Exercises",
      topics: [
        "Recruitment Challenges",
        "Building Recruitment Strategies for Various Industries",
        "Mock Interviews and Feedback Sessions",
        "Role-playing Exercises for Salary Negotiations",
        "Real-Life Case Studies on Talent Acquisition",
      ],
    },
    {
      section: "Soft Skills for Recruiters",
      topics: [
        "Communication Skills",
        "Negotiation and Persuasion",
        "Problem-Solving and Critical Thinking",
        "Time Management and Organization",
        "Empathy and Relationship Building with Candidates",
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
              src="/assets/sys/hrs.jpg"
              alt="HR Recruiter Course Image"
              width={1200}
              height={600}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-extrabold z-10">
              HR Recruiter Course Syllabus
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
            HR Syllabus
            <TextLight text={"Courses"} />
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

export default Hr;
