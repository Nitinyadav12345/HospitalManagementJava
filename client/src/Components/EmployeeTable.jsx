import React from "react";

const EmployeeTable = ({ data, onUpdate, onDelete }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Date of Joining</th>
              <th className="px-4 py-2 border">Date of Birth</th>
              <th className="px-4 py-2 border">Salary</th>
              <th className="px-4 py-2 border">Charges</th>
              <th className="px-4 py-2 border">Department</th>
              <th className="px-4 py-2 border">User Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Phone Number</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">{data.id}</td>
              <td className="px-4 py-2 border">{data.doj}</td>
              <td className="px-4 py-2 border">{data.dob}</td>
              <td className="px-4 py-2 border">{data.salary}</td>
              <td className="px-4 py-2 border">{data.charges}</td>
              <td className="px-4 py-2 border">{data.department}</td>
              <td className="px-4 py-2 border">{data.user.name}</td>
              <td className="px-4 py-2 border">{data.user.email}</td>
              <td className="px-4 py-2 border">{data.user.phoneNumber}</td>
              <td className="px-4 py-2 border">{data.user.role}</td>
              <td className="px-4 py-2 border">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded-xl mr-2 my-2"
                  onClick={() => onUpdate(data.id)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-xl"
                  onClick={() => onDelete(data.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
