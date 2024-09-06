import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const ShareModal = ({ isOpen, onClose, shareUrl }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard!");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h3 className="text-xl font-semibold mb-2">Share this course</h3>
        <p className="text-gray-700 mb-4">
          Share this course&apos;s details with your family & friends
        </p>
        <input
          type="text"
          value={shareUrl}
          readOnly
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          onClick={copyToClipboard}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md mb-4"
        >
          Copy Link
        </button>
        <div className="flex justify-around mb-4">
          <a
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 text-2xl"
          >
            <FaWhatsapp />
          </a>
          <a
            href={`https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
        <button
          onClick={onClose}
          className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ShareModal;
