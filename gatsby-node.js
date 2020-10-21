const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

// import * as data from "./src/data/projectData.json"

exports.createPages = ({ boundActionCreators }) => {
  const data = require("./src/data/projectData.json")
  const { createPage } = boundActionCreators

  const pageTemplate = path.resolve(
    "./src/templates/project_detailed_view/projectDetailedView.js"
  )

  const projectDlData = fetch("/.netlify/functions/hasura").then(res =>
    console.log(res)
  )

  data.forEach(indvProjectData => {
    createPage({
      path: `/${indvProjectData.projectTitle}`,
      component: slash(pageTemplate),
      context: {
        projectObs: indvProjectData,
        downloadData: projectDlData,
      },
    })
  })
}
