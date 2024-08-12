import axios from "axios";
import React, { useEffect, useState } from "react";
import config, { config2 } from "../config";
import { toast } from "react-toastify";
const MedicineCard = ({
  id,
  name,
  price,
  quantity,
  expiryDate,
  manufacturer,
  imagePath,
  deleteHandler,
}) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    // Function to fetch image URL
    const fetchImage = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const response = await axios.get(
          `${config2.url}/chemist/medicine/photo/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            responseType: "blob", // Ensures that the response is treated as a binary large object (Blob)
          }
        );
        // Create a URL for the image blob
        const imageUrl = URL.createObjectURL(response.data);
        setImageSrc(imageUrl);
      } catch (error) {
        console.error("Error fetching the image", error);
      }
    };

    fetchImage();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteHandler({ id });
      window.location.reload();
      toast.success("Medicine deleted successfully");
    } catch (error) {
      toast.error("Failed to delete the item:");
    }
  };
  return (
    <div className="card bg-base-100 w-64 shadow-xl relative">
      <figure>
        <img src={imageSrc} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{name}</h2>
        <div className="badge badge-secondary">
          <span className="font-medium">ex date:</span> {expiryDate}
        </div>
        <p>
          <span className="font-semibold">manufacturer:</span>
          {manufacturer}
        </p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">
            <span className="font-medium">price:</span>
            {price}
          </div>
          <div className="badge badge-outline">
            <span className="font-medium">qty:</span>
            {quantity}
          </div>
        </div>
      </div>

      {/* Cancel Button */}
      <button
        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-[50%]"
        onClick={handleDelete}
      >
        X
      </button>
    </div>
  );
};

export default MedicineCard;
