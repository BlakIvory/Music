import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import * as apis from "../../apis";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
    const history=useNavigate();
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')

    async function submit(e) {
        try{

            await apis.Login(email, password)
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }
    }

  return (
    <div className="w-[50%] m-5 p-5 justify-center items-center">
      <form  className="justify-center items-center">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label ml-3 mb-3">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=>{setEmail(e.target.value)}}
            placeholder="Vui long nhap email..."
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1"className="form-label ml-3 mb-3">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        </div>
      
        <button type="submit" className="btn btn-primary" onClick={submit}>
          Submit
        </button>
      </form>
      <div className="mb-3">
      <br />
      <p>OR <Link to="/register"> Register page</Link></p>
      
        </div>
      
    </div>
  );
};

export default Login;
