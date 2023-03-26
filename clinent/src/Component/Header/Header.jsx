import React from "react";
import { NavLink } from "react-router-dom";

const Header=()=> {
  return (
    <nav className="bg-gray-600 p-4 flex justify-between items-center  fixed w-full top-0 left-0 z-10">
      <div className="flex items-center">
        <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png' alt="Apple logo" className="w-8 h-8 mr-2" />
        <h1 className="text-lg font-semibold text-white">App Store</h1>
      </div>
      <ul className="flex items-center">
        <li className="mr-4">
          <a href="/Admin" className="text-white hover:text-gray-900">
            Admin
          </a>
        </li>
        <li className="mr-4">
          <a href="/" className="text-white hover:text-gray-900">
            Games
          </a>
        </li>
        <li className="mr-4">
          <a href="/" className="text-white hover:text-gray-900">
            Apps
          </a>
        </li>
        <li>
          <a href="/" className="text-white hover:text-gray-900">
            Search
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;