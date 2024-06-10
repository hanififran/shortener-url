import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/esco-lifesciences-group-logo-white-300-px.png";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-slate-800 px-3 py-2 text-white rounded-md hover:bg-gray-900 hover:text-white"
      : "px-3 py-2 text-white rounded-md hover:bg-gray-900 hover:text-white";
  return (
    <nav className="bg-slate-700 border-b border-slate-500">
      <div className="px-2 sm:px-6 lg:px-8 md:mx-8">
        <div className="flex items-center h-20">
          <div className="flex items-center flex-1">
            {/* <!-- Logo --> */}
            <NavLink className="flex items-start flex-shrink-0 mr-4" to="/">
              <img className="w-auto h-10" src={logo} alt="React Jobs" />
            </NavLink>
            <div className="ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/login" className={linkClass}>
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
