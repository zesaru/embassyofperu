import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Facebook = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "facebook.png" }) {
        childImageSharp {
          fixed(width: 45, height: 45) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
}
export default Facebook
