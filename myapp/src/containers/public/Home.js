import React ,{ useEffect}from "react";
import { Header,Slider } from "../../conponents";

import * as apis from '../../apis'


const Home = () => {

    
    return (
        <>
        <div className="overflow-y-auto ">
            
            < Slider/>
        </div>

       <getHome/>

        </>
    )
}
export default Home