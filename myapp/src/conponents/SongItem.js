import React, { memo } from "react";
import moment from "moment";
import "moment/locale/vi";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions/index";

const SongItem = ({
  thumbnail,
  title,
  artists,
  sid,
  releaseDay,
  order,
  percent,
  style,
  sm,
}) => {
  const dispatch = useDispatch();
  return (
      <div
          onClick={() => {
              dispatch(actions.setCurSingId);
              dispatch(actions.play(true));
          }}
      className={`w-full flex p-[10px] gap-[10px] justify-between items-center rounded-md cursor-pointer ${
        style || "text-black hover:bg-main-100"
      }`}
    >
      <div className="flex gap-4">
        
          <span
            className=""
              
          > </span>
      
        <img
          src={thumbnail}
          alt="thumnail"
          className={`sm ? 'w-[40px] h-[40px]:'w-[60px] h-[60px] object-cover rounded-md`}
        ></img>
        <div className="flex flex-col">
                  <span className="text-sm font-semibold">{title}</span>
                  {/* {console.log(artists)} */}
          <span className="text-sc opacity-70">{artists}</span>
      
        </div>
      </div>

    </div>
  );
};

export default memo(SongItem);
