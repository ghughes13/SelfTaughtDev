const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
import fetch from "node-fetch"
const faunaFetch = require("./fauna").default

exports.handler = async (event, context) => {
  const { user } = context.clientContext

  console.log(user)

  const query = `
  query ($netlifyID: ID!) {
    getUserByNetlifyID(netlifyID: $netlifyID) {
      stripeID
      netlifyID
    }
  }
  `

  const variables = { netlifyID: user.sub }

  console.log(
    "==========================MADE IT TO THE AWAIT============================="
  )

  const result = async (query, variables) => {
    return await fetch("https://graphql.fauna.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.FAUNA_SERVER_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
      .then(res => console.log(res))
      .catch(err => {
        console.log("error")
        console.error(JSON.stringify(err, null, 2))
      })
  }

  // const stripeID = result.data.getUserByNetlifyID.stripeID

  console.log(result)
  // console.log(stripeID)

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  }
}
