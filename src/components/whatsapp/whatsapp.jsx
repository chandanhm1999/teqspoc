import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <>
      <Link
        className="fixed bottom-10 right-10 flex items-center justify-center p-3 rounded-full bg-[#25D366] text-white z-20 drop-shadow-lg transform transition-all duration-300 hover:scale-105"
        href="https://wa.me/+918105114625"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-white" size={40} />
        <span className="sr-only">WhatsApp</span>
      </Link>
      {/* Commented out version can be enabled if needed */}
      {/* <Link
        className="fixed bottom-8 right-4 md:right-8 md:bottom-8 z-20 drop-shadow-lg hidden md:block bg-[#25D366] text-white rounded-full p-2 flex items-center justify-center"
        href="https://wa.me/7906514988"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-white" size={50} />
      </Link> */}
    </>
  );
};

export default WhatsApp;
