import React from "react";
//components
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

const index = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <div>
        <TopBar />
        </div>
      </div>
    </div>
  );
};

export default index;
