import React from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import DownArrows from "../components/down-arrows/DownArrows"
import ProjectCard from "../components/project_card/ProjectCard"

import * as projectData from "../data/projectData.json"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Project Archive" />
      <div className="index-hero">
        <div className="portfolio-link">
          <p>
            If you're here for my portfolio <br />{" "}
            <a href="/portfolio">Click Here</a>
          </p>
        </div>
        <h1>
          <span className="mint-green">{"<"}</span>
          SelfTaughtDev
          <span className="mint-green">{"/>"}</span>
        </h1>
        <h3 className="page-title">Project Archive</h3>
        <DownArrows />
      </div>
      <div className="project-previews">
        {/* {console.log(projectData)} */}
        {projectData.map(project => {
          // console.log(project)
          return <ProjectCard project={project} />
        })}
      </div>
    </Layout>
  )
}
