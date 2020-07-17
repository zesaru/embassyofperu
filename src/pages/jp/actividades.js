import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "./components/layout-jp"
import Banner from "./components/banner"
import Image from "gatsby-image"
import "./actividades.scss"

const Actividades = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPostjp(
        filter: { categoryId: { slug: { eq: "actividades" } } }
        sort: { fields: datePost, order: DESC }
      ) {
        nodes {
          categoryId {
            nameJa
            slug
          }
          id
          name
          slug
          image {
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
  console.log(data.allContentfulPostjp.nodes[0].categoryId.nameJa)
  return (
    <Layout>
      <div className="wrapper">
        <Banner></Banner>
        <h2>{data.allContentfulPostjp.nodes[0].categoryId.nameJa}</h2>
        <div className="content">
          {data.allContentfulPostjp.nodes.map(node => {
            return (
              <div className="content_item" key={node.id}>
                <Link to={`/${node.slug}`}>
                  <div className="image_categories" key={node.id}>
                    <div className="content_title">
                      <p>{node.name}</p>
                    </div>
                    <Image fluid={node.image[0].fluid} alt={node.name} />
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

export default Actividades
