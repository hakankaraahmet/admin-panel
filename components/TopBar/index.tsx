import Image from "next/image";
import React from "react";

const TopBar = ({setIsOpenSideBar, isOpenSideBar} : {setIsOpenSideBar: any, isOpenSideBar: boolean}) => {
  return (
    <div className="flex px-2 py-0.5 bg-white h-18 z-10">
      <div className="justify-start w-1/2 p-3 md:flex left">
        <span className="hidden md:block">
        <Image src="/Logos/person.png" alt="person" width={40} height={40} />
        </span>
        <span className="hidden p-2 font-bold md:block">Hakan Karaahmetoğlu</span>
        <span className={` block p-2 font-bold md:hidden `} onClick={() => setIsOpenSideBar(true)}>
        <Image src="/Logos/hamburger-menu.ico" alt="hamburger" width={40} height={40} />
        </span>
      </div>
      <div className="flex items-center justify-end w-full md:w-1/2 right">
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
        <a className="mx-2 mb-3 text-indigo-500 cursor-pointer">Logout</a>
      </div>
    </div>
  );
};

export default TopBar;
