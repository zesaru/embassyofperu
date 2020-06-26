import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Social from "../components/social"
import Image from "gatsby-image"
import "./actividades.scss"

const Comercio = () => {
  return (
    <Layout>
      <div className="wrapper">
        <Banner></Banner>
        <h2>Comercio</h2>
        <div className="content_item">

        </div>
        <Social></Social>
      </div>
    </Layout>
    );
}

export default Comercio;
