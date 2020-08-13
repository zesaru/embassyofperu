import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


const Amistad = () => {
  const data = useStaticQuery(graphql`
  query  {
      allContentfulPage {
        nodes {
          title
          description {
            json
          }
        }
      }
    }
    
  `)

  const title = data.allContentfulPage.nodes[0].title
  return (
    <Layout>
      <SEO title={title}></SEO>
      <div className="wrapper">
        <Banner></Banner>
        <h2>{title}</h2>
        {documentToReactComponents(
            data.allContentfulPage.nodes[0].description.json,
            
          )}
        </div>        
    </Layout>
  )
}

export default Amistad
