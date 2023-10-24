import React from "react";
import { useSelector } from "react-redux";
import SongItem from "../../conponents/SongItem";
const SearchAll = () => {
  const { searchData } = useSelector((state) => state.music);
  console.log(searchData);

  // const [isAll, setisAll] = useState(true)
  // const [ isSong,setisSong]= useState(true)
  // const [ isArtist,setisArtist]= useState(true)

  return (
    <div className="flex row">
      <div className="ml-10 w-full  text-sm  flex-1">
        <div>
          <h3 className="text-lg font-bold mb-5 ">Nghệ Sĩ liên quan : </h3>
          <div className=" text-xs  ">
            {searchData?.artists?.map((item) => (
              <div className=" w-[300px] flex-row flex pb-5">
                <img
                  src={item?.thumbnail}
                  className="w-[84px] w-[84px] object-cover rounded-full"
                  alt="img thumbail"
                ></img>
                <div className=" pl-5 flex flex-col justify-center">
                  <span>Nghệ sĩ</span>
                  <span>{item?.name}</span>
                  <span>{item?.totalFollow}k người quan tâm</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="ml-10 w-full  text-sm  flex-1">
        <div>
          <h3 className="text-lg font-bold mb-5 ">Bài hát liên quan : </h3>
          <div className=" text-xs  ">
            {searchData.songs?.map((item) => (
              <SongItem
                key={item?.encodeId}
                thumbnail={item?.thumbnail}
                title={item?.title}
                artists={item?.artistsNames}
                sid={item?.encodeId}
                sm
                luotnghe={item?.releaseDate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAll;
