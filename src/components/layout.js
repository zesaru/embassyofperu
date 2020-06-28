/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import Social from "../components/social"
import Footer from "./footer"
import "./layout.scss"

const Layout = props => {
  return (
    <>
      <Header />
      {props.children}
      <Social />
      <Footer />
    </>
  )
}

export default Layout
