const stripe = require("stripe")(process.env.STRIPE_TEST_SECRET_KEY)
import fetch from "node-fetch"

exports.handler = async ({ body, headers }, context) => {
  console.log(context.clientContext)
  console.log(body)
  console.log(headers)
  try {
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_SECRET
    )

    if (stripeEvent.type === "customer.subscription.updated") {
      const subscription = stripeEvent.data.object

      const stripeID = subscription.customer
      const plan = subscription.items.data[0].plan.product

      let role

      if (plan === "prod_IEpyz9rFw9BajF") {
        role = "pro"
      } else if (plan === "prod_IEpydWylJ6pcS8") {
        role = "free"
      }

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
        query ($stripeID: ID!) {
          getUserByStripeID(stripeID: $stripeID){
            netlifyID
          }
        }
      `
      const variables = { stripeID }

      const result = await faunaFetch({ query, variables })
      const netlifyID = result.data.getUserByStripeID.netlifyID

      const { identity } = context.clientContext
      const response = await fetch(`${identity.url}/admin/users/${netlifyID}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${identity.token}`,
        },
        body: JSON.stringify({
          app_metadata: {
            roles: [role],
          },
        }),
      })
        .then(res => res.json())
        .catch(err => console.error(err))
    } else if (stripeEvent.type === "customer.subscription.deleted") {
      const subscription = stripeEvent.data.object

      const stripeID = subscription.customer

      let role = free

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
        query ($stripeID: ID!) {
          getUserByStripeID(stripeID: $stripeID){
            netlifyID
          }
        }
      `
      const variables = { stripeID }

      const result = await faunaFetch({ query, variables })
      const netlifyID = result.data.getUserByStripeID.netlifyID

      const { identity } = context.clientContext
      const response = await fetch(`${identity.url}/admin/users/${netlifyID}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${identity.token}`,
        },
        body: JSON.stringify({
          app_metadata: {
            roles: [role],
          },
        }),
      })
        .then(res => res.json())
        .catch(err => console.error(err))
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    }
  } catch (err) {
    console.log(`Stripe webhook failed with ${err}`)

    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    }
  }
}
