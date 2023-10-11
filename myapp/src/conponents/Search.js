import React, { useEffect, useState } from "react";
import icons from "../ultis/icons";
import * as apis from "../apis";
import { useDispatch } from "react-redux";
import { useNavigate, createSearchParams } from "react-router-dom";
import * as actions from "../store/actions";
import path from "../ultis/path";

const { BiSearch } = icons;

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const handleSearch = async (e) => {
    // console.log(keyword);
    if (e.keyCode === 13) {
      // console.log(keyword);
      dispatch(actions.search(keyword));
      navigate({
        pathname: `/${path.SEARCH}/${path.ALL}`,
        search: createSearchParams({
          q: keyword,
        }).toString(),
      });
    }
  };

  return (
    <div className="w-full flex bg-[#DDE4E4] items-center rounded-[20px]">
      <span className="h-10 px-4 flex justify-center items-center">
        <BiSearch size={24} />
      </span>
      <input
        type="text"
        className="outline-none w-full bg-[#DDE4E4]  px-4 py-2 rounded-[20px] h-10 text-gray-500"
        placeholder=" Tìm kiếm bài hát, nghệ sĩ , lời bài hát ,..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyUp={handleSearch}
      />
    </div>
  );
};

export default Search;
