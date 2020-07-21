import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Logo = styled.div`
  width: 50px;

  @media screen and (min-width: 1024px) {
    width: 60px;
  }
`

const Escudo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "escudo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <Link to="/">
      <Logo>
        <Img
          alt="escudo logo peru"
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      </Logo>
    </Link>
  )
}
export default Escudo
