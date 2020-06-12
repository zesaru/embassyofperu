import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Instagram = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
          fixed(width: 55, height: 55) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Link to="https://www.instagram.com/peruinjapan/">
      <Img fixed={data.placeholderImage.childImageSharp.fixed} />
    </Link>
  )
}
export default Instagram
