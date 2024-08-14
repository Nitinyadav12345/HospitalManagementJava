import React, { useState } from "react";
import { toast } from "react-toastify";

const EmployeeTable = ({
  data,
  onDelete,
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleDelete = async (id) => {
    try {
      await onDelete({ id });
      window.location.reload();
      toast.success("Emp deleted successfully");
    } catch (error) {
      toast.error("Failed to delete the Emp:", error);
      console.log(error);
    }
  };

  // Filter data based on search term
  const filteredData = data.filter((item) => {
    return (
      item.user?.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.user?.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.user?.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search by email, role, or name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full max-w-lg"
        />
      </div>
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
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 border">{item.id}</td>
                <td className="px-4 py-2 border">{item.doj}</td>
                <td className="px-4 py-2 border">{item.dob}</td>
                <td className="px-4 py-2 border">{item.salary}</td>
                <td className="px-4 py-2 border">{item.charges}</td>
                <td className="px-4 py-2 border">{item.department}</td>
                <td className="px-4 py-2 border">{item.user?.name}</td>
                <td className="px-4 py-2 border">{item.user?.email}</td>
                <td className="px-4 py-2 border">{item.user?.phoneNumber}</td>
                <td className="px-4 py-2 border">{item.user?.role}</td>
                <td className="px-4 py-2 border">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-xl"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <nav>
          <ul className="flex list-style-none">
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={`mx-1 ${
                  currentPage === number ? "font-bold" : ""
                } bg-pink-700 rounded-md`}
              >
                <button
                  onClick={() => paginate(number)}
                  className="px-4 py-2  rounded-md"
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default EmployeeTable;
