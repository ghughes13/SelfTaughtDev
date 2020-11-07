import React from "react"
import Layout from "../../components/layout/Layout"
import { useIdentityContext } from "react-netlify-identity-widget"
import LoginBtn from "../../components/login-btn/LoginBtn"
import ManageSub from "../../components/manage_sub/ManageSub"

import "./project-detailed-view.scss"

export default function ProjectDetails(someProp) {
  const projDetails = someProp.pageContext.projectObs
  const projDBDetails = someProp.pageContext.downloadData

  const background = require("../../images/project_thumbnails" +
    projDetails.imgUrl)

  let mockupLite = projDetails.projectMockupLink
  if (projDBDetails !== undefined) {
    projDBDetails.Project_Data.forEach(project => {
      if (project.project_title === projDetails.projectTitle) {
        mockupLite = projDBDetails.Project_Data[0].project_mockup_link_lite
      }
    })
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
          <div className="plan-comparison">
            <div className="lite plan-option">
              <h4 className="larger-h4 regular">LITE - $0.00/Month</h4>
              <ul className="omit-list-style">
                <li>Desktop Mockup</li>
                <li className="exclude">Tablet Mockup</li>
                <li className="exclude">Mobile Mockup</li>
                <li>Project Demo Video</li>
                <li>Lv 1 Requirements</li>
                <li className="exclude">Lv 2 Requirements</li>
                <li className="exclude">
                  Lv 3 Requirements
                  <span>(If Applicable)</span>
                </li>
              </ul>
              <div className="project-download">
                <IsLoggedIn contentType="lite" mockupLink={mockupLite} />
              </div>
            </div>
            <div className="lite plan-option">
              <h4 className="larger-h4 regular">Pro - $19.99/Month</h4>
              <ul className="omit-list-style">
                <li>Desktop Mockup</li>
                <li>Tablet Mockup</li>
                <li>Mobile Mockup</li>
                <li>Project Demo Video</li>
                <li>Lv 1 Requirements</li>
                <li>Lv 2 Requirements</li>
                <li>
                  Lv 3 Requirements
                  <span>(If Applicable)</span>
                </li>
              </ul>
              <div className="project-download">
                <IsLoggedIn contentType="pro" mockupLink={mockupLite} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function IsLoggedIn({ mockupLink, contentType }) {
  const identity = useIdentityContext()
  let showProContent = false

  console.log(identity.user)

  if (identity) {
    console.log("Getting Fresh Token")
    identity.getFreshJWT(true).then(console.log(identity))
    console.log(identity.getFreshJWT(true))
  }

  if (
    identity.user &&
    identity.user.app_metadata &&
    identity.user.app_metadata.roles &&
    identity.user.app_metadata.roles[0] === "pro"
  ) {
    console.log("show pro content = true")
    showProContent = true
  }

  if (contentType === "lite") {
    return (
      <>
        {identity && identity.isLoggedIn ? (
          <>
            <a
              href={mockupLink}
              className="btn-style-1 demo-btn"
              target="_blank"
              rel="noreferrer"
            >
              Download Project Files
            </a>{" "}
          </>
        ) : (
          <LoginBtn
            innerText={"Log In To Download Project Files"}
            classList="btn-style-1 demo-btn"
          />
        )}
      </>
    )
  } else if (contentType === "pro") {
    console.log(identity && identity.isLoggedIn)
    return (
      <>
        {identity && identity.isLoggedIn ? (
          <>{!showProContent ? <ManageSub innerText="Upgrade To Pro" /> : ""}</>
        ) : (
          <LoginBtn
            innerText={"Log In To Download Project Files"}
            classList="btn-style-1 demo-btn"
          />
        )}
      </>
    )
  }
}
