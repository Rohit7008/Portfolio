'use client'

import { motion } from 'framer-motion'

const education = [
  {
    degree: 'Bachelor of Engineering',
    specialization: 'Computer Science Engineering',
    institution: 'Smt. Indira Gandhi College Of Engineering, Ghansoli',
    year: '2020 - 2024',
    highlights: [
      'Specializing in IoT',
      'Cybersecurity Fundamentals',
      'Blockchain Technology',
      'AI/ML Applications'
    ]
  }
]

export default function Education() {
  return (
    <section id="education" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-purple-500">{edu.degree}</h3>
                  <span className="text-sm text-gray-400">{edu.year}</span>
                </div>

                <p className="text-lg mb-2">{edu.specialization}</p>
                <p className="text-gray-400 mb-4">{edu.institution}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {edu.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
