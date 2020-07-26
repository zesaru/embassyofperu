import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../pages/jp/components/layout-jp"
import Asidejp from "../components/asidejp"
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
      <SEO title={props.data.contentfulPostjp.name}></SEO>
      <div className="wrapper post">
        <div className="content_post">
          <Image fluid={props.data.contentfulPostjp.image[0].fluid} alt="" />
          <h2 className="post_title">{props.data.contentfulPostjp.name}</h2>
          {documentToReactComponents(props.data.contentfulPostjp.content.json)}
        </div>
        <aside className="wrapper">
          <Asidejp></Asidejp>
        </aside>
      </div>
    </Layout>
  )
}

export default post
