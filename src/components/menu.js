import React from "react"
import Link from "gatsby-link"

export default function menu() {
  return (
    <>
      <input type="checkbox" id="menu" name="menu" className="menu__checkbox" />
      <label htmlFor="menu" className="menu__button"></label>
      <ul className="menu">
        <li className="menu__item">
          <Link to="/">Inicio</Link>
        </li>
        <li className="menu__item">
          <Link to="/embajador">Embajador</Link>
        </li>
        <li className="menu__item">
          <Link to="/funcionarios">Funcionarios</Link>
        </li>
        <li className="menu__item">
          <Link to="/amistad">Amistad Perú-Japón</Link>
        </li>
      </ul>
    </>
  )
}
