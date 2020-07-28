import React from "react"
import { Link } from "gatsby"
import "./project.scss"

const Project = ({
  title,
  imgSrc,
  skills,
  demoLink,
  codeLink,
  videoLink = "",
}) => {
  return (
    <div class="project">
      <img
        src={require("../../images/portfolio-sites/" + imgSrc)}
        alt="Respontive Portfolio Site"
      />
      <div class="overlay">
        <h4>{title}</h4>
        <ul>
          {skills.map(skill => (
            <li>{skill}</li>
          ))}
        </ul>
        <div className="btns">
          <Link href={demoLink} target="_blank" rel="noreferrer">
            See the Site
          </Link>
          <Link href={codeLink} target="_blank" rel="noreferrer">
            See the Code
          </Link>
          {videoLink ? (
            <Link href={videoLink} target="_blank" rel="noreferrer">
              Video Demo
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}

export default Project
