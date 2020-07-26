import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../../components/seo"
import Layout from "./components/layout-jp"
import Img from "gatsby-image"
import Banners from "./components/bannerjp"
import "../index.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCategories(sort: { fields: order }) {
        edges {
          node {
            id
            nameJa
            slug
            sluJa
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
  return (
    <Layout>
      <SEO></SEO>
      <div className="wrapper">
        <Banners></Banners>
        <section className="secundary-menu-container">
          {data.allContentfulCategories.edges.map(edge => {
            return (
              <div className="secundary-menu-container-item" key={edge.node.id}>
                <Link to={`/jp/${edge.node.sluJa}`}>
                  <img
                    className="icon"
                    src={edge.node.imageCategory.file.url}
                    alt={edge.node.nameJa}
                  />
                  <span> {edge.node.nameJa}</span>
                  {edge.node.picture === null ? (
                    console.log("")
                  ) : (
                    <Img
                      className="picture"
                      fluid={edge.node.picture.fluid}
                      alt={edge.node.nameJa}
                    />
                  )}
                </Link>
              </div>
            )
          })}
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
