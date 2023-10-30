import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { SongItem } from "./";
import * as apis from "../apis";
import { Scrollbars } from "react-custom-scrollbars";
import { setCurSongData } from "../store/actions";
import { Link } from "react-router-dom";

const SidebarRight = () => {
  const [isRecent, setIsRecent] = useState(false);
  const [PlayList, setPlayList] = useState(null);
  const { curSongData, curSongId, curAlbumId, isPlaying, recentSongs } =
    useSelector((state) => state.music);
  // console.log(curSongData);
  const fetchdetailplaylist = async () => {
    const res = await apis.apiGetDetailPlaylist(curAlbumId);
    if (res.data.err === 0) {
      setPlayList(res.data.data?.song?.items);
    }
  };

  const [isLogin, setIsLogin] = useState(false);
  const [checkIsLogin, setCheckIsLogin] = useState(false);


  // console.log(auth)
  useEffect(() => {
    const auth = localStorage.getItem("user");
    // setCheckIsLogin(true);
    // window.location.reload();
    if (auth) {
    setCheckIsLogin(true);
      console.log(isLogin);
    }
  }, []);

  useEffect(() => {
    curAlbumId && fetchdetailplaylist();
  }, []);

  useEffect(() => {
    if (curAlbumId && isPlaying) fetchdetailplaylist();
  }, [curAlbumId, isPlaying]);
  //  console.log(recentSongs)
  useEffect(() => {
    isPlaying && setIsRecent(false) && setCurSongData(curSongData);
  }, [isPlaying, curSongId]);

  // const handleCheckLogin = async(res, req) => {
  //   const name = req.body.name;
  //   const password = req.body.password;
  //   const result = await apis.Login(name, password)

  // };

  return (
    <div className=" bg-main-200 w-full h-full flex flex-col text-xs  ">
      {!checkIsLogin ? (
        <div className="h-[70px]  py-[14px] px-2 flex items-center gap-8 rounded-sm justify-between">
          <div className="flex flex-auto gap-1 justify-center  bg-main-400 rounded-l-full rounded-r-full py-[6px] px-[6px] ">
            <span
              className={`py-[5px]  ${
                !isLogin && "bg-main-500"
              } flex-1  flex justify-center items-center rounded-l-full rounded-r-full `}
            >
              <Link
                to="/login"
                onClick={() => {
                  setIsLogin((prev) => !prev);
                }}
              >
                {" "}
                Đăng Nhập
              </Link>
            </span>
            <span
              className={`py-[5px] ${
                isLogin && "bg-main-500"
              } flex-1  flex justify-center items-center rounded-l-full rounded-r-full`}
            >
              <Link to="/Register" onClick={() => setIsLogin((prev) => !prev)}>
                {" "}
                Đăng Kí
              </Link>
            </span>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="h-[70px]  py-[14px] px-2 flex items-center gap-8 rounded-sm justify-between">
        <div className="flex flex-auto gap-1 justify-center  bg-main-400 rounded-l-full rounded-r-full py-[6px] px-[6px] cursor-pointer">
          <span
            onClick={() => setIsRecent((prev) => !prev)}
            className={`py-[5px] ${
              !isRecent && "bg-main-500"
            } flex-1  flex justify-center items-center rounded-l-full rounded-r-full`}
          >
            Danh sách phát
          </span>
          <span
            onClick={() => setIsRecent((prev) => !prev)}
            className={`py-[5px] ${
              isRecent && "bg-main-500"
            } flex-1  flex justify-center items-center rounded-l-full rounded-r-full`}
          >
            Nghe gần đây
          </span>
        </div>
      </div>

      {isRecent ? (
        <div className="w-full flex-col flex-auto px-2">
          {/* {console.log(PlayList)} */}

          <div className="flex flex-col h-full">
            <Scrollbars autoHide style={{ width: "100%", height: "100%" }}>
              {/* {console.log(recentSongs)} */}
              {recentSongs?.map((item) => (
                <SongItem
                  key={item?.sid}
                  thumbnail={item?.thumbnail}
                  title={item?.title}
                  artists={item?.artists}
                  sid={item?.sid}
                  sm
                />
              ))}
            </Scrollbars>
          </div>
        </div>
      ) : (
        <div className="w-full flex-col flex-auto px-2">
          <div className="w-full flex-col flex ">
            <div className="bg-main-500 rounded-md hover:bg-main-500">
              {curSongData ? (
                <SongItem
                  thumbnail={curSongData?.thumbnail}
                  title={curSongData?.title}
                  artists={curSongData?.artistsNames}
                  sid={curSongData?.encodeId}
                  sm={false}
                />
              ) : (
                <div> Chưa Chọn bài hát</div>
              )}
            </div>
            <div className="flex flex-col text-black ml-1">
              <span className="text-sm">Tiếp Theo :</span>
              <span className="opacity-70 text-sx font-semibold">
                Từ PlayList : {curSongData?.album?.title}
              </span>
            </div>
          </div>
          {/* {console.log(PlayList)} */}
          <div className="flex flex-col h-full">
            {/* {console.log(PlayList)} */}
            <Scrollbars autoHide style={{ width: "100%", height: "100%" }}>
              {PlayList?.map((item) => (
                <SongItem
                  key={item.encodeId}
                  thumbnail={item?.thumbnail}
                  title={item?.title}
                  artists={item?.artistsNames}
                  sid={item?.encodeId}
                  sm
                />
              ))}
            </Scrollbars>
          </div>
        </div>
      )}

      <div className="w-full h-[180px]"></div>
    </div>
  );
};

export default SidebarRight;
