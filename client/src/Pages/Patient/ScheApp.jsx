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
    
    <div className=" container">
      <center>
         <h1 className="text-2xl font-bold">Get Your Appointment</h1>
     </center>
      <div className ="flex items-center justify-center p-12">
    <div className ="mx-auto w-full max-w-full ">
        <form>
            <div className ="mb-5">
                <label for="name" className ="mb-3 block text-base font-medium text-[#07074D] text-center">
                    Departments
                </label>
                <select
              id="countries"
              className ="bg-gray-200 border border-gray-300 text-sm rounded-lg block w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            >
              {
                departments.map((department)=>{
                    return <option id={department} value={department}>{department}</option>
                })
              }
            </select>
            </div>
            <div className ="mb-5">
                <label for="phone" className ="mb-3 block text-base font-medium text-[#07074D] text-center">
                    Doctors List
                </label>
                <select
              id="countries"
              className ="bg-gray-200 border border-gray-300 text-sm rounded-lg block w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            >
              {
                doctors.map((doctor)=>{
                    return <option id={doctor.id} value={doctor.name}>{doctor.name}</option>
                })
              }
            </select>
            </div>
            <div className ="-mx-3 flex flex-wrap">
                <div className ="w-full px-3 sm:w-1/2">
                    <div className ="mb-5">
                        <label for="date" className ="mb-3 block text-base font-medium text-[#07074D] text-center">
                            Date
                        </label>
                        <input type="date" name="date" id="date"
                            className ="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div className ="w-full px-3 sm:w-1/2">
                    <div className ="mb-5">
                        <label for="time" className ="mb-3 block text-base font-medium text-[#07074D] text-center">
                            Time
                        </label>
                        <input type="time" name="time" id="time"
                            className ="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
            </div>
            <div>
                <button
                    className ="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Book Appointment
                </button>
            </div>
        </form>
    </div>
</div>
    </div>
  );
};

export default ScheApp;
