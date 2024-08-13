import React, { useEffect, useState } from "react";
import {
  validateEmail,
  validatePassword,
  validatePhone,
} from "../../Validations/validation";
import { toast } from "react-toastify";
import { employeeRegistration, userRegistration } from "../../service/admin";
import axios from "axios";
import { config2 } from "../../config";
import { useLocation } from "react-router-dom";

function AddEmployee() {
  const initialFormData = {
    id: "",
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
    doj: "",
    dob: "",
    salary: "",
    charges: "",
    department: "",
  };
  const { state } = useLocation();
  const [formData, setFormData] = useState(initialFormData);
  //setFormData({ ...formData, name: state.name });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    if (state && state.employeeData) {
      setFormData({
        ...formData,
        ...state.employeeData,
        password: "",
      });
    }
  }, [state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (!validateEmail(formData.email)) {
      toast.warn("Insert a valid email");
    } else if (!validatePhone(formData.phoneNumber)) {
      toast.warn("Insert a valid phone number");
    } else if (!validatePassword(formData.password)) {
      toast.warn(
        "Password should contain uppercase, lowercase letters, and a special symbol"
      );
    } else if (
      formData.charges === "" ||
      formData.department === "" ||
      formData.dob === "" ||
      formData.doj === "" ||
      formData.name === "" ||
      formData.role === "" ||
      formData.salary === ""
    ) {
      toast.warn("Enter all required values");
    } else {
      const { name, email, password, phoneNumber, role } = formData;
      try {
        const result = await userRegistration({
          name,
          email,
          password,
          phoneNumber,
          role,
        });
        console.log(result);
        if (result.data.status === "Success") {
          const userid = result.data.data.id;
          console.log(userid);
          const { doj, dob, salary, charges, department } = formData;
          const res = await employeeRegistration({
            doj,
            dob,
            salary,
            charges,
            department,
            userid,
          });
          console.log(res);
          if (res.data.status === "Success") {
            toast.success(res.data.data);
            handleClear();
          } else {
            toast.error(res.data.data);
          }
        } else {
          toast.error(result.data.data);
        }
      } catch (error) {
        console.error("Registration error:", error);
        toast.error("Registration failed");
      }
    }
  };

  const handleClear = () => {
    setFormData(initialFormData);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Employee Registration
      </h1>
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-4">User Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Phone Number:
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Role:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="DOCTOR">Doctor</option>
              <option value="CHEMIST">Chemist</option>
              <option value="RECEPTIONIST">Receptionist</option>
            </select>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Employee Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Date of Joining (DOJ):
            </label>
            <input
              type="date"
              name="doj"
              value={formData.doj}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Date of Birth (DOB):
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Salary:
            </label>
            <input
              type="number"
              step="0.01"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Charges:
            </label>
            <input
              type="text"
              name="charges"
              value={formData.charges}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Department:
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select Department
              </option>
              <option value="OPD1">OPD1</option>
              <option value="OPD2">OPD2</option>
              <option value="OPD3">OPD3</option>
              <option value="OPD4">OPD4</option>
              <option value="RECEPTION">Reception</option>
              <option value="MEDICAL SHOP">Medical Shop</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
