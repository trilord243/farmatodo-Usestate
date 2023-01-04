import React from "react";

const Sidebar = ({ isOpen, handleMenuClick }) => {
  return (
    <div
      className={`bg-blue-800 p-4 fixed top-0 left-0 h-screen w-64 shadow-xl ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <button
        className="text-blue-200 font-bold py-3 px-4 rounded-full"
        onClick={handleMenuClick}
      >
        Cerrar menú
      </button>
      <ul>
        <li>
          <a
            href="#"
            className="text-blue-200 font-bold block py-3 px-4 rounded-full hover:bg-blue-700"
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-blue-200 font-bold block py-3 px-4 rounded-full hover:bg-blue-700"
          >
            Productos
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-blue-200 font-bold block py-3 px-4 rounded-full hover:bg-blue-700"
          >
            Sucursales
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
