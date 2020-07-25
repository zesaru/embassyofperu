import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import "./asidecomunicados.scss"

const Asidejp = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPostjp(
        filter: { categoryId: { slug: { eq: "comunicados" } } }
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
  return (
    <div>
      <h2>ニュース</h2>
      <div>
        {data.allContentfulPostjp.nodes.map(node => {
          return (
            <div className="aside_item" key={node.id}>
              <Link to={`/jp/${node.slug}`}>
                <div key={node.id}>
                  <div key={node.id}>
                    <p className="aside_comunicados_title">{node.name}</p>
                  </div>
                  <Image fluid={node.image[0].fluid} alt={node.name} />
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Asidejp
