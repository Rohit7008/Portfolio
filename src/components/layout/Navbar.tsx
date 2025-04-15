"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="#hero">
          <Image
            src="/logo.png"
            alt="Roonity Logo"
            width={120}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            href="#about"
            className="text-white hover:text-primary transition"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-white hover:text-primary transition"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-white hover:text-primary transition"
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="text-white hover:text-primary transition"
          >
            Contact
          </Link>
          <a
            href="https://github.com/Rohit7008"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.instagram.com/roonity.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition"
          >
            <FaInstagram size={18} />
          </a>
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-primary focus:outline-none"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl px-6 py-4 space-y-4 text-center">
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block text-white hover:text-primary"
          >
            About
          </Link>
          <Link
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block text-white hover:text-primary"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="block text-white hover:text-primary"
          >
            Skills
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-white hover:text-primary"
          >
            Contact
          </Link>
          <div className="flex justify-center gap-6 pt-2">
            <a
              href="https://github.com/Rohit7008"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.instagram.com/roonity.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
