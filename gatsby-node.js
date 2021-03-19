const fetch = require(`node-fetch`)
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ actions }) => {
  const data = require("./src/data/projectData.json")
  const { createPage } = actions

  const pageTemplate = path.resolve(
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
      .catch(err => console.error(JSON.stringify(err, null, 2)))

    return result.data
  }

  query({
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
    data.map(async indvProjectData => {
      let projectToPassDown

      res.Project_Data.forEach(project => {
        if (project.project_title === indvProjectData.projectTitle) {
          projectToPassDown = project
        }
      })

      await createPage({
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
