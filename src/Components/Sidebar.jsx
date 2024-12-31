import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdReport } from "react-icons/md";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage drawer visibility

  const links = [
    {
      name: "Home",
      path: "/home",
      icon: <MdDashboard size={24} />,
    },
    {
      name: "Employee",
      path: "/employee",
      icon: <FaRegCircleUser size={24} />,
    },
    {
      name: "Report",
      path: "/report",
      icon: <MdReport size={24} />,
    },
  ];

  return (
    <div className="relative">
      {/* Hamburger menu for mobile */}
      <button
        className="lg:hidden absolute top-1 bg-indigo-500 p-2 rounded-xl mt-[10px] left-4 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={28} />
      </button>

      {/* Drawer (Sidebar) */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed inset-0 z-50 transition-transform bg-gray-800 text-white w-64 h-screen shadow-lg lg:relative lg:block`}
      >
        <h1 className="text-2xl font-bold text-center py-6 border-b border-gray-700">
          Company Logo
        </h1>
        <nav className="flex-1 mt-4">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 text-lg transition-colors ${
                      isActive
                        ? "bg-indigo-600 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`
                  }
                >
                  {link.icon}
                  <span className="ml-3">{link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <p className="text-sm text-center text-gray-400">
            © 2024 Company Name
          </p>
        </div>
      </div>

      {/* Overlay when the drawer is open */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed inset-0 bg-black opacity-50 lg:hidden`}
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
};

export default Sidebar;
