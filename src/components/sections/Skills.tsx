'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaPhp, FaReact,
  FaNodeJs, FaGitAlt, FaDatabase
} from 'react-icons/fa';
import {
  SiSolidity, SiFlask, SiDjango, SiNextdotjs, SiSvelte,
  SiVercel, SiN8N, SiXampp, SiOpenai,
  SiPostman, SiSqlite, SiPostgresql, SiMongodb, SiAppwrite
} from 'react-icons/si';

const allSkills = [
  { icon: <FaPython size={80} />, name: 'Python', category: 'Languages' },
  { icon: <FaJsSquare size={80} />, name: 'JavaScript', category: 'Languages' },
  { icon: <FaHtml5 size={80} />, name: 'HTML', category: 'Languages' },
  { icon: <FaCss3Alt size={80} />, name: 'CSS', category: 'Languages' },
  { icon: <FaPhp size={80} />, name: 'PHP', category: 'Languages' },
  { icon: <SiSolidity size={80} />, name: 'Solidity', category: 'Languages' },
  { icon: <SiFlask size={80} />, name: 'Flask', category: 'Frameworks' },
  { icon: <SiDjango size={80} />, name: 'Django', category: 'Frameworks' },
  { icon: <FaReact size={80} />, name: 'React', category: 'Frameworks' },
  { icon: <SiNextdotjs size={80} />, name: 'Next.js', category: 'Frameworks' },
  { icon: <FaNodeJs size={80} />, name: 'Node.js', category: 'Frameworks' },
  { icon: <SiSvelte size={80} />, name: 'Svelte', category: 'Frameworks' },
  { icon: <FaGitAlt size={80} />, name: 'Git', category: 'Tools' },
  { icon: <SiVercel size={80} />, name: 'Vercel', category: 'Tools' },
  { icon: <SiN8N size={80} />, name: 'n8n', category: 'Tools' },
  { icon: <SiXampp size={80} />, name: 'XAMPP', category: 'Tools' },
  { icon: <SiOpenai size={80} />, name: 'OpenAI', category: 'Tools' },
  { icon: <SiPostman size={80} />, name: 'Postman', category: 'Tools' },
  { icon: <FaDatabase size={80} />, name: 'SQL', category: 'Databases' },
  { icon: <SiSqlite size={80} />, name: 'SQLite', category: 'Databases' },
  { icon: <SiPostgresql size={80} />, name: 'PostgreSQL', category: 'Databases' },
  { icon: <SiMongodb size={80} />, name: 'MongoDB', category: 'Databases' },
  { icon: <SiAppwrite size={80} />, name: 'Appwrite', category: 'Databases' },
];

const categories = ['All', 'Languages', 'Frameworks', 'Tools', 'Databases'];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All'
    ? allSkills
    : allSkills.filter((skill) => skill.category === selectedCategory);

  // Repeat enough icons to create a smooth loop
  const repeatedSkills = useMemo(
    () => [...filteredSkills, ...filteredSkills, ...filteredSkills],
    [filteredSkills]
  );

  // Fixed speed constant
  const baseSpeed = 25; // Adjust this for more or less speed (lower = faster)
  const motionWidth = 96 * repeatedSkills.length; // icon width + gap
  const duration = motionWidth / baseSpeed; // Duration based on speed

  return (
    <section id="skills" className="bg-gray-950 text-white min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-400 uppercase tracking-widest mb-12">
          My Tech Stack
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 border rounded-full text-sm font-medium ${
                selectedCategory === cat
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Moving Icons */}
        <div className="w-full h-[160px]">
          <motion.div
            className="flex gap-16 w-max"
            animate={{ x: ['0%', `-${100 / 3}%`] }} // scroll 1/3 width of the container
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration, // consistent duration across categories
            }}
          >
            {repeatedSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                className="group relative flex flex-col items-center justify-center min-w-[80px] transition-all"
              >
                {/* Apply permanent glow */}
                <div className="transition-all duration-300 ease-in-out glow-icon">
                  {skill.icon}
                </div>
                <span className="absolute top-[90px] text-purple-300 text-sm opacity-0 group-hover:opacity-100 transition duration-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
