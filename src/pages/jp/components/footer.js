import React from "react"
import "./footer.scss"

export default function footer() {
  return (
    <footer className="wrapper">
      <div className="footer-level1">
        <div className="enlacesdeinteres">
          <h4>リンク</h4>
          <div className="footer-enlaces">
            <h5>
              <a
                className="footer-enlace"
                target="_blank"
                rel="noreferrer"
                href="https://www.gob.pe/rree"
              >
                ペルー外務省
              </a>
            </h5>
            <h5>
              <a
                className="footer-enlace"
                target="_blank"
                rel="noreferrer"
                href="https://www.gob.pe/"
              >
                ペルー政府
              </a>
            </h5>
            <h5>
              <a
                className="footer-enlace"
                target="_blank"
                rel="noreferrer"
                href="https://www.migraciones.gob.pe/"
              >
                ペルー国家移民監督局
              </a>
            </h5>
          </div>
        </div>
        <div className="contacto">
          <h4>投資及び観光に関するリンク</h4>
          <div className="footer-enlaces">
            <h5>
              <a
                className="footer-enlace"
                target="_blank"
                rel="noreferrer"
                href="https://www.proinversion.gob.pe/"
              >
                民間投資促進庁
              </a>
            </h5>
            <h5>
              <a
                className="footer-enlace"
                target="_blank"
                rel="noreferrer"
                href="https://www.promperu.gob.pe/"
              >
                ペルー政府観光庁
              </a>
            </h5>
            <h5>
              <a
                className="footer-enlace"
                target="_blank"
                rel="noreferrer"
                href="https://peru.travel/"
              >
                ペルー観光情報サイト（PERÚTRAVEL）
              </a>
            </h5>
          </div>
        </div>
        <div className="instituciones">
          <h4>在日本ペルー機関</h4>
          <div className="footer-enlaces">
            <h5>
              <a
                className="footer-enlace"
                target="_blank"
                rel="noreferrer"
                href="https://www.consulado.pe/es/tokio/Paginas/Inicio.aspx"
              >
                在東京ペルー総領事館
              </a>
            </h5>
            <h5>
              <a
                className="footer-enlace"
                target="_blank"
                rel="noreferrer"
                href="https://www.consulado.pe/es/nagoya/Paginas/Inicio.aspx"
              >
                在名古屋ペルー総領事館
              </a>
            </h5>
            <h5>大使館商業部</h5>
          </div>
        </div>
      </div>
      <div className="footer-level2">
        在日ペルー大使館
        <br />
        150-0012 東京都渋谷広尾2-3-1
        <br />
        03-3406-4243 Fax 03-3409-7589
        <br />
      </div>
    </footer>
  )
}
