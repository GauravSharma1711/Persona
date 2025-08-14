import React from 'react';
import { IoLogoGithub } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">
          <span className="text-blue-600 dark:text-blue-400">P</span>ersona
        </Link>
        <a
          href="https://github.com/GauravSharma1711/Persona"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub repository"
          className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          <IoLogoGithub size={26} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;