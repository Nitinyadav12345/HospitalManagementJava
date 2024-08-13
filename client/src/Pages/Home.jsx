import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import Hero from "../Components/Hero";

const Home = () => {
  const images = [
    {image:"https://png.pngtree.com/png-clipart/20240701/original/pngtree-indian-doctor-woman-smiling-at-camera-png-image_15456626.png",name:"Alice Smith",specialist:"Neurologist"},
    {image:"https://png.pngtree.com/png-clipart/20240701/original/pngtree-indian-doctor-woman-smiling-at-camera-png-image_15456626.png",name:"Grace Lee",specialist:"Cardiologist"},
    {image:"https://png.pngtree.com/png-clipart/20231001/original/pngtree-male-physician-doctor-png-image_13218894.png",name:"Jack Anderson",specialist:"Dermatologist"},
    {image:"https://png.pngtree.com/png-clipart/20231001/original/pngtree-male-physician-doctor-png-image_13218894.png",name:"Katherine Clark",specialist:"Pediatrician"},
    {image:"https://png.pngtree.com/png-clipart/20231001/original/pngtree-male-physician-doctor-png-image_13218894.png",name:"Liam Lewis",specialist:"Psychiatrist"},
    {image:"https://png.pngtree.com/png-clipart/20231001/original/pngtree-male-physician-doctor-png-image_13218894.png",name:"Noah King",specialist:"Radiologist"},
    {image:"https://png.pngtree.com/png-clipart/20240701/original/pngtree-indian-doctor-woman-smiling-at-camera-png-image_15456626.png",name:"Rachel Hall",specialist:"Sports Medicine Specialist"},
    {image:"https://png.pngtree.com/png-clipart/20240701/original/pngtree-indian-doctor-woman-smiling-at-camera-png-image_15456626.png",name:"Sia Nelson",specialist:"General Surgeon"},
    {image:"https://png.pngtree.com/png-clipart/20231001/original/pngtree-male-physician-doctor-png-image_13218894.png",name:"Wendy Adams",specialist:"Family Physician"},
    {image:"https://png.pngtree.com/png-clipart/20231001/original/pngtree-male-physician-doctor-png-image_13218894.png",name:"Aaron Young",specialist:"Plastic Surgeon"}
  ];

  return (
    <div>
      <Header />
      <Navbar />
      <div className="mx-10">
      <Hero/>
      </div>
      <div className="mt-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="font-bold text-2xl md:text-4xl">Top Doctors</span>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {images.map((obj, index) => (
            <Profile
              key={index}
              image={obj.image}
              name={obj.name}
              desc={obj.specialist}
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
