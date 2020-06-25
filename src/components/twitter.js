import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
    <a target="_blank" rel="noreferrer" href="https://twitter.com/peruinjapan">
      <Img fixed={data.placeholderImage.childImageSharp.fixed} />
    </a>
  )
}
export default Twitter
