import { Link } from "gatsby"
import React from "react"
import Escudo from "./escudo"
import "./header.scss"

const Header = () => (
  <header>
    <div className="wrapper">
      <nav>
        <Escudo></Escudo>
        <Link to="/">
          <h1>
            EMBAJADA DEL PERÚ <span>EN JAPÓN</span>
          </h1>
        </Link>
        <div className="nav-language"></div>
        <div className="nav-social"></div>
        <input
          type="checkbox"
          id="menu"
          name="menu"
          className="menu__checkbox"
        />
        <label htmlFor="menu" className="menu__button"></label>
        <ul className="menu">
          <li className="menu__item">
            <Link to="/">INICIO</Link>
          </li>
          <li className="menu__item">
            <Link to="/embajador">EMBAJADOR</Link>
          </li>
          <li className="menu__item">
            <Link to="/funcionarios">FUNCIONARIOS</Link>
          </li>
          <li className="menu__item">
            <Link to="/amistad">AMISTAD PERÚ-JAPÓN</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
export default Header
