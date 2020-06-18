import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
    <Link target="_blank" to="https://www.facebook.com/embajadadelperuenjapon">
      <Img fixed={data.placeholderImage.childImageSharp.fixed} />
    </Link>
  )
}
export default Facebook
