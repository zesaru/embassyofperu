import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Escudo from "../../../components/escudo"

const Header = () => (
  <header>
    <div className="wrapper">
      <nav>
        <Escudo language="jp"></Escudo>
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
            <Link to="/jp">ホーム</Link>
          </li>
          <li className="menu__item">
            <Link to="/jp/ambassador">大使</Link>
          </li>
          <li className="menu__item">
            <Link to="/jp/embassystaff">大使館職員</Link>
          </li>
          <li className="menu__item">
            <Link to="/jp/perujapan">ペルーと日本の外交関係</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
export default Header
