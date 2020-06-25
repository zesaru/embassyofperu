import React from "react"
import "./footer.scss"

export default function footer() {
  return (
    <footer className="wrapper">
      <div className="footer-level1">
        <div className="enlacesdeinteres">
          <h4>ENLACES DE INTERES</h4>
          <div className="footer-enlaces">
            <h5>
              <a
                className="footer-enlace"
                target="_blank"
                rel="noreferrer"
                href="https://www.gob.pe/rree"
              >
                Ministerio de Relaciones Exteriores
              </a>
            </h5>
            <h5>
              <a
                className="footer-enlace"
                target="_blank"
                rel="noreferrer"
                href="https://www.gob.pe/"
              >
                Gobierno del Perú
              </a>
            </h5>
            <h5>
              <a
                className="footer-enlace"
                target="_blank"
                rel="noreferrer"
                href="https://www.migraciones.gob.pe/"
              >
                Superintendencia Nacional de Migraciones
              </a>
            </h5>
          </div>
        </div>
        <div className="contacto">
          <h4>ENLACES DE INVERSIÓN Y TURISMO</h4>
          <div className="footer-enlaces">
            <h5>Promoción de la Inversión Privada - PROINVERSIÓN</h5>
            <h5>Comisión de Promoción del Perú - PROMPERÚ</h5>
            <h5>PERÚTRAVEL</h5>
          </div>
        </div>
        <div className="instituciones">
          <h4>INSTITUCIONES DEL PERÚ EN JAPÓN</h4>
          <div className="footer-enlaces">
            <h5>Consulado General del Peru en Tokio</h5>
            <h5>Consulado General del Peru en Nagoya</h5>
            <h5>Sección Comercial de la Embajada </h5>
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
