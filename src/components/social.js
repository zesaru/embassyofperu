import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const DivSocial = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-around;
`

const Social = () => {
  const data = useStaticQuery(graphql`
    query {
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
  return (
    <DivSocial className="wrapper">
      {data.allContentfulGeneralSetting.edges.map(edge => {
        return (
          <a target="_blank" rel="noreferrer" href={edge.node.url}>
            <Img fixed={edge.node.image.fixed} alt={edge.node.name} />
          </a>
        )
      })}
    </DivSocial>
  )
}

export default Social
