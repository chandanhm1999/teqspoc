import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 text-black px-4 py-4 sm:px-4 md:px-6 lg:px-8 xl:px-12">
      <div className="mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-black border-opacity-10 pb-8 mb-8">
          <div className="">
            <Image src="/teqlogo.svg" width={150} height={50} alt="teqlogo" />
            <p className="mt-2 text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-medium text-start sm:text-left ">
              We offer top-notch online courses led by expert instructors to
              help you reach your full potential.
            </p>
          </div>
          <ul className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 text-lg font-medium tracking-wide">
            <li>
              <Link
                href="/about"
                className="transition text-black duration-300 hover:text-peach hover:underline"
              >
                Refer & Earn
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="transition duration-300 hover:text-peach hover:underline"
              >
                Free Job Assistance
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition duration-300 hover:text-peach hover:underline"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-lg leading-relaxed text-opacity-70 mb-8">
          <ul className="space-y-2 mb-6 sm:mb-0">
            <li className="font-bold">About US</li>
            <li className="font-bold">Online Course</li>
            <li className="font-bold">Offline Course</li>
          </ul>

          <ul className="space-y-2 mb-6 sm:mb-0">
            <li className="font-bold">Courses</li>
            <li className="font-bold">Resourses</li>
            <li className="font-bold">Become an Instructor</li>
          </ul>

          <div className="flex space-x-4 text-2xl">
            <FaLinkedin className="cursor-pointer transition duration-300 hover:opacity-80" />
            <FaTwitter className="cursor-pointer transition duration-300 hover:opacity-80" />
            <FaInstagram className="cursor-pointer transition duration-300 hover:opacity-80" />
            <FaYoutube className="cursor-pointer transition duration-300 hover:opacity-80" />
            <FaFacebookF className="cursor-pointer transition duration-300 hover:opacity-80" />
          </div>
        </div>

        <div className="border-t border-black border-opacity-10 text-center pt-4">
          <div className="mx-auto flex flex-col sm:flex-row justify-between items-center">
            <Link
              href="https://chandan21.vercel.app"
              className="text-black text-sm flex items-center transition hover:text-white"
            >
              <span>Designed & Developed By </span>
              <span className="text-red-500 text-lg mx-1">&#10084;</span>
              <span className="text-black">
                <span className="text-lg font-bold"> C</span>
                devnxtgen
              </span>
            </Link>
            <p className="text-sm text-gray-500">
              Copy Rights &copy; 2024 TeqSpoc
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
