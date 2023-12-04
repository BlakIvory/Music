import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import * as actions from "../store/actions";
import { EffectCoverFlow, Pagination, Navigation } from "swiper";
import { NavLink, useNavigate } from "react-router-dom";

const Slider = () => {
  const { banner } = useSelector(state => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickBanner = (item) => {
    if (item?.type === 1) {
      console.log(item.encodeId);
      dispatch(actions.setCurSingId(item.encodeId));
      dispatch(actions.play(true));
      dispatch(actions.setPlaylist(null));
    } else if (item?.type === 4) {
      //test persist
      // console.log(item.encodeId)
      // dispatch(actions.setCurSingId(item.encodeId))
      // dispatch(actions.play(true))
     
      // console.log(pathAlbum)
      // const idalbum = pathAlbum?.split('/')[3]
      //       console.log(idalbum)
      const pathAlbum = item?.link?.split(".")[0];
      navigate(pathAlbum);
    } else {
      dispatch(actions.setPlaylist(null));
    }
    // console.log(item.encodeId)
  };
  // console.log(banner)
  return (
    <>
      <span className="container flex justify-center items-center font-heading    ">
        <p className="heading font-heading  text-lg font-bold mt-[10px]">
          Nổi Bật Trong Tuần
        </p>
      </span>
      <div>
        <div className="flex h-[200px]  w-[96%]  pl-[59px] pt-[10px] pr-[59px] ">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {banner.items?.map((item) => (
              <SwiperSlide key={item.encodeId}>
                <img
                  key={item.encodeId}
                  src={item.banner}
                  onClick={() => handleClickBanner(item)}
                  className="  object-contain rounded-lg cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Slider;
