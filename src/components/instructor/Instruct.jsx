"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Instruct = () => {
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
        <main className="container mx-auto mt-8">
            <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-8/12 px-4 mb-8">
                    <Image
                        src="/assets/instruct/inst.jpg"
                        alt="Featured Image"
                        width={1200}
                        height={600}
                        className="w-full h-64 object-cover rounded"
                    />
                    <h2 className="text-3xl font-bold mt-4 mb-2">Passionate About Teaching? Join Our Expert Community!</h2>
                    <p className="text-gray-700 mb-4">
                        Are you a seasoned professional eager to share your expertise and make a difference? Our platform is the perfect place for you to empower the next generation of learners while enhancing your own career.
                    </p>
                    <h3 className="text-2xl font-bold mb-2">Why Become an Instructor with Us?</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li><span className="font-semibold">Expand Your Reach:</span> Connect with a global audience of aspiring professionals and make a lasting impact on their careers.</li>
                        <li><span className="font-semibold">Earn While You Teach:</span> Enjoy the flexibility of earning supplemental income on your terms, with opportunities to grow as you contribute.</li>
                        <li><span className="font-semibold">Collaborate with Peers:</span> Join a vibrant community of like-minded experts, sharing insights and experiences that enrich both teaching and learning.</li>
                        <li><span className="font-semibold">Shape the Future:</span> Play a crucial role in shaping the future workforce by imparting the skills and knowledge needed for tomorrow's challenges.</li>
                    </ul>
                
                </div>
                <div className="w-full md:w-4/12 px-4 mb-8">
                    <div className="bg-white shadow-[0_4px_12px_-4px_rgba(6,81,237,0.3)] rounded-lg overflow-hidden px-4 py-6">
                        <h3 className="text-lg font-bold mb-2">Ready to Make an Impact?</h3>
                        <p className="text-gray-500 text-sm mb-4">Submit your details below, and a representative will connect with you to assist with your onboarding. Together, we can build the future of learning!</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-4">
                                <select
                                    id="course"
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-500 placeholder-gray-500"
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
                            <div className="mb-4">
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="url"
                                    id="linkedin"
                                    name="linkedin"
                                    value={formData.linkedin}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500"
                                    placeholder="LinkedIn URL"
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    id="experience"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500"
                                    placeholder="Experience"
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </main>
    );
};

export default Instruct;
