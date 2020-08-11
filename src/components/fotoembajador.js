import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImg = styled(Img)`
  width:130px;
`

const PictureContent = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content:center;
`
export const FotoEmbajador = () => {

const foto = useStaticQuery(graphql`
{
    contentfulAsset(title: {eq: "fotoembajadorharoldf"}) {
      description
      contentful_id
       fluid(maxWidth: 200, quality: 50){
        ...GatsbyContentfulFluid
      }
    }
  }
`)
    return (
        <PictureContent >
            <StyledImg fluid={foto.contentfulAsset.fluid}  alt={foto.contentfulAsset.description}/>                 
        </PictureContent>
    )
}
