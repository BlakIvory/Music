import React from 'react'
import Logo from '../assets/logo.png'
import { NavLink, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import path from '../ultis/path'
import { SideMenu } from '../ultis/menu'
import { icons } from 'react-icons'

const notActive='py-2 px-[25px] text-[#32323D] text-[13px] font-bold flex gap-4'
const Active='py-2 px-[25px] text-[#0f7070] text-[13px] font-bold flex gap-4'

const SidebarLeft = () => {
  const Navigatate = useNavigate()
  return (
    <div className='flex h-full flex-col bg-main-200 w-[200px]'>
      <div onClick={()=>Navigatate(path.HOME)} className='w-full cursor-pointer h-[70px] py-[15px] px-[25px] flex justify-start items-center'>
        <img src={Logo} className='w-[200px] h-[100px]' alt="logo"/>
      </div>
      <div className='flex flex-col'>
        {SideMenu.map(item=> (
          <NavLink 
          to={item.path}
          key={item.path}
          end={item.end}
          className={({ isActive}) => isActive ? Active: notActive}
          >
            {item.icons}
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default SidebarLeft
