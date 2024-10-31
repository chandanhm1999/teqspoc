"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const FreeJob = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    friendName: "",
    friendPhone: "",
    friendEmail: "",
    place: "",
    course: "",
    type: "",
    linkedin: "",
    experience: "",
    actionButton: "freeJob",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwgqmwX-VZPYzPnKCiHa2l_NBJNLhZIwX3LQrpeiNjtcTtwUfNXurg9IBATjVX6o-m6/exec", 
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );
      console.log(JSON.stringify(formData));

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          friendName: "",
          friendPhone: "",
          friendEmail: "",
          place: "",
          course: "",
          type: "",
          linkedin: "",
          experience: "",
          actionButton: "freeJob",
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="font-[sans-serif] max-w-6xl mx-auto relative bg-white shadow-[0_4px_12px_-4px_rgba(6,81,237,0.3)] rounded-3xl overflow-hidden my-4">
      <ToastContainer />
      <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-blue-500 opacity-50"></div>
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-blue-500 opacity-50"></div>

      <div className="grid md:grid-cols-2 gap-10 py-10 px-8 relative z-10">
        <div className="text-center flex flex-col items-center justify-center">
          <Image
            src="/assets/freejob/new.jpg"
            alt="Contact us"
            width={500}
            height={700}
            className="rounded-sm shadow-lg"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-3xl text-blue-700 font-extrabold text-center mb-2">
            Hey Learners
          </h2>
          <p className="text-sm text-gray-600 font-semibold text-center mb-6">
            Make progress towards your goal with one simple step!
          </p>
          <div className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="First Name"
                className="w-1/2 bg-gray-100 rounded-sm py-4 px-5 text-sm outline-blue-600 focus:bg-transparent"
                required
              />
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-1/2 bg-gray-100 rounded-sm py-4 px-5 text-sm outline-blue-600 focus:bg-transparent"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full bg-gray-100 rounded-sm py-4 px-5 text-sm outline-blue-600 focus:bg-transparent"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone No."
              className="w-full bg-gray-100 rounded-sm py-4 px-5 text-sm outline-blue-600 focus:bg-transparent"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="6"
              className="w-full bg-gray-100 rounded-sm px-5 text-sm pt-4 outline-blue-600 focus:bg-transparent"
              required
            ></textarea>

            <button
              type="submit"
              className="text-white w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg text-sm px-6 py-4 transition-transform transform hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2 inline"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                  data-original="#000000"
                />
              </svg>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FreeJob;
