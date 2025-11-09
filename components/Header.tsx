
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8 fixed top-0 z-50 bg-gray-200/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-xl font-bold font-heading tracking-wider text-brand-accent">Habityield.</span>
        <a 
            href="https://habityield.hu/strategiai-hivas" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden sm:inline-block cta-button-animated text-sm font-semibold text-brand-text-dark hover:scale-105 transition-transform duration-200 px-4 py-2 rounded-lg shadow-md"
        >
          Stratégiai Hívás
        </a>
      </div>
    </header>
  );
};

export default Header;
