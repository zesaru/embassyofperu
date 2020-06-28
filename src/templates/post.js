import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "./post.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulPosts(slug: { eq: $slug }) {
      name
      content {
        json
      }
      images {
        file {
          url
        }
        fluid(maxWidth: 500) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
const post = props => {
  console.log(props)
  return (
    <Layout>
      <div className="wrapper">
        <div className="content_post">
          <Image fluid={props.data.contentfulPosts.images[0].fluid} alt="" />
          <h2 className="post_title">{props.data.contentfulPosts.name}</h2>
          {documentToReactComponents(props.data.contentfulPosts.content.json)}
        </div>
        <aside></aside>
      </div>
    </Layout>
  )
}

export default post
