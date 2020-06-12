import { Link } from "gatsby"
import React from "react"
import Escudo from "./escudo"

const Header = () => (
  <header>
    <nav>
      <div className="logo">
        <Escudo></Escudo>
        <div className="red-bar"></div>
        <h1>
          EMBAJADA DEL PERÚ <span>EN JAPÓN</span>
        </h1>
      </div>
      <div className="nav-language"></div>
      <div className="nav-social"></div>
      <input type="checkbox" id="menu" className="menu__checkbox" />
      <ul className="menu">
        <li className="menu__item">
          <Link to="/">INICIO</Link>
        </li>
        <li className="menu__item">
          <Link to="#">EMBAJADOR</Link>
        </li>
        <li className="menu__item">
          <Link to="#">CONSULADOS</Link>
        </li>
        <li className="menu__item">
          <Link to="#">RESOLUCIONES</Link>
        </li>
      </ul>
      <label htmlFor="menu" className="menu__button"></label>
    </nav>
  </header>
)
export default Header
