import React, { useState } from "react";
import { insertMedicine } from "../../service/chemist";
import { toast } from "react-toastify";

const MedicineForm = () => {
  const [medicine, setMedicine] = useState({
    name: "",
    price: "",
    quantity: "",
    expiryDate: "",
    manufacturer: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicine({
      ...medicine,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setMedicine({
      ...medicine,
      photo: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(medicine);
    const formData = new FormData();
    formData.append("name", medicine.name);
    formData.append("price", medicine.price);
    formData.append("quantity", medicine.quantity);
    formData.append("expiryDate", medicine.expiryDate);
    formData.append("manufacturer", medicine.manufacturer);
    if (medicine.photo) {
      formData.append("photo", medicine.photo);
    }
    try {
      const result = await insertMedicine(formData);
      console.log(result.data.data.status);

      if (result.status === 200)
        toast.success("Medicine Inserted Successfully");
      setMedicine({
        ...medicine,
        name: "",
        price: "",
        quantity: "",
        expiryDate: "",
        manufacturer: "",
        photo: null,
      });
    } catch (error) {
      toast.error("Error in inserting medicine:");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <h2 className="font-semibold text-2xl mb-6 text-center">
          Add New Medicine
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={medicine.name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={medicine.price}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={medicine.quantity}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Expiry Date
            </label>
            <input
              type="date"
              name="expiryDate"
              value={medicine.expiryDate}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Manufacturer
            </label>
            <input
              type="text"
              name="manufacturer"
              value={medicine.manufacturer}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Photo
            </label>
            <input
              type="file"
              name="photo"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MedicineForm;
