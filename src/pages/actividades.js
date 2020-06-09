import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Imagen from "../components/image"
import Image from "gatsby-image"

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
      <Imagen></Imagen>
      <h1>Actividades del Embajador</h1>
      {data.allContentfulPosts.nodes.map(node => {
        return (
          <div key={node.id}>
            <p>{node.name}</p>
            <Image fluid={node.images[0].fluid} alt="" />
          </div>
        )
      })}
    </Layout>
  )
}

export default Actividades
