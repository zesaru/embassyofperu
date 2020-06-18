import React from "react"
import "./footer.scss"

export default function footer() {
  return (
    <footer className="wrapper">
      <div className="enlacesdeinteres">
        <h4>ENLACES DE INTERES</h4>
        <div className="footer-enlaces">
          <h5>Ministerio de Relaciones Exteriores</h5>
          <h5>Gobierno del Perú</h5>
          <h5>Ministerio de Comercio y Turismo</h5>
        </div>
      </div>
      <div className="contacto">
        <h4>CONTACTO</h4>
        <div className="footer-enlaces">
          <h5>Dirección: 150-0012 Tokio Shibuya-ku Hiroo 2-3-1</h5>
          <h5>Teléfono: 03-3406-4243</h5>
          <h5>Fax: 03-3409-7589</h5>
        </div>
      </div>
      <div className="intituciones">
        <h4>Intituciondes del Perú en Japon</h4>
        <div className="footer-enlaces">
          <h5>Consulado General del Peru en Tokio</h5>
          <h5>Consulado General del Peru en Nagoya</h5>
          <h5>Seccion Comercial de la Embajada </h5>
        </div>
      </div>
    </footer>
  )
}
