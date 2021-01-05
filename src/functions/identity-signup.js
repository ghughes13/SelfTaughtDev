exports.handler = async (event, context) => {
  console.log("IT WORKED IN SIGNUP?!")
  return {
    statusCode: 200,
    body: JSON.stringify({ app_metadata: { roles: ["free"] } }),
  }
}
