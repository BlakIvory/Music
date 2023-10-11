import React, { memo } from "react";
import moment from "moment";
import "moment/locale/vi";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions/index";

const SongItem = ({ thumbnail, title, artists, sid, style, sm, luotnghe }) => {
  // console.log("sid :  " + sid )
  const dispatch = useDispatch();
  

  
  return (
    <div
      onClick={() => {
        dispatch(actions.setCurSingId(sid));
        dispatch(actions.play(true));
        // dispatch(actions.setRecentSongs({thumbnail, title, artists, sid}))
      }}
      className={`w-full flex p-[10px] gap-[10px] justify-between items-center rounded-md cursor-pointer ${
        style || "text-black"
      }`}
    >
      <div className="flex gap-4">
        {/* <span className=""> </span> */}

        <img
          src={thumbnail}
          alt="thumnail"
          className={`  object-cover rounded-md ${
            sm ? "w-[50px] h-[50px]" : " w-[80px] h-[80px]"
          }`}
        ></img>

        <div className="flex flex-col">
          <span className="text-sm font-semibold">{title}</span>
          {/* {SongData?.album?.title.lenght > 20
            ? `${SongData?.album?.title?.slice(0, 20)}...`
            : SongData?.album?.title} */}
          {/* {console.log(artists)} */}
          <span className="text-sc opacity-70">{artists}</span>
          {luotnghe ? (
            <span className="text-sc opacity-70">lượt nghe :{luotnghe}</span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(SongItem);
