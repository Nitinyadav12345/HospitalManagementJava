import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="carousel w-full h-[300px] ">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/3683077/pexels-photo-3683077.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full object-cover"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
        
          <img
            src="../../Resources/img1.jpg"
            className="w-full object-cover"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full object-cover"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  )
}

export default Hero
