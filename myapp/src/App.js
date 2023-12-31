import { useDispatch } from "react-redux";
import {
  Home,
  Login,
  Public,
  Album,
  Search,
  SearchAll,
  Register,
} from "./containers/public/";
import { Routes, Route } from "react-router-dom";
import path from "./ultis/path";

import { useEffect } from "react";
import * as actions from "./store/actions";
import { ToastContainer } from "react-toastify";
import Myself from "./containers/public/Myself";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getHome());
  }, []);

  return (
    <>
      <div className="">
        <Routes>
          <Route path={path.PUBLIC} element={<Public></Public>}>
            <Route path={path.HOME} element={<Home></Home>}></Route>
            <Route path={path.MYSELF} element={<Myself></Myself>}></Route>
            <Route path={path.LOGIN} element={<Login></Login>}></Route>
            <Route path={path.REGISTER} element={<Register></Register>}></Route>
            <Route
              path={path.ALBUM__TITLE__PID}
              element={<Album></Album>}
            ></Route>

            <Route path={path.SEARCH} element={<Search></Search>}>
              <Route path={path.ALL} element={<SearchAll></SearchAll>}></Route>
            </Route>
            <Route path={path.STAR} element={<Home></Home>}></Route>
          </Route>


        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
