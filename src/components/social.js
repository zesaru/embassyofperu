import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const DivSocial = styled.div`
  margin-bottom: 5px;
  padding: 10px 0px;
  display: flex;
  justify-content: space-around;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
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
          <a
            key={edge.node.id}
            target="_blank"
            rel="noreferrer"
            href={edge.node.url}
          >
            <Img fixed={edge.node.image.fixed} alt={edge.node.name} />
          </a>
        )
      })}
    </DivSocial>
  )
}

export default Social
