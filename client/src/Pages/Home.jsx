import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import Hero from "../Components/Hero";
import { employeelist, employeeRegistration } from "../service/admin";

const Home = () => {
  const images = [
    {
      image:
        "https://png.pngtree.com/png-clipart/20240701/original/pngtree-indian-doctor-woman-smiling-at-camera-png-image_15456626.png",
      name: "Alice Spector",
      specialist: "Neurologist",
    },
    {
      image:
        "https://png.pngtree.com/png-clipart/20240701/original/pngtree-indian-doctor-woman-smiling-at-camera-png-image_15456626.png",
      name: "Grace Lee",
      specialist: "Cardiologist",
    },
    {
      image:
        "https://png.pngtree.com/png-clipart/20231001/original/pngtree-male-physician-doctor-png-image_13218894.png",
      name: "Jack Anderson",
      specialist: "Dermatologist",
    },
    {
      image:
        "https://png.pngtree.com/png-clipart/20231001/original/pngtree-male-physician-doctor-png-image_13218894.png",
      name: "Katherine Clark",
      specialist: "Pediatrician",
    },
    {
      image:
        "https://png.pngtree.com/png-clipart/20231001/original/pngtree-male-physician-doctor-png-image_13218894.png",
      name: "Liam Lewis",
      specialist: "Psychiatrist",
    },
    {
      image:
        "https://png.pngtree.com/png-clipart/20231001/original/pngtree-male-physician-doctor-png-image_13218894.png",
      name: "Noah King",
      specialist: "Radiologist",
    },
    {
      image:
        "https://png.pngtree.com/png-clipart/20240701/original/pngtree-indian-doctor-woman-smiling-at-camera-png-image_15456626.png",
      name: "Rachel Hall",
      specialist: "Sports Medicine Specialist",
    },
    {
      image:
        "https://png.pngtree.com/png-clipart/20240701/original/pngtree-indian-doctor-woman-smiling-at-camera-png-image_15456626.png",
      name: "Sia Nelson",
      specialist: "General Surgeon",
    },
    {
      image:
        "https://png.pngtree.com/png-clipart/20231001/original/pngtree-male-physician-doctor-png-image_13218894.png",
      name: "Wendy Adams",
      specialist: "Family Physician",
    },
    {
      image:
        "https://png.pngtree.com/png-clipart/20231001/original/pngtree-male-physician-doctor-png-image_13218894.png",
      name: "Aaron Young",
      specialist: "Plastic Surgeon",
    },
  ];

  const [doctors, setDoctors] = useState([]);
  const [imageUrls, setImageUrls] = useState({});
  useEffect(() => {
    const employees = async () => {
      try {
        const data = await employeelist();
        if (data.data.status === "Success") {
          const data1 = data.data.data;
          const filtered = data1.filter((doc) => doc.user?.role === "DOCTOR");
          setDoctors(filtered);
          console.log(doctors);
        }
      } catch (error) {
        console.log(error);
      }
      const data = await employeelist();
    };
    employees();
  }, []);

  useEffect(() => {
    const urls = {};
    doctors.forEach((item) => {
      if (item.user && item.user.userImage) {
        const byteCharacters = atob(item.user.userImage);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: "image/jpeg" });
        const url = URL.createObjectURL(blob);
        urls[item.id] = url;
      }
    });
    setImageUrls(urls);
    return () => {
      Object.values(urls).forEach((url) => URL.revokeObjectURL(url));
    };
  }, [doctors]);

  return (
    <div>
      <Header />
      <Navbar />
      <div className="mx-10">
        <Hero />
      </div>
      <div className="mt-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="font-bold text-2xl md:text-4xl">Top Doctors</span>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {doctors.slice(0, 10).map((obj, index) => (
              <Profile
                key={index}
                image={imageUrls[obj.id]}
                name={obj.user?.name}
                desc={obj.charges}
              />
            ))}
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default Home;
