import React,{useState} from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import {SongItem} from "./"
import * as apis from "../apis";
const SidebarRight = () => {

  const [isRecent, setIsRecent] = useState(true)
  const { curSongData } = useSelector(state => state.music)
  console.log(curSongData)
 
  
  return (
    <div className=" bg-main-200 w-full h-full flex flex-col text-xs ">
      <div className="h-[70px]  py-[14px] px-2 flex items-center gap-8 rounded-sm justify-between">
        <div className="flex flex-auto gap-1 justify-center  bg-main-400 rounded-l-full rounded-r-full py-[6px] px-[6px] cursor-pointer">
          <span
            onClick={() => setIsRecent((prev) => !prev)}
            className={`py-[5px] ${
              !isRecent && "bg-main-500"
            } flex-1  flex justify-center items-center rounded-l-full rounded-r-full`}
          >
            Danh sách phát
          </span>
          <span
            onClick={() => setIsRecent((prev) => !prev)}
            className={`py-[5px] ${
              isRecent && "bg-main-500"
            } flex-1  flex justify-center items-center rounded-l-full rounded-r-full`}
          >
            Nghe gần đây
          </span>
        </div>
      </div>
      
      <div className="w-full flex-col flex">
        <SongItem
          thumbnail={curSongData?.thumbnail}
          title={curSongData?.title}
          artists={curSongData?.artists[0].alias}
          sid={curSongData?.sid}
          sm
        />
      </div>
    </div>
  );
};

export default SidebarRight;
