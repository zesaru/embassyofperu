import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-animated-slider"
import "react-animated-slider/build/horizontal.css"
import "./bannerjp.scss"
import styled from "styled-components"

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
      allContentfulBannerjp {
        edges {
          node {
            id
            name
            url
            image {
              file {
                url
              }
              fluid(maxWidth: 1400) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Slider autoplay duration={4500} className="slider-wrapper">
      {data.allContentfulBannerjp.edges.map(edge => {
        return (
          <div
            key={edge.node.id}
            style={{
              background: `url('${edge.node.image.fluid.src}') no-repeat center center`,
            }}
          >
            <Inner>
              <LinkSeeMore rel="noopener" href={edge.node.url} target="_blank">
                Ver más
              </LinkSeeMore>
            </Inner>
          </div>
        )
      })}
    </Slider>
  )
}

export default Banner
