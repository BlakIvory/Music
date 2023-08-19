import React ,{ useEffect}from "react";
import { Header,Slider } from "../../conponents";

import * as apis from '../../apis'


const Home = () => {

    
    return (
        <>
        <div className="overflow-y-auto ">
            <div className="h-[70px] px-[59px] flex ic">
               <Header />
            
            </div>
            < Slider/>
        </div>

        <getHome />

        </>
    )
}
export default Home