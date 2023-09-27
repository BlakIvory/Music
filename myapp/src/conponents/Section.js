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

const Section = () => {
  const { hot } = useSelector(state => state.app);
  console.log(hot)
  return (
    
    <div className='mt-12 px-[59px] flex flex-col gap-2'>
      <div className='flex items-center justify-between'>
        <h1 className='text-lg font-bold'>Cuối tuần cùng thưởng thức  {hot?.title}</h1>
        <span className='text-xs'>Tất Cả</span>
      </div>
      <div>
      
      </div>
    </div>
  )
}

export default Section;
