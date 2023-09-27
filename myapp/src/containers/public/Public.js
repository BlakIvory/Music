import React from "react";
import { Outlet } from "react-router-dom";
import { Player, SidebarLeft, SidebarRight, Header } from "../../conponents";

const Public = () => {
  return (
    <div className="w-full h-screen relative flex flex-col bg-main-300">
      <div className="w-full h-full flex flex-auto">
        <div className="w-[260px] h-full border border-blue-500">
          <SidebarLeft></SidebarLeft>
        </div>
        <div className="flex-auto border border-red-500 ">
          <div className="h-[70px] px-[59px] flex ic mp-5">
            <Header />
          </div>
          <Outlet></Outlet>
          <div className="h-[500px] w-full"></div>
        </div>
        <div className="w-[250px] flex-non border border-green-500">
          <SidebarRight></SidebarRight>
        </div>
      </div>
      <div className=" fixed bottom-0 left-0 right-0 h-[100px]">
        <Player />
      </div>
    </div>
  );
};
export default Public;
