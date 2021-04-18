import React from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import DownArrows from "../components/animations/down-arrows/DownArrows"
import ProjectData from "../data/projectData"
import ProjectCard from "../components/project_card/ProjectCard"

export default function ProjectArchive() {
  return (
    <Layout>
      <SEO title="Project Archive" />
      <div className="index-hero">
        <h1>
          <span className="mint-green">{"<"}</span>
          SelfTaughtDev
          <span className="mint-green">{"/>"}</span>
        </h1>
        <button className="btn-style-1 min-width-200">How It Works</button>
        <DownArrows />
      </div>
      <div className="project-previews">
        {ProjectData.map(project => {
          return (
            <ProjectCard
              project={project}
              key={project.imgUrl}
              addClass={project.isFreeProject}
            />
          )
        })}
      </div>
    </Layout>
  )
}
