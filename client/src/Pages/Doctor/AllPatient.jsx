import React, { useEffect, useState } from "react";
import { addPress, getAllPatient } from "../../service/doctor";
import { toast } from "react-toastify";

//after tommorow i have to show only those patient who are appointed by this doctor and give those online prescription


function AllPatient() {
  const [data, setData] = useState([]);
  const [imageUrls, setImageUrls] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [showTextArea, setShowTextArea] = useState(null);
  const [prescription, setPrescription] = useState("");
  const itemsPerPage = 5;

  useEffect(() => {
    const getPatients = async () => {
      try {
        const result = await getAllPatient();
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

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  const handleButtonClick = (patientId) => {
    setShowTextArea(patientId);
  };

  const handleTextAreaChange = (event) => {
    setPrescription(event.target.value);
  };

  const handleSavePrescription = async (id) => {
    console.log(
      `Saving prescription for patient ${showTextArea}:`,
      prescription
    );
    try {
      const result = await addPress({ id, prescription });
      if (result.data.status === "Success") {
        toast.success(result.data.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("failed to add the Prescription");
    }

    setShowTextArea(null);
  };

  const filteredData = data.filter((patient) =>
    patient.user.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => (
    <button
      key={number}
      onClick={() => setCurrentPage(number)}
      className={`px-4 py-2 mx-1 ${
        currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200"
      }`}
    >
      {number}
    </button>
  ));

  return (
    <div>
      <div className="content">
        <h1 className="text-3xl font-bold mb-4">Patients</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name"
            value={searchInput}
            onChange={handleSearchInput}
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
                  Discharge Date
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Bed No
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Diagnosis
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Add Prescription
                </th>
              </tr>
            </thead>
            <tbody>
              {currentData && currentData.length > 0 ? (
                currentData.map((patient) => (
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
                      {patient.dod || "N/A"}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {patient.bedno !== null ? patient.bedno : "N/A"}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {patient.disease || "No diagnosis"}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      <button
                        onClick={() => handleButtonClick(patient.id)}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                      >
                        Add Prescription
                      </button>
                      {showTextArea === patient.id && (
                        <div className="mt-2">
                          <textarea
                            value={prescription}
                            onChange={handleTextAreaChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            rows="3"
                            placeholder="Enter prescription in comma seprated points"
                          ></textarea>
                          <button
                            onClick={() => handleSavePrescription(patient.id)}
                            className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
                          >
                            Save
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="py-4 text-center text-gray-500">
                    No patients found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-center">{renderPageNumbers}</div>
      </div>
    </div>
  );
}

export default AllPatient;
