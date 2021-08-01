import React from "react"
import "./styles.scss"
import pdf from "../../../data/Garrett_Hughes_Resume_Tech.pdf"

const About = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <h3>
        Phone: <a href="tel:3184588925">(318) 458-8925</a>
      </h3>
      <h3>
        Email: <a href="mailto:ghughes139@gmail.com">ghughes139@gmail.com</a>
      </h3>

      <div className="icons">
        <a
          href="https://github.com/ghughes13"
          target="_blank"
          rel="noreferrer"
          className="github"
        >
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/garrett-hughes-5320626b/"
          target="_blank"
          rel="noreferrer"
          className="linkedin"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UC_CWq39fcBPCmgKYZ0yProg?view_as=subscriber"
          target="_blank"
          rel="noreferrer"
          className="youtube"
        >
          <i className="fa fa-youtube"></i>
        </a>
        <a href={pdf} target="_blank" rel="noreferrer">
          <img src={require("../../../images/resume.png")} alt="resume" />
        </a>
      </div>
    </div>
  )
}

export default About
