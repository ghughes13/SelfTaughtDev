const fetch = require("node-fetch")

exports.handler = async e => {
  const { user } = JSON.parse(e.body)
  console.log(JSON.stringify(user, null, 2))

  const netlifyID = user.id

  const stripeID = 1

  const response = await fetch("https://graphql.fauna.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SERVER_KEY}`,
    },
    body: JSON.stringify({
      query: `
      mutation ($netlifyID: ID! $stripeID: ID!) {
        createUser(data: {netlifyID: $netlifyID, stripeID: $stripeID}) {
          netlifyID
          stripeID
        }
      }`,
      variables: {
        netlifyID,
        stripeID,
      },
    }),
  })
    // .then(res => res.json())
    .catch(err => console.error(JSON.stringify(err)))

  console.log({ response })

  return {
    statusCode: 200,
    body: JSON.stringify({ app_metadata: { roles: ["Lite"] } }),
  }
}
