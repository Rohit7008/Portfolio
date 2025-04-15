'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaPhp, FaReact,
  FaNodeJs, FaGitAlt, FaDatabase
} from 'react-icons/fa'
import {
  SiSolidity, SiFlask, SiDjango, SiNextdotjs, SiSvelte,
  SiVercel, SiN8N, SiXampp, SiOpenai,
  SiPostman, SiSqlite, SiPostgresql, SiMongodb, SiAppwrite
} from 'react-icons/si'

const allSkills = [
  { icon: <FaPython size={64} />, name: 'Python', category: 'Languages' },
  { icon: <FaJsSquare size={64} />, name: 'JavaScript', category: 'Languages' },
  { icon: <FaHtml5 size={64} />, name: 'HTML', category: 'Languages' },
  { icon: <FaCss3Alt size={64} />, name: 'CSS', category: 'Languages' },
  { icon: <FaPhp size={64} />, name: 'PHP', category: 'Languages' },
  { icon: <SiSolidity size={64} />, name: 'Solidity', category: 'Languages' },
  { icon: <SiFlask size={64} />, name: 'Flask', category: 'Frameworks' },
  { icon: <SiDjango size={64} />, name: 'Django', category: 'Frameworks' },
  { icon: <FaReact size={64} />, name: 'React', category: 'Frameworks' },
  { icon: <SiNextdotjs size={64} />, name: 'Next.js', category: 'Frameworks' },
  { icon: <FaNodeJs size={64} />, name: 'Node.js', category: 'Frameworks' },
  { icon: <SiSvelte size={64} />, name: 'Svelte', category: 'Frameworks' },
  { icon: <FaGitAlt size={64} />, name: 'Git', category: 'Tools' },
  { icon: <SiVercel size={64} />, name: 'Vercel', category: 'Tools' },
  { icon: <SiN8N size={64} />, name: 'n8n', category: 'Tools' },
  { icon: <SiXampp size={64} />, name: 'XAMPP', category: 'Tools' },
  { icon: <SiOpenai size={64} />, name: 'OpenAI', category: 'Tools' },
  { icon: <SiPostman size={64} />, name: 'Postman', category: 'Tools' },
  { icon: <FaDatabase size={64} />, name: 'SQL', category: 'Databases' },
  { icon: <SiSqlite size={64} />, name: 'SQLite', category: 'Databases' },
  { icon: <SiPostgresql size={64} />, name: 'PostgreSQL', category: 'Databases' },
  { icon: <SiMongodb size={64} />, name: 'MongoDB', category: 'Databases' },
  { icon: <SiAppwrite size={64} />, name: 'Appwrite', category: 'Databases' },
]

const categories = ['All', 'Languages', 'Frameworks', 'Tools', 'Databases']

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredSkills = selectedCategory === 'All'
    ? allSkills
    : allSkills.filter((skill) => skill.category === selectedCategory)

  const repeatedSkills = useMemo(
    () => [...filteredSkills, ...filteredSkills],
    [filteredSkills]
  )

  const motionWidth = 96 * repeatedSkills.length
  const baseSpeed = 35
  const duration = motionWidth / baseSpeed

  return (
    <section id="skills" className="bg-gray-950 text-white py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-400 uppercase tracking-widest mb-10">
          My Tech Stack
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 border rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white border-purple-500 shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Animated Skill Icons */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-16 w-max"
            animate={{ x: ['0%', `-${100 / 2}%`] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration,
            }}
          >
            {repeatedSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="group relative flex flex-col items-center justify-center min-w-[80px]"
              >
                <div className="transition transform group-hover:scale-110 text-purple-400">
                  {skill.icon}
                </div>
                <span className="mt-2 text-sm text-purple-300 opacity-0 group-hover:opacity-100 transition duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
