import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
//import Banners from "../components/banner"
import SEO from "../components/seo"
import "./index.scss"
const BannersLazy = React.lazy(() =>
  import("../components/banner")
)

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
  const isSSR = typeof window === "undefined"
  return (
    <Layout>
      <SEO></SEO>
      <div className="wrapper">
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <BannersLazy />
        </React.Suspense>
      )}
        {/* <Banners></Banners> */}
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
                    console.log("")
                  ) : (
                    <Img
                      className="picture"
                      fluid={edge.node.picture.fluid}
                      alt={edge.node.name}
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
