const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
import faunaFetch from "./utils/fauna"

exports.handler = async (event, context) => {
  console.log(context)
  const { user } = context.clientContext

  const query = `
  query ($netlifyID: ID!) {
    getUserByNetlifyID(netlifyID: $netlifyID) {
      stripeID
      netlifyID
    }
  }
  `

  const variables = { netlifyID: user.sub }

  const result = await faunaFetch({ query, variables })

  const stripeID = result.data.getUserByNetlifyID.stripeID

  console.log(result)
  console.log(stripeID)

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  }
}
