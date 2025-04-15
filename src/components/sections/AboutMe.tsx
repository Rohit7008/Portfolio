'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const AboutMe = () => {
  return (
    <section id="about" className="bg-gray-950 text-gray-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="mb-20 text-center"
        >
          <h2 className="text-sm font-mono uppercase tracking-widest text-purple-500 mb-2">
            Who I Am
          </h2>
          <h1 className="text-5xl font-bold tracking-tight text-white mb-6">
            About Me
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
            I’m Rohit — a full-stack engineer with a builder’s mindset. I specialize in turning ideas into powerful web platforms that are not only functional, but intuitive, scalable, and built to last. I thrive at the intersection of clean design and deep technical architecture, and I love building tools that feel seamless and solve real problems.
          </p>
        </motion.div>

        {/* What I Do Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="space-y-12"
        >
          <h3 className="text-xl font-semibold mb-6 text-purple-500 border-b border-gray-800 pb-2">
            What I Do
          </h3>

          <div className="space-y-6 text-gray-300 text-base leading-relaxed">
            <p>
              <span className="text-purple-500 font-medium">End-to-End Development:</span> I design and engineer full-stack systems from scratch — from sleek, responsive UIs to secure and scalable backend APIs. I work across technologies like Next.js, Appwrite, Tailwind, OpenAI, and Node.js to deliver cohesive products with speed and precision.
            </p>

            <p>
              <span className="text-purple-500 font-medium">Automation & AI Integration:</span> I build automation pipelines that eliminate manual effort, increase efficiency, and unlock new potential. Whether it's integrating OpenAI models, creating custom triggers, or building self-learning workflows, I’m always exploring smarter ways to work.
            </p>

            <p>
              <span className="text-purple-500 font-medium">Web3 & Blockchain Systems:</span> From decentralized applications to smart contracts, I translate blockchain logic into real-world value. My Web3 work focuses on user-first experiences with Solidity, Ethers.js, and secure backend systems that support them.
            </p>

            <p>
              <span className="text-purple-500 font-medium">Product Thinking:</span> I don’t just build features — I build experiences. I believe great software should feel invisible. I focus on solving root problems, eliminating friction, and crafting interactions that delight the user and empower the business.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
