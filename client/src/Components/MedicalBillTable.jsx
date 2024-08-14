import React, { useState } from "react";

const MedicalBillTable = ({ data = [], itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the data based on the search term
  const filteredData = data.filter(
    (item) =>
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.patient && item.patient.id.toString().includes(searchTerm)) ||
      (item.patient &&
        item.patient.user.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("Search Term:", searchTerm);
  console.log("Filtered Data:", filteredData);

  // Calculate total pages based on filtered data
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Get the data for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page on new search
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Search by Category, Patient ID, Patient Name, or Status"
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-4 p-2 border border-gray-300 rounded w-full max-w-lg"
      />

      {filteredData.length === 0 ? (
        <p className="text-gray-700 mt-4">No results found.</p>
      ) : (
        <>
          <div className="overflow-x-auto w-full">
            <table className="min-w-full bg-white shadow-lg rounded-lg">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="py-3 px-6 text-left">Bill ID</th>
                  <th className="py-3 px-6 text-left">Fees</th>
                  <th className="py-3 px-6 text-left">Status</th>
                  <th className="py-3 px-6 text-left">Category</th>
                  <th className="py-3 px-6 text-left">Patient ID</th>
                  <th className="py-3 px-6 text-left">Patient Name</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {currentData.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`hover:bg-blue-100 ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <td className="py-3 px-6 border-b">{item.id}</td>
                    <td className="py-3 px-6 border-b">{item.fees}</td>
                    <td className="py-3 px-6 border-b">
                      <span
                        className={`${
                          item.status === "PAID"
                            ? "text-green-500"
                            : "text-yellow-500"
                        } font-semibold`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 px-6 border-b">{item.category}</td>
                    <td className="py-3 px-6 border-b">
                      {item.patient ? item.patient.id : "N/A"}
                    </td>
                    <td className="py-3 px-6 border-b">
                      {item.patient ? item.patient.user.name : "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between w-full mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MedicalBillTable;
