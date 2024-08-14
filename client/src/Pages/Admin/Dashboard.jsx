import React, { useEffect, useState } from "react";
import EmployeeTable from "../../Components/EmployeeTable";
import { deleteEmp, employeelist, revenueGenrator } from "../../service/admin";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [doctorData, setDoctorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [revenue, setRevenue] = useState(0);
  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await employeelist();
        const rev = await revenueGenrator();
        setDoctorData(response.data.data);
        setRevenue(rev);
        setLoading(false);
      } catch (error) {
        toast.error("Error in fetching the Employee data");
        console.error("Error fetching Employee data:", error);
        setLoading(false);
      }
    };

    fetchDoctorData();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const handleDelete = async (id) => {
    console.log("Delete Employee with ID:", id);
    try {
      const result = await deleteEmp(id);
      console.log(result);
      if ((result.data.status = "Success"))
        toast.success("Employee deleted Successfully");
      else {
        toast.error(result.data.data);
      }
    } catch (error) {
      console.log(error);
    }
    // Optionally remove the item from state
    setDoctorData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = doctorData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (!doctorData) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 px-4 mt-8 md:grid-cols-2 sm:px-8">
        <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div className="p-4 bg-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Employees</h3>
            <p className="text-3xl">{doctorData.length}</p>
          </div>
        </div>
        <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div className="p-4 bg-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              ></path>
            </svg>
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Revenue</h3>
            <p className="text-3xl">{revenue}</p>
          </div>
        </div>
        <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div className="p-4 bg-indigo-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              ></path>
            </svg>
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Number of beds</h3>
            <p className="text-3xl">142</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <EmployeeTable
          data={currentItems}
          onDelete={handleDelete}
          itemsPerPage={itemsPerPage}
          totalItems={doctorData.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Dashboard;
