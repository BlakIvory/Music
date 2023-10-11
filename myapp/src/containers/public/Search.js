import React from "react";
import { Outlet } from "react-router-dom";
const Search = () => {
  return (
    <div>
      <div className="w-full flex flex-col text-sm ">
        <div className=" text-sm pl-10 flex h-[50px] mb-7 items-center border-b pb-1 border-gray-400">
          <span className="text-[24px] font-bold pr-6 border-r border-gray-400">
            KẾT QUẢ TÌM KIẾM
          </span>
          <div className="flex items-center">
            <span class="px-4 hover:text-[#0E8080] cursor-pointer"> Tất cả</span>
            <span class="px-4 hover:text-[#0E8080] cursor-pointer"> Bài hát</span>
            <span class="px-4 hover:text-[#0E8080] cursor-pointer"> Nghệ sĩ</span>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Search;
