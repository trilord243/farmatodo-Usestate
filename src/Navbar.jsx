import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-800 p-6">
      <button
        className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white"
        onClick={handleMenuClick}
      >
        <FaBars className="w-6 h-6" />
      </button>
      <div className="text-center mx-auto p-6">
        <p className="text-white text-4xl">Farmatodo</p>
      </div>
      <Sidebar isOpen={isOpen} handleMenuClick={handleMenuClick} />
    </nav>
  );
};

export default Navbar;
