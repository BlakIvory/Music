import React, { memo } from "react";
import icons from "../ultis/icons";
import moment from "moment";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";



const Song = ({ SongData }) => {
  const dispatch = useDispatch();
  

  return (
    <div
      className="flex justify-between w-full items-center p-[10px] border-t border-gray-400  hover:bg-gray-200 cursor-pointer"
      onClick={() => {
        dispatch(actions.setCurSingId(SongData?.encodeId));
        dispatch(actions.play(true));
        dispatch(actions.playAlbum(true));
        // console.log(SongData);
        // var Recent = JSON.parse(localStorage.getItem("Recent")) || [];
       
        //   Recent.unshift(SongData); // Thêm giá trị vào đầu mảng
        // localStorage.setItem("Recent", JSON.stringify(Recent));
        // localStorage.removeItem("Recent");
        
       dispatch(
         actions.setRecent({
           thumbnail: SongData?.thumbnail,
           title: SongData?.title,
           artists: SongData?.artistsNames,
           sid: SongData?.encodeId,
         })
       );
      }}
    >
      <div className=" flex items-center gap-3 flex-1 w-[250px] ">

        <img
          src={SongData?.thumbnailM}
          alt="thumnailM"
          className=" w-10 h-10 object-cover rounded-md"
        ></img>
        <span className=" flex flex-col w-[250px]">
          <span className="text-sm font-semibold ">
            {SongData?.title.lenght > 20
              ? `${SongData?.title?.slice(0, 20)}...`
              : SongData?.title}
          </span>
          <span className=" ">{SongData?.artistsNames}</span>
        </span>
      </div>
      <div className="pl-10 flex-1 flex-start justify-center items-center">
        {SongData?.album?.title.lenght > 20
          ? `${SongData?.album?.title?.slice(0, 20)}...`
          : SongData?.album?.title}
      </div>
      <div className=" flex-1 flex justify-end ">
        {moment.utc(SongData?.duration * 1000).format("mm:ss")}
      </div>
    </div>
  );
};

export default memo(Song);
