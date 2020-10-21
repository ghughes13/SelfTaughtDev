import React from "react"
import { Link } from "gatsby"
import "./project-card.scss"

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="preview-img">
        <img
          src={require("../../images/project_thumbnails" + project.imgUrl)}
          alt={project.projectTitle}
        />
      </div>
      <div className="project-skills">
        {project.skills.split(",").map(skill => {
          return (
            <p key={skill} className="skill">
              {skill}
            </p>
          )
        })}
      </div>
      <h4>{project.projectTitle}</h4>
      <Link className="btn-style-1" to={project.projectTitle}>
        Learn More
      </Link>
    </div>
  )
}

export default ProjectCard
