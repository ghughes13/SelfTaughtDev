const fetch = require(`node-fetch`)
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

// import * as data from "./src/data/projectData.json"

exports.createPages = ({ boundActionCreators }) => {
  const data = require("./src/data/projectData.json")
  const { createPage } = boundActionCreators

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

  const projectDlData = query({
    query: `
    query {
      Project_Data {
        project_mockup_link_pro
        project_mockup_link_lite
        project_title
      }
    }
    
    `,
  }).then(
    data.forEach(indvProjectData => {
      let dbProjectInfo

      console.log(projectDlData)
      for (let i = 0; i < projectDlData; i++) {
        if (indvProjectData.projectTitle === DBProj[i].project_title) {
          dbProjectInfo = DBProj[i]
        }
      }

      createPage({
        path: `/${indvProjectData.projectTitle}`,
        component: slash(pageTemplate),
        context: {
          projectObs: indvProjectData,
          downloadData: dbProjectInfo,
        },
      })
    })
  )
}
