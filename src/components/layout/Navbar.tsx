import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-2 py-2">
        <div className="text-lg font-bold">
          {/* Wrap the logo inside a Link component to go back to the hero section */}
          <Link href="#hero">
            <Image
              src="/logo.png"
              alt="Roonity Logo"
              width={120} // Reduced width for a smaller logo
              height={40} // Adjusted height for better proportion
              className="mx-auto cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex space-x-6 md:space-x-8 items-center">
          <Link href="#about" className="text-white hover:text-primary transition">About</Link>
          <Link href="#projects" className="text-white hover:text-primary transition">Projects</Link>
          <Link href="#skills" className="text-white hover:text-primary transition">Skills</Link>
          <Link href="#contact" className="text-white hover:text-primary transition">Contact</Link>
          <a
            href="https://github.com/Rohit7008"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition"
          >
            <FaGithub size={18} /> {/* Slightly smaller icon */}
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition"
          >
            <FaInstagram size={18} /> {/* Slightly smaller icon */}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
