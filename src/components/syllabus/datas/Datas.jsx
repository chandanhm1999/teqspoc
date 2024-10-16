"use client";

import { useState } from "react";
import Image from "next/image";
import TextLight from "./TextLight";

const Datas = () => {
  const [syllabus] = useState([
    {
      section: "Introduction to Data Engineering",
      topics: [
        "Overview of Data Engineering: Definition and role of a data engineer, Differences between data engineering, data science, and data analytics",
        "Data Ecosystem: Types of data (structured, semi-structured, unstructured), Data lifecycle (collection, storage, processing, analysis, visualization)",
      ],
    },
    {
      section: "Data Modeling and Database Systems",
      topics: [
        "Relational Databases: Introduction to SQL, Database design principles (normalization, denormalization), SQL queries and optimization",
        "NoSQL Databases: Types of NoSQL databases (document, key-value, column-family, graph), Use cases and data models for NoSQL",
        "Data Warehousing: Introduction to data warehousing concepts, ETL vs. ELT processes, Data warehouse architectures (Kimball, Inmon)",
      ],
    },
    {
      section: "Data Ingestion and ETL Processes",
      topics: [
        "Data Ingestion Techniques: Batch vs. streaming data ingestion, Tools and frameworks for data ingestion (Apache Kafka, Apache NiFi)",
        "ETL Tools: Introduction to ETL tools (Apache Airflow, Talend, Informatica), Designing and implementing ETL pipelines, Error handling and logging in ETL processes",
      ],
    },
    {
      section: "Big Data Technologies",
      topics: [
        "Introduction to Big Data: Characteristics of big data (volume, velocity, variety), Use cases for big data",
        "Apache Hadoop Ecosystem: HDFS (Hadoop Distributed File System), MapReduce programming model, Tools: Hive, Pig, HBase",
        "Apache Spark: Introduction to Spark and its components, Spark Core and Spark SQL, Streaming with Spark Streaming, Machine Learning with MLlib",
      ],
    },
    {
      section: "Data Storage and Management",
      topics: [
        "Data Lakes: Definition and architecture of data lakes, Tools and technologies for data lakes (Amazon S3, Azure Data Lake)",
        "Data Governance and Quality: Data quality frameworks, Data lineage and metadata management, Tools for data governance (Apache Atlas, Collibra)",
      ],
    },
    {
      section: "Cloud Data Engineering",
      topics: [
        "Introduction to Cloud Computing: Overview of cloud platforms (AWS, Azure, Google Cloud)",
        "Data Engineering on Cloud Platforms: Data storage services (Amazon S3, Google Cloud Storage), Managed databases (Amazon RDS, Azure SQL Database), Data pipelines in the cloud (AWS Glue, Google Dataflow)",
      ],
    },
    {
      section: "Data Visualization and Reporting",
      topics: [
        "Data Visualization Principles: Importance of data visualization, Best practices for creating effective visualizations",
        "Tools for Data Visualization: Overview of visualization tools (Tableau, Power BI, Looker), Building dashboards and reports, Integrating visualizations with data sources",
      ],
    },
    {
      section: "Capstone Project",
      topics: [
        "Project Design and Implementation: Identifying a real-world data engineering problem, Designing and implementing a data pipeline, Presenting findings and insights from the project",
      ],
    },
    {
      section: "Best Practices and Future Trends",
      topics: [
        "Data Engineering Best Practices: Version control for data pipelines, Testing and monitoring ETL processes",
        "Future Trends in Data Engineering: Emerging technologies (AI/ML in data engineering), Trends in data privacy and security",
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
              src="/assets/resourse/interview/dataengineer.jpg"
              alt="Data Engineering Course Image"
              width={1200}
              height={600}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-extrabold z-10">
              Data Engineering Course Syllabus
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
            Data Engineering 
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

export default Datas;

