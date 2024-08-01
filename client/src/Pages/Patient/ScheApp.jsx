import React from "react";

const ScheApp = () => {
  const doctors = [
    { name: "nitin yadav", id: 1 },
    { name: "Saylee", id: 2 },
    { name: "aniket", id: 3 },
    { name: "Pratmesh", id: 4 },
  ];

  const departments = ["opd1" , "opd2" , "opd3"];

  return (
    <div>
      <center>
        <h1 className="text-2xl font-bold">Get Your Appointment</h1>
      </center>
      <center>
      <form class="w-full max-w-sm mt-5">
        
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Select Department
            </label>
          </div>
          <div class="md:w-2/3">
            <select
              id="countries"
              class="bg-gray-200 border border-gray-300 text-sm rounded-lg block w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            >
              {
                departments.map((department)=>{
                    return <option id={department} value={department}>{department}</option>
                })
              }
            </select>
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Select Doctor
            </label>
          </div>
          <div class="md:w-2/3">
            <select
              id="countries"
              class="bg-gray-200 border border-gray-300 text-sm rounded-lg block w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            >
              {
                doctors.map((doctor)=>{
                    return <option id={doctor.id} value={doctor.name}>{doctor.name}</option>
                })
              }
            </select>
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Date
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="date"           
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Problem 
            </label>
          </div>
          <div class="md:w-2/3">
            <textarea
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                         
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3"></div>
          <label class="md:w-2/3 block text-gray-500 font-bold">
            <input class="mr-2 leading-tight" type="checkbox" />
            <span class="text-sm">Send me your newsletter!</span>
          </label>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </form>
      </center>
      
    </div>
  );
};

export default ScheApp;
