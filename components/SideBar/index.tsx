import Image from "next/image";
import React from "react";
import { navbarItems } from "../../Constants/NavbarItems";


const NavBar = () => {
  return (
    <div className="w-40 h-screen bg-indigo-900 md:w-1/3">
      <div className="bg-indigo-800">
        <div className="p-5 text-xl font-bold tracking-wide text-gray-200 uppercase">
          Super Corp
        </div>
      </div>
      <div>
        <div className="p-5 text-xs font-bold tracking-wide text-gray-200 uppercase">
            Pages
        </div>
      </div>
      {navbarItems.map((item,i) => (
      <div className="flex m-5 mt-2 cursor-pointer" key={i}>
        <div>
        <Image src={item.image} alt="logo" width={20} height={20}/>
        </div>
        <div className="mx-3 text-sm text-gray-100">
            {item.title}
        </div>
      </div>
      ))}
    </div>
  );
};

export default NavBar;
