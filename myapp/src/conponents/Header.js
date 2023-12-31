import React from "react";
import icons from "../ultis/icons";
import { Search } from "./";
import { useEffect,useState } from "react";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const {  CgProfile, FiLogOut } = icons;



const Header = () => {
  const navigate  = useNavigate()
  const [isLogin , setIsLogin] = useState(false)
  useEffect(() => {
  const auth = localStorage.getItem("user");
  if(auth){
    setIsLogin(true);
  }
  // window.location.reload();
  },[])
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex gap-4 w-full items-center">
        {/* <div className=" flex gap-6">
            <span><AiOutlineArrowLeft size={24}/></span>
            <span><AiOutlineArrowRight size={24}/></span>
          </div> */}
        <div className="w-1/2">
          <Search />
        </div>
      </div>
      <div className="flex ">
        <CgProfile className="m-2 p-2" size={36} />
        {isLogin ? (<FiLogOut className="m-2 p-2" onClick={() => {
          navigate("/login");
          localStorage.removeItem('user')
          window.location.reload();
          
          // window.location.reload();
        }} size={36} />):("")}
      </div>
    </div>
  );
};

export default Header;
