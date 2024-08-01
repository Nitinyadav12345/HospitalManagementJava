import React from "react";

const Profile = ({image,name,desc}) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
  <figure><div className="avatar">
  <div className="w-24 rounded-full">
    <img src={image} />
  </div>
</div></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">{desc}</div>
    </h2>
  </div>
</div>
  );
};

export default Profile;
