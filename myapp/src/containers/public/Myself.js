import React from "react";
import * as apis from "../../apis";

import Song from "../../conponents/Song";

const Myself =  () => {
  const auth = JSON.parse(localStorage.getItem("user"));
  const user = auth[0] ;

  return (
    <div className="container flex col w-full">
      <div className="flex-none w-1/4 items-center justify-center gap-2">
        <img
          src="https://th.bing.com/th/id/OIP.qTBP-4HbvsRja9Ci7g_nkgHaH2?pid=ImgDet&w=528&h=560&rs=1"
          alt="thumbnail"
          className={`w-full object-contain shadow-md rounded-md
        `}
        />
        <h2 className="text-[20px] font-bold text-gray-700 flex items-center justify-center">
          {/* {playlistData?.title} */}
        </h2>
        <p>
          Tên Tài Khoản :<span> {user.name}</span>
        </p>
        <p>
          Email : <span> {user.email}</span>
        </p>
        {/* <p>
          Bài hát yêu thích : <span> {user.favorite?.length}</span>
        </p> */}
      </div>
      <div className="m-3">
        <span className="flex items-center justify-center font-semibold">DANH SÁCH BÀI HÁT YÊU THÍCH</span>
        <div className=" w-full flex flex-col text-xs text-gray-600">
          <div className=" flex justify-between items-center p-[10px] font-semibold">
            <span className="">BÀI HÁT</span>
            <span className="ml-[150px]">ALBUM</span>
            <span className="">THỜI LƯỢNG </span>
          </div>
          <div className="flex flex-col w-[700px]">
            {/* {fetchFavorite?.map((item, index) => (
              <Song key={index} SongData={item} />
            ))} */}
          </div>
          <div className="w-full h-[200px]">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Myself;
