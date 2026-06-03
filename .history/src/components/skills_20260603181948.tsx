import { useState } from "react";
import { FaHtml5, FaMicrosoft, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaDatabase, FaFigma, FaGitAlt, FaDocker, FaCloud, FaStream, FaTools } from "react-icons/fa";
import { SiTailwindcss, SiAlpinedotjs, SiMui, SiAntdesign, SiIonic, SiFlask, SiFastapi, SiExpress, SiSpringboot, SiMongodb, SiPostgresql, SiMysql, SiInfluxdb, SiAdobeillustrator, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiGithubactions, SiJenkins, SiApacheairflow, SiSap } from "react-icons/si";

const skillsData = [{ name: "Front-end Development", icon: <FaReact />, subSkills: [{ name: "HTML", icon: <FaHtml5 /> }, { name: "CSS", icon: <FaCss3Alt /> }, { name: "JavaScript", icon: <FaJs /> }, { name: "Tailwind", icon: <SiTailwindcss /> }, { name: "Alpine JS", icon: <SiAlpinedotjs /> }, { name: "MUI", icon: <SiMui /> }, { name: "Ant Design", icon: <SiAntdesign /> }, { name: "React JS", icon: <FaReact /> }, { name: "Ionic React", icon: <SiIonic /> },], }, { name: "Back-end Development", icon: <FaNodeJs />, subSkills: [{ name: "Python", icon: <FaPython /> }, { name: "Flask", icon: <SiFlask /> }, { name: "FastAPI", icon: <SiFastapi /> }, { name: "Node JS", icon: <FaNodeJs /> }, { name: "Express JS", icon: <SiExpress /> }, { name: "Spring Boot", icon: <SiSpringboot /> }, { name: "ABAP RESTful", icon: <SiSap /> },], }, { name: "Databases", icon: <FaDatabase />, subSkills: [{ name: "MongoDB", icon: <SiMongodb /> }, { name: "Postgres", icon: <SiPostgresql /> }, { name: "MySQL", icon: <SiMysql /> }, { name: "InfluxDB", icon: <SiInfluxdb /> },], }, { name: "Design", icon: <FaFigma />, subSkills: [{ name: "Figma", icon: <FaFigma /> }, { name: "Adobe Illustrator", icon: <SiAdobeillustrator /> },], }, { name: "ML/DS", icon: <FaTools />, subSkills: [{ name: "Pandas", icon: <SiPandas /> }, { name: "NumPy", icon: <SiNumpy /> }, { name: "Scikit-learn", icon: <SiScikitlearn /> }, { name: "TensorFlow", icon: <SiTensorflow /> },], }, { name: "Devops & Tools", icon: <FaGitAlt />, subSkills: [{ name: "Git", icon: <FaGitAlt /> }, { name: "GitHub", icon: <FaGitAlt /> }, { name: "Docker", icon: <FaDocker /> }, { name: "CI/CD (GitHub Actions)", icon: <SiGithubactions /> }, { name: "Jenkins", icon: <SiJenkins /> },], }, { name: "Cloud/AI", icon: <FaCloud />, subSkills: [{ name: "Azure AI & ML", icon: <FaMicrosoft /> }, { name: "Cognitive Services", icon: <FaMicrosoft /> },], }, { name: "Streaming", icon: <FaStream />, subSkills: [{ name: "MQTT", icon: <FaStream /> }, { name: "Kafka", icon: <FaStream /> }, { name: "Telegraf", icon: <FaStream /> },], }, { name: "AI Workflow Automation", icon: <SiApacheairflow />, subSkills: [{ name: "Apache Airflow", icon: <SiApacheairflow /> },], },];

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(0);

  return (
    <div className="flex flex-col items-center  max-w-5xl mx-auto bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6 py-8">
      <h2 className="text-3xl font-bold mb-6">My Skills</h2>

      {/* Horizontal slider */}
      <div className="overflow-x-auto scrollbar-hide mb-8 w-full">
        <div className="flex gap-4 flex-nowrap">
          {skillsData.map((skill, idx) => (
            <button
              key={skill.name}
              onClick={() => setSelectedSkill(idx)}
              className={`
          flex flex-col items-center px-4 py-3 rounded-xl border-2
          transition-transform duration-300 ease-out transform
          bg-gradient-to-br from-gray-900 via-black to-gray-800
          ${selectedSkill === idx ? "border-blue-600 bg-blue-100" : "border-gray-300 bg-white"}
          hover:scale-110 hover:shadow-lg
          flex-shrink-0
          basis-1/4  /* 4 items visible at a time */
          min-w-[150px]  /* ensures responsive fallback */
        `}
            >
              <span className="text-4xl mb-2">{skill.icon}</span>
              <span className="font-semibold text-center">{skill.name}</span>
            </button>
          ))}
        </div>
      </div>


      {/* Subskills grid */}
      {selectedSkill !== null && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {skillsData[selectedSkill].subSkills.map(sub => (
            <div key={sub.name} className="flex items-center gap-2 p-4 rounded-lg shadow bg-gradient-to-br from-gray-800/70 to-gray-900/80">
              <span className="text-2xl">{sub.icon}</span>
              <span className="font-medium">{sub.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Skills;
