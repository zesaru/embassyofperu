import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const SocialTitle = styled.h2`
  font-size: 0.8em;
  display:block;

  @media screen and (min-width: 1024px) {
    font-size: 1.2em;
  }
`

const DivSocial = styled.div`
  padding: 2em 0;
  display: flex;
  gap: 1em;
  align-items: center;

  @media screen and (min-width: 724px) {
    display: flex;
    gap: 6em;
  }

  @media screen and (min-width: 1400px) {
    display: flex;
    gap: 10em;
  }
`

const StyledImg = styled(Img)`

`

const Social = ({title}) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGeneralSetting {
        edges {
          node {
            id
            name
            url
            image {
              fixed(width: 45) {
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
      <SocialTitle>{title}</SocialTitle>
      {data.allContentfulGeneralSetting.edges.map(edge => {
        return (
          <a
            key={edge.node.id}
            target="_blank"
            rel="noreferrer"
            href={edge.node.url}
          >
            <StyledImg fixed={edge.node.image.fixed} alt={edge.node.name} />
          </a>
        )
      })}
    </DivSocial>
  )
}

export default Social
