import { Link } from "gatsby"
import React from "react"
import Escudo from "./escudo"
import styled from "styled-components"
import "./header.scss"
import Menu from "./menu"

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
    width: 215px;
  }
`

const Header = () => (
  <header>
    <div className="wrapper">
      <nav>
        <Escudo />
        <Link to="/">
          <Heading>EMBAJADA DEL PERÚ EN JAPÓN</Heading>
        </Link>
        <div className="nav-language">
          <Link to="/jp">日本語</Link>
        </div>
        <Menu />
      </nav>
    </div>
  </header>
)
export default Header
