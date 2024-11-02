"use client";

import { useState } from "react";
import Image from "next/image";
import { FaQuestionCircle, FaLightbulb } from "react-icons/fa";
import TextLight from "./TextLight";

const Dataengineerres = () => {
  const [faqs] = useState([
    {
      question: "What is Data Engineering?",
      answer:
        "Data engineering involves designing, building, and maintaining systems and processes for collecting, storing, processing, and analyzing data.",
    },
    {
      question: "What is the difference between ETL and ELT?",
      answer:
        "ETL (Extract, Transform, Load) processes data before loading it into the target system, while ELT (Extract, Load, Transform) loads data first and then transforms it within the target system.",
    },
    {
      question: "Can you explain what a data lake is?",
      answer:
        "A data lake is a centralized repository that stores vast amounts of raw data in its native format, accommodating structured, semi-structured, and unstructured data.",
    },
    {
      question: "What is a data warehouse?",
      answer:
        "A data warehouse is a centralized system that stores structured data from multiple sources, optimized for reporting and analysis.",
    },
    {
      question: "What are the differences between SQL and NoSQL databases?",
      answer:
        "SQL databases are structured, schema-based, and use SQL for querying, while NoSQL databases are schema-less, can store unstructured data, and often use flexible query languages.",
    },
    {
      question: "What is Apache Kafka used for?",
      answer:
        "Apache Kafka is a distributed event streaming platform used for building real-time data pipelines and applications, supporting high-throughput and fault-tolerant messaging.",
    },
    {
      question: "What is the role of a primary key in a database?",
      answer:
        "A primary key uniquely identifies each record in a database table, ensuring data integrity and enabling efficient data retrieval.",
    },
    {
      question: "What is normalization?",
      answer:
        "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity, often by dividing data into related tables.",
    },
    {
      question: "What is denormalization, and when is it used?",
      answer:
        "Denormalization involves combining tables to reduce complexity and improve read performance, often used in data warehouses for analytical queries.",
    },
    {
      question: "Explain the concept of data lineage.",
      answer:
        "Data lineage tracks the flow of data through systems and processes, providing visibility into data transformations and enabling data quality management.",
    },
    {
      question: "What is batch processing?",
      answer:
        "Batch processing involves processing large volumes of data at once, typically scheduled at regular intervals, suitable for non-real-time applications.",
    },
    {
      question: "What is stream processing?",
      answer:
        "Stream processing involves processing data in real-time as it arrives, allowing for immediate insights and actions on data streams.",
    },
    {
      question:
        "What are the advantages of using cloud services for data engineering?",
      answer:
        "Advantages include scalability, cost-effectiveness, accessibility, and leveraging managed services for databases and data pipelines.",
    },
    {
      question: "What is data governance?",
      answer:
        "Data governance refers to the management of data availability, usability, integrity, and security, establishing policies and standards for data usage.",
    },
    {
      question: "What is Apache Hadoop?",
      answer:
        "Apache Hadoop is an open-source framework for distributed storage and processing of large datasets using clusters of commodity hardware.",
    },
    {
      question: "What is the purpose of a foreign key?",
      answer:
        "A foreign key establishes a relationship between two tables, referencing the primary key of another table to enforce referential integrity.",
    },
    {
      question: "What are some common data transformation techniques?",
      answer:
        "Common techniques include data cleaning, aggregation, filtering, and data type conversion.",
    },
    {
      question:
        "What is the difference between a data lake and a data warehouse?",
      answer:
        "A data lake stores raw data in various formats, while a data warehouse stores structured data optimized for analysis.",
    },
    {
      question: "How do you handle missing or corrupt data?",
      answer:
        "Strategies include data imputation, removing records, or using validation techniques to clean the data.",
    },
    {
      question: "What are some popular data visualization tools?",
      answer:
        "Popular tools include Tableau, Power BI, Looker, and open-source libraries like Matplotlib and Seaborn.",
    },
    {
      question: "What is the role of Apache Spark in data engineering?",
      answer:
        "Apache Spark is a distributed processing framework used for large-scale data processing, providing high-level APIs for data analytics and machine learning.",
    },
    {
      question: "What is data quality, and how do you ensure it?",
      answer:
        "Data quality refers to the accuracy, completeness, and consistency of data. Ensuring it involves validation checks, monitoring, and implementing data cleansing processes.",
    },
    {
      question: "What is data serialization, and why is it important?",
      answer:
        "Data serialization is the process of converting data into a format suitable for storage or transmission. It's important for efficient data exchange and storage in distributed systems.",
    },
    {
      question: "What are some common challenges in data engineering?",
      answer:
        "Common challenges include handling large volumes of data, ensuring data quality, managing data integration, and optimizing performance.",
    },
    {
      question: "What is a distributed database?",
      answer:
        "A distributed database is a database that is spread across multiple locations, which can be on different servers or in different geographical locations, ensuring fault tolerance and scalability.",
    },
    {
      question: "What is the significance of metadata in data engineering?",
      answer:
        "Metadata provides context about data, such as its source, structure, and relationships, facilitating data management and governance.",
    },
    {
      question: "What is a data pipeline?",
      answer:
        "A data pipeline is a series of data processing steps that move data from source to destination, often involving data extraction, transformation, and loading processes.",
    },
    {
      question: "What tools do you use for orchestration in data engineering?",
      answer:
        "Common orchestration tools include Apache Airflow, Luigi, and Prefect, which automate the execution of complex data workflows.",
    },
    {
      question: "What are some best practices for data modeling?",
      answer:
        "Best practices include defining clear requirements, using normalization techniques, documenting the schema, and considering future scalability.",
    },
    {
      question:
        "How do you stay current with data engineering trends and technologies?",
      answer:
        "Staying current involves following industry blogs, participating in online communities, attending conferences, and continuous learning through courses and certifications.",
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
            Are you preparing for a Dataengineer interview? Here are 30
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
