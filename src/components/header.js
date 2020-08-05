import { Link } from "gatsby"
import React from "react"
import Escudo from "./escudo"
import "./header.scss"
import Menu from "./menu"

const Header = () => (
  <header>
    <div className="wrapper">
      <nav>
        <Escudo />
        <div className="nav-language">
          <Link to="/jp">日本語</Link>
        </div>
        <Menu />
      </nav>
    </div>
  </header>
)
export default Header
