import React from 'react'

const Header = () => {
  return (
    <div className="mx-5">
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">
    <img className=' w-10' src="../../Resources/logo.png" alt="logo"  /> 
    <span className=' font-extrabold text-2xl'>HMS</span>
    </a>
    
  </div>
  <div className="flex-none">
  <button className="bg-red-400 hover:bg-red-600 border outline-none rounded-md py-3 w-full px-4 font-semibold text-white"><span className='text-xl font-bold '>Emergency Contact</span></button>
  </div>
</div>
    </div>
  )
}

export default Header
