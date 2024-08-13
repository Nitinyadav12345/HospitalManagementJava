import React ,{ useEffect, useState }  from "react";
import SidebarMenu from "../../Components/SidebarMenu";
import axios from "axios";
import { config2 } from "../../config";
import { useNavigate } from "react-router-dom";

const SidebarP = () => {
  const menu = [
    "View Patient",
    "View Appointments",
    "Patient Diagnosis",
    "Add Prescription",
  ];
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const response = await axios.get(`${config2.url}/user/profileImage`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: "arraybuffer",
        });
        const imageBlob = new Blob([response.data], { type: "image/jpeg" }); // Adjust type as necessary
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImageUrl(imageObjectURL);
      } catch (error) {
        console.error("Error fetching the image:", error);
      }
    };

    fetchImage();
  }, []);

  const navigate = useNavigate();
  const logout = ()=>{
    sessionStorage.clear();
    navigate("/")
  }
  return (
    <div class="flex h-screen bg-pink-100">
      <div class="hidden md:flex flex-col w-64 bg-pink-500">
        <div class="flex items-center justify-center h-16 bg-pink-900">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">
              <img
                className=" w-10"
                src="../../Resources/logo.png"
                alt="logo"
              />
              <span className=" font-extrabold text-2xl">HMS</span>
            </a>
          </div>
        </div>
        <div class="flex flex-col flex-1 overflow-y-auto">
          <nav class="flex-1 px-2 py-4 bg-pink-800">
            {menu.map((name) => {
              return <SidebarMenu name={name} />;
            })}
          </nav>
        </div>
      </div>

      <div class="flex flex-col flex-1 overflow-y-auto">
        <div class="flex items-center justify-between md:justify-end  h-16 bg-white border-b border-pink-200">
          <div class="flex items-center px-4 md:hidden">
            <button class="text-pink-500 focus:outline-none focus:text-pink-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div class="flex items-center pr-4 md:items-end">
            {/* this is profile part */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
                // Toggle profile on avatar click
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Avatar"
                    src={imageUrl}
                  />
                </div>
              </div>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="p-4">{/* here render the pages  */}</div>
      </div>
    </div>
  );
};

export default SidebarP;
