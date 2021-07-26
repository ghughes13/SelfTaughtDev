const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

exports.handler = async (event, context) => {
  const parsedEventBody = JSON.parse(event.body)
  const stripeID = parsedEventBody.stripeID
  const projectName = parsedEventBody.projectTitle

  let productID
  let priceID

  if (projectName === "IssueTracker") {
    priceID = "price_1IQvCUJqkXITmJSIUtJqT25e"
    productID = "prod_J31EYrgJg2dvJf"
  } else if (projectName === "Sudoku") {
    priceID = "price_1IQvD5JqkXITmJSIdQQUGh7O"
    productID = "prod_J31FDwc9xbeAEO"
  } else if (projectName === "Pokedex") {
    priceID = "price_1IQvEAJqkXITmJSIcXSNukIn"
    productID = "prod_J31GrQGlLLzHw0"
  } else if (projectName === "MemoryGame") {
    priceID = "price_1IQvEsJqkXITmJSIldcxpF91"
    productID = "prod_J31H33OC5MBsda"
  } else if (projectName === "WeatherApp") {
    priceID = "price_1IQvFJJqkXITmJSIK72ajNdj"
    productID = "prod_J31HUVBgLkIJEX"
  } else if (projectName === "GifSearchTool") {
    priceID = "price_1IQvFfJqkXITmJSIBZ45wOKs"
    productID = "prod_J31IRLfOgay1sd"
  } else if (projectName === "PhraseGuessingGame") {
    priceID = "price_1IQvG1JqkXITmJSIaxAe1dXd"
    productID = "prod_J31INdMFMiVMyc"
  } else if (projectName === "PatternMatchingGame") {
    priceID = "price_1IQvGMJqkXITmJSIIKwSAo43"
    productID = "prod_J31Icr6VxBvdef"
  } else if (projectName === "QuizApp") {
    priceID = "price_1JHYIKJqkXITmJSI14Dos9HH"
    productID = "prod_JvP6WyIlOPtnh3"
  } else if (projectName === "CheckoutForm") {
    priceID = "price_1JHYpAJqkXITmJSI6Yg7obZE"
    productID = "prod_JvPedxmGqF6dy7"
  }

  const session = await stripe.checkout.sessions.create({
    success_url: `https://selftaught-dev.com/success`,
    cancel_url: `https://selftaught-dev.com/cancel`,
    customer: stripeID,
    payment_method_types: ["card"],
    line_items: [{ price: priceID, quantity: 1 }],
    mode: "payment",
    metadata: {
      product_id: productID,
    },
  })

  return {
    statusCode: 200,
    body: JSON.stringify({ id: session.id }),
  }
}
