import React, { useEffect, useState } from "react"
import Layout from "../../components/layout/Layout"
import { useIdentityContext } from "react-netlify-identity-widget"
import LoginBtn from "../../components/login-btn/LoginBtn"

import "./project-detailed-view.scss"

export default function ProjectDetails(someProp) {
  const [projData, setProjData] = useState([])

  useEffect(() => {
    const movies = fetch("/.netlify/functions/hasura").then(response =>
      response.json()
    )

    console.log(movies)
  })

  const projDetails = someProp.pageContext.projectObs

  const background = require("../../images/project_thumbnails" +
    projDetails.imgUrl)

  const styles = {
    backgroundImage: `url(${background})`,
  }

  return (
    <Layout>
      {projData ? (
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
              <IsLoggedIn mockupLink={projDetails.projectMockupLink} />
            </div>
          </div>
        </div>
      ) : (
        <div className="project-detailed-view">
          <div className="background-image" style={styles}></div>
          <div className="content">
            <h1>LOADING</h1>
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
              <IsLoggedIn mockupLink={projDetails.projectMockupLink} />
            </div>
          </div>
        </div>
      )}
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
