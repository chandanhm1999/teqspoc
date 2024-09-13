"use client";

import { useState } from "react";
import Image from "next/image";
import { FaQuestionCircle, FaLightbulb } from "react-icons/fa";
import TextLight from "./TextLight";

const Dataengineerres = () => {
    const [faqs] = useState([
        {
          question: "What is data engineering?",
          answer:
            "Data engineering is the process of designing, building, and maintaining the systems and infrastructure required to collect, store, and analyze data. It involves working with large datasets, creating data pipelines, and ensuring data quality and integrity.",
        },
        {
          question: "What is the difference between a data engineer and a data scientist?",
          answer:
            "A data engineer focuses on building and maintaining the data infrastructure and pipelines, whereas a data scientist analyzes and interprets complex data to provide actionable insights. Data engineers ensure the availability and quality of data for data scientists to use.",
        },
        {
          question: "What are some common tools used in data engineering?",
          answer:
            "Common tools used in data engineering include Apache Hadoop, Apache Spark, Apache Kafka, SQL databases (like PostgreSQL and MySQL), NoSQL databases (like MongoDB and Cassandra), ETL tools (like Apache NiFi and Talend), and cloud platforms (like AWS, Azure, and Google Cloud).",
        },
        {
          question: "What is ETL?",
          answer:
            "ETL stands for Extract, Transform, Load. It is a process used to collect data from various sources, transform it into a usable format, and load it into a data warehouse or database for analysis.",
        },
        {
          question: "What is data normalization?",
          answer:
            "Data normalization is the process of organizing data to reduce redundancy and improve data integrity. It involves structuring data in a way that minimizes duplication and ensures consistency across the database.",
        },
        {
          question: "What is a data warehouse?",
          answer:
            "A data warehouse is a centralized repository that stores large volumes of historical and current data from various sources. It is designed for analytical processing and reporting, enabling businesses to perform complex queries and generate insights.",
        },
        {
          question: "What is a data lake?",
          answer:
            "A data lake is a storage system that holds raw, unstructured, or semi-structured data in its native format. It allows for scalable storage and flexible data processing, making it suitable for big data analytics and machine learning.",
        },
        {
          question: "What is the purpose of data partitioning?",
          answer:
            "Data partitioning involves dividing a large dataset into smaller, more manageable segments based on specific criteria. It improves query performance, reduces processing time, and enhances data management efficiency.",
        },
        {
          question: "What is a data pipeline?",
          answer:
            "A data pipeline is a series of data processing steps that extract data from sources, transform it into a usable format, and load it into a destination, such as a data warehouse or analytics platform. It automates the data flow and ensures data availability.",
        },
        {
          question: "What is schema-on-read versus schema-on-write?",
          answer:
            "Schema-on-read means that data is stored in its raw form and the schema is applied when the data is read or queried. Schema-on-write involves defining the schema before data is written into the database, ensuring data conforms to the schema upon entry.",
        },
        {
          question: "What is data modeling?",
          answer:
            "Data modeling is the process of creating a visual representation of a system’s data and its relationships. It involves defining data structures, such as entities, attributes, and relationships, to organize and manage data effectively.",
        },
        {
          question: "What are some common SQL operations used in data engineering?",
          answer:
            "Common SQL operations include SELECT (retrieving data), JOIN (combining data from multiple tables), GROUP BY (aggregating data), ORDER BY (sorting data), and INSERT/UPDATE/DELETE (manipulating data).",
        },
        {
          question: "What is the CAP theorem?",
          answer:
            "The CAP theorem states that a distributed data system can only guarantee two of the following three properties: Consistency (all nodes see the same data), Availability (the system is always available), and Partition tolerance (the system can handle network partitions).",
        },
        {
          question: "What is a data mart?",
          answer:
            "A data mart is a subset of a data warehouse that is focused on a specific business area or department. It provides tailored data and analytics to meet the needs of particular business users or functions.",
        },
        {
          question: "What is the role of a data engineer in a big data environment?",
          answer:
            "In a big data environment, a data engineer is responsible for designing and managing scalable data architectures, building data pipelines, ensuring data quality, and integrating various data sources to support analytics and business intelligence.",
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
              src="/assets/resourse/interview/dataengineer.jpg"
              alt="Featured Image"
              width={1200}
              height={600}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-extrabold z-10">
            Dataengineer Interview Questions
            </h2>
          </div>
          <p className="text-gray-700 mt-6 mb-4 leading-relaxed">
            Are you preparing for a Dataengineer interview? Here are 15
            essential questions to help you succeed in your interview and
            demonstrate your mastery of Scrum.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Top Dataengineer Interview Questions & Answers
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

export default Dataengineerres;
