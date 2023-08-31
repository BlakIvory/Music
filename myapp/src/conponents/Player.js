import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import * as apis from "../apis";
import icons from "../ultis/icons";


const {
  AiOutlineHeart,
  AiFillHeart,
  BiDotsHorizontalRounded,
  CiRepeat,
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
  CiShuffle,
  FaPlay,
  FaPauseCircle,
} = icons;

const Player = () => {
  const audioElement = new Audio();

  const { curSongId ,isplaying} = useSelector((state) => state.music);
  const [songinfo, setSongInfo] = useState(null);
  // const [isplaying, setIsPlaying] = useState(false);
  const [source, setSource] = useState(null);

  // console.log(curSongId);

  useEffect(() => {
    
    const fetchDetailSong = async () => {
      const [res1, res2] = await Promise.all([
        
        apis.apiGetDetailSong(curSongId),
        apis.apiGetSong(curSongId),
      ]);
      if (res1.data.err === 0) {
        setSongInfo(res1.data.data);
      }
      if (res2.data.err === 0) {
        setSource(res2.data.data[128]);
      }
    };

    fetchDetailSong();
  }, [curSongId]);

  useEffect(() => {
    // audioElement.play()
  }, [curSongId]);

  const handlTogglePlay = () => {
    //  setIsPlaying((prev) => !prev);
  };

  return (
    <div className="bg-main-400 px-4 h-full flex ">
      <div className="w-[30%]   flex items-center flex-auto  gap-4">
        <img
          src={songinfo?.thumbnail}
          alt="thumbail"
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="flex flex-col ">
          <span className="font-semibold text-gray-700 text-[15px]">
            {songinfo?.title}
          </span>
          <span className="text-xs">{songinfo?.artistsNames} </span>
        </div>
        <div className="flex gap-6 pl-2">
          <span>
            <AiFillHeart size={16} />
          </span>
          <span>
            <AiOutlineHeart size={16} />
          </span>
          <span>
            <BiDotsHorizontalRounded size={16} />
          </span>
        </div>
      </div>

      <div className="w-[40%] flex-auto flex flex-col gap-1 justify-center items-center">
        <div className="flex gap-8 justify-center items-center py-2">
          <span
            className="cursor-pointer  hover:text-[#0E8080]"
            title="Lặp lại"
          >
            <CiRepeat size={24} hover />
          </span>
          <span className="cursor-pointer  hover:text-[#0E8080]">
            <TbPlayerTrackPrevFilled size={24} />
          </span>
          <span
            className=" cursor-pointer p-2 mt-1  hover:text-[#0E8080] border border-gray-700 rounded-full"
            onClick={handlTogglePlay}
          >
            {isplaying ? < FaPauseCircle size={30} /> : < FaPlay size={30} />}
            {/* <FaPlay size={30} /> */}
          </span>
          {/* <span>
            <FaPlay size={40} />
          </span> */}
          <span className="cursor-pointer  hover:text-[#0E8080]">
            <TbPlayerTrackNextFilled size={24} />
          </span>
          <span
            className="cursor-pointer  hover:text-[#0E8080]"
            title="Phát ngẫu nhiên"
          >
            <CiShuffle size={24} />
          </span>
        </div>
        <div>prosess -spin</div>
      </div>

      <div className="w-[30%] border border-green-500 flex-auto">volume</div>
    </div>
  );
};

export default Player;
