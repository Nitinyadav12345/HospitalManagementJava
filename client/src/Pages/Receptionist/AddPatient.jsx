import React, { useState } from "react";
import {
  validateEmail,
  validatePassword,
  validatePhone,
} from "../../Validations/validation";
import { uploadUserImage, userRegistration } from "../../service/admin";
import { toast } from "react-toastify";
import { patientRegistration } from "../../service/receptionist";
function AddPatient() {
  const intialState = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "PATIENT",
    image: null,
    bloodgroup: "",
    dob: "",
    bedno: 0,
    disease: "",
    doa: "",
    isadmit: "true",
  };
  const [formData, setFormData] = useState(intialState);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? e.target.files[0] : value,
    });
  };

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
      formData.bloodgroup === "" ||
      formData.disease === "" ||
      formData.name === "" ||
      formData.doa === "" ||
      formData.dob === ""
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
        if (result.data.status == "Success") {
          const userId = result.data.data.id;
          const userid = userId;
          console.log(userId);
          const { image } = formData;
          const res1 = await uploadUserImage({ image, userid });
          console.log(res1);
          if (res1.data.status === "Success") {
            toast.success(res1.data.data);
          }
          const { bloodgroup, dob, disease, doa, bedno, isadmit } = formData;
          const res = await patientRegistration({
            bloodgroup,
            dob,
            disease,
            doa,
            userId,
            bedno,
            isadmit,
          });
          console.log(res);
          if (res.data.status === "Success") {
            toast.success(res.data.data);
            handelCancel();
          } else {
            toast.error(res.data.data);
          }
        }
      } catch (error) {
        console.error("Registration error:", error);
        toast.error("Registration failed");
      }
    }
  };

  const handelCancel = () => {
    setFormData(intialState);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg"
      >
        <div className="flex justify-center">
          <span className="text-center text-2xl font-bold text-amber-950">
            ADMIT PATIENT
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Image:</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Blood Group:
            </label>
            <input
              type="text"
              name="bloodgroup"
              value={formData.bloodgroup}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Date of Birth:
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
              Disease:
            </label>
            <textarea
              name="disease"
              value={formData.disease}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Date of Admission:
            </label>
            <input
              type="date"
              name="doa"
              value={formData.doa}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Bed Number:
            </label>
            <input
              type="number"
              name="bedno"
              value={formData.bedno}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex space-x-3">
          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Register
          </button>
          <button
            onClick={handelCancel}
            className="w-full bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPatient;
