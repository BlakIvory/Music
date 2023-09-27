import  {React, useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as apis from "../apis";
import icons from "../ultis/icons";
import * as actions from "../store/actions";
import moment from "moment";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

var intervalId;

const Player = () => {
  const [audio, setAudio] = useState(new Audio());

  const { curSongId, isPlaying, songs } = useSelector((state) => state.music);

  const [songInfo, setSongInfo] = useState(null);

  const [currentSecond, setCurrentSecond] = useState(0);
  const [isRandom, SetisRandom] = useState(false);
  const [isRepeat, SetisRepeat] = useState(false);
  const thumRef = useRef();
  const trackRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDetailSong = async () => {
      const [res1, res2] = await Promise.all([
        apis.apiGetDetailSong(curSongId),
        apis.apiGetSong(curSongId),
      ]);
      if (res1.data.err === 0) {
        setSongInfo(res1.data.data);
        // setCurrentSecond(0)
      }
      if (res2.data.err === 0) {
        audio.pause();
        setAudio(new Audio(res2.data.data["128"]));
      } else {
        audio.currentTime = 0;
        audio.pause();
        setAudio(new Audio());
        intervalId && clearInterval(intervalId);
        dispatch(actions.play(false));
        toast.warning(res2.data.msg);
        thumRef.current.style.cssText = `right: 100%`;
      }
    };

    fetchDetailSong();
  }, [curSongId]);

  useEffect(() => {
    intervalId && clearInterval(intervalId);
    audio.pause();
    audio.load();
    if (isPlaying) {
      audio.play().catch(() => {});
      intervalId = setInterval(() => {
        // console.log(audio?.currentTime)
        let perc =
          Math.round((audio.currentTime * 10000) / songInfo?.duration) / 100;
        // console.log(perc);
        thumRef.current.style.cssText = `right: ${100 - perc}%`;
        setCurrentSecond(Math.round(audio.currentTime));
      }, 200);
    }
  }, [audio]);

  // console.log(source);

  useEffect(() => {
    const handleEnd = () => {
      console.log("end");
      if (isRepeat) {
        handlRepeatMusic();
      } else if (isRandom) {
        handleRandomMusic();
      } else {
        handleClickNextMusic();
      }
    };
    audio.addEventListener("ended", handleEnd);

    return () => {
      audio.removeEventListener("ended", handleEnd);
    };
  }, [audio, isRepeat, isRandom]);

  const handleClickProressBar = (e) => {
    // console.log(e)
    const track = trackRef.current.getBoundingClientRect();
    // console.log(track);
    const percent =
      Math.round(((e.clientX - track.left) * 10000) / track.width) / 100;
    console.log(percent);
    thumRef.current.style.cssText = `right: ${100 - percent}%`;
    audio.currentTime = (percent * songInfo.duration) / 100;
    setCurrentSecond(Math.round((percent * songInfo.duration) / 100));
  };

  const handlTogglePlay = () => {
    if (isPlaying) {
      console.log("pausing");
      audio.pause();
      dispatch(actions.play(false));
    } else {
      audio.play();
      console.log("playing");
      dispatch(actions.play(true));
    }
  };
  const handleClickNextMusic = () => {
    if (songs) {
      let curIndexSong;
      songs?.forEach((item, index) => {
        if (item.encodeId == curSongId) curIndexSong = index;
      });
      console.log(curIndexSong);
      dispatch(actions.setCurSingId(songs[curIndexSong + 1].encodeId));
      dispatch(actions.play(true));
    }
  };
  const handleClickPrevMusic = () => {
    if (songs) {
      let curIndexSong;
      songs?.forEach((item, index) => {
        if (item.encodeId === curSongId && curSongId !== 0)
          curIndexSong = index;
      });

      dispatch(actions.setCurSingId(songs[curIndexSong - 1].encodeId));
      dispatch(actions.play(true));
    }
  };
  const handleRandomMusic = () => {
    const random = Math.round(Math.random() * songs.length);

    dispatch(actions.setCurSingId(songs[random].encodeId));
    dispatch(actions.play(true));
    // SetisRandom((prev) => !prev);
  };
  const handlRepeatMusic = () => {
    audio.play();
    // dispatch(actions.setCurSingId(curSongId));
    dispatch(actions.play(true));
  };
  return (
    <div className="bg-main-400 px-4 h-full flex m-1 pt-[5px]">
      <div className="w-[30%]   flex items-center flex-auto  gap-4">
        <img
          src={songInfo?.thumbnail}
          alt="thumbail"
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="flex flex-col ">
          <span className="font-semibold text-gray-700 text-[15px]">
            {songInfo?.title}
          </span>
          <span className="text-xs">{songInfo?.artistsNames} </span>
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
            className={`cursor-pointer ${isRepeat && "text-[#0E8080]"}`}
            title="Lặp lại"
            onClick={() => {
              SetisRepeat((prev) => !prev);
              if(isRandom) {SetisRandom((prev) => !prev);}
            }
          }
          >
            <CiRepeat size={24} hover />
          </span>
          <span
            onClick={handleClickPrevMusic}
            className={`${
              !songs
                ? " text-gray-500 "
                : "cursor-pointer  hover:text-[#0E8080]"
            }`}
          >
            <TbPlayerTrackPrevFilled size={24} />
          </span>
          <span
            className=" cursor-pointer p-2 mt-1  hover:text-[#0E8080] border border-gray-700 rounded-full"
            onClick={handlTogglePlay}
          >
            {isPlaying ? <FaPauseCircle size={24} /> : <FaPlay size={24} />}
          </span>
          <span
            onClick={handleClickNextMusic}
            className={`${
              !songs
                ? " text-gray-500 "
                : "cursor-pointer  hover:text-[#0E8080]"
            }`}
          >
            <TbPlayerTrackNextFilled size={24} />
          </span>
          <span
            className={`cursor-pointer ${isRandom && "text-[#0E8080]"}`}
            title="Phát ngẫu nhiên"
            onClick={() => {
              SetisRandom((prev) => !prev)
              if(isRepeat){ SetisRepeat((prev) => !prev)}
            }}
          >
            <CiShuffle size={24} />
          </span>
        </div>
        <div className="w-full flex items-center justify-center gap-2 pb-5 ">
          <span>{moment.utc(currentSecond * 1000).format("mm:ss")}</span>
          <div
            className="w-3/5 h-[3px]  hover:h-[8px]  rounded-l-full rounded-r-full relative cursor-pointer bg-gray-400"
            onClick={handleClickProressBar}
            ref={trackRef}
          >
            <div
              ref={thumRef}
              className="absolute h-full top-0 bottom-0 left-0  rounded-l-full rounded-r-full h-[3px] bg-green-500"
            ></div>
          </div>
          <span>{moment.utc(songInfo?.duration * 1000).format("mm:ss")}</span>
        </div>
      </div>

      <div className="w-[30%] border border-green-500 flex-auto">volume</div>
    </div>
  );
};

export default Player;
