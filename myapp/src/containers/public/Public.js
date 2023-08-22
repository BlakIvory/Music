import React from "react";
import { Outlet } from "react-router-dom";
import SidebarLeft from "../../conponents/SidebarLeft";
import SidebarRight from "../../conponents/SidebarRight";
import { Player } from "../../conponents";

const Public = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-main-300">
      <div className="w-full h-full flex flex-auto">
        <div className="w-[240px] border border-blue-500">
          <SidebarLeft></SidebarLeft>
        </div>
        <div className="flex-auto border border-red-500">
          <Outlet></Outlet>
        </div>
        <div className="w-[329px] flex-non border border-green-500">
          <SidebarRight></SidebarRight>
        </div>
      </div>
      <div className="flex-none h-[90px]">
        <Player/>
      </div>
    </div>
  );
};
export default Public;
