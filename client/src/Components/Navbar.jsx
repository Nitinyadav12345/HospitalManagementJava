import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for routing

const Navbar = () => {
  const [profile, setProfile] = useState(false);

  // Dummy function to toggle profile state
  const toggleProfile = () => {
    setProfile(!profile);
  };

  return (
    <div className='mx-5'>
      <div className="navbar bg-base-100">
        <div className="flex-1 space-x-5 ml-5">
          <a className='hover:text-teal-600 text-sm md:text-xl font-bold' href="#">Home</a>
          <a className='hover:text-teal-600 text-sm md:text-xl font-bold' href="#">Departments</a>
          <a className='hover:text-teal-600 text-sm md:text-xl font-bold' href="#">Doctors</a>
          <a className='hover:text-teal-600 text-sm md:text-xl font-bold' href="#">About us</a>
        </div>
        <div className="flex-none">
          {profile ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
                onClick={toggleProfile} // Toggle profile on avatar click
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
          ) : (
            <div className="space-x-3">
              <Link className="bg-blue-400 hover:bg-blue-500 border outline-none rounded-md py-3 w-full px-4 font-semibold text-white" to="/login">
                <span className='text-xl font-bold'>Login</span>
              </Link>
              <Link className="bg-blue-400 hover:bg-blue-500 border outline-none rounded-md py-3 w-full px-4 font-semibold text-white" to="/register">
                <span className='text-xl font-bold'>Register</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
