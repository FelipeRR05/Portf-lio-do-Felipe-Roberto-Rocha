import "./styles.css";
import { motion } from "framer-motion";

export default function Habilidades() {
  return (
    <div className="habilidades-container" id="habilidades">
      <h2>Habilidades</h2>
      <div className="skills">
        {[
          { name: "React JS", icon: "react" },
          { name: "HTML5", icon: "html5" },
          { name: "CSS3", icon: "css3" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: "React Native", icon: "react" },
          { name: "PHP", icon: "php" },
          { name: "Python", icon: "python" },
          { name: "Java", icon: "java" },
          { name: "Flutter", icon: "flutter" },
          { name: "Dart", icon: "dart" },
          { name: "C#", icon: "csharp" },
          { name: ".Net", icon: "dot-net" },
        ].map((skill, index) => (
          <motion.div
            key={index}
            className="skills-box"
            whileHover={{ scale: 1.2 }}
          >
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`}
              alt={skill.name}
            />
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
