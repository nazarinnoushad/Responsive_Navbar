import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <nav className="bg-gray-900 h-20 px-10 flex justify-between items-center shadow-md lg:px-20">
      <div className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-white font-serif md:text-4xl lg:text-5xl">
        Logo
      </div>
      <ul
        className={`${
          showNavbar
            ? 'absolute top-20 right-0 w-64 bg-gray-900 p-4 space-y-4'
            : 'hidden'
        } md:flex md:space-x-8 md:static md:w-auto md:bg-transparent md:p-0 md:space-y-0 transition-all duration-300`}
      >
        <li className="text-gray-300 hover:text-white transition duration-300 py-2 hover:bg-gray-700 text-sm md:text-base">
          Home
        </li>
        <li className="text-gray-300 hover:text-white transition duration-300 py-2 hover:bg-gray-700 text-sm md:text-base">
          Blog
        </li>
        <li className="text-gray-300 hover:text-white transition duration-300 py-2 hover:bg-gray-700 text-sm md:text-base">
          My Blog
        </li>
        <li className="text-gray-300 hover:text-white transition duration-300 py-2 hover:bg-gray-700 text-sm md:text-base">
          Login
        </li>
        <li className="text-gray-300 hover:text-white transition duration-300 py-2 hover:bg-gray-700 text-sm md:text-base">
          Signup
        </li>
      </ul>
      <div
        onClick={() => setShowNavbar((open) => !open)}
        className="flex items-center space-x-4 cursor-pointer md:hidden"
      >
        {showNavbar ? <CloseIcon className="text-white" /> : <MenuIcon className="text-white" />}
      </div>
    </nav>
  );
};

export default Navbar;












