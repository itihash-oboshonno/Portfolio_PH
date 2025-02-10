import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-black text-white px-8 sticky top-0 z-50">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Ahmed Abrar Ariyan
          </Link>
        </div>
        <div className="hidden lg:flex items-center">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="#about">About</Link>
            </li>
            <li>
              <Link to="#skills">Skills</Link>
            </li>
            <li>
              <Link to="#projects">Projects</Link>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex lg:hidden ml-3">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <div>
                <FaBars className="text-dark"></FaBars>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              <li>
                <Link to="#about">About</Link>
              </li>
              <li>
                <Link to="#skills">Skills</Link>
              </li>
              <li>
                <Link to="#projects">Projects</Link>
              </li>
              <li>
                <Link to="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
