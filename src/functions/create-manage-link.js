const stripe = require("stripe")(process.env.STRIPE_TEST_SECRET_KEY)
import fetch from "node-fetch"

exports.handler = async (event, context) => {
  const { user } = context.clientContext

  const faunaFetch = async ({ query, variables }) => {
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
      .then(res => res.json())
      .catch(err => console.error(JSON.stringify(err, null, 2)))
  }

  const query = `
    query ($netlifyID: ID!) {
      getUserByNetlifyID(netlifyID: $netlifyID){
        stripeID
        netlifyID
      }
    }
  `
  const variables = { netlifyID: user.sub }

  const result = await faunaFetch({ query, variables })

  const stripeID = result.data.getUserByNetlifyID.stripeID

  const returnTo = "https://selftaught-dev.com/payment-plan-change-notice"

  const link = await stripe.billingPortal.sessions.create({
    customer: stripeID,
    return_url: returnTo,
  })

  return {
    statusCode: 200,
    body: JSON.stringify(link.url),
  }
}
