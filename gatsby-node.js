import fetch from `node-fetch`
import { resolve } from `path`
import { slash } from `gatsby-core-utils`
require("dotenv").config()

export async function createPages({ actions }) {
  const data = require("./src/data/projectData.json")
  const { createPage } = actions

  const pageTemplate = resolve(
    "./src/templates/project_detailed_view/projectDetailedView.js"
  )

  async function query({ query }) {
    const result = await fetch(process.env.HASURA_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
      },
      body: JSON.stringify({ query }),
    })
      .then(res => res.json())
      .catch(err => {
        console.error("THERE WAS AN ERROR")
        console.error(`==============${process.env.HASURA_API_URL}==========`)
        console.error(JSON.stringify(err, null, 2))
      })

    return result.data
  }

  await query({
    query: `
    query {
      Project_Data {
        project_title
        project_img_relative_url
        project_skills
        project_description
        free_project
        project_files_link
      }
    }
    
    `,
  }).then(res => {
    data.map(indvProjectData => {
      let projectToPassDown

      res.Project_Data.forEach(project => {
        if (project.project_title === indvProjectData.projectTitle) {
          projectToPassDown = project
        }
      })

      createPage({
        path: `/${indvProjectData.projectTitle.replace(/\s/g, "")}`,
        component: slash(pageTemplate),
        context: {
          projectObs: indvProjectData,
          downloadData: projectToPassDown,
        },
      })
    })
  })
}
