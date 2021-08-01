import React from "react"
import { Link } from "gatsby"
import "./styles.scss"

const Project = ({
  title,
  imgSrc,
  skills,
  demoLink,
  codeLink,
  videoLink = "",
}) => {
  return (
    <div className="project">
      <img
        src={require("../../../images/portfolio-sites/" + imgSrc)}
        alt="Respontive Portfolio Site"
      />
      <div className="overlay">
        <h4>{title}</h4>
        <ul>
          {skills.map(skill => (
            <li key={skill}>{skill}</li>
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
