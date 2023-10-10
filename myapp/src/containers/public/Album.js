import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as apis from "../../apis";
import moment from "moment";
import { Lists, Song } from "../../conponents";
import { Scrollbars } from "react-custom-scrollbars";
import { useDispatch ,useSelector } from "react-redux";
import * as actions from "../../store/actions"
const Album = () => {
  const { pl_id } = useParams();
  // console.log(pl_id);
  const dispatch = useDispatch()
  const { curSongId, isPlaying, songs } = useSelector((state) => state.music);
  const [playlistData, setPlaylistData] = useState({});

  useEffect(() => {
    const fetchDetailPlaylist = async () => {
      const response = await apis.apiGetDetailPlaylist(pl_id);
      // console.log(response);
      if (response.data.err === 0) {
        setPlaylistData(response.data?.data);
        dispatch(actions.setPlaylist(response.data?.data?.song?.items))
      }
    };
    fetchDetailPlaylist();
  }, [pl_id]);

  return (
    <div className="flex gap-6 w-full h-full px-[75px]  ">
      <div className="flex-none w-1/4 items-center justify-center gap-2">
        <img
          src={playlistData?.thumbnailM}
          alt="thumbnail"
          className={`w-full object-contain shadow-md  ${
            isPlaying ? "rounded-full animate-rotate-center" : "rounded-md"
          } `}
        />
        <h2 className="text-[20px] font-bold text-gray-700 flex items-center justify-center">
          {playlistData?.title}
        </h2>
        <p>
          Tác Giả : <span>{playlistData?.artistsNames}</span>
        </p>
        <span className="flex flex-col items-center  text-gray-500 justify-center">
          <span>
            Cập Nhật lần cuối :{" "}
            <span>
              {moment
                .unix(playlistData?.contentLastUpdate)
                .format("DD/MM/YYYY")}
            </span>{" "}
          </span>
          <span>{playlistData?.like} lượt yêu thích</span>
        </span>
      </div>
      <Scrollbars style={{ width: "100%", height: "100%" }}>
        <div className="flex-auto pr-[59px] ">
          <span className="text-xl ">
            <span className="text-gray-700"> Chủ đề : </span>
            <span className="">{playlistData?.sortDescription}</span>
          </span>
          <div className="">
            {/* {console.log(playlistData?.song)} */}
            <Lists totalDuration={playlistData?.song?.totalDuration}></Lists>
          </div>
        </div>
      </Scrollbars>
    </div>
  );
};

export default Album;
