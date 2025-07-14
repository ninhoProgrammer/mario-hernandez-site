import React from 'react';
import { motion } from "framer-motion";
import { Code, Languages, Settings, Laptop2 } from "lucide-react";

const skills = [
  {
    icon: <Code className="w-8 h-8 text-blue-600" />,
    title: "Programming",
    description: "C#, SQL, JavaScript",
    detail: "Efficient backend and frontend logic using clean, scalable practices."
  },
  {
    icon: <Laptop2 className="w-10 h-10 text-green-600" />,
    title: "Tools",
    description: "Visual Studio, GitHub, Windows Forms",
    detail: "Desktop development with .NET and essential productivity tools."
  },
  {
    icon: <Settings className="w-10 h-10 text-purple-600" />,
    title: "Development",
    description: "Problem Solving, UI & UX, Clean Code",
    detail: "Focused on user experience and code maintainability."
  },
  {
    icon: <Languages className="w-10 h-10 text-orange-600" />,
    title: "Languages",
    description: "Spanish (native), English (learning)",
    detail: "Fluent in Spanish, improving English for international work."
  }
];

// Variantes para la animación de entrada general y específica
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
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

export default function Portfolio() {
    return (
        <main >
        <motion.section id="skills" className="max-w-6xl pt-28 px-4 mx-auto" variants={container} initial="hidden" animate="show">
            <h2 className="text-5xl font-bold mb-12 text-center text-white">My Skills</h2>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                    <motion.div key={index} className="group bg-white/70 backdrop-blur-lg p-5 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300" variants={item}>
                        <div className="flex items-start gap-2 mb-4">
                            <motion.div className="transition-transform duration-300" whileHover={{ rotate: 10, scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
                                {skill.icon}
                            </motion.div>
                            <div>
                                <motion.h3 className="text-2xl font-semibold text-gray-800" variants={titleVariant}>
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

        <footer className="bg-white text-center p-4 mt-16 shadow-inner">
            <p className="text-sm text-gray-500">
            &copy; 2025 Mario Hernandez. All rights reserved. Using React
            </p>
        </footer>
        </main>
    );
}