exports.handler = async (event, context) => {
  console.log("handle-new-user.js")
  console.log(event)
  console.log(context)
  return {
    statusCode: 200,
    body: "",
  }
}
