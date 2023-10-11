import React from "react";
import { useSelector } from "react-redux";

const SearchAll = () => {
  const { searchData } = useSelector((state) => state.music);
  console.log(searchData);

  return (
    <div className="ml-10 w-full flex flex-col text-sm ">
      <div>
        <h3 className="text-lg font-bold">Nổi bật</h3>
        <div>{searchData?.top &&
          <div>
            <img src={searchData?.top.thumbnail} alt="avatar" className="w-[84px] h-[84px] object-cover rounded-full" ></img>
          </div>
        }
        </div>
      </div>
    </div>
  );
};

export default SearchAll;
