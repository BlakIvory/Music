import { React, useEffect } from "react";
import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverFlow, Pagination, Navigation } from "swiper";

const Slider = () => {
  const { banner } = useSelector((state) => state.app);

  
  return (
    <>
      <span className="container flex justify-center items-center">
        <h1 className="heading  font-bold mt-[30px]">Bài Hát Nổi Bật Trong Tuần</h1>
      </span>
      <div >
      <div className="flex h-[350px]  w-[1400px]  p-[59px] ">
      
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
          {banner.items?.map((item) => (
           
            <SwiperSlide
            key={item.encodeId}
            >
              <img
                key={item.encodeId}
                src={item.banner}
                className="  object-contain rounded-lg"
              />
            </SwiperSlide>
          )
          
          )
          }
          console.log(banner.items)
        </Swiper>
      </div>
      </div>
    </>
  );
};

export default Slider;
