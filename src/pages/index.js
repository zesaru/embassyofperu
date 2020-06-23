import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Social from "../components/social"
import Img from "gatsby-image"
import Banners from "../components/banner"
import "./index.scss"

const IndexPage = () => {
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
              fluid(maxWidth: 400) {
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
    <Layout>
      <div className="wrapper">
        <Banners></Banners>
        <section className="secundary-menu-container">
          {data.allContentfulCategories.edges.map(edge => {
            return (
              <div className="secundary-menu-container-item" key={edge.node.id}>
                <Link to={edge.node.slug}>
                  <img
                    className="icon"
                    src={edge.node.imageCategory.file.url}
                    alt={edge.node.name}
                  />
                  <span> {edge.node.name}</span>
                  {edge.node.picture === null ? (
                    console.log("nulo")
                  ) : (
                    <Img className="picture" fluid={edge.node.picture.fluid} />
                  )}
                </Link>
              </div>
            )
          })}
        </section>
        <Social></Social>
      </div>
    </Layout>
  )
}

export default IndexPage
