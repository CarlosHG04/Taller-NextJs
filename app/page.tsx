"use client";

import React, { useState } from "react";
import Sidebar from "./sidebar";

const Page = () => {
  const [activeFilter, setActiveFilter] = useState<number>(0);

  const handleFilterChange = (filterId: number) => {
    setActiveFilter(filterId);
    console.log(`Filtro activo: ${filterId}`);
  };

  return (
    <div className="flex">
      <Sidebar onFilterChange={handleFilterChange} />
      <div className="p-4 flex-grow">
        <h2 className="font-Anaheim text-xl mb-4">Contenido Principal</h2>
        <p>Filtro seleccionado: {activeFilter === 0 ? "Todos" : `Categoría ${activeFilter}`}</p>
      </div>
    </div>
  );
};

export default Page;
