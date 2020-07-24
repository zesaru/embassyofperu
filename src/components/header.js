import { Link } from "gatsby"
import React from "react"
import Escudo from "./escudo"
import styled from "styled-components"
import "./header.scss"

const Heading = styled.h1`
  padding: 0 0px;
  font-size: 0.8rem;
  width: 142px;
  margin-left: 0.7rem;

  @media screen and (min-width: 767px) {
    margin-left: -10.2rem;
    width: 200px;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 1.2rem;
    width: 230px;
  }
`

const Header = () => (
  <header>
    <div className="wrapper">
      <nav>
        <Escudo></Escudo>
        <Link to="/">
          <Heading>EMBAJADA DEL PERÚ EN JAPÓN</Heading>
        </Link>
        <div className="nav-language">
          <Link to="/jp">日本語</Link>
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
