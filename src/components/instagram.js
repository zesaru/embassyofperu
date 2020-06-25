import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Instagram = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "instagram.png" }) {
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
      href="https://www.instagram.com/peruinjapan/"
    >
      <Img fixed={data.placeholderImage.childImageSharp.fixed} />
    </a>
  )
}
export default Instagram
