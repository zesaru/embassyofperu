import React from "react"
import { graphql } from "gatsby"
import { INLINES } from "@contentful/rich-text-types"
import Asidecomunicados from "../components/asidecomunicados"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Image from "gatsby-image"
import "./post.scss"

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: node => {
      if (node.data.uri.indexOf("youtube.com") !== -1) {
        return (
          <div class="video">
            <iframe
              src={node.data.uri}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )
      } else {
        return (
          <a
            href={node.data.uri}
            className="enlace_post"
            target="_blank"
            without
            rel="noreferrer"
          >
            {node.content[0].value}
          </a>
        )
      }
    },
  },
}

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
      <SEO
        title={props.data.contentfulPosts.name}
        coverimage={props.data.contentfulPosts.images[0].fluid}
      ></SEO>
      <div className="wrapper post">
        <div className="content_post">
          <Image
            fluid={props.data.contentfulPosts.images[0].fluid}
            alt={props.data.contentfulPosts.name}
          />
          <h2 className="post_title">{props.data.contentfulPosts.name}</h2>
          {documentToReactComponents(
            props.data.contentfulPosts.content.json,
            options
          )}
        </div>
        <aside className="wrapper">
          <Asidecomunicados></Asidecomunicados>
        </aside>
      </div>
    </Layout>
  )
}

export default post
