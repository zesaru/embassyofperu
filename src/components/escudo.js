import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Escudo = ({ language = "" }) => {
  const data = useStaticQuery(graphql`
    {
      contentfulAsset(title: { eq: "escudodelperulogo" }) {
        description
        contentful_id
        fixed(height: 40) {
          ...GatsbyContentfulFixed
        }
      }
    }
  `)
  return (
    <Link to={`/${language}`}>
      <Img
        alt={data.contentfulAsset.description}
        fixed={data.contentfulAsset.fixed}
      />
    </Link>
  )
}
export default Escudo
