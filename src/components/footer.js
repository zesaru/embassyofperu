import React from "react"
import "./footer.scss"
import { Link } from "gatsby"
import styled from "styled-components"

const Title_footer = styled.p`
  font-weight: 400;
  padding-left: 8px;
  margin: 4px;
  font-size: 17px;
`

export default function footer() {
  return (
    <footer className="wrapper">
      <div className="footer-level1">
        <div className="enlacesdeinteres">
          <Title_footer>ENLACES DE INTERES</Title_footer>
          <div className="footer-enlaces">
            <a
              className="footer-enlace"
              target="_blank"
              rel="noreferrer"
              href="https://www.gob.pe/rree"
            >
              Ministerio de Relaciones Exteriores
            </a>

            <a
              className="footer-enlace"
              target="_blank"
              rel="noreferrer"
              href="https://www.gob.pe/"
            >
              Gobierno del Perú
            </a>
            <a
              className="footer-enlace"
              target="_blank"
              rel="noreferrer"
              href="https://www.migraciones.gob.pe/"
            >
              Superintendencia Nacional de Migraciones
            </a>
          </div>
        </div>
        <div className="contacto">
          <Title_footer>ENLACES DE INVERSIÓN Y TURISMO</Title_footer>
          <div className="footer-enlaces">
            <a
              className="footer-enlace"
              target="_blank"
              rel="noreferrer"
              href="https://www.proinversion.gob.pe/"
            >
              Promoción de la Inversión Privada - PROINVERSIÓN
            </a>

            <a
              className="footer-enlace"
              target="_blank"
              rel="noreferrer"
              href="https://www.promperu.gob.pe/"
            >
              Comisión de Promoción del Perú - PROMPERÚ
            </a>

            <a
              className="footer-enlace"
              target="_blank"
              rel="noreferrer"
              href="https://peru.travel/"
            >
              PERÚTRAVEL
            </a>
          </div>
        </div>
        <div className="instituciones">
          <Title_footer>INSTITUCIONES DEL PERÚ EN JAPÓN</Title_footer>
          <div className="footer-enlaces">
            <a
              className="footer-enlace"
              target="_blank"
              rel="noreferrer"
              href="https://www.consulado.pe/es/tokio/Paginas/Inicio.aspx"
            >
              Consulado General del Peru en Tokio
            </a>
            <a
              className="footer-enlace"
              target="_blank"
              rel="noreferrer"
              href="https://www.consulado.pe/es/nagoya/Paginas/Inicio.aspx"
            >
              Consulado General del Peru en Nagoya
            </a>

            <Link
              className="footer-enlace"
              to="/seccioncomercial"
              target="_blank"
              rel="noreferrer"
            >
              Sección Comercial de la Embajada
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-level2">
        Embajada del Perú en Japón <br />
        150-0012 Tokio Shibuya-ku Hiroo 2-3-1 <br />
        03-3406-4243 <br />
      </div>
    </footer>
  )
}
