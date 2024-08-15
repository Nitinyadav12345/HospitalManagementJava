import React, { useEffect, useState } from "react";
import { getAdmitedPatients } from "../../service/receptionist";
import { config2 } from "../../config";

function Discharge() {
  const [data, setData] = useState([]);
  const [imageUrls, setImageUrls] = useState({});

  useEffect(() => {
    const getPatients = async () => {
      try {
        const result = await getAdmitedPatients();
        const patients = result.data.data || [];

        const urls = {};
        for (let patient of patients) {
          if (patient.user && patient.user.userImage) {
            const byteCharacters = atob(patient.user.userImage);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: "image/jpeg" });
            const url = URL.createObjectURL(blob);
            urls[patient.id] = url;
          }
        }

        setData(patients);
        setImageUrls(urls);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    getPatients();
  }, []);

  useEffect(() => {
    return () => {
      Object.values(imageUrls).forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imageUrls]);

  return (
    <div>
      <div className="content">
        <h1 className="text-3xl font-bold mb-4">Discharge Patient</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  ID
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Photo
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Admission Date
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Bed No
                </th>

                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Diagnosis
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 ? (
                data.map((patient) => (
                  <tr key={patient.id}>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {patient.id || "N/A"}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {patient.user.name || "N/A"}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={
                              imageUrls[patient.id] ||
                              "https://img.daisyui.com/images/profile/demo/2@94.webp"
                            }
                            alt="Patient Avatar"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {patient.doa || "N/A"}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {patient.bedno !== null ? patient.bedno : "N/A"}
                    </td>

                    <td className="py-2 px-4 border-b border-gray-200">
                      {patient.disease || "No diagnosis"}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      <a
                        href={`${config2.url}/api/payments/execelReport/${patient.id}`}
                      >
                        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
                          Generate Bill
                        </button>
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-4 text-center text-gray-500">
                    No patients found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Discharge;
