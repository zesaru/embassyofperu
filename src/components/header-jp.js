import { Link } from "gatsby"
import React from "react"
import Escudo from "./escudo"
import "./header-jp.scss"
import styled from "styled-components"

const Heading = styled.h1`
  padding: 0 2px;
  font-size: 0.7rem;
`

const Header = () => (
  <header>
    <div className="wrapper">
      <nav>
        <Escudo></Escudo>
        <Link to="/">
          <Heading>
              在日ペルー大使館
          </Heading>
        </Link>
        <div className="nav-language">
          <Link to="/">Español</Link>
        </div>
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
