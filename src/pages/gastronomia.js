import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Image from "gatsby-image"
import SEO from "../components/seo"
import "./actividades.scss"

const Gastronomia = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPosts(
        filter: { categoryId: { slug: { eq: "gastronomia" } } }
        sort: { fields: datePost, order: DESC }
      ) {
        nodes {
          categoryId {
            name
            slug
          }
          id
          name
          slug
          images {
            file {
              url
            }
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="gastronomía"></SEO>
      <div className="wrapper">
        <Banner></Banner>
        <h2>Comunicados</h2>
        <div className="content">
          {data.allContentfulPosts.nodes.map(node => {
            return (
              <div className="content_item" key={node.id}>
                <Link to={`/${node.slug}/`}>
                  <div className="image_categories" key={node.id}>
                    <div className="content_title" key={node.id}>
                      <p>{node.name}</p>
                    </div>
                    <Image fluid={node.images[0].fluid} alt={node.name} />
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Gastronomia
