import React from "react";
import { navLinks } from "../../constants";

const Navigation = ({}) => {
  return (
    <nav className='flex justify-between items-center p-5 border-b border-gray-300 h-25'>
      <a
        href='/'
        className='flex items-center text-2xl font-semibold text-indigo-600 no-underline'
      >
        Logo
      </a>
      <ul className='flex items-center space-x-4 ml-auto'>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className='inline-block px-5 py-2 rounded text-white bg-indigo-600 no-underline hover:bg-indigo-900'
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
