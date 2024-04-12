import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = ({label, to, icon}) => {
  return (
    <NavLink style={{color: `black`, display: `flex`, gap: `1rem`, textDecoration: `none`}} to={to}>
        <span style={{ height: `16px`}}>{icon}</span>
        <span>{label}</span>
    </NavLink>
  )
}

export default Links 
