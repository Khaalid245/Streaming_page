import React, { useState } from "react";
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';

import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
      <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
        {/* Logo */}
        <img src={logo} alt="logo" width={120} height={24} />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#works" className="hover:text-neutral-200">
            How it works
          </a>
          <a href="#pricing" className="hover:text-neutral-200">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-neutral-200">
            Testimonials
          </a>
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#" className="hover:text-neutral-200">
            Login
          </a>
          <a
            href="#"
            className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition"
          >
            Get Demo
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white px-2 px-4 rounded-lg hover:bg-blue-500 transition"
          >
            Start Free Trial
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <RiCloseFill /> :<RiMenu3Fill />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900/80  backdrop-blur-md border border-neutral-800  p-4 mt-2">
            <div className="flex flex-col space-y-4">
          <a href="#works" className=" hover:text-neutral-200">
            How it works
          </a>
          <a href="#pricing" className="hover:text-neutral-200">
            Pricing
          </a>
          <a href="#testimonials" className="bpy-2 hover:text-neutral-200">
            Testimonials
          </a>
          <a href="#" className="block py-2 hover:text-neutral-200">
            Login
          </a>
          <a
            href="#"
            className=" py-2 px-4 mt-2 border border-neutral-700 text-white rounded-lg text-center hover:bg-neutral-700 transition"
          >
            Get Demo
          </a>
          <a
            href="#"
            className=" py-2 px-4 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-500 transition"
          >
            Start Free Trial
          </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
