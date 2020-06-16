import React from "react"
import Facebook from "./facebook"
import Twitter from "./twitter"
import Instagram from "./instagram"
import "./social.scss"

const Social = () => {
  return (
    <div className="social">
      <Facebook />
      <Twitter />
      <Instagram />
    </div>
  )
}

export default Social
