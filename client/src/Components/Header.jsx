import React from 'react';

const Header = () => {
  return (
    <div className="px-4 py-2 mx-auto max-w-7xl">
      <div className="navbar bg-base-100 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 flex items-center">
          <a className="btn btn-ghost text-xl flex items-center">
            <img className='w-10 h-10 md:w-12 md:h-12' src="../../Resources/logo.png" alt="logo" />
            <span className='font-extrabold text-xl md:text-2xl ml-2'>HMS</span>
          </a>
        </div>
        <div className="flex-none mt-2 md:mt-0">
          <button className="bg-red-400 hover:bg-red-600 border outline-none rounded-md py-2 px-4 md:py-3 md:px-6 font-semibold text-white">
            <span className='text-lg md:text-xl font-bold'>Emergency Contact</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
