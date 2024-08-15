import React, { useState } from "react";
import { toast } from "react-toastify";
import { updatePatientdetails } from "../service/patient";
import { useNavigate } from "react-router-dom";
function ProfileUser() {
  const intialState = {
    bloodgroup: "",
    dob: "",
    bedno: 0,
    disease: "",
    isadmit: "false",
  };
  const [formData, setFormData] = useState(intialState);

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? e.target.files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.bloodgroup === "" ||
      formData.disease === "" ||
      formData.name === "" ||
      formData.doa === "" ||
      formData.dob === ""
    ) {
      toast.warn("Enter all required values");
    } else {
      try {
        const { bloodgroup, dob, disease, doa, bedno, isadmit } = formData;
        const res = await updatePatientdetails({
          bloodgroup,
          dob,
          disease,
          isadmit,
        });
        console.log(res);
        if (res.data.status === "Success") {
          toast.success(res.data.data);
          handelCancel();
        } else {
          toast.error(res.data.data);
        }
      } catch (error) {
        console.error("Registration error:", error);
        toast.error("Registration failed");
      }
    }
  };

  const handelCancel = () => {
    setFormData(intialState);
    navigate("/patient");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg"
      >
        <div className="flex justify-center">
          <span className="text-center text-2xl font-bold text-amber-950">
            UPDATE DETAILS
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
        <div className="flex space-x-3">
          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            UPDATE
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

export default ProfileUser;
