import React,{useState} from "react";
import { Outlet } from "react-router-dom";
import { Player, SidebarLeft, SidebarRight, Header } from "../../conponents";

import { Scrollbars } from "react-custom-scrollbars";
const Public = () => {
  const [isShowRightSidebar, setIsShowRightSidebar] = useState(true)
  return (
    <div className="w-full h-screen relative flex flex-col bg-main-300 ">
      <div className="w-full h-full flex flex-auto">
        <div className="w-[200px] h-full ">
          <SidebarLeft></SidebarLeft>
        </div>
        <div className="flex-auto overflow-hidden">
          <div className="h-[70px] px-[60px] flex ic mp-5 mr-[5px] ">
            <Header />
          </div>
          <Scrollbars
            autoHide
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Outlet></Outlet>
          </Scrollbars>
          {/* <Outlet  ></Outlet> */}
        </div>

        {isShowRightSidebar && (
          <div className="w-[250px] flex-non  bg-main-300">
            <SidebarRight />
          </div>
        )}
        
      </div>

      <div className=" fixed bottom-0 left-0 right-0 h-[100px] ">
        <Player setIsShowRightSidebar={setIsShowRightSidebar} />
      </div>
      
    </div>
  );
};
export default Public;
