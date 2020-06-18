import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Twitter = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "twitter.png" }) {
        childImageSharp {
          fixed(width: 45, height: 45) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Link target="_blank" to="https://twitter.com/peruinjapan">
      <Img fixed={data.placeholderImage.childImageSharp.fixed} />
    </Link>
  )
}
export default Twitter
