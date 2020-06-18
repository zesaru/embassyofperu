import { Link } from "gatsby"
import React from "react"
import Escudo from "./escudo"
import "./header.scss"

const Header = () => (
  <header>
    <div className="wrapper">
      <nav>
        <Escudo></Escudo>
        <h1>
          EMBAJADA DEL PERÚ <span>EN JAPÓN</span>
        </h1>
        <div className="nav-language"></div>
        <div className="nav-social"></div>
        <input type="checkbox" id="menu" className="menu__checkbox" />
        <ul className="menu">
          <li className="menu__item">
            <Link to="/">INICIO</Link>
          </li>
          <li className="menu__item">
            <Link to="/embajador">EMBAJADOR</Link>
          </li>
          <li className="menu__item">
            <Link to="#">FUNCIONARIOS</Link>
          </li>
          <li className="menu__item">
            <Link to="#">HISTORIA</Link>
          </li>
        </ul>
        <label htmlFor="menu" className="menu__button"></label>
      </nav>
    </div>
  </header>
)
export default Header
