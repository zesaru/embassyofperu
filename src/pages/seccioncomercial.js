import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"

const oficinacomercial = () => {
  return (
    <Layout>
      <SEO title={"Sección Comercial"}></SEO>
      <div className="wrapper">
        <Banner></Banner>
        <h2> Sección Comercial de la Embajada</h2>
        <p>
          La Sección Comercial de la Embajada Perú en Japón contribuye con su
          labor al buen posicionamiento de la imagen país y marca Perú, con el
          fin de contribuir al desarrollo sostenible y descentralizado del país.
        </p>
        <p>
          <strong>Direccion:</strong>HORIZON 1 Bldg. 8F, 
          3-30-16 Nishiwaseda, Shinjuku-ku,
          Tokyo 169-0051</p>
        <p>  
          <strong>Telefono:</strong>03-5797-7745
        </p>
        <p><strong>Fax:</strong> 03-5797-7746 </p>
      </div>
    </Layout>
  )
}

export default oficinacomercial
