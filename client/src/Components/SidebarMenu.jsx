import React from "react";
import { Link } from "react-router-dom";
const SidebarMenu = ({ name , path}) => {
  return (
    <>
      <Link
        to={path}
        class="flex items-center px-4 py-2 mt-2 text-pink-100 hover:bg-pink-700"
      >
        {name}
      </Link>
    </>
  );
};

export default SidebarMenu;
