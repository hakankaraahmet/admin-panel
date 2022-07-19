import React from "react";


const NavBar = () => {
  return (
    <div className="w-1/3 bg-indigo-900">
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
      <div className="flex p-5">
        <div>
      
        </div>
        <div>
            Dashboard
        </div>
      </div>
    </div>
  );
};

export default NavBar;
