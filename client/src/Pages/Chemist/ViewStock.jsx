import React, { useEffect, useState } from "react";
import { getAllMedicine, deleteMedicine } from "../../service/chemist";
import { toast } from "react-toastify";
import MedicineCard from "../../Components/MedicineCard";
import axios from "axios";

const ViewStock = () => {
  const [medicine, setMedicine] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    const fetchMedicine = async () => {
      try {
        const res = await getAllMedicine();
        setMedicine(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to load the medicines data");
      }
    };

    fetchMedicine();
  }, []);

  // Filtered medicines based on search query
  const filteredMedicines = medicine.filter(
    (med) =>
      med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.manufacturer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const deleteMed = async (id) => {
    try {
      const result = await deleteMedicine(id);
      console.log(id);
      console.log(result);
      if (result.status === "200") {
        setMedicine(medicine.filter((med) => med.id !== id));
        toast.success(result.data["message"]);
      }
    } catch (error) {
      toast.error("Failed to delete the medicine");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <center>
        <span className="text-2xl font-bold">MEDICAL STOCK</span>
      </center>

      {/* Search Form */}
      <form
        className="max-w-md mx-auto mt-5 sticky top-0 z-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search by name or manufacturer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </form>

      {/* Medicines Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
        {filteredMedicines.length > 0 ? (
          filteredMedicines.map((med) => (
            <MedicineCard
              key={med.id}
              id={med.id}
              name={med.name}
              price={med.price}
              quantity={med.quantity}
              expiryDate={med.expiryDate}
              manufacturer={med.manufacturer}
              imagePath={med.photo}
              deleteHandler={deleteMed}
            />
          ))
        ) : (
          <p className="text-2xl font-bold text-center">No medicines found.</p>
        )}
      </div>
    </div>
  );
};

export default ViewStock;
