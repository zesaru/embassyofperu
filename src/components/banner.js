import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-animated-slider"
import "react-animated-slider/build/horizontal.css"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBanners(sort: { fields: name }) {
        edges {
          node {
            id
            name
            image {
              file {
                url
              }
              fluid(maxWidth: 1000) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)
  console.log(data.allContentfulBanners.edges[0].node.image.fluid.src)
  return (
    <Slider className="slider-wrapper">
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
