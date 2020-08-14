import React from "react"

import "./project-detailed-view.scss"

export default function ProjectDetails(someProp) {
  const projDetails = someProp.pageContext.projectObs

  const background = require("../../images/project_thumbnails" +
    projDetails.imgUrl)

  const styles = {
    backgroundImage: `url(${background})`,
  }

  return (
    <div className="project-detailed-view">
      <div className="background-image" style={styles}></div>
      <div className="back">
        <a href="/">Home</a>
      </div>
      <div className="content">
        <h1>{projDetails.projectTitle} </h1>
        <p>{projDetails.description}</p>
        <a
          href={projDetails.videoUrl}
          className="btn-style-1 demo-btn"
          target="_blank"
          rel="norefferrer"
        >
          Demo Video
        </a>
        <div className="project-download">
          <a
            href={projDetails.projectMockupLink}
            className="btn-style-1 demo-btn"
            target="_blank"
            rel="norefferrer"
          >
            Download XD
          </a>
        </div>
      </div>
    </div>
  )
}
