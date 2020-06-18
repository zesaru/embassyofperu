import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Imagen from "../components/image"
import Social from "../components/social"
import Image from "gatsby-image"
import "./actividades.scss"

const Actividades = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPosts {
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
        <Imagen></Imagen>
        <div className="content">
          <h1>Actividades del Embajador</h1>
          {data.allContentfulPosts.nodes.map(node => {
            return (
              <div className="image_categories" key={node.id}>
                <p>{node.name}</p>
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

export default Actividades
