"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaChalkboardTeacher, FaMoneyBillWave, FaUsers, FaLightbulb } from "react-icons/fa";
import Link from "next/link";
import CareersTable from "./CareersTable";

const Career = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        course: "",
        phone: "",
        linkedin: "",
        experience: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.course || !formData.phone) {
            toast.error("Please fill in all required fields.");
        } else {
            toast.success("Form data submitted successfully!");
            console.log("Form data submitted:", formData);
            // Add your form submission logic here
        }
    };

    return (
        <main className="container mx-auto mt-12">
            {/* Hero Section */}
            <section className="relative bg-blue-50 py-16 px-8 rounded-lg shadow-lg">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-7/12">
                        <h1 className="text-4xl font-bold text-blue-800 mb-4">We are hiring</h1>
                        <p className="text-lg text-gray-600 mb-6">
                            Passionate about sharing your knowledge? Empower future generations while growing your career at TeQSpoc.
                        </p>
                        <Link href="#apply" className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-sm hover:bg-green-600 transition duration-300">
                            Become an Instructor
                        </Link>
                    </div>
                    <div className="w-full md:w-5/12">
                        <Image
                            src="/assets/carrers/hiring.jpg"
                            alt="Join Our Community"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-lg object-cover shadow-lg"
                        />
                    </div>
                </div>
            </section>

            <CareersTable />

            {/* Why Join Section */}
            <section className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <FaChalkboardTeacher className="text-blue-600 text-4xl mb-4" />
                    <h3 className="text-lg font-semibold">Expand Your Reach</h3>
                    <p className="text-gray-500">Teach a global audience of aspiring professionals.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <FaMoneyBillWave className="text-blue-600 text-4xl mb-4" />
                    <h3 className="text-lg font-semibold">Earn While You Teach</h3>
                    <p className="text-gray-500">Gain supplemental income on your own terms.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <FaUsers className="text-blue-600 text-4xl mb-4" />
                    <h3 className="text-lg font-semibold">Collaborate with Peers</h3>
                    <p className="text-gray-500">Join a community of like-minded experts.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <FaLightbulb className="text-blue-600 text-4xl mb-4" />
                    <h3 className="text-lg font-semibold">Shape the Future</h3>
                    <p className="text-gray-500">Help shape tomorrow’s workforce with your expertise.</p>
                </div>
            </section>

            {/* Application Form and Additional Content Section */}
            <section id="apply" className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Careers at TeQSpoc</h2>
                    <div className="mb-6">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border-2 border-gray-300 focus:border-blue-500 rounded-lg placeholder-gray-400"
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border-2 border-gray-300 focus:border-blue-500 rounded-lg placeholder-gray-400"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="mb-6">
                        <select
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border-2 border-gray-300 focus:border-blue-500 rounded-lg text-gray-500"
                        >
                            <option disabled value="">Select Course</option>
                            <option value="Scrum Master">Scrum Master</option>
                            <option value="DotNet Certification">DotNet Certification</option>
                            <option value="Java Certification">Java Certification</option>
                            <option value="Software Testing">Software Testing</option>
                            <option value="Data Engineer">Data Engineer</option>
                            <option value="DevOps">DevOps</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border-2 border-gray-300 focus:border-blue-500 rounded-lg placeholder-gray-400"
                            placeholder="Phone Number"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="url"
                            id="linkedin"
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border-2 border-gray-300 focus:border-blue-500 rounded-lg placeholder-gray-400"
                            placeholder="LinkedIn Profile"
                        />
                    </div>
                    <div className="mb-6">
                        <textarea
                            id="experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border-2 border-gray-300 focus:border-blue-500 rounded-lg placeholder-gray-400"
                            placeholder="Your Experience"
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-300">Submit</button>
                </form>

                {/* Additional Content Section */}
                <div className="bg-white p-8 shadow-lg rounded-lg">
                    <h2 className="text-3xl font-bold text-blue-800 mb-6">Unlock Your Potential with TeQSpoc</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        Join TeQSpoc and be part of an innovative, collaborative, and growth-oriented workplace. Explore exciting opportunities below:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-4">
                        <li>
                            <span className="font-semibold">Faculty Opportunities:</span> 
                            Become an expert instructor and share your knowledge with the next generation of learners.
                        </li>
                        <li>
                            <span className="font-semibold">Learning Coordinators:</span> 
                            Manage immersive learning experiences and ensure smooth educational delivery.
                        </li>
                        <li>
                            <span className="font-semibold">Career Mentors:</span> 
                            Shape the future workforce by guiding aspiring minds as a mentor at TeQSpoc.
                        </li>
                        <li>
                            <span className="font-semibold">Program Counsellors:</span> 
                            Advise and guide students towards the best programs for their career growth.
                        </li>
                    </ul>
                </div>
            </section>

            <ToastContainer />
        </main>
    );
};

export default Career;
