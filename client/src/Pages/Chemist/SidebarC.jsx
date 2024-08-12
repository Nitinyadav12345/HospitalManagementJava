import React from "react";
import SidebarMenu from "../../Components/SidebarMenu";
import { Link, Route, Routes } from "react-router-dom";
import ViewStock from "./ViewStock";
import MedicineForm from "./MedicineForm";
import Billing from "./Billing";

const SidebarP = () => {
  const menu = [
    { name: "View Stock", path: "" },
    { name: "Add Mediciene", path: "addmed" },
    { name: "Medicine Bill", path: "medbill" },
  ];

  return (
    <div className="flex h-screen bg-pink-100">
      <div className="hidden md:flex flex-col w-64 bg-pink-500">
        <div className="flex items-center justify-center h-16 bg-pink-900">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">
              <img
                className=" w-10"
                src="../../Resources/logo.png"
                alt="logo"
              />
              <span className=" font-extrabold text-2xl">HMS</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-pink-800">
            {menu.map((obj) => {
              return <SidebarMenu name={obj.name} path={obj.path} />;
            })}
          </nav>
        </div>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between md:justify-end  h-16 bg-white border-b border-pink-200">
          <div className="flex items-center px-4 md:hidden">
            <button className="text-pink-500 focus:outline-none focus:text-pink-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center pr-4 md:items-end">
            {/* this is profile part */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
                // Toggle profile on avatar click
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
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="p-4">
          {/* here render the pages  */}
          <Routes>
            <Route path="" element={<ViewStock />}></Route>
            <Route path="addmed" element={<MedicineForm />}></Route>
            <Route path="medbill" element={<Billing />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default SidebarP;
