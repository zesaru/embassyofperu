import React from "react"
import Link from "gatsby-link"

export default function menu() {
  return (
    <>
      <input type="checkbox" id="menu" name="menu" className="menu__checkbox" />
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
    </>
  )
}
