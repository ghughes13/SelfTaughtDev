import React from "react"
import Layout from "../../components/layout/Layout"
import { useIdentityContext } from "react-netlify-identity-widget"
import LoginBtn from "../../components/login-btn/LoginBtn"

import "./project-detailed-view.scss"

export default function ProjectDetails(someProp) {
  const projDetails = someProp.pageContext.projectObs
  const projDBDetails = someProp.pageContext.downloadData

  const background = require("../../images/project_thumbnails" +
    projDetails.imgUrl)

  let mockupLite = projDetails.projectMockupLink
  if (projDBDetails !== undefined) {
    projDBDetails.Project_Data.forEach(project => {
      // console.log(project.project_title)
      // console.log(projDetails.projectTitle)
      if (project.project_title === projDetails.projectTitle) {
        mockupLite = projDBDetails.Project_Data[0].project_mockup_link_lite
      }
    })
    // console.log(projDBDetails.Project_Data[0])
  }

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
            rel="noreferrer"
          >
            Demo Video
          </a>
          <div className="project-download">
            <IsLoggedIn mockupLink={mockupLite} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

function IsLoggedIn({ mockupLink }) {
  const identity = useIdentityContext()

  // console.log("project detailed view")
  // console.log(identity && identity.isLoggedIn)

  return (
    <>
      {identity && identity.isLoggedIn ? (
        <a
          href={mockupLink}
          className="btn-style-1 demo-btn"
          target="_blank"
          rel="noreferrer"
        >
          Download Project Files
        </a>
      ) : (
        <LoginBtn
          innerText={"Log In To Download Project Files"}
          classList="btn-style-1 demo-btn"
        />
        // <a className="btn-style-1 demo-btn">Log In To Download Project Files</a>
      )}
    </>
  )
}
