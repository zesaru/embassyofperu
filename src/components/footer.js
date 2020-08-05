import React from "react"
import "./footer.scss"
import styled from "styled-components"

const TitleFooter = styled.p`
  margin-bottom: 30px;
  font-size: 18px;
  border-bottom: 2px solid red;
  color: #263b5e;
`

const ContentFooter = styled.footer`
  background: #fbfbfd;
`

const Enlace = styled.a`
  text-decoration: none;
  color: #263b5e;
`
const ContentEnlaces = styled.ul`
  margin-left: 0px;
  padding: 0px;

  li {
    margin-bottom: 14px;
    list-style: none;
  }
`

export default function footer() {
  return (
    <ContentFooter>
      <div className="footer-level1">
        <div className="wrapper">
          <div className="enlacesdeinteres">
            <TitleFooter>ENLACES DE INTERES</TitleFooter>
            <ContentEnlaces>
              <li>
                <Enlace
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.gob.pe/rree"
                >
                  Ministerio de Relaciones Exteriores
                </Enlace>
              </li>
              <li>
                <Enlace
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.gob.pe/"
                >
                  Gobierno del Perú
                </Enlace>
              </li>
              <li>
                <Enlace rel="noreferrer" href="/seccioncomercial/">
                  Sección Comercial
                </Enlace>
              </li>
            </ContentEnlaces>
          </div>
          <div className="contacto">
            <TitleFooter>INVERSIÓN Y TURISMO</TitleFooter>
            <ContentEnlaces>
              <li>
                <Enlace
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.proinversion.gob.pe/"
                >
                  PROINVERSIÓN
                </Enlace>
              </li>
              <li>
                <Enlace
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.promperu.gob.pe/"
                >
                  PROMPERÚ
                </Enlace>
              </li>

              <li>
                <Enlace
                  target="_blank"
                  rel="noreferrer"
                  href="https://peru.travel/"
                >
                  PERÚTRAVEL
                </Enlace>
              </li>
            </ContentEnlaces>
          </div>
          <div className="instituciones">
            <TitleFooter>CONSULADOS</TitleFooter>
            <ContentEnlaces>
              <li>
                <Enlace
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.consulado.pe/es/tokio/Paginas/Inicio.aspx"
                >
                  Consulado General del Perú en Tokio
                </Enlace>
              </li>
              <li>
                <Enlace
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.consulado.pe/es/nagoya/Paginas/Inicio.aspx"
                >
                  Consulado General del Perú en Nagoya
                </Enlace>
              </li>

              <li>
                <Enlace href="#" target="_blank" rel="noreferrer">
                  Consulados Honorarios del Perú
                </Enlace>
              </li>
            </ContentEnlaces>
          </div>
        </div>
      </div>
      <div className="footer-level2">
        <div className="wrapper">
          Embajada del Perú en Japón <br />
          150-0012 Tokio Shibuya-ku Hiroo 2-3-1 <br />
          03-3406-4243 <br />
        </div>
      </div>
    </ContentFooter>
  )
}
