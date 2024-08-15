import React, { useEffect, useState } from "react";
import { employeelist } from "../../service/admin";
import { toast } from "react-toastify";
import { bookAppointment, getPatientId } from "../../service/patient";
import axios from "axios";

const ScheApp = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const status = "PENDING";
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [allDoctors, setAllDoctors] = useState([]); // To keep all doctors data

  useEffect(() => {
    const getEmployees = async () => {
      const result = await employeelist();
      const arr = result.data.data;
      const filteredDoctors = arr.filter(
        (employee) => employee.user?.role === "DOCTOR"
      );
      setAllDoctors(filteredDoctors);
      const doctorsByDepartment = filteredDoctors.filter(
        (doctor) => doctor.department === selectedDepartment
      );
      setDoctors(doctorsByDepartment);
      console.log("Doctors by Department:", doctorsByDepartment); // Log filtered doctors
    };
    getEmployees();
  }, [selectedDepartment]);

  const handleDepartmentChange = (e) => {
    const department = e.target.value;
    setSelectedDepartment(department);
    const filtered = allDoctors.filter(
      (doctor) => doctor.department === department
    );
    setDoctors(filtered);
    console.log("Filtered Doctors:", filtered); // Debug the filtered list
  };

  const handleDoctorChange = (e) => {
    const selectedId = e.target.value;
    console.log("Selected Doctor ID:", selectedId);
    setSelectedDoctor(selectedId);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleAppointment = async (e) => {
    e.preventDefault();
    if (selectedDate === "" || selectedDoctor === "" || status === "") {
      toast.warn("Please insert values properly");
    } else {
      try {
        console.log("Fetching patient ID...");
        const result = await getPatientId();

        if (result.data.status === "Success") {
          const patientId = result.data.data;
          const doctorId = selectedDoctor;
          const appdate = selectedDate;

          const res = await bookAppointment({
            status,
            appdate,
            doctorId,
            patientId,
          });

          if (res.data.status === "Success") {
            toast.success(res.data.data);
          } else {
            toast.error("Appointment booking failed");
          }
        }
      } catch (error) {
        // Log any errors that occur during the process
        console.error("Error during appointment booking:", error);
        toast.error("Appointment failed");
      }
    }
  };

  const departments = ["OPD1", "OPD2", "OPD3", "OPD4"];

  return (
    <div className="container">
      <center>
        <h1 className="text-2xl font-bold">Get Your Appointment</h1>
      </center>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-full">
          <form>
            <div className="mb-5">
              <label
                htmlFor="departments"
                className="mb-3 block text-base font-medium text-[#07074D] text-center"
              >
                Departments
              </label>
              <select
                id="departments"
                className="bg-gray-200 border border-gray-300 text-sm rounded-lg block w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                onChange={handleDepartmentChange}
                value={selectedDepartment}
              >
                <option value="" disabled>
                  Select Department
                </option>
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="doctors"
                className="mb-3 block text-base font-medium text-[#07074D] text-center"
              >
                Doctors List
              </label>
              <select
                id="doctors"
                className="bg-gray-200 border border-gray-300 text-sm rounded-lg block w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                onChange={handleDoctorChange}
                value={selectedDoctor}
              >
                <option value="" disabled>
                  Select Doctor
                </option>
                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.user?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D] text-center"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    onChange={handleDateChange}
                    value={selectedDate}
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                onClick={handleAppointment}
              >
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
