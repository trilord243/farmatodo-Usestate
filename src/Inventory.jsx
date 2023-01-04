import React, { useState } from "react";

const Inventory = () => {
  const [cars, setCars] = useState(4);
  const [dollies, setDollies] = useState(30);
  const [rails, setRails] = useState(20);

  setTimeout(() => {
    setCars(cars - 1 + (cars - 2));
  }, 3000);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row items-center">
        <div className="bg-blue-900 rounded-lg shadow-md p-4 m-4">
          <p className="text-xl font-bold mb-2 text-center text-white">
            CESTAS
          </p>
          <p className="text-3xl font-bold text-white text-center">{cars}</p>
          <img src="https://via.placeholder.com/150" alt="logo" />
        </div>
        <div className="w-48"></div>
        <div className="bg-slate-500 rounded-lg shadow-md p-4 m-4">
          <p className="text-xl font-bold mb-2 text-center text-yellow-600">
            DOLLIES
          </p>
          <p className="text-3xl font-bold text-yellow-600 text-center">20</p>
          <img src="https://via.placeholder.com/150" alt="logo" />
        </div>
        <div className="w-48"></div>
        <div className="bg-zinc-400 rounded-lg shadow-md p-4 m-4">
          <p className="text-xl font-bold mb-2 text-center">ROLLERS</p>
          <p className="text-3xl font-bold text-green-700 text-center">
            {rails}
          </p>
          <img src="https://via.placeholder.com/150" alt="logo" />
        </div>
      </div>
      <button></button>
    </div>
  );
};

export default Inventory;
