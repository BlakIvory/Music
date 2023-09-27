import React ,{ useEffect}from "react";
import { Header,Slider ,Section} from "../../conponents";

import * as apis from '../../apis'


const Home = () => {

    
    return (
        <>
        <div className="overflow-y-auto ">
            
            <Slider/>
            <Section/>
          
        </div>

       <getHome/>

        </>
    )
}
export default Home