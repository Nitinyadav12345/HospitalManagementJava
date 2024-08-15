import React, { useEffect, useState } from "react";
import {
  cancelAppointment,
  getAllAppointment,
  getPatientId,
} from "../../service/patient";
import { toast } from "react-toastify";

const Appointment = () => {
  const [appointment, setAppointment] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of items per page

  useEffect(() => {
    const getappoint = async () => {
      try {
        const res = await getPatientId();
        if (res.data.status === "Success") {
          const id = res.data.data;
          const result = await getAllAppointment({ id });
          setAppointment(result.data.data);
          console.log(appointment);
        }
      } catch (error) {
        console.log("error on loading the appointment data");
      }
    };
    getappoint();
  }, []);

  const handleCancel = async (id) => {
    const status = "CANCELLED";
    const res = await cancelAppointment({ status, id });
    if (res.data.status === "Success") {
      toast.success("Canceled Successfully");
      setAppointment(
        appointment.map((app) =>
          app.id === id ? { ...app, status: "CANCELLED" } : app
        )
      );
    } else {
      console.log("Error occurred on canceling the appointment");
    }
  };

  // Get current items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = appointment.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(appointment.length / itemsPerPage);

  return (
    <div>
      <center>
        <span className="text-2xl font-bold">Appointment History</span>
      </center>
      <center>
        <div className="overflow-x-auto mt-10">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th className="text-lg font-semibold">Doctor's Name</th>
                <th className="text-lg font-semibold">Problem</th>
                <th className="text-lg font-semibold">Status</th>
                <th className="text-lg font-semibold">Date</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((obj) => (
                <tr key={obj.id}>
                  <th>{obj.id}</th>
                  <td>{obj?.doctor?.user?.name}</td>
                  <td>{obj?.patient?.disease}</td>
                  <td>
                    <span
                      className={`btn ${
                        obj.status === "CONFIRMED"
                          ? "btn-success"
                          : obj.status === "CANCELLED"
                          ? "btn-error"
                          : "btn-warning"
                      }`}
                    >
                      {obj.status}
                    </span>
                  </td>
                  <td>{obj.appdate}</td>
                  <td>
                    {obj.status === "PENDING" && (
                      <button
                        onClick={() => handleCancel(obj.id)}
                        className="btn btn-error"
                      >
                        Cancel
                      </button>
                    )}
                  </td>
                  <td>
                    {obj.status === "CONFIRMED" && (
                      <button className="btn btn-info">Info</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </center>
    </div>
  );
};

export default Appointment;
