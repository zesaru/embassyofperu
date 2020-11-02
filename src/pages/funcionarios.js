import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"

const funcionarios = () => {
  return (
    <Layout>
      <SEO title="funcionarios"></SEO>
      <div className="wrapper">
        <Banner></Banner>
        <h2>Funcionarios</h2>
        <p>
          Ministro, Gustavo Figueroa <br />
          <strong>Jefe de Cancillería</strong>
        </p>
        <p>
          Consejera, Marita Puertas <br />
          <strong>
            Encargada de asuntos económicos-comerciales, Organismos, medio
            ambiente , cooperación y Representante Permanente Alterno ante la OIMT.
          </strong>
        </p>
        <p>
          Capitán de Navío, Eduardo Silva Marzuka <br />
          <strong>Agregado de Defensa y Naval</strong>
        </p>
        <p>
          Fernando Albareda <br />
          <strong>Consejero Comercial</strong>
        </p>
        <p>
          Primer Secretario, Enrique Descalzi <br />
          <strong>
            Encargado de asuntos Políticos, Cooperación Judicial, Científica y
            Tecnológica.
          </strong>
        </p>
        <p>
          Tercer Secretario, Alejandro Hidalgo <br />
          <strong>Encargado de la Sección Cultural, gestión del riesgo de desastres, promoción turística, G-7, G-20, RCEP, ASEAN y redes sociales.</strong>
        </p>
        <p>
          William Valderrama <br />
          <strong>Especialista Agrícola de la Sección Comercial</strong>
        </p>
      </div>
    </Layout>
  )
}

export default funcionarios
