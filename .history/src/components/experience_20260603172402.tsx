import  { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import enovaLogo from "../assets/logos/enova robotics logo.png";
import deloitteLogo from "../assets/logos/deloitte logo.png";
import andromediaLogo from "../assets/logos/andromedia logo.png";

// Enova
import img1 from "../assets/projects/enova/alert page.png";
import img2 from "../assets/projects/enova/create path joystick.png";
import img3 from "../assets/projects/enova/dashboard metrics.png";
import img4 from "../assets/projects/enova/mission autonome.png";
import img5 from "../assets/projects/enova/planifier mission  schedule mission created successfuly.png";

// Deloitte
import deloitteImg1 from "../assets/projects/deloitte/Issue Creation Bussiness Object.png";
import deloitteImg2 from "../assets/projects/deloitte/img1d.png";
import deloitteImg3 from "../assets/projects/deloitte/img2d.png";
import deloitteImg4 from "../assets/projects/deloitte/image.png";

// Andromedia
import andromediaImg1 from "../assets/projects/andromedia/imga1.png";
import andromediaImg2 from "../assets/projects/andromedia/imga2.png";
import andromediaImg3 from "../assets/projects/andromedia/imga3.png";
import andromediaImg4 from "../assets/projects/andromedia/imga4.png";

// Webgear
import imgw1 from "../assets/projects/webgear/img1.png";
import imgw2 from "../assets/projects/webgear/img2.png";
import img3 from "../assets/projects/webgear/img3.png";

const experiences = [
  {
    logo: webgearLogo,
    company: "Webgear Group",
    title: "React Native developer",
    date: "11/2025 – 03/2026| Freelance",
    summary:
      "Developed a mobile operations app for hotel staff, supporting daily workflows within a management system. •Implemented features like task management, communication tools, and real-time updates to enhance staff efficiency and guest service.",
    story:
      "Developed a mobile operations app for hotel staff, supporting daily workflows within a management system",
    references: [
      {
        name: "Khalil Benkhelil",
        role: "Software Developer",
        linkedin: "medkhalilbenkhelil@gmail.com",
      },
    ],
    images: [img1, img2, img3, img4, img5],
  },
  {
    logo: enovaLogo,
    company: "Enova Robotics",
    title: "Software Engineer Intern",
    date: "02/2025 – 05/2025 | Sousse, Tunisia",
    summary:
      "Built a control and monitoring app for solar panel cleaning robots, added multi-robot simulation, and deployed deep learning anomaly detection for improved reliability.",
    story:
      "At Enova Robotics, I explored IoT, robotics, and deep learning. I worked hands-on on robot communication, simulation, and anomaly detection systems, deepening my technical understanding of autonomous systems.",
    references: [
      {
        name: "Firas Hammouda",
        role: "Senior Software Engineer",
        linkedin: "https://shorturl.at/Jb0BR",
      },
    ],
    images: [img1, img2, img3, img4, img5],
  },
  {
    logo: deloitteLogo,
    company: "Deloitte Consulting",
    title: "SAP Consultant Intern",
    date: "06/2024 – 08/2024 | Tunis, Tunisia",
    summary:
      "Developed a complaint management app on SAP BTP using ABAP RESTful and SAP UI5.",
    story:
      "During my time at Deloitte, I experienced the dynamics of a Big 4 company and agile teamwork. I implemented real client solutions while learning ABAP RESTful and enterprise-level workflows.",
    mentorOpinion:
      "I had the pleasure of supervising Siwar during her 3-month internship as an ABAP Developer. In this short time, she showed impressive curiosity, dedication, and rapid growth in mastering ABAP concepts. She didn’t just complete her tasks — she dug deeper to understand the logic and added real value to the team. With her motivation and talent, I’m confident that Siwar has the potential to become one of those rare “dinosaur” ABAP experts in the future. I highly recommend her to any team looking for a passionate and promising developer.",
    references: [
      {
        name: "Ghaith Mkhinini",
        role: "Senior Manager - SAP Technical",
        linkedin: "https://shorturl.at/cxiXK",
      },
    ],
    images: [deloitteImg1, deloitteImg2, deloitteImg3, deloitteImg4],
  },
  {
    logo: andromediaLogo,
    company: "Andromedia",
    title: "Web Developer Intern",
    date: "07/2023 – 08/2023 | Tunis, Tunisia",
    summary:
      "Developed an admin dashboard for a comic book platform using React, Firestore, and Redux.",
    story:
      "At Andromedia, I got my first taste of full-stack development. It helped me understand the complete workflow — from frontend design to backend integration.",
    references: [
      {
        name: "Ahmed Rachdi",
        role: "Chief Executive Officer",
        linkedin: "https://shorturl.at/Ieh3d",
      },
    ],
    images: [andromediaImg1, andromediaImg2, andromediaImg3, andromediaImg4],
  },
];

function Experience() {
  const [selected, setSelected] = useState(0);
  const [slide, setSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    const images = experiences[selected].images || [];
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [selected]);



  useEffect(() => {
    setSelected(slide);
  }, [slide]);

  const exp = experiences[selected];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4 py-8 sm:px-6 max-w-5xl mx-auto">
  <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-lg">
    My Experience
  </h2>

  {/* Company Logos - responsive scroll on mobile */}
  <div className="flex justify-center gap-6 sm:gap-24 overflow-x-auto w-full py-4">
    {experiences.map((exp, idx) => (
      <img
        key={idx}
        src={exp.logo}
        alt={exp.company}
        onClick={() => {
          setSelected(idx);
          setSlide(idx);
        }}
        className={`flex-shrink-0 rounded-full cursor-pointer transition-all duration-500 border-2 shadow-lg w-16 sm:w-24 h-16 sm:h-24 object-contain
          ${idx === slide
            ? "border-cyan-400 scale-110 brightness-110"
            : "border-gray-600 opacity-50 scale-90 hover:scale-105"
          }`}
      />
    ))}
  </div>

  {/* Experience Card */}
  <div className="w-full max-w-5xl backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl mt-6">
    <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-1">{exp.title}</h3>
    <p className="text-gray-300 mb-1">{exp.company}</p>
    <p className="text-sm sm:text-base text-gray-500 mb-4">{exp.date}</p>

    <p className="text-gray-300 mb-4">{exp.story}</p>

    {/* Image Carousel */}
    {exp.images && exp.images.length > 0 && (
      <div className="relative w-full h-40 sm:h-64 mb-6 overflow-hidden rounded-xl shadow-xl">
        {exp.images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-700
              ${idx === currentImageIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
    )}

    {/* References */}
    <div className="border-t border-gray-700 pt-4">
      <span className="font-semibold text-blue-600 text-lg">References</span>
      <div className="flex flex-col gap-2 mt-2">
        {exp.references.map((ref, idx) => (
          <a
            key={idx}
            href={ref.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition"
          >
            <FaLinkedin className="text-blue-600" />
            <span className="font-medium">{ref.name}</span>
            {ref.role && <span className="text-sm text-gray-500">({ref.role})</span>}
          </a>
        ))}
      </div>

      {exp.mentorOpinion && (
        <div className="mt-4 p-4 bg-gradient-to-r from-gray-800 to-gray-900 border-l-4 border-cyan-500 rounded-lg">
          <p className="italic text-gray-300 whitespace-pre-line">{exp.mentorOpinion}</p>
        </div>
      )}
    </div>
  </div>
</div>

  );
}

export default Experience;
