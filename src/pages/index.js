import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Imagen from "../components/image"

const IndexPage = () => {
  return (
    <Layout>
      <Imagen></Imagen>
      <section class="secundary-menu-container">
        <ul>
          <li>
            <Link to="#">
              <img height="55px" src="./img/meeting.png" alt="" />
              <span> Actividades del Embajador</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <img height="55px" src="./img/gastro.png" alt="" />
              <span>Gastronomía</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <img height="55px" src="./img/turismo.png" alt="" />
              <span>Turismo</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <img height="55px" src="./img/comercio.png" alt="" />
              <span>Comercio</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <img height="55px" src="./img/cultura.png" alt="" />
              <span>Cultura</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <img height="55x" src="./img/consulados.png" alt="" />
              <span>Consulados</span>
            </Link>
          </li>
        </ul>
      </section>
      <div class="social">
        <img height="55px" src="./img/facebook.png" alt="" />
        <img height="55px" src="./img/twitter.png" alt="" />
        <img height="55px" src="./img/instagram.png" alt="" />
      </div>
    </Layout>
  )
}

export default IndexPage
