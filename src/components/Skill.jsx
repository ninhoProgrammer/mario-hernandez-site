import React from 'react';
import { motion } from "framer-motion";

// Íconos SVG puros
const CodeIcon = () => (
  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);

const LaptopIcon = () => (
  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M3 5h18v11H3z" />
    <path d="M2 17h20" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9.4 19a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 5 15.5a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 5 9.4a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9.4 5a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09c0 .68.4 1.29 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82c.13.48.13 1 0 1.48Z" />
  </svg>
);

const LanguageIcon = () => (
  <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M5 8h14M4 12h16M5 16h14" />
  </svg>
);

const skills = [
  {
    icon: <CodeIcon />,
    title: "Programming",
    description: "C#, SQL, JavaScript",
    detail: "Efficient backend and frontend logic using clean, scalable practices."
  },
  {
    icon: <LaptopIcon />,
    title: "Tools",
    description: "Visual Studio, GitHub, Windows Forms",
    detail: "Desktop development with .NET and essential productivity tools."
  },
  {
    icon: <SettingsIcon />,
    title: "Development",
    description: "Problem Solving, UI & UX, Clean Code",
    detail: "Focused on user experience and code maintainability."
  },
  {
    icon: <LanguageIcon />,
    title: "Languages",
    description: "Spanish (native), English (learning)",
    detail: "Fluent in Spanish, improving English for international work."
  }
];

// Variantes de animación
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const titleVariant = {
  hidden: { x: -30, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function SkillNoIcons() {
  return (
    <main>
      <motion.section id="skills" className="max-w-6xl pt-20 px-4 mx-auto" variants={container} initial="hidden" animate="show">
        <h2 className="text-4xl font-bold mb-6 text-center text-white">My Skills</h2>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.div key={index} className="group text-xs bg-white/70 backdrop-blur-lg p-5 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white transition duration-300" variants={item}>
              <div className="flex items-start gap-4 mb-4">
                <motion.div className="transition-transform duration-300" whileHover={{ rotate: 10, scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
                  {skill.icon}
                </motion.div>
                <div>
                  <motion.h3 className="text-xl font-semibold text-gray-800" variants={titleVariant}>
                    {skill.title}
                  </motion.h3>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              </div>
              <p className="text-gray-700">{skill.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <footer className="bg-white text-center p-4 mt-28 shadow-inner">
        <p className="text-sm text-gray-500">
          Using React in this portfolio to showcase my skills and projects.
        </p>
      </footer>
    </main>
  );
}