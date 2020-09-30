import React from "react"
import Layout from "../../components/layout/Layout"
import { useIdentityContext } from "react-netlify-identity-widget"

import "./project-detailed-view.scss"

export default function ProjectDetails(someProp) {
  const projDetails = someProp.pageContext.projectObs

  const background = require("../../images/project_thumbnails" +
    projDetails.imgUrl)

  const styles = {
    backgroundImage: `url(${background})`,
  }

  return (
    <Layout>
      <div className="project-detailed-view">
        <div className="background-image" style={styles}></div>
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
            <IsLoggedIn mockupLink={projDetails.projectMockupLink} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

function IsLoggedIn({ mockupLink }) {
  const identity = useIdentityContext()

  return (
    <>
      {identity && identity.isLoggedIn ? (
        <a
          href={mockupLink}
          className="btn-style-1 demo-btn"
          target="_blank"
          rel="norefferrer"
        >
          Download Project Files
        </a>
      ) : (
        <a className="btn-style-1 demo-btn">Log In To Download Project Files</a>
      )}
    </>
  )
}
