"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>

          <div className="bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10">
            <form
              action="https://formsubmit.co/rowork30@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 transition"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition text-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-12 flex justify-center gap-8">
            <a
              href="https://github.com/Rohit7008"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-pottavathini-870b4420a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/roonity.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition"
            >
              <Instagram size={24} />
            </a>
            <a
              href="mailto:rowork30@gmail.com"
              className="text-gray-400 hover:text-purple-500 transition"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
