
import {  useDispatch } from "react-redux";
import { Home, Login,Public, Album } from "./containers/public";
import { Routes,Route } from "react-router-dom";
import path from "./ultis/path";

import { useEffect } from "react";
import  * as actions  from './store/actions';



function App() {
  const dispatch =  useDispatch()
  useEffect(() => {
    dispatch(actions.getHome());
  },[]);

  return (
 
    <div className="">
    <Routes>
      <Route path={path.PUBLIC} element={<Public></Public>}>
        <Route path={path.HOME} element={<Home></Home>}></Route>
        <Route path={path.LOGIN} element={<Login></Login>}></Route>
        
        <Route path={path.ALBUM__TITLE__PID} element={<Album></Album>}></Route>


        <Route path={path.STAR} element={<Home></Home>}></Route>
      </Route>
    </Routes>
    </div>
   
  );
}


export default App;
