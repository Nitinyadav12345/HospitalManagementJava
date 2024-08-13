import React from 'react';

const Hero = () => {
  return (
    <div className="relative">
      <div className="carousel w-full h-[300px] md:h-[400px]">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://cdn.pixabay.com/photo/2015/05/15/05/31/night-view-767852_960_720.jpg"
            className="w-full h-half object-cover"
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
            src="https://cdn.pixabay.com/photo/2020/04/16/15/39/medical-5051148_960_720.jpg"
            className="w-full h-full object-cover"
            alt="Carousel Item 3"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://cdn.pixabay.com/photo/2019/04/03/03/06/medical-equipment-4099429_960_720.jpg"
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
