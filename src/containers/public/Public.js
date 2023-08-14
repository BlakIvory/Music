import React from "react";
import { Outlet } from "react-router-dom";
import SidebarLeft from "../../conponents/SidebarLeft";
import SidebarRight from "../../conponents/SidebarRight";


const Public = () => {
    return (
        <div className="w-full flex overflow-y-auto">
            <div className="w-[240px] border border-blue-500">
                <SidebarLeft></SidebarLeft>
            </div>
            <div className="flex-auto border border-red-500">
                <Outlet></Outlet> 
            </div>
            <div  className="w-{329px} flex-non border boder-green-500">
                <SidebarRight></SidebarRight>
            </div>
           
        </div>
       
    )
}
export default Public