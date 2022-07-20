import { NextPage } from "next";
import { useState } from "react";

//components
import SideBar from "../components/SideBar";
import SiteBanner from "../components/SiteBanner";
import TopBar from "../components/TopBar";

const Home: NextPage = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(true);
  return (
    <div className="flex ">
        <SideBar
          isOpenSideBar={isOpenSideBar}
          setIsOpenSideBar={setIsOpenSideBar}
          />
      <div className="flex-1">
        <TopBar
          setIsOpenSideBar={setIsOpenSideBar}
          isOpenSideBar={isOpenSideBar}
        />
        <SiteBanner />
          </div>
    </div>
  );
};

export default Home;
