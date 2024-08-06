import React from 'react';

const Hero = () => {
  return (
    <div className="relative">
      <div className="carousel w-full h-[300px] md:h-[400px]">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/3683077/pexels-photo-3683077.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full h-full object-cover"
            alt="Carousel Item 1"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="../../Resources/img1.jpg"
            className="w-full h-full object-cover"
            alt="Carousel Item 2"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full h-full object-cover"
            alt="Carousel Item 3"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full h-full object-cover"
            alt="Carousel Item 4"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center py-2 gap-2 bg-opacity-50 bg-black">
        <a href="#item1" className="btn btn-xs md:btn-sm">1</a>
        <a href="#item2" className="btn btn-xs md:btn-sm">2</a>
        <a href="#item3" className="btn btn-xs md:btn-sm">3</a>
        <a href="#item4" className="btn btn-xs md:btn-sm">4</a>
      </div>
    </div>
  );
};

export default Hero;
