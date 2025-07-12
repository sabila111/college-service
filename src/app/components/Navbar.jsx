'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaArrowRight, FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.classList.toggle('dark', storedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <header className="relative w-full bg-cover bg-center" style={{ backgroundImage: "url('/your-bg-image.jpg')" }}>
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md w-full px-4 md:px-12 py-4 flex justify-between items-center">
        {/* Left: Page Name */}
        <div className="text-xl font-bold text-black dark:text-white">College service</div>

        {/* Right: Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-black dark:text-white">
          <a href="#home" className="hover:text-blue-500">Colleges</a>
          <a href="#about" className="hover:text-blue-500">Admission</a>
          <a href="#portfolio" className="hover:text-blue-500">My College</a>
          

        <div className="flex space-x-4">
         
          {/* <UserInfo /> */}
          <Link
            href="/register"
            className="bg-white border-2 border-blue-800 text-blue-800 font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Register
          </Link>
          <Link
            href="/login"
            className="bg-white border-2 border-blue-800 text-blue-800 font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </Link>

        </div>

          {/* Theme Toggle */}
          {/* <button
            onClick={toggleTheme}
            className="ml-4 p-2 border border-black dark:border-white rounded-full"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button> */}
        </div>
      </div>

      {/* Mobile Menu (optional basic toggle) */}
      <div className="md:hidden flex justify-between items-center px-4 py-2">
        <div className="text-black dark:text-white text-sm">Menu coming for mobile...</div>
        {/* Add hamburger menu logic here if needed */}
      </div>
    </header>
  );
}
