import React ,{ useEffect}from "react";
import { Header,Slider ,Section} from "../../conponents";
import { useSelector, useDispatch } from "react-redux";
import * as apis from '../../apis'
import { Scrollbars } from "react-custom-scrollbars";


const Home = () => {
  const { hot,top100 } = useSelector((state) => state.app);
  
    return (
      <div className="overflow-hidden  h-full  ">
        <Scrollbars autoHide style={{ width: "100%", height: "100%" }}>
          <Slider />
          <Section data={hot} />
          <Section data={top100} />
          <div className="w-full h-[250px]"></div>
        </Scrollbars>
      </div>
    );
}
export default Home