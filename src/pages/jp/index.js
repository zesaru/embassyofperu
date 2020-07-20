import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "./components/layout-jp"
import Img from "gatsby-image"
import Banners from "./components/banner"
import "../index.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCategories(sort: { fields: order }) {
        edges {
          node {
            id
            nameJa
            slug
            sluJa
            order
            picture {
              fluid(maxWidth: 500) {
                ...GatsbyContentfulFluid
              }
            }
            imageCategory {
              file {
                url
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          author
          url
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <Helmet
        defer={false}
        defaultTitle={data.site.siteMetadata.title}
        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      >
        {/* General tags */}
        <title>{data.site.siteMetadata.title}</title>
        {/* <meta name="image" content={image} /> */}
        <link rel="canonical" href={data.site.siteMetadata.url} />
        <meta name="docsearch:version" content="2.0" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />

        {/* OpenGraph tags */}
        <meta property="og:url" content={data.site.siteMetadata.url} />
        {/* {isBlogPost ? <meta property="og:type" content="article" /> : null} */}
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta
          property="og:description"
          content={data.site.siteMetadata.description}
        />
        {/* <meta property="og:image" content={image} />
        <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

        <meta property="og:url" content={data.site.siteMetadata.url} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content={data.site.siteMetadata.title} />
        <meta property="og:image:alt" content="Embajada del Perú" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
      </Helmet>
      <div className="wrapper">
        <Banners></Banners>
        <section className="secundary-menu-container">
          {data.allContentfulCategories.edges.map(edge => {
            return (
              <div className="secundary-menu-container-item" key={edge.node.id}>
                <Link to={`/jp/${edge.node.sluJa}`}>
                  <img
                    className="icon"
                    src={edge.node.imageCategory.file.url}
                    alt={edge.node.nameJa}
                  />
                  <span> {edge.node.nameJa}</span>
                  {edge.node.picture === null ? (
                    console.log("")
                  ) : (
                    <Img
                      className="picture"
                      fluid={edge.node.picture.fluid}
                      alt={edge.node.nameJa}
                    />
                  )}
                </Link>
              </div>
            )
          })}
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
