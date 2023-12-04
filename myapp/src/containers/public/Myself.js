import React, { useState, useEffect } from "react";
import * as apis from "../../apis";

import Song from "../../conponents/Song";

import Swal from "sweetalert2";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";


const Myself = () => {
  let [songs, setSongs] = useState([]);
  var [listPlaylist,setListPlaylist] = useState([]);
  // let [Playlistsongs, setPlaylistsongs] = useState([]);
  let [inputNamePlaylist, setInputNamePlaylist] = useState([]);
  const auth = JSON.parse(localStorage.getItem("user"));
  const user = {
    email: auth[0].email,
  };

  async function handleGetAllFavorite() {
    const result = await apis.apiGetAllFavorite(user);
    // console.log(result);
    setSongs(result);
  };

    async function handleGetAllPlaylist() {
      const result = await apis.apiGetAllPlaylist(user);
      console.log(result.data.data);
      setListPlaylist(result.data.data)
    }
  async function handleAddPlaylist(){
    // console.log(inputNamePlaylist, user)
    const inputData = {
      namePlaylist: inputNamePlaylist,
      email: user.email,
    };
    // console.log(inputData)
    const result = await apis.addPlaylist(inputData)
    // console.log(result)
    if (result.status === 200) {
      Swal.fire("Thành Công !","Tạo Playlist mói thành công !!","success")
    }
  };

  // const fetchFavorite =  handleGetAllFavorite(user)

  useEffect(() => {
    handleGetAllFavorite();
    handleGetAllPlaylist();
  }, []);
   
  return (
    <div className="container flex col w-full">
      <div className="flex-none w-1/4 items-center justify-center gap-2">
        <img
          src="https://th.bing.com/th/id/OIP.qTBP-4HbvsRja9Ci7g_nkgHaH2?pid=ImgDet&w=528&h=560&rs=1"
          alt="thumbnailM"
          className={`w-full object-contain shadow-md rounded-md
        `}
        />
        <h2 className="text-[20px] font-bold text-gray-700 flex items-center justify-center">
          {/* {playlistData?.title} */}
        </h2>
        <p>
          Tên Tài Khoản :<span> {auth[0].name}</span>
        </p>
        <p>
          Email : <span> {user.email}</span>
        </p>
        <p>
          Bài hát yêu thích : <span> {songs?.data?.length}</span>
        </p>
        <div className="border border-success rounded-lg items-center justify-content-center flex w-[100px]">
          <Popup
            className="border bg-slate-600"
            trigger={<button> Tạo Playlist </button>}
            position="right center"
          >
            <div className="bg-success.bg-gradient ">
              <div className="m-2">Nhập tên Playlist</div>
              <div className="m-2">
                <input
                  className="p-0"
                  onChange={(e) => {
                    setInputNamePlaylist(e.target.value);
                  }}
                  placeholder="Vui lòng nhập tên playlist"
                ></input>
              </div>
              <div className="flex items-center justify-content-center p-1 ">
                <button
                  className="border border-success rounded-lg p-1"
                  onClick={handleAddPlaylist}
                >
                  Tạo Playlist
                </button>
              </div>
            </div>
          </Popup>
        </div>
      </div>

      <div>
        <div className="m-3">
          <span className="flex items-center justify-center font-semibold">
            DANH SÁCH BÀI HÁT YÊU THÍCH
          </span>
          <div className=" w-full flex flex-col text-xs text-gray-600">
            <div className=" flex justify-between items-center p-[10px] font-semibold">
              <span className="">BÀI HÁT</span>
              <span className="ml-[150px]">ALBUM</span>
              <span className="">THỜI LƯỢNG </span>
              <span className="">XỬ LÍ </span>
            </div>
            <div className="flex flex-col w-[700px]">
              {songs?.data?.map((item, index) => (
                <Song key={index} SongData={item} />
              ))}
            </div>
            {/* <div className="w-full h-[200px]"></div> */}
          </div>
        </div>
        <div className="m-3">
          <span className="flex items-center justify-center font-semibold">
            DANH SÁCH PLAYLIST
          </span>
          <div className=" w-full flex flex-col text-xs text-gray-600">
            {listPlaylist?.map((item, index) => (
              <div key={index}>
                <div>{item.namePlaylist}</div>
                <div className=" flex justify-between items-center p-[10px] font-semibold">
                  <span className="">BÀI HÁT</span>
                  <span className="ml-[150px]">ALBUM</span>
                  <span className="">THỜI LƯỢNG </span>
                  <span className=""> XỬ LÍ </span>
                </div>
                <div className="flex flex-col w-[700px]">
                  {listPlaylist?.listSongs?.map((item, index) => (
                    <Song key={index} SongData={item} />
                  ))}
                </div>
              </div>
            ))}

            <div className="w-full h-[200px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myself;
