import React, { useState,  } from "react";
import {useNavigate,  Link } from "react-router-dom";
import * as apis from "../../apis";
import Swal from 'sweetalert';

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function submit(e) {
    e.preventDefault();
    try {
      const user = {
        email:email,
        password:password,
      }
      const response = await apis.Login(user)
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data.data) )
      alert(response.data.message)
      navigate('/home')
      // if(response.data.length!==0){
      //   // Swal.fire({
      //   //   title: 'Chúc Mừng',
      //   //   text: 'Bạn đã đăng nhập thành công',
      //   //   icon: 'success',
      //   //   confirmButtonText: 'OK'
      //   // });
      // }
   

  
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="w-[50%] m-5 p-5 justify-center items-center">
      <div className="flex items-center justify-center font-bold">
        ĐĂNG NHẬP
      </div>
      <form className="justify-center items-center">
        <div className="mb-3">
          <label className="form-label ml-3 mb-3">Tên Tài Khoản :</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Vui long nhap email..."
          />
          {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
        </div>
        <div className="mb-3">
          <label className="form-label ml-3 mb-3">Mật Khẩu :</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={submit}>
          Đăng Nhập
        </button>
      </form>
      <div className="mb-3">
        <br />
        <p>
          Bạn chưa có tài khoản ? <Link to="/register"> Đăng kí ngay</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
