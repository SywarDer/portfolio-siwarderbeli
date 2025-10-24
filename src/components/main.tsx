import { FaCircle, FaEnvelope, FaCopy } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";
import siwarImg from "../assets/siwar.png";
import { useState } from "react";

function Main() {
  const email = "sderbeli22@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleHireMe = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert("Failed to copy email.");
    }
  };

  return (
    <div className="px-8 py-12  bg-gradient-to-br from-gray-900 via-gray-950 to-black flex flex-col items-center max-w-5xl mx-auto text-white shadow-2xl border border-gray-800">
      <div className="flex flex-col md:flex-row items-center gap-2 w-full">
        


        {/* Info */}
        <div className="flex-1 flex flex-col gap-3 items-center md:items-start text-center md:text-left">
          
          <div className="flex justify-between gap-48">
          

          <h2 className="flex items-center gap-2 text-green-400 bg-green-950/30 border border-green-600 px-4 py-1 rounded-full text-base font-semibold shadow-sm text-sm">
            <FaCircle className="text-green-500 animate-pulse" /> Available for work
          </h2>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-3 bg-gradient-to-r from-blue-400 to-cyan-300 text-white bg-clip-text">
            I'm Siwar Derbeli
          </h1>
          <h1 className="flex items-center gap-2 text-2xl text-blue-400 font-semibold">
           Software Engineer
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-lg leading-relaxed">
           Hi 👋 Thanks for stopping by. take a look around and see how I can bring value to your next project.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition font-semibold text-lg"
              onClick={handleHireMe}
            >
              <FaEnvelope /> Hire Me
            </button>

            <button
              className="flex items-center gap-2 px-6 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-full shadow-lg transition font-semibold text-lg"
              onClick={handleCopyEmail}
            >
              <FaCopy /> {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0 relative">
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30 animate-pulse"></div>
          <img
            src={siwarImg}
            alt="Siwar Derbeli"
            className="relative w-44 h-44 object-cover rounded-full border-4 border-white shadow-sm"
          />
        </div>

      </div>
    </div>
  );
}

export default Main;
