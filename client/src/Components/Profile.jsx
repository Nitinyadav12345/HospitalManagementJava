import React from "react";

const Profile = ({ image, name, desc }) => {
  return (
    <div className="card bg-base-100 shadow-xl mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <figure className="flex justify-center pt-4">
        <div className="avatar">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden">
            <img src={image} alt={name} className="object-cover w-full h-full" />
          </div>
        </div>
      </figure>
      <div className="card-body text-center p-4">
        <h2 className="card-title text-lg sm:text-l md:text-2xl lg:text-3xl">
          {name}
          <div className="text-sm:text-xs md:text-base px-2 py-1 rounded">
  {desc}
</div>

        </h2>
      </div>
    </div>
  );
};

export default Profile;
