import React from "react";
import { Link } from "react-router-dom";

// If you ever want to add more navLinks just click here and add them to the array
import { navLinks } from "../../constants";

// Ctrl+Click here to get to the path of the BusinessLogo image. If the logo changes just drop the
// .png file into the src\assets folder and it will automatically update here
import { BusinessLogo } from "../../assets";

const Navigation = ({}) => {
  return (
    <nav className='flex justify-between items-center p-5 border-b border-gray-300 h-25'>
      <Link
        to='/'
        className='flex items-center gap-2 pl-10'
        onClick={() => window.scrollTo(0, 0)}
      >
        <img
          src={BusinessLogo}
          alt='logo'
          className='w-13 h-13 object-contain'
        />
      </Link>
      <ul className='flex items-center space-x-4 ml-auto'>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className='inline-block px-5 py-3 rounded text-white bg-[#029c15] no-underline hover:bg-[#03540d]'
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
