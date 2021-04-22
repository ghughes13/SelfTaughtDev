import React from "react"

import Layout from "../../components/layout/Layout"
import SEO from "../../components/seo"
import DownArrows from "../../components/animations/down-arrows/DownArrows"
import ProjectData from "../../data/projectData"
import ProjectCard from "../../components/project_card/ProjectCard"

export default function ProjectArchive() {
  return (
    <Layout>
      <SEO title="Project Archive" />
      <div className="index-hero">
        <h1>
          <span className="mint-green">{"<"}</span>
          Project Archive
          <span className="mint-green">{"/>"}</span>
        </h1>
        <h3 className="page-title">
          Practice Projects For Front End Developers
        </h3>
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
