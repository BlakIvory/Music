import React from 'react'

import * as apis from '../../apis/index';
import { useState } from 'react';
import {useNavigate,Link} from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Register = () => {
    const Navigate = useNavigate()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ email, setEmail] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ password, setPassword] = useState('')
    const [ name, setName] = useState('')
    async function submit(e) {
      e.preventDefault();
      // console.log(e.target.value)
        try {
          // console.log(name)
          // console.log(email)
          // console.log(password)
          const user = {name: name, email: email, password: password}
          const result = await apis.Register(user)
          if (result){
            Navigate('/login')
          }
          else {
            alert("Tạo tài khoản không thành công")
            window.location.reload()
          }
          
        } catch (error) {
            console.log(error)
        }
    }

    return (
      <div className=" m-5 p-5 justify-center items-center">
        <div className=' w-[300px] flex items-center justify-center font-bold'>ĐĂNG KÍ</div>
        <form method='POST'  action='/register' className="justify-center items-center">
        <div className="mb-3 w-[300px]">
            <label for="exampleInputPassword1"  className="form-label ml-3 mb-3">
              Tên tài khoản : 
            </label>
            <input
              type="text"
              className="form-control "
            placeholder='Vui lòng nhập tên tài khoản...'
              onChange={(e)=>{setName(e.target.value)}}
              name="name "
            />
          </div>
          <div className="mb-3 w-[300px]">
            <label for="exampleInputEmail1" className="form-label ml-3 mb-3">
              Địa chỉ Email :
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
            {/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
          </div>
          <div className="mb-3 w-[300px]">
            <label for="exampleInputPassword1"  className="ml-3 mb-3 form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e)=>{setPassword(e.target.value)}}
              name='password'
              placeholder='Vui long nhap password...'
            />
          </div>
        
        <div className='mb-3 w-[300px] flex items-center justify-center font-bold'> <button  className="btn btn-primary " onClick={submit}>
          Đăng Kí
          </button></div>
          
        </form>
        <div className="mb-3">
        <br />
        <p>Bạn đã có tài khoản ?  <Link to="/login"> Đăng Nhập</Link></p>
        
          </div>
        
      </div>
    );
}

export default Register
