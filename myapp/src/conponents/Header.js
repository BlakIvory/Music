import React from "react";
import icons from "../ultis/icons";
import { Search } from "./";

const {AiOutlineArrowLeft,AiOutlineArrowRight,CgProfile } = icons

const Header = () => {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex gap-4 w-full items-center">
          {/* <div className=" flex gap-6">
            <span><AiOutlineArrowLeft size={24}/></span>
            <span><AiOutlineArrowRight size={24}/></span>
          </div> */}
          <div className="w-1/2">
            <Search />
          </div>
      </div>
      <div>
      <CgProfile  size={26} />
      </div>
    </div>
  );
};

export default Header;
