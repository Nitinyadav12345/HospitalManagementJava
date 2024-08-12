import React, { useState } from "react";
import EmployeeTable from "../../Components/EmployeeTable";

const Dashboard = () => {
  const [doctorData, setDoctorData] = useState({
    id: 1,
    doj: "2023-08-06",
    dob: "1990-08-06",
    salary: 1020032,
    charges: "OPD1",
    department: "Neurology",
    user: {
      id: 4,
      createdAt: "2024-08-13T00:13:39.777752",
      updatedAt: "2024-08-13T00:13:39.777752",
      name: "honey",
      email: "honey@gmail.com",
      password: "$2a$10$uDNl10fV/nUqMWDnXqrB/.bWW14u4dOzzyFET.iyhu3hFdq3DOAyy",
      phoneNumber: "7599977737",
      role: "DOCTOR",
      userImage: null,
    },
  });

  const handleUpdate = (id) => {
    // Handle update logic here
    console.log("Update Employee with ID:", id);
  };

  const handleDelete = (id) => {
    // Handle delete logic here
    console.log("Delete Employee with ID:", id);
    // Optionally remove the item from state
    // setDoctorData(null);
  };

  return (
    <div>
      <div class="grid grid-cols-1 gap-8  px-4 mt-8 md:grid-cols-2 sm:px-8">
        <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Total Employees</h3>
            <p class="text-3xl">127</p>
          </div>
        </div>
        <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              ></path>
            </svg>
          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Total Revenue</h3>
            <p class="text-3xl">39,265,934</p>
          </div>
        </div>
        <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-indigo-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              ></path>
            </svg>
          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Number of beds</h3>
            <p class="text-3xl">142</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <EmployeeTable
          data={doctorData}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Dashboard;
