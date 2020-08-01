import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-animated-slider"
import styled from "styled-components"
import "react-animated-slider/build/horizontal.css"
import "./banner.scss"
import BackgroundImage from "gatsby-background-image"

const LinkSeeMore = styled.a`
  padding: 7px 10px;
  border: none;
  background: #e00816;
  border-radius: 30px;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 10px;
  color: white;
  cursor: cursor;

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`

const Inner = styled.div`
  padding: 0 70px;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  top: 85%;
  left: 80%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCategories(filter: { order: { eq: 200 } }) {
        edges {
          node {
            id
            name
            slug
            order
            picture {
              fluid(maxWidth: 1200) {
                ...GatsbyContentfulFluid
              }
            }
            imageCategory {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Slider className="slider-wrapper" duration={4500}>
      {data.allContentfulCategories.edges.map(edge => {
        return (
          <BackgroundImage
            Tag={`section`}
            //id={`test`}
            //className={className}
            fluid={edge.node.picture.fluid}
            fadeIn
          />
        )
      })}
    </Slider>
  )
}

export default Banner
