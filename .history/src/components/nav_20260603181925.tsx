import  { useState, useContext } from "react";
import { FaDownload, FaEnvelope, FaEnvelopeOpenText, FaLinkedin, FaPhone } from "react-icons/fa";
import { DarkModeContext } from "../DarkModeContext";
import { FaGithub} from "react-icons/fa6";

function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { darkMode } = useContext(DarkModeContext); // assuming you have a DarkMode context

  const handleToggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4 shadow-md">
        <div className="flex items-center gap-6">
          <FaEnvelope
            className="w-6 h-6 cursor-pointer hover:text-blue-500 transition"
            onClick={handleToggleModal}
          />
          <a href="/Siwar_Derbel.pdf" download>
            <FaDownload size={24} />
          </a>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={handleToggleModal}
          ></div>

          {/* Modal content */}
          <div
            className={`relative z-10 max-w-lg w-full p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
              }`}
          >
            <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
            <p className="flex items-center gap-2"><FaEnvelopeOpenText />sderbeli22@gmail.com | siwarderbeli245@gmail.com</p>
            <p className="flex items-center gap-2"><FaPhone />+216 95 063 279</p>
            <p className="flex items-center gap-2"><FaLinkedin /><a href="https://www.linkedin.com/in/siwar-derbeli-8700111b4/">Siwar Derbeli</a></p>
            <p className="flex items-center gap-2"><FaGithub /><a href="https://github.com/SywarDer">Siwar Derbeli</a></p>
            <button
              className="mt-4 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
              onClick={handleToggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
