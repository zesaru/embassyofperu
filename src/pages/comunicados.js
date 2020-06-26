import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Social from "../components/social"
import Image from "gatsby-image"
import "./actividades.scss"

const Comunicados = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPosts (filter: {categoryId: {slug: {eq: "comunicados"}}}){
        nodes {
          categoryId {
            name
            slug
          }
          id
          name
          images {
            file {
              url
            }
            fluid(maxWidth: 250) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="wrapper">
        <Banner></Banner>
        <h2>Comunicados</h2>
        <div className="content_item">
          {data.allContentfulPosts.nodes.map(node => {
            return (
              <div className="image_categories" key={node.id}>
                <div className="content_title">
                  <p>{node.name}</p>
                </div>
                <Image fluid={node.images[0].fluid} alt="" />
              </div>
            )
          })}
        </div>
        <Social></Social>
      </div>
    </Layout>
  )
}

export default Comunicados;
