import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"
import Image from "gatsby-image"
import "./actividades.scss"

const Actividades = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPosts(
        filter: { categoryId: { slug: { eq: "actividades" } } }
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
  const title = "Actividades de la Embajada"
  return (
    <>
      <Layout>
        <SEO title={title}></SEO>
        <div className="wrapper">
          <Banner></Banner>
          <h2>{title}</h2>
          <div className="content">
            {data.allContentfulPosts.nodes.map(node => {
              return (
                <div className="content_item" key={node.id}>
                  <Link to={`/${node.slug}/`}>
                    <div className="image_categories" key={node.id}>
                      <div className="content_title">
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
    </>
  )
}

export default Actividades
