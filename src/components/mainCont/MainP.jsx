import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const MainP = ({ url = "", title = "" }) => {
  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      {/* Background Image */}
      <div className="relative bg-black w-full h-[320px] -mt-24">
        <Image
          src={url}
          alt="Background Image"
          className="object-cover opacity-60"
          fill
          priority // Optional: load this image as a priority for better performance
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute top-1/2 transform -translate-y-1/2 text-white flex flex-col items-center space-y-2">
        <ul className="flex space-x-2 items-center mt-10 font-bold text-lg">
          <li>
            <Link href="/" className="text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <FaChevronRight />
          </li>
          <li>
            <Link href="/resources" className="text-white hover:underline">
              Resource
            </Link>
          </li>
          <li>
            <FaChevronRight />
          </li>
          <li className="text-yellow-500">{title}</li>
        </ul>
      </div>
    </div>
  );
};

export default MainP;
