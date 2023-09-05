import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as apis from "../apis";
import icons from "../ultis/icons";
import * as actions from "../store/actions";
import moment from "moment";


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

var intervalId


const Player = () => {
  const audioElement = useRef(new Audio());

  const { curSongId, isPlaying } = useSelector((state) => state.music);
  const [songinfo, setSongInfo] = useState(null);

  const [source, setSource] = useState(null);
  const [currentSecond,setCurrentSecond] = useState(0)
  const thumRef = useRef()
  const dispatch = useDispatch();

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

  // console.log(source);
  useEffect(() => {
    // audioElement.current.pause()
    // console.log(audioElement.current.currentTime)
    // audioElement.current.currentTime=0
    // console.log(audioElement.current.currentTime)
    audioElement.current.src = source;
    audioElement.current.load();

    if (isPlaying) {
      audioElement.current.play().catch((erro) => {});
    }
  }, [curSongId, source]);

  useEffect(()=>{

    if(isPlaying){
        intervalId = setInterval(()=>{
          let perc = Math.round(audioElement.current.currentTime *10000/songinfo.duration)/100
           console.log(audioElement.current.currentTime)
          console.log(perc)
          thumRef.current.style.cssText= `right :${100-perc}%`
          setCurrentSecond(Math.round(perc))
        },1000)
    }else{
       intervalId && 
      clearInterval(intervalId)
    }
  },[isPlaying])




  const handlTogglePlay = () => {
    if (isPlaying) {
      console.log("pausing");
      // setIsPlaying(false)
      audioElement.current.pause();
      
      dispatch(actions.play(false));
    } else {
      audioElement.current.play();
      console.log("playing");
      dispatch(actions.play(true));
    }
    //   if(audioElement.current?.paused &&
    //     audioElement.current?.currentTime > 0 && !audioElement.current?.ended) {

    //     audioElement.current?.play();
    //  } else {
    //     audioElement.current?.pause();
    //  }
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
            {isPlaying ? <FaPauseCircle size={30} /> : <FaPlay size={30} />}
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
        <div className="w-full flex items-center justify-center gap-2 pb-5 ">
          <span>{moment.utc(currentSecond*1000).format('mm:ss')}</span>
            <div className="w-3/5 h-[3px] rounded-l-full rounded-r-full relative bg-gray-500">
                <div ref={thumRef} className="absolute top-0 left-0  rounded-l-full rounded-r-full h-[3px] bg-green-500"></div>
            </div>
            {/* <span>{moment.utc(songinfo.duration*1000).format('mm:ss')}</span> */}
        </div>
      </div>

      <div className="w-[30%] border border-green-500 flex-auto">volume</div>
    </div>
  );
};

export default Player;
