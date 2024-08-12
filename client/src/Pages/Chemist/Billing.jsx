import React, { useState } from "react";
import { insertPayment } from "../../service/chemist";
import { toast } from "react-toastify";

const Billing = () => {
  const [fees, setFees] = useState("");
  const [status, setStatus] = useState("");
  const [patient, setpatient] = useState("");
  const [category, setCategory] = useState("MEDICALBILL");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (fees === "" || status === "" || patient === "") {
      toast.warn("enter data first");
    } else {
      const paymentData = {
        fees: parseFloat(fees),
        status,
        patient: parseInt(patient, 10),
        category,
      };

      try {
        console.log(paymentData);
        const result = await insertPayment(paymentData);
        console.log(result.data.status);
        if (result.data.status === "Success") {
          toast.success("Payment Added Successfully");
          resetForm();
        }
      } catch (error) {
        toast.error("Error in adding payment:");
      }
    }
  };

  const handleCancel = () => {
    resetForm();
  };

  const resetForm = () => {
    setFees("");
    setStatus("");
    setpatient("");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-100 shadow-xl rounded-lg border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add Payment</h1>
      <form onSubmit={handleSubmit}>
        {/* Fees */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Fees
          </label>
          <input
            type="number"
            step="0.01"
            value={fees}
            onChange={(e) => setFees(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
        </div>

        {/* Status */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="PENDING">PENDING</option>
            <option value="PAID">PAID</option>
          </select>
        </div>

        {/* Patient ID */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Patient ID
          </label>
          <input
            type="number"
            value={patient}
            onChange={(e) => setpatient(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Billing;
