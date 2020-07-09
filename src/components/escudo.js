import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import "./escudo.scss"

const Escudo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "escudo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <Link to="/">
      <Img
        className="escudo"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </Link>
  )
}
export default Escudo
