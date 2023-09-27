import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import * as actions from "../store/actions";
import { EffectCoverFlow, Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

const Section = () => {
  const { hot } = useSelector((state) => state.app);
  // console.log(hot)
  const navigate = useNavigate();
  return (
    <div className="mt-1 px-[59px] flex flex-col gap-2 ">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">
          Cuối tuần cùng thưởng thức {hot?.title}
        </h1>
        <span className="text-xs">Tất Cả</span>
      </div>
      <div className="flex item-center gap-[28px] justify-between ">
        {hot?.items?.map((item) => (
          <div
            key={item.encodeId}
            className="flex flex-1 flex-col gap-2 items-start cursor-pointer"
            onClick={()=>(
              navigate(item?.link?.split('.')[0])
            )}
          >
            <img
              src={item.thumbnailM}
              alt="image"
              className="w-full height-auto rounded-lg"
            ></img>
            <span className="font-semibold text-sm">{`${item.title?.slice(
              0,
              20
            )}...`}</span>
            <span className="text-xs">{`${item.sortDescription?.slice(
              0,
              25
            )}...`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
