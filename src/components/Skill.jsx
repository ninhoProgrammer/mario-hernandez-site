import React from 'react';
import { motion } from "framer-motion";
import { Code, Languages, Settings, Laptop2 } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="justify-items-center w-screen h-screen pt-28">
        <motion.section id="skills" className="flex flex-col p-8 max-w-5xl mx-auto relative z-10 bg-[url('../bosque.webp')] backdrop-blur-sm rounded-xl shadow-xl " initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} >
            <h2 className="text-6xl font-bold mb-8 text-white">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[{
                icon: <Code className="w-10 h-10 text-blue-600" />,
                title: "Programming",
                short: "C#, SQL, JavaScript",
                detail: "I develop efficient backend and frontend logic using object-oriented programming and best practices."
                }, {
                icon: <Laptop2 className="w-10 h-10 text-green-600" />,
                title: "Tools",
                short: "Visual Studio, GitHub, Windows Forms",
                detail: "I build and manage robust desktop apps using the .NET ecosystem and modern developer tools."
                }, {
                icon: <Settings className="w-10 h-10 text-purple-600" />,
                title: "Development",
                short: "Problem Solving, UI & UX, Clean Code",
                detail: "I focus on writing clean, maintainable code while ensuring the best user experience."
                }, {
                icon: <Languages className="w-10 h-10 text-orange-600" />,
                title: "Languages",
                short: "Spanish (native), English (learning)",
                detail: "I'm fluent in Spanish and actively improving my English to grow professionally."
                }].map((skill, i) => (
                <div key={i} className="relative group bg-gradient-to-tr from-white to-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all" >
                    <div className="flex items-start gap-4">
                        {skill.icon}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">{skill.title}</h3>
                            <p className="text-gray-600">{skill.short}</p>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-white/90 p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-between">
                        <div>
                            <h4 className="text-lg font-bold mb-2">{skill.title}</h4>
                            <p className="text-gray-700 text-sm">{skill.detail}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            </motion.section>

        <footer className="bg-white text-center p-4 mt-16 shadow-inner relative z-10">
            <p className="text-sm text-gray-500">&copy; 2025 Mario Hernandez. All rights reserved. Using React</p>
        </footer>
     
    </main>
  );
}


