const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
// import fetch from "node-fetch"

exports.handler = async (event, context) => {
  // const { user } = context.clientContext
  console.log(context.clientContext)
  console.log(event.body)

  const productID = event.body.product

  // const faunaFetch = async ({ query, variables }) => {
  //   return await fetch("https://graphql.fauna.com/graphql", {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${process.env.FAUNA_SERVER_KEY}`,
  //     },
  //     body: JSON.stringify({
  //       query,
  //       variables,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .catch(err => console.error(JSON.stringify(err, null, 2)))
  // }

  // const query = `
  //   query ($netlifyID: ID!) {
  //     getUserByNetlifyID(netlifyID: $netlifyID){
  //       stripeID
  //       netlifyID
  //     }
  //   }
  // `
  // const variables = { netlifyID: user.sub }

  // const result = await faunaFetch({ query, variables })

  // const stripeID = result.data.getUserByNetlifyID.stripeID

  // const returnTo = "https://selftaught-dev.com/payment-plan-change-notice"

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: productID,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `https://selftaught-dev.com/success`,
    cancel_url: `https://selftaught-dev.com/cancel`,
  })

  return {
    statusCode: 200,
    body: JSON.stringify({ id: session.id }),
  }
}
