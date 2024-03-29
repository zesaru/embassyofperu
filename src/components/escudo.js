import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"


const ContentLogo = styled.div`
 display:flex;
 @media screen and (max-width: 420px) {
    img {
      padding-top: 5px;
      height: 40px;
    } 
  }
`
const StyledLink = styled(Link)`
  display: contents;
`
const Heading = styled.h1`
  font-size: 0.8rem;
  font-weight:initial;
  @media screen and (max-width: 420px) {
    width:120px;
  }
`

const Escudo = ({ language = "" }) => {  
  return (
    <ContentLogo>
      <StyledLink  to={`/${language}`}>
        <img src="//images.ctfassets.net/wunsyd67nevj/7HEqcEOhHf9mykRo3gE3kN/a7ae3654d5f44d2bcabe24146153233b/Escudo_del_Peru_62x50.png" width="50px" alt="logo escudo del peru"></img>
        <Heading>
          { language === "jp" ? "在日ペルー大使館" : "EMBAJADA DEL PERÚ EN JAPÓN" }  
        </Heading>
      </StyledLink >
    </ContentLogo>
  )
}
export default Escudo
