import React from "react";
import moment from "moment"
import { Song } from "./";
import { UseSelector, useSelector } from "react-redux";

const Lists = ({ totalDuration }) => {
  // console.log({ songs, totalDuration });
  const { songs } = useSelector(state => state.music)
  // console.log(songs)
  return (
    <div className=" w-full flex flex-col text-xs text-gray-600">
      <div className=" flex justify-between items-center p-[10px] font-semibold">
        <span className="">BÀI HÁT</span>
        <span className="ml-[150px]">ALBUM</span>
        <span className="">THỜI LƯỢNG </span>
      </div>
      <div className="flex flex-col hover={value.toString()} ">
        {songs?.map((item) => (
          <Song key={item.encodeId} SongData={item} />
        ))}
      </div>
      <span className="ml-[20px] text-lg ">
        <span>{`${songs?.length} bài hát .`} </span>
        <span>Tổng Thời Lượng : {moment.utc(totalDuration*1000).format('HH:mm:ss')}</span>
      </span>
    </div>
  );
};

export default Lists;
