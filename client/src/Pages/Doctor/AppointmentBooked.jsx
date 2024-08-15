import React, { useEffect, useState } from "react";
import { cancelAppointment } from "../../service/patient";
import { toast } from "react-toastify";
import {
  addPress,
  getAppointmentByDoctorId,
  getDoctorId,
} from "../../service/doctor";

const AppointmentBooked = () => {
  const [appointment, setAppointment] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [prescription, setPrescription] = useState("");
  const [prescriptionForAppointment, setPrescriptionForAppointment] =
    useState(null);

  useEffect(() => {
    const getappoint = async () => {
      try {
        const res = await getDoctorId();
        if (res.data.status === "Success") {
          const id = res.data.data;
          const result = await getAppointmentByDoctorId({ id });
          setAppointment(result.data.data);
        }
      } catch (error) {
        console.log("error on loading the appointment data");
      }
    };
    getappoint();
  }, []);

  const handleCancel = async (id) => {
    const status = "CANCELLED";
    try {
      const res = await cancelAppointment({ status, id });
      if (res.data.status === "Success") {
        toast.success("Canceled Successfully");
        setAppointment(
          appointment.map((app) =>
            app.id === id ? { ...app, status: "CANCELLED" } : app
          )
        );
      }
    } catch (error) {
      console.log("Error occurred on canceling the appointment");
    }
  };

  const handleConfirm = async (id) => {
    const status = "CONFIRMED";
    try {
      const res = await cancelAppointment({ status, id });
      if (res.data.status === "Success") {
        toast.success("Confirmed Successfully");
        setAppointment(
          appointment.map((app) =>
            app.id === id ? { ...app, status: "CONFIRMED" } : app
          )
        );
      }
    } catch (error) {
      console.log("Error occurred on confirming the appointment");
    }
  };

  const handlePrescription = (id) => {
    setPrescriptionForAppointment(id);
    setPrescription("");
  };

  const handleSavePrescription = async (id) => {
    try {
      const result = await addPress({ id, prescription });
      if (result.data.status === "Success") {
        toast.success(result.data.data);
      }
      setPrescriptionForAppointment(id);
      setPrescription("");
    } catch (error) {
      console.log(error);
      toast.error("failed to add the Prescription");
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = appointment.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(appointment.length / itemsPerPage);

  return (
    <div>
      <center>
        <span className="text-2xl font-bold">Appointments</span>
      </center>
      <center>
        <div className="overflow-x-auto mt-10">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th className="text-lg font-semibold">Patient's Name</th>
                <th className="text-lg font-semibold">Problem</th>
                <th className="text-lg font-semibold">Status</th>
                <th className="text-lg font-semibold">Date</th>
                <th className="text-lg font-semibold">Cancel</th>
                <th className="text-lg font-semibold">Confirm</th>
                <th className="text-lg font-semibold">Prescription</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((obj) => (
                <tr key={obj.id}>
                  <th>{obj.id}</th>
                  <td>{obj?.patient?.user?.name}</td>
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
                    {obj.status === "PENDING" && (
                      <button
                        onClick={() => handleConfirm(obj.id)}
                        className="btn btn-info"
                      >
                        Confirm
                      </button>
                    )}
                  </td>
                  <td>
                    {obj.status === "CONFIRMED" && (
                      <>
                        <button
                          onClick={() => handlePrescription(obj.id)}
                          className="btn btn-info"
                        >
                          Add Prescription
                        </button>
                        {prescriptionForAppointment === obj.id && (
                          <div className="mt-2">
                            <textarea
                              value={prescription}
                              onChange={(e) => setPrescription(e.target.value)}
                              placeholder="Enter prescription"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            ></textarea>
                            <button
                              onClick={() =>
                                handleSavePrescription(obj?.patient?.id)
                              }
                              className="btn btn-success mt-2"
                            >
                              Save Prescription
                            </button>
                          </div>
                        )}
                      </>
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

export default AppointmentBooked;
