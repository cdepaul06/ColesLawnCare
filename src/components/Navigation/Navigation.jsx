import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import { BusinessLogo } from "../../assets";
import { Link as ScrollLink } from "react-scroll";

const Navigation = ({}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='flex justify-between items-center bg-white p-5 fixed w-full'>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => window.scrollTo(0, 0)}
        >
          <img
            src={BusinessLogo}
            alt='logo'
            className='w-[7rem] h-[7rem] object-contain'
          />
          <p className='text-gray-900 font-bold cursor-pointer flex pl-2'>
            Cole's Lawn Care
            <span className='font-normal'> &nbsp;| Quality Service</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className='group font-medium cursor-pointer relative'
            >
              <ScrollLink
                to={link.id}
                spy={true}
                smooth={true}
                offset={link.id === "about" ? 80 : 0}
                duration={500}
                className='text-green-700 hover:text-[#00c45c] hover:underline transition-colors duration-300'
                activeClass='text-[#0f1613]'
              >
                {link.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <svg
            className='fill-current text-gray-900 w-7 h-7 cursor-pointer'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            onClick={() => setToggle(!toggle)}
          >
            <title>menu</title>
            <path d='M0 3.5A1.5 1.5 0 011.5 2h17a1.5 1.5 0 110 3h-17A1.5 1.5 0 010 3.5zM1.5 9a1.5 1.5 0 011.5-1.5h17a1.5 1.5 0 110 3h-17A1.5 1.5 0 011.5 9zm0 5a1.5 1.5 0 011.5-1.5h17a1.5 1.5 0 110 3h-17A1.5 1.5 0 011.5 14z' />
          </svg>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-gray-900 text-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.id} className='font-medium cursor-pointer'>
                  <ScrollLink
                    to={link.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className='border border-[#029c15] text-[#029c15] px-2 py-1 rounded hover:bg-[#029c15] hover:text-white transition-colors duration-300'
                    activeClass='text-white'
                    onClick={() => setToggle(false)}
                  >
                    {link.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
