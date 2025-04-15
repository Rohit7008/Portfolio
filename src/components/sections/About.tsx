'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="heading text-center mb-8">About Me</h2>
          <div className="card">
            <p className="text-lg mb-6">
              I'm a passionate Full-Stack Developer with a keen interest in building modern web applications
              and exploring cutting-edge technologies. My journey in tech is driven by curiosity and a
              desire to create impactful solutions.
            </p>
            
            <div className="mt-8 p-4 bg-primary/10 rounded-lg">
              <h3 className="text-xl font-jetbrains mb-2">Currently Geeking Out On...</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>AI/ML Integration in Web Apps</li>
                <li>Blockchain Development</li>
                <li>Web3 Technologies</li>
                <li>Automation with n8n</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 