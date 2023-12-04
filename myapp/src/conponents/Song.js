import React, { memo, useState, useEffect } from "react";

import moment from "moment";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";
import icons from "../ultis/icons";
import * as apis  from "../apis"

const { LuListEnd, AiFillHeart, AiOutlineHeart } = icons;

const Song = ({ SongData }) => {
  const dispatch = useDispatch();
  const [isFavorite, SetIsFavorite] = useState(false);



  const handleClickAddFavorite = () => {
     const auth = JSON.parse(localStorage.getItem("user"));
     const user = auth[0].email;
     const SongFavorite = {
       encodeId: SongData.encodeId,
       title: SongData.title,
       artistsNames: SongData.artistsNames,
       duration: SongData.duration,
       thumbnailM: SongData.thumbnailM,
       album: SongData.album,
     };
     const data = {
       user: user,
       song: SongFavorite,
     };
     console.log(data);
     const result = apis.addFavorite(data);
     SetIsFavorite(true);
  };
  // const handleClickAddSongToFavorite = () => {
  //   const auth = JSON.parse(localStorage.getItem("user"));
  //   const user = auth[0].email;
  //   const Song = {
  //     encodeId: SongData.encodeId,
  //     title: SongData.title,
  //     artistsNames: SongData.artistsNames,
  //     duration: SongData.duration,
  //     thumbnailM: SongData.thumbnailM,
  //     album: SongData.album,
  //   };
  //   const data = {
  //     user: user,
  //     song: Song,
  //   };
  
  // };
  return (
    <div
      className="flex justify-between w-full items-center p-[10px] border-t border-gray-400  hover:bg-gray-200 cursor-pointer"
      onClick={() => {
        dispatch(actions.setCurSingId(SongData?.encodeId));
        dispatch(actions.play(true));
        dispatch(actions.playAlbum(true));
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
            {SongData?.title?.lenght > 20
              ? `${SongData?.title?.slice(0, 20)}...`
              : SongData?.title}
            {/* {SongData.title} */}
          </span>
          <span className=" ">{SongData?.artistsNames}</span>
        </span>
      </div>
      <div className="pl-10 flex-1 flex-start justify-center items-center">
        {SongData?.album?.title?.lenght > 20
          ? `${SongData?.album?.title?.slice(0, 20)}...`
          : SongData?.album?.title}
      </div>
      <div className=" flex-1 flex justify-end ">
        {moment.utc(SongData?.duration * 1000).format("mm:ss")}
      </div>
      <div className=" flex-1 flex justify-end ">
        {isFavorite ? (
          <span>
            <AiFillHeart
              size={16}
              style={{ color: "red" }}
              onClick={() => {
                SetIsFavorite((prev) => !prev);
              }}
            />
          </span>
        ) : (
          <span>
            <AiOutlineHeart
              size={16}
              style={{ color: "red" }}
              onClick={handleClickAddFavorite}
            />
          </span>
        )}
        {/* <LuListEnd size={16} onClick={handleClickAddSongToFavorite} />
        <select onClick={getListPlaylist}>
          {}
        </select> */}
      </div>
    </div>
  );
};

export default memo(Song);
