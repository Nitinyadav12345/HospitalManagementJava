import axios from "axios";
import React from "react";
import config, { config2 } from "../config";
const MedicineCard = ({
  id,
  name,
  price,
  quantity,
  expiryDate,
  manufacturer,
  imagePath,
}) => {
  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const response = await axios.get(
          `${config2.url}/chemist/medicine/${id}/photo`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            responseType: "blob", // Ensure we get the image as a Blob
          }
        );

        const url = URL.createObjectURL(response.data);
        setPhotoUrl(url);
      } catch (error) {
        console.error("Failed to load the image", error);
      }
    };

    fetchPhoto();
  }, [id]);
  return (
    <div className="card bg-base-100 w-64 shadow-xl relative">
      <figure>
        <img src=" "  alt={name} />
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
        onClick={() => console.log("Cancel button clicked")}
      >
        X
      </button>
    </div>
  );
};

export default MedicineCard;
