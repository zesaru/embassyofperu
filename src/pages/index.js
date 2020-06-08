import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Imagen from "../components/image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCategories(sort: { fields: name }) {
        edges {
          node {
            id
            name
            slug
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
              <li>
                <Link to={edge.node.slug}>
                  <img
                    height="55px"
                    src={edge.node.imageCategory.file.url}
                    alt={edge.node.name}
                  />
                  <span> {edge.node.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
      <div className="social">
        <img height="55px" src="./img/facebook.png" alt="" />
        <img height="55px" src="./img/twitter.png" alt="" />
        <img height="55px" src="./img/instagram.png" alt="" />
      </div>
    </Layout>
  )
}

export default IndexPage
