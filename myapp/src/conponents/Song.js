import React, { memo } from "react";
import icons from "../ultis/icons";
import moment from "moment";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";

const { BsMusicNoteBeamed } = icons;

const Song = ({ SongData }) => {
  const dispatch = useDispatch();

  // console.log(SongData);
  return (
    <div
      className="flex justify-between w-full items-center p-[10px] border-t border-gray-400  hover:bg-gray-200 cursor-pointer"
      onClick={() => {
        dispatch(actions.setCurSingId(SongData?.encodeId))
        dispatch(actions.play(true))
      }}
    >
      <div className=" flex items-center gap-3 flex-1 w-[150px] ">
        <span>
          <BsMusicNoteBeamed />
        </span>
        <img
          src={SongData?.thumbnailM}
          alt="thumnailM"
          className=" w-10 h-10 object-cover rounded-md"
        ></img>
        <span className=" flex flex-col">
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
      <div className=" flex-1 flex justify-end">
        {moment.utc(SongData?.duration * 1000).format("mm:ss")}
      </div>
    </div>
  );
};

export default memo(Song);
