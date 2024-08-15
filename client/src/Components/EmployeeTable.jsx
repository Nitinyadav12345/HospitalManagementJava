import React, { useEffect, useState } from "react";
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
  const [imageUrls, setImageUrls] = useState({});
  const pageNumbers = [];

  // Calculate total page numbers
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Handle delete operation
  const handleDelete = async (id) => {
    try {
      await onDelete({ id });
      window.location.reload();
      toast.success("Employee deleted successfully");
    } catch (error) {
      toast.error("Failed to delete the employee:", error);
      console.log(error);
    }
  };

  // Generate image URLs for each employee
  useEffect(() => {
    const urls = {};
    data.forEach((item) => {
      if (item.user && item.user.userImage) {
        const byteCharacters = atob(item.user.userImage);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: "image/jpeg" });
        const url = URL.createObjectURL(blob);
        urls[item.id] = url;
      }
    });
    setImageUrls(urls);

    // Clean up URLs when component unmounts
    return () => {
      Object.values(urls).forEach((url) => URL.revokeObjectURL(url));
    };
  }, [data]);

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
              <th className="px-4 py-2 border">Profile Photo</th>
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
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-2 border">{item.id}</td>
                  <td className="px-4 py-2 border">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={
                            imageUrls[item.id] ||
                            "https://img.daisyui.com/images/profile/demo/2@94.webp"
                          }
                          alt="Employee Avatar"
                        />
                      </div>
                    </div>
                  </td>
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
              ))
            ) : (
              <tr>
                <td colSpan="12" className="py-4 text-center text-gray-500">
                  No employees found.
                </td>
              </tr>
            )}
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
                  className="px-4 py-2 rounded-md"
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
