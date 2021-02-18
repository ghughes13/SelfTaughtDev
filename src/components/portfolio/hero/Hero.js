import React, { useEffect } from "react"
import "./hero.scss"
import DownArrows from "../../animations/down-arrows/DownArrows"

const Hero = () => {
  useEffect(() => {
    window.addEventListener("load", () => {
      document.querySelector("h1").addClass("animate")
    })
  })

  return (
    <div className="hero">
      <h1>Garrett Hughes</h1>
      <div className="subtext">
        <h5>Developer - YouTuber - Human</h5>
      </div>
      <DownArrows />
    </div>
  )
}

export default Hero
