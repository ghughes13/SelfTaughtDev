import React, { useEffect, useState } from "react"
import Layout from "../../components/layout/Layout"
import { useIdentityContext } from "react-netlify-identity-widget"
import LoginBtn from "../../components/login-btn/LoginBtn"

import "./project-detailed-view.scss"

export default function ProjectDetails(someProp) {
  console.log(someProp.pageContext.downloadData)

  const projDetails = someProp.pageContext.projectObs
  const projDBDetails = someProp.pageContext.downloadData

  const background = require("../../images/project_thumbnails" +  projDetails.imgUrl)
  const title = projDBDetails ||
  const mockupLite = projDBDetails.project_mockup_link_lite || projDetails.projectMockupLink

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

  console.log("project detailed view")
  console.log(identity && identity.isLoggedIn)

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
