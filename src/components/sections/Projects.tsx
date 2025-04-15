'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Define the type for the project object
interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  demo: string
  github?: string  // Make github optional
}

// Featured Projects
const devProjects: Project[] = [
  {
    title: 'Healthcare Management System',
    description:
      'Web app for booking and managing medical appointments with admin and doctor panels. Real-time scheduling, rescheduling, and cancellations. Integrated Appwrite for secure backend operations and a clean UI/UX deployed via Vercel.',
    image: '/projects/healthcare.png',
    tags: ['TypeScript', 'React', 'Next.js', 'Appwrite'],
    github: 'https://github.com/Rohit7008/HealthCareMS_Nextjs_Appwrite_Sentry',
    demo: 'https://carepulsepms.vercel.app/'
  },
  {
    title: 'QBook',
    description:
      'Inspired by Quora and Stack Overflow. Users can ask, answer, and filter questions. Built with modular PHP backend, MySQL, and a dynamic Bootstrap UI. Includes authentication and category-based Q&A views.',
    image: '/projects/qbook.jpg',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/Rohit7008/QBook',
    demo: 'http://qbook.great-site.net/'
  },
  {
    title: 'NURAL – Wealth Gateway',
    description:
      'Financial services platform for investment, trading, and coaching. SEO-friendly and responsive site built with Next.js 14 and Tailwind CSS. Includes service listings, testimonials, and smooth UX.',
    image: '/projects/nural.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Rohit7008/Nuralwealth-gateway',
    demo: 'https://www.thenural.com/'
  }
]

// Design Projects
// const designProjects: Project[] = [
//   {
//     title: 'Modern Dashboard UI',
//     description:
//       'Clean, responsive admin dashboard design with light/dark themes and modular components.',
//     image: '/designs/dashboard-ui.jpg',
//     tags: ['Figma', 'UI/UX'],
//     demo: 'https://www.figma.com/file/example1'
//   },
//   {
//     title: 'Mobile Banking App Concept',
//     description:
//       'High-fidelity prototype for a finance app focused on usability and accessibility.',
//     image: '/designs/mobile-banking.jpg',
//     tags: ['Figma', 'Prototyping'],
//     demo: 'https://www.figma.com/file/example2'
//   }
// ]

export default function Projects() {
  return (
    <>
      {/* Featured Projects */}
      <section id="projects" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Projects */}
      {/* <section id="designs" className="bg-gray-950 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              Design Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} isDesign />
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}
    </>
  )
}

// Reusable Project Card Component
function ProjectCard({
  project,
  index,
  isDesign = false
}: {
  project: Project
  index: number
  isDesign?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
    >
      <div className="relative h-48 mb-4 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title || 'Project Image'}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-purple-500">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title} demo`}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition"
          >
            {isDesign ? 'View Design' : 'Live Demo'}
          </Link>
          {!isDesign && project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} GitHub repo`}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}
