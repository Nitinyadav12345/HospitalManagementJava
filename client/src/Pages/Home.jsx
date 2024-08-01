import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import Hero from "../Components/Hero";

const Home = () => {
  const images = [
    {image:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",name:"Nitin Yadav",specialist:"NeuroSurgeon"},
    {image:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400",name:"Nitin Yadav",specialist:"NeuroSurgeon"},
    {image:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",name:"Nitin Yadav",specialist:"NeuroSurgeon"},
    {image:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400",name:"Nitin Yadav",specialist:"NeuroSurgeon"},
    {image:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",name:"Nitin Yadav",specialist:"NeuroSurgeon"},
    {image:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400",name:"Nitin Yadav",specialist:"NeuroSurgeon"},
    {image:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",name:"Nitin Yadav",specialist:"NeuroSurgeon"},
    {image:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400",name:"Nitin Yadav",specialist:"NeuroSurgeon"},
    {image:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",name:"Nitin Yadav",specialist:"NeuroSurgeon"},
    {image:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400",name:"Nitin Yadav",specialist:"NeuroSurgeon"}
  ];

  return (
    <div>
      <Header />
      <Navbar />
      <div className="mx-10">
      <Hero/>
      </div>
      <div className="mt-10 ">
        <center>
          <span className="font-bold text-4xl">Top Doctor's</span>
        </center>
        <center>
        <div className="grid grid-cols-5 space-y-3  mt-4">
        
        {
          images.map((obj)=>{
            return <Profile image={obj.image} name={obj.name} desc={obj.specialist}/>
          })
        }
        </div>
        </center>
       
      </div>
      
    </div>
  );
};

export default Home;
