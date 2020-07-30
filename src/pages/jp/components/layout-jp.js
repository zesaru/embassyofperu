import React from "react"
import Header from "./header-jp"
import Social from "../../../components/social"
import Footer from "./footer"
import "./layout-jp.scss"

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
