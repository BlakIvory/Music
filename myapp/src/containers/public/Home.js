import React ,{ useEffect}from "react";
import { Header,Slider ,Section} from "../../conponents";
import { useSelector, useDispatch } from "react-redux";
import * as apis from '../../apis'


const Home = () => {
  const { hot,top100 } = useSelector((state) => state.app);
    
    return (
       
        <div className="overflow-y-auto h-full w-auto ">
            <Slider/>
            <Section data={ hot} />
                <Section data={top100} />
                <div className="w-full h-[250px]"></div>
        </div>
    )
}
export default Home