import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import Asidecomunicados from "../components/asidecomunicados"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "./post.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulPostjp(slug: { eq: $slug }) {
      name
      content {
        json
      }
      image {
        file {
          url
        }
        fluid(maxWidth: 900) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
const post = props => {
  return (
    <Layout>
      <div className="wrapper post">
        <div className="content_post">
          <Image fluid={props.data.contentfulPostjp.image[0].fluid} alt="" />
          <h2 className="post_title">{props.data.contentfulPostjp.name}</h2>
          {documentToReactComponents(props.data.contentfulPostjp.content.json)}
        </div>
        <aside className="wrapper">
          <Asidecomunicados></Asidecomunicados>
        </aside>
      </div>
    </Layout>
  )
}

export default post
