const stripe = require("stripe")(process.env.STRIPE_TEST_SECRET_KEY)
// import fetch from "node-fetch"

exports.handler = async (event, context) => {
  // const projectName = event.body.product
  // let projectID

  // if (plan === "FloobleHomepage") {
  //   //Flooble Homepage
  //   projectID = "prod_J31BiV5A48O0s3"
  // } else if (plan === "prod_J31DcDunyXG7qG") {
  //   //JavaScript Clock
  //   newRole = "JavaScriptClock"
  // } else if (plan === "prod_J31EHFHuvLiCxe") {
  //   //To-Do List App
  //   newRole = "To-DoListApp"
  // } else if (plan === "prod_J31EZti9Iv8x5A") {
  //   //Stock Quote App
  //   newRole = "Stonks"
  // } else if (plan === "prod_J31EYrgJg2dvJf") {
  //   //Issue Tracker
  //   newRole = "IssueTracker"
  // } else if (plan === "prod_J31FDwc9xbeAEO") {
  //   //Sudoku
  //   newRole = "Sudoku"
  // } else if (plan === "prod_J31GrQGlLLzHw0") {
  //   //Pokedex
  //   newRole = "Pokedex"
  // } else if (plan === "prod_J31H33OC5MBsda") {
  //   //Memory Game
  //   newRole = "MemoryGame"
  // } else if (plan === "prod_J31HUVBgLkIJEX") {
  //   //Weather App
  //   newRole = "WeatherApp"
  // } else if (plan === "prod_J31IRLfOgay1sd") {
  //   //GIF Search Tool
  //   newRole = "GifSearchTool"
  // } else if (plan === "prod_J31INdMFMiVMyc") {
  //   //Phrase Guessing Game
  //   newRole = "PhraseGuessingGame"
  // } else if (plan === "prod_J31Icr6VxBvdef") {
  //   //Pattern Matching Game
  //   newRole = "PatternMatchingGame"
  // }

  const session = await stripe.checkout.sessions.create({
    success_url: `https://selftaught-dev.com/success`,
    cancel_url: `https://selftaught-dev.com/cancel`,
    payment_method_types: ["card"],
    line_items: [{ price: "price_1ITnNDJqkXITmJSIK8hEo3zq", quantity: 1 }],
    mode: "payment",
    metadata: {
      product: "pattern",
    },
  })

  console.log(session.id)

  return {
    statusCode: 200,
    body: JSON.stringify({ id: session.id }),
  }
}
