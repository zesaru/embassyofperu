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
          在日ペルー大使館
          </h1>
        </Link>
        <div className="nav-language">
          <Link to="/">Español</Link>
        </div>
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
            <Link to="/">ホーム</Link>
          </li>
          <li className="menu__item">
            <Link to="/embajador">大使</Link>
          </li>
          <li className="menu__item">
            <Link to="/funcionarios">大使館職員</Link>
          </li>
          <li className="menu__item">
            <Link to="/amistad">ペルーと日本の外交関係</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
export default Header
