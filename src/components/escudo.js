import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Escudo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "escudo.jpg" }) {
        childImageSharp {
          fixed(width: 44, height: 46) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log(data)
  return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
}
export default Escudo
