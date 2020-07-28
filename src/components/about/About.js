import React from "react"
import "./about.scss"
import DownArrows from "../down-arrows/DownArrows"

const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <div className="video">
        <iframe
          width="760"
          height="425"
          src="https://www.youtube.com/embed/PesqzWG0BVs"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="col">
        <a
          href="https://www.youtube.com/channel/UC_CWq39fcBPCmgKYZ0yProg"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="youtube-logo"
            src={require("../../svgs/youtube-logo-white.svg")}
            alt="logo"
          />
        </a>
      </div>
      <DownArrows />
    </div>
  )
}

export default About
