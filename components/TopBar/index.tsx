import Image from "next/image";
import React from "react";

const TopBar = () => {
  return (
    <div className="flex px-2 py-0.5 bg-white h-18">
      <div className="flex p-3 left ">
        <Image src="/Logos/person.png" alt="person" width={40} height={40} />
        <span className="block p-2 font-bold ">Hakan Karaahmetoğlu</span>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default TopBar;


