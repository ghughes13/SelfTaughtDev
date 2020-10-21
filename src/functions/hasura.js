import fetch from "node-fetch"

exports.handler = async () => {
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

  exports.query = query

  const projects = await query({
    query: `
    query {
      Project_Data {
        project_mockup_link_pro
        project_mockup_link_lite
        project_title
      }
    }
    
    `,
  }).then(res => console.log(res))

  return {
    statusCode: 200,
    body: JSON.stringify(projects),
  }
}

// project_skills_lite
// project_mockup_link_pro
// project_img_relative_url
// project_mockup_link_lite
// project_video_instructions_url_pro
// project_video_istructions_url_lite
// project_title
