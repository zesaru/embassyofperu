import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const SocialTitle = styled.h2`
  font-size: 0.8em;

  @media screen and (min-width: 1024px) {
    font-size: 1em;
  }
`

const DivSocial = styled.div`
  padding: 2em 0;
  display: flex;
  gap: 2em;
  align-items: center;
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
      <SocialTitle>Siguenos en redes sociales</SocialTitle>
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
