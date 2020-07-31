import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "llama.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`)
return(
  <Layout>
  <SEO title="404: Not found" />
  <div className="wrapper">
    <h1>PAGINA NO ENCONTRADA</h1>
    <p>La pagina que esta buscando no se encuentra por favor regrese al inicio</p>
    <Img style="width:500px;"
          alt="imagen de llama"
          fluid={data.placeholderImage.childImageSharp.fluid}
        ></Img>
  </div>
</Layout>
)
}

export default NotFoundPage
