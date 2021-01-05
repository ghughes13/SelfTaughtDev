const fetch = require(`node-fetch`)
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = ({ boundActionCreators }) => {
  const data = require("./src/data/projectData.json")
  const { createPage } = boundActionCreators

  const pageTemplate = path.resolve(
    "./src/templates/project_detailed_view/projectDetailedView.js"
  )

  function query({ query }) {
    const result = fetch(process.env.HASURA_API_URL, {
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
        project_mockup_link_pro
        project_mockup_link_lite
        project_title
      }
    }
    
    `,
  }).then(res => {
    data.forEach(indvProjectData => {
      let dbProjectInfo = res

      createPage({
        path: `/${indvProjectData.projectTitle}`,
        component: slash(pageTemplate),
        context: {
          projectObs: indvProjectData,
          downloadData: dbProjectInfo,
        },
      })
    })
  })
}
