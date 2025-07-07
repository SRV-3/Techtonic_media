import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../assets/tm_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className= "fixed top-0 left-0 w-full bg-[#000000] text-white px-6 py-4 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center ">
        {/* Logo */}
        <div className="h-12 w-auto overflow-hidden"><img src={logo} alt="logo" className="h-full w-auto object-cover" /></div>
        

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
        <ul className="flex space-x-8">
          <li><a href="#home" className="hover:text-[#f40006]">Home</a></li>
          <li><a href="#about" className="hover:text-[#f40006]">About</a></li>
          <li><a href="#work" className="hover:text-[#f40006]">Our Work</a></li>
          <li><a href="#service" className="hover:text-[#f40006]">Services</a></li>
        </ul>

            {/* Glowing Button */}
            <button className="ml-4 px-5 py-2 bg-[#f40006] text-white font-semibold rounded-md shadow-[0_0_20px_#f40006,0_0_40px_#f40006] hover:brightness-110 transition duration-200"   onClick={() => {
               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });}}>
                Get Started
            </button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col space-y-4 text-lg font-medium text-center">
          <li><a href="#home" className="hover:text-[#f40006]">Home</a></li>
          <li><a href="#about" className="hover:text-[#f40006]">About</a></li>
          <li><a href="#work" className="hover:text-[#f40006]">Our Work</a></li>
          <li><a href="#service" className="hover:text-[#f40006]">Services</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;