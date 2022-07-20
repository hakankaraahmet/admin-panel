import Image from "next/image";
import React from "react";

const TopBar = () => {
  return (
    <div className="flex px-2 py-0.5 bg-white h-18">
      <div className="justify-start hidden w-1/2 p-3 md:flex left">
        <Image src="/Logos/person.png" alt="person" width={40} height={40} />
        <span className="block p-2 font-bold ">Hakan Karaahmetoğlu</span>
      </div>
      <div className="flex justify-end w-full md:w-1/2 right">
        <div className="p-1 mx-2 my-3">
          <Image
            src="/Logos/search.png"
            alt="search"
            width={28}
            height={28}
            className="bg-gray-100 rounded-full"
          />
        </div>
        <div className="p-1 mx-2 my-3">
          <Image
            src="/Logos/message.png"
            alt="message"
            width={28}
            height={28}
            className="bg-gray-100 rounded-full"
          />
        </div>
        <div className="p-1 mx-2 my-3">
          <Image
            src="/Logos/warning.png"
            alt="warning"
            width={28}
            height={28}
            className="bg-gray-100 rounded-full"
          />
        </div>
        <a className="mx-2 mt-4 text-indigo-500 cursor-pointer">Logout</a>
      </div>
    </div>
  );
};

export default TopBar;
