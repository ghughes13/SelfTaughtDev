exports.handler = async (e) => {
  const { user } = JSON.parse(e.body);
  console.log(JSON.stringify(user, null, 2))

  return {
    statusCode: 200,
    body: JSON.stringify({app_metadata: { roles: ['sub:free'] }})
  }
}