import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-animated-slider"
import "react-animated-slider/build/horizontal.css"
import "./banner.scss"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBanners(sort: { fields: order }) {
        edges {
          node {
            id
            name
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
    <Slider autoplay duration={4000} className="slider-wrapper">
      {data.allContentfulBanners.edges.map(edge => {
        return (
          <div
            key={edge.node.id}
            style={{
              background: `url('${edge.node.image.fluid.src}') no-repeat center center`,
            }}
          ></div>
        )
      })}
    </Slider>
  )
}

export default Banner
