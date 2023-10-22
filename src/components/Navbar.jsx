import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const beachRiderStyle = {
    fontSize: '2rem', 
    fontFamily: 'cursive', 
    color: 'black',
    
  };

  return (
    <nav className='bg-gradient-to-r from-blue-500 to-purple-500 text-white py-5 px-4 md:px-10 flex justify-between items-center z-10'>
      <div className='text-2xl font-bold cursor-pointer'>
        <h1 onClick={toggleNav} className={navOpen ? 'hidden' : 'block'} style={beachRiderStyle}>
          BEACH.Rider
        </h1>
      </div>
      <ul className='hidden md:flex space-x-6 text-lg'>
        <li className='hover:text-blue-800 transition duration-300'>Home</li>
        <li className='hover:text-blue-800 transition duration-300'>Destinations</li>
        <li className='hover:text-blue-800 transition duration-300'>Travel</li>
        <li className='hover:text-blue-800 transition duration-300'>View</li>
        <li className='hover:text-blue-800 transition duration-300'>Book</li>
      </ul>
      <div className='hidden md:flex space-x-6'>
        <BiSearch size={24} />
        <BsPerson size={24} />
      </div>

      {/* Hamburger */}
      <div onClick={toggleNav} className='md:hidden z-10'>
        {navOpen ? (
          <AiOutlineClose className='text-2xl' />
        ) : (
          <HiOutlineMenuAlt4 size={24} />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={toggleNav}
        className={`${
          navOpen
            ? 'absolute text-black left-0 top-0 w-full bg-white/90 px-4 py-7 flex flex-col space-y-4'
            : 'absolute left-[-100%]'
        } md:hidden`}
      >
        <h1 className='text-2xl font-bold' style={beachRiderStyle}>BEACH.Rider</h1>
        <ul className='space-y-2'>
          <li className='hover:text-blue-800 transition duration-300'>Home</li>
          <li className='hover:text-blue-800 transition duration-300'>Destinations</li>
          <li className='hover:text-blue-800 transition duration-300'>Travel</li>
          <li className='hover:text-blue-800 transition duration-300'>View</li>
          <li className='hover:text-blue-800 transition duration-300'>Book</li>
        </ul>
        <div className='flex flex-col space-y-4'>
          <button className='py-2 px-6 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300'>
            Search
          </button>
          <button className='py-2 px-6 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300'>
            Account
          </button>
        </div>
        <div className='flex justify-center space-x-6 my-4'>
          <FaFacebook className='icon text-blue-600 hover:text-blue-800' />
          <FaTwitter className='icon text-blue-400 hover:text-blue-600' />
          <FaYoutube className='icon text-red-500 hover:text-red-700' />
          <FaPinterest className='icon text-red-600 hover:text-red-800' />
          <FaInstagram className='icon text-pink-400 hover:text-pink-600' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


