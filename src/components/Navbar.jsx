import React from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const currentLoc = useLocation();
  return (
    <div className="sticky z-50 top-0">
      <nav className="navbar bg-black text-white px-8 sticky top-0 z-50">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Ahmed Abrar Ariyan
          </Link>
        </div>
        <div>
          {currentLoc.pathname === "/" ? (
            <>
              <div className="hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
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
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#skills">Skills</a>
                    </li>
                    <li>
                      <a href="#projects">Projects</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
