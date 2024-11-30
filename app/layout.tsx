import React from "react";
import "../globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray_secondary font-Roboto">
      <header className="bg-black text-white p-4 text-center font-Anaheim">
        <h1>Mi Proyecto Personalizado</h1>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-black text-white p-2 text-center">
        <p>© 2024 Mi Proyecto</p>
      </footer>
    </div>
  );
};

export default Layout;

