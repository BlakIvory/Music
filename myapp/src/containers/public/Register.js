import React from 'react'
import axios from 'axios';
import * as apis from '../../apis/index';
import { useState,useEffect } from 'react';
import {useNavigate,Link} from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Register = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ email, setEmail] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ password, setPassword] = useState('')
    const [ name, setName] = useState('')
    async function submit(e) {
      e.preventDefault();
      // console.log(e.target.value)
        try {
          console.log(name)
          console.log(email)
          console.log(password)

         await apis.Register(name, email, password)
          
        } catch (error) {
            console.log(error)
        }
    }

    return (
      <div className="w-[50%] m-5 p-5 justify-center items-center">
        <form method='POST'  action='/register' className="justify-center items-center">
        <div className="mb-3">
            <label for="exampleInputPassword1"  className="form-label ml-3 mb-3">
              Name
            </label>
            <input
              type="text"
              className="form-control"
            
              onChange={(e)=>{setName(e.target.value)}}
              name="name"
            />
          </div>
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
              name='email'
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1"  className="ml-3 mb-3 form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e)=>{setPassword(e.target.value)}}
              name='password'
            />
          </div>
        
        
          <button  className="btn btn-primary" onClick={submit}>
            Submit
          </button>
        </form>
        <div className="mb-3">
        <br />
        <p>OR <Link to="/login"> login page</Link></p>
        
          </div>
        
      </div>
    );
}

export default Register
