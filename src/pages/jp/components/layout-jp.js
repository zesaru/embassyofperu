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
      <Social title="是非、公式ページをフォローして下さい！" />
      <Footer />
    </>
  )
}

export default Layout
