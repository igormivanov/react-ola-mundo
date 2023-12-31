import React from "react";
import { Link } from "react-router-dom"
import style from "./Menu.module.css"
import MenuLink from "../MenuLink";

export default function Menu(){
  return (
    <header>
      <nav className={style.navegacao}>
        <MenuLink to="/">Inicio</MenuLink>
        <MenuLink to="/sobremim">SobreMim</MenuLink>
      </nav>
    </header>
  )
}