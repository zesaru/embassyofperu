import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Banner2 = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCategories(sort: { fields: order }) {
        edges {
          node {
            id
            name
            slug
            order
            picture {
              fluid(maxWidth: 500) {
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {data.allContentfulCategories.edges.map(edge => {
        return (
          <div>
            <Img
              className="picture"
              fluid={edge.node.picture.fluid}
              alt={edge.node.name}
            />
          </div>
        )
      })}
    </Slider>
  )
}

export default Banner2
