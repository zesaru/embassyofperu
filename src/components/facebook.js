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
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://www.facebook.com/embajadadelperuenjapon"
    >
      <Img
        fixed={data.placeholderImage.childImageSharp.fixed}
        alt="facebook logo"
      />
    </a>
  )
}
export default Facebook
