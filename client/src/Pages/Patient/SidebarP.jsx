import React from "react";
import SidebarMenu from "../../Components/SidebarMenu";
import { Routes, Route } from "react-router-dom";
import Appointment from "./Appointment";
import ScheApp from "./ScheApp";
import Prescription from "./Prescription";

const SidebarP = () => {
  const menu = [
    { name: "Schedule Appointment", path: "" },
    { name: "Appointment History", path: "history" },
    { name: "Prescription", path: "getpres" }
  ];

  

  return (
    <div className="flex h-screen bg-pink-100">
      <div className="hidden md:flex flex-col w-64 bg-pink-500">
        <div className="flex items-center justify-center h-16 bg-pink-900">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">
              <img
                className="w-10"
                src="../../Resources/logo.png"
                alt="logo"
              />
              <span className="font-extrabold text-2xl">HMS</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-pink-800">
            {menu.map((obj) => (
              <SidebarMenu key={obj.path} name={obj.name} path={obj.path} />
            ))}
          </nav>
        </div>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between md:justify-end h-16 bg-white border-b border-pink-200">
          <div className="flex items-center px-4 md:hidden">
            <button className="text-pink-500 focus:outline-none focus:text-pink-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center pr-4 md:items-end">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-4">
          {/* Render the nested routes */}
          <Routes>
            <Route path="history" element={<Appointment />} />
            <Route path="" element={<ScheApp />} />
            <Route path="getpres" element={<Prescription />} />
            {/* Add other nested routes here */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default SidebarP;