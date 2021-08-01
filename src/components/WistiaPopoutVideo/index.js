import React, { useEffect } from "react"
import "./styles.scss"

const WistiaPopOutVideo = ({ id, children }) => {
  useEffect(() => {
    const script1 = document.createElement("script")
    const script2 = document.createElement("script")

    script1.src = "https://fast.wistia.com/embed/medias/" + id + ".jsonp"
    script1.async = true

    script2.src = "https://fast.wistia.com/assets/external/E-v1.js"
    script2.async = true

    document.body.appendChild(script1)
    document.body.appendChild(script2)
  })

  return (
    <span className="wistia_embed wistia_async_szz92zmrik popover=true popoverContent=link">
      <a href="#">{children}</a>
    </span>
  )
}

export default WistiaPopOutVideo
