import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import * as actions from '../store/actions'
import { EffectCoverFlow, Pagination, Navigation } from "swiper";

const Slider = () => {
  const { banner } = useSelector((state) => state.app);
  const dispatch = useDispatch()

  const handleClickBanner = (item) =>{
    if(item?.type===1){

      console.log(item.encodeId)
      dispatch(actions.setCurSingId(item.encodeId))
      dispatch(actions.play(true))
    }else{
      //test persist
    //   dispatch(actions.setCurSingId(ZOACFBBU)
    item.encodeId='ZOACFBBU'
    console.log(item.encodeId)
    dispatch(actions.setCurSingId(item.encodeId))
    dispatch(actions.play(true))
     }
    // console.log(item.encodeId)
  }
  
  return (
    <>
      <span className="container flex justify-center items-center">
        <h1 className="heading  font-bold mt-[10px]">Album Nổi Bật</h1>
      </span>
      <div >
      <div className="flex h-[300px]  w-[1400px]  pl-[59px] pt-[10px] ">
      
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
                onClick={()=>handleClickBanner(item)}
                className="  object-contain rounded-lg"
              />
            </SwiperSlide>
          )
          )
          }
        
        </Swiper>
      </div>
      </div>
    </>
  );
};

export default Slider;
