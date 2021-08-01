import React from "react"
import "./styles.scss"

import WistiaInline from "../../WistiaInlineVideo"
import DownArrows from "../../Animations/DownArrows"

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
