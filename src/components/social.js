import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from 'gatsby';
import "./social.scss"

const Social = () => {
  const data = useStaticQuery(graphql`
  query  {
    allContentfulGeneralSetting {
      edges {
        node {
          id
          name
          url
          image {
            fixed(width: 50) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  }
  
`)
console.log(data.allContentfulGeneralSetting.edges)
  return (
    <div className="social wrapper">
      { data.allContentfulGeneralSetting.edges.map( edge => {
        return(
          <a
            target="_blank"
            rel="noreferrer"
            href={edge.node.url}
          >
          <Img
            fixed={edge.node.image.fixed}
            alt="facebook logo"
          />
          </a> 
        )   
          }

        
        
          )}
    </div>
  )
}

export default Social
