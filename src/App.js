import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Home, Login,Public } from "./containers/public";
import { Routes,Route } from "react-router-dom";
import path from "./ultis/path";


function App() {
  return (
   <>
    <div className="">
    <Routes>
      <Route path={path.PUBLIC} element={<Public></Public>}>
        <Route path={path.HOME} element={<Home></Home>}></Route>
        <Route path={path.LOGIN} element={<Login></Login>}></Route>
        <Route path={path.STAR} element={<Home></Home>}></Route>
      </Route>
    </Routes>
    </div>
   </>
  );
}

export default App;
