import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import "./asidecomunicados.scss"

const Asidecomunicados = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPosts(
        filter: { categoryId: { slug: { eq: "comunicados" } } }
        sort: { fields: datePost, order: DESC }
        limit: 2
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
            fluid(maxWidth: 400) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <h2>Comunicados</h2>
      <div>
        {data.allContentfulPosts.nodes.map(node => {
          return (
            <div className="aside_item" key={node.id}>
              <Link to={`/${node.slug}`}>
                <div key={node.id}>
                  <div key={node.id}>
                    <p className="aside_comunicados_title">{node.name}</p>
                  </div>
                  <Image fluid={node.images[0].fluid} alt="" />
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Asidecomunicados
