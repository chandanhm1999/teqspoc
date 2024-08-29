"use client"

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_USER_ID'
    ).then(() => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', number: '', email: '', message: '' });
    }).catch(() => {
      toast.error('Failed to send message, please try again.');
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between bg-gradient-to-r p-8 shadow-xl rounded-lg">
      {/* Left Side: Image */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <Image
          src="/assets/contact/form.jpg" // replace with your image path
          alt="Contact Us"
          width={600}
          height={400}
          className="rounded-lg object-cover shadow-lg"
        />
      </div>

      {/* Right Side: Form */}
      <div className="md:w-1/2 md:ml-8">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Get in Touch
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="number" className="block text-gray-600">
              Phone Number
            </label>
            <input
              type="number"
              id="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactForm;
