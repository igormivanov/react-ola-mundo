import React from 'react'
import styles from "./MenuLink.module.css"
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function MenuLink({ children, to}) {
  
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) =>`${styles.link} ${isActive ? styles.linkDestacado : ""}`  }>
      {children}
    </NavLink>

    // <Link className={`
    //   ${styles.link} 
    //   ${localizacao.pathname === to ? styles.linkDestacado : ""}
    //   `} to={to}>
    //     {children}
    // </Link>
  )
}
