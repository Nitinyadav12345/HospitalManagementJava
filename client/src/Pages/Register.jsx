import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  
  return (
    <>
      <div class="flex justify-center items-center md:h-screen p-10 ">
        <div class="grid md:grid-cols-2 grid-cols-1  border rounded-3xl">
          <div class="flex justify-center items-center p-5">
            <form action="">
              <h1 class="text-center mb-10 font-bold text-4xl">
                REGISTER HERE
              </h1>
              <input
                type="email"
                class=" bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-3"
                placeholder="Email"
              />
              <input
                type="text"
                class=" bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-3"
                placeholder="First Name"
              />
              <input
                type="text"
                class=" bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-3"
                placeholder="Last Name"
              />
              <input
                type="Password"
                class=" bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-3"
                placeholder="Password"
              />
              <input
                type="Password"
                class=" bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-3"
                placeholder="Confirm Password"
              />
              <div className="flex">
                <button
                  type="submit"
                  class=" bg-blue-400 hover:bg-blue-500 border outline-none rounded-md py-3 w-full px-4 font-semibold text-white"
                >
                  Submit
                </button>
                <button
                  type="submit"
                  class=" bg-pink-400 hover:bg-pink-500 border outline-none rounded-md py-3 w-full px-4 font-semibold text-white"
                >
                  Cancel
                </button>
              </div>
              <div>
                <span className="text-center">
                  alredy have account login
                  <Link to="/login" className="font-bold underline mx-2">
                    here
                  </Link>
                </span>
              </div>
            </form>
          </div>
          <div class="bg-gradient-to-r from-[#E4F9F5] to-[#5038ED] rounded-sm flex  items-center justify-center">
            <img src="../../Resources/doctor.png" class="rounded-3xl" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
