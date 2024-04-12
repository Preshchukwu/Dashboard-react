import React from 'react'
import Links from '../../links/Links'
import {AiFillSetting, AiOutlineLogin, AiOutlineUser, AiOutlineHome} from "react-icons/ai"
import { MdAdminPanelSettings } from "react-icons/md";
import "./SideNav.css"
import { Link } from 'react-router-dom';

const SideNav = () => {

  const path =[
    // {to: "/", label: "Login", icon: <AiOutlineLogin/>},
    {to: "/home", label: "Home", icon: <AiOutlineHome/>},
    {to: "/settings", label: "Settings", icon: <AiFillSetting/>},
    {to: "/user", label: "User", icon: <AiOutlineUser/>},
    {to: "/admin", label: "Admin", icon: <MdAdminPanelSettings/>},
    
  ]

  return (
    

    <div className='links'>
      {
      path.map(({to,label,icon})=>(
        <Links key={label} to={to} label={label} icon={icon}/>
      ))
    }

      {/* <Links  to={"/settings"} label={"settings"} icon={<AiFillSetting/>}></Links>
      <Links to={"/settings"} label={"settings"} icon={<AiFillSetting/>}></Links>
      <Links to={"/settings"} label={"settings"} icon={<AiFillSetting/>}></Links>
      <Links to={"/settings"} label={"settings"} icon={<AiFillSetting/>}></Links>
      <Links to={"/settings"} label={"settings"} icon={<AiFillSetting/>}></Links>  */}
    </div>
  )
}

export default SideNav
