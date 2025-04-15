"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero pt-20 md:pt-0 relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Dynamic gradient background with animation */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-[#ff0080] via-[#7b2ff7] to-[#00f5d4] bg-[length:300%_300%] animate-gradient-xy"></div>
        <div className="absolute inset-0 bg-gradient-conic from-[#ff2e63] via-[#ff0066] to-[#7b2ff7] opacity-60 mix-blend-overlay"></div>
      </div>

      <div className="container relative z-10 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-center md:text-left md:w-1/2"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-primary">Rohit Pottavathini</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">
            Full-Stack Engineer | Code, Create, Innovate
          </h2>
          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl">
            From concept to code — building smarter experiences.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://docs.google.com/document/d/1bs4VCXorXF9ZwOb-goYe6EUe1mijQg0o/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-secondary text-white rounded-lg shadow-md hover:bg-secondary/90 transition-all duration-300 ease-in-out"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/Rohit7008"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300 ease-in-out"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="md:w-1/2 mt-8 md:mt-0"
        >
          <Image
            src="/your-image.jpg" // Ensure it's transparent
            alt="Rohit Pottavathini"
            width={500}
            height={500}
            className="mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
