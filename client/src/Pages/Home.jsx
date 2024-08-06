import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import Hero from "../Components/Hero";

const Home = () => {
  const images = [
    {image:"https://png.pngtree.com/png-clipart/20231001/original/pngtree-male-physician-doctor-png-image_13218894.png",name:"Nitin Yadav",specialist:"NeuroSurgeon"},
    {image:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400",name:"Nitin Yadav",specialist:"NeuroSurgeon"},
    {image:"https://png.pngtree.com/png-clipart/20231001/original/pngtree-male-physician-doctor-png-image_13218894.png",name:"Nitin Yadav",specialist:"NeuroSurgeon"},
    {image:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400",name:"Nitin Yadav",specialist:"NeuroSurgeon"},
    {image:"https://png.pngtree.com/png-clipart/20231001/original/pngtree-male-physician-doctor-png-image_13218894.png",name:"Nitin Yadav",specialist:"NeuroSurgeon"},
    {image:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400",name:"Nitin Yadav",specialist:"NeuroSurgeon"},
    {image:"https://png.pngtree.com/png-clipart/20231001/original/pngtree-male-physician-doctor-png-image_13218894.png",name:"Nitin Yadav",specialist:"NeuroSurgeon"},
    {image:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400",name:"Nitin Yadav",specialist:"NeuroSurgeon"},
    {image:"https://png.pngtree.com/png-clipart/20231001/original/pngtree-male-physician-doctor-png-image_13218894.png",name:"Nitin Yadav",specialist:"NeuroSurgeon"},
    {image:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400",name:"Nitin Yadav",specialist:"NeuroSurgeon"}
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
