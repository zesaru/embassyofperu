import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Imagen from "../components/image"
import Social from "../components/social"
import Img from "gatsby-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCategories(sort: { fields: name }) {
        edges {
          node {
            id
            name
            slug
            picture {
              fluid(maxWidth: 400) {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
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
      <Imagen></Imagen>
      <section className="secundary-menu-container">
        <ul>
          {data.allContentfulCategories.edges.map(edge => {
            return (
              <li key={edge.node.id}>
                <Link to={edge.node.slug}>
                  <img
                    className="icon"
                    height="55px"
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
              </li>
            )
          })}
        </ul>
      </section>
      <Social></Social>
    </Layout>
  )
}

export default IndexPage
