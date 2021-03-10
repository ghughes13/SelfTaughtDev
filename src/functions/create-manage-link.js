const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
// import fetch from "node-fetch"

exports.handler = async (event, context) => {
  const productID = event.body.product

  const session = await stripe.checkout.sessions.create({
    success_url: `https://selftaught-dev.com/success`,
    cancel_url: `https://selftaught-dev.com/cancel`,
    payment_method_types: ["card"],
    line_items: [{ price: "prod_J31DcDunyXG7qG", quantity: 1 }],
    mode: "payment",
  })

  return {
    statusCode: 200,
    body: JSON.stringify({ id: session.id }),
  }
}
