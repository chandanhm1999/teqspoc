import Image from 'next/image';
import Link from 'next/link';

const ContactUsSection = () => {
  return (
    <section className="relative bg-green-50 py-16 px-8 rounded-lg shadow-lg">
      <div className="flex flex-wrap justify-between items-center">
        {/* Left Section */}
        <div className="w-full md:w-7/12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-6">
            Have questions or need assistance? Reach out to us anytime, and our team will be happy to help.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg 
                       shadow-sm hover:bg-blue-900 transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-5/12">
          <Image
            src="/assets/contact/contact-us.jpg"
            alt="Contact Us"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;