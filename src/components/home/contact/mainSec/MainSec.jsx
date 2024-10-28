import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import Image from "next/image";

const MainSec = (props) => {
  const { url = '', parent = '', title = '' } = props;

  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      {/* Background Image */}
      <div className="relative bg-black w-full h-[320px] -mt-24">
        <Image
          src={url}
          alt="Background Image"
          className="object-cover opacity-60"
          fill
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute text-white mt-10 flex flex-col items-center">
        <ul className="flex space-x-2 items-center font-bold">
          <li>
            <Link href="/" className="text-white">
              Home
            </Link>
          </li>
          <FaChevronRight />
          <li className="text-yellow-500">{title}</li>
        </ul>
      </div>
    </div>
  );
};

export default MainSec;
