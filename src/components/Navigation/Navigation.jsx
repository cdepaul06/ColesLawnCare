import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import { BusinessLogo } from "../../assets";

const Navigation = ({ scrollToElementId }) => {
  return (
    <nav className='flex flex-wrap justify-between items-center bg-white p-5 border-b border-gray-300'>
      <Link
        to='/'
        className='flex items-center gap-2 pl-2 w-full md:w-auto md:pl-10'
        onClick={() => scrollToElementId("top")}
      >
        <img
          src={BusinessLogo}
          alt='logo'
          className='w-15 h-15 sm:w-13 sm:h-13 object-contain md:w-auto md:h-auto'
        />
      </Link>
      <input type='checkbox' id='menu-toggle' className='hidden' />
      <label
        htmlFor='menu-toggle'
        className='block cursor-pointer md:hidden ml-auto'
      >
        <svg
          className='fill-current text-gray-900'
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 20 20'
        >
          <title>menu</title>
          <path d='M0 3.5A1.5 1.5 0 011.5 2h17a1.5 1.5 0 110 3h-17A1.5 1.5 0 010 3.5zM1.5 9a1.5 1.5 0 011.5-1.5h17a1.5 1.5 0 110 3h-17A1.5 1.5 0 011.5 9zm0 5a1.5 1.5 0 011.5-1.5h17a1.5 1.5 0 110 3h-17A1.5 1.5 0 011.5 14z' />
        </svg>
      </label>
      <ul
        className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 ml-auto md:ml-0 md:items-center md:justify-end w-full md:w-auto hidden md:flex'
        id='menu'
      >
        {navLinks.map((link) => (
          <li key={link.id}>
            <button
              className='inline-block px-5 py-3 rounded text-white bg-[#029c15] no-underline hover:bg-[#03540d] transition-colors duration-300'
              onClick={() => scrollToElementId(link.id)}
            >
              {link.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
