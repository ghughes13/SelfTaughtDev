import React from "react"
import "./about.scss"

import WistiaInline from "../../wistiaIn_Inline_video/WistiaInline"
import DownArrows from "../../animations/down-arrows/DownArrows"

const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <div className="video">
        <WistiaInline id="qwyip7fv2k" />
      </div>
      <div className="col">
        <a
          href="https://www.youtube.com/channel/UC_CWq39fcBPCmgKYZ0yProg"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="youtube-logo"
            src={require("../../../svgs/youtube-logo-white.svg")}
            alt="logo"
          />
        </a>
      </div>
      <DownArrows />
    </div>
  )
}

export default About
