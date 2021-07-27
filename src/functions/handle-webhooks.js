const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
import fetch from "node-fetch"

exports.handler = async ({ body, headers }, context) => {
  try {
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_SECRET_LIVE
    )

    if (stripeEvent.type === "checkout.session.completed") {
      const purchase = stripeEvent.data.object
      const stripeID = purchase.customer
      const productID = purchase.metadata.product_id

      let newRole

      if (productID === "prod_J31BiV5A48O0s3") {
        //Flooble Homepage
        newRole = "FloobleHomepage"
      } else if (productID === "prod_J31DcDunyXG7qG") {
        //JavaScript Clock
        newRole = "JavaScriptClock"
      } else if (productID === "prod_J31EHFHuvLiCxe") {
        //To-Do List App
        newRole = "To-DoListApp"
      } else if (productID === "prod_J31EZti9Iv8x5A") {
        //Stock Quote App
        newRole = "Stonks"
      } else if (productID === "prod_J31EYrgJg2dvJf") {
        //Issue Tracker
        newRole = "IssueTracker"
      } else if (productID === "prod_J31FDwc9xbeAEO") {
        //Sudoku
        newRole = "Sudoku"
      } else if (productID === "prod_J31GrQGlLLzHw0") {
        //Pokedex
        newRole = "Pokedex"
      } else if (productID === "prod_J31H33OC5MBsda") {
        //Memory Game
        newRole = "MemoryGame"
      } else if (productID === "prod_J31HUVBgLkIJEX") {
        //Weather App
        newRole = "WeatherApp"
      } else if (productID === "prod_J31IRLfOgay1sd") {
        //GIF Search Tool
        newRole = "GifSearchTool"
      } else if (productID === "prod_J31INdMFMiVMyc") {
        //Phrase Guessing Game
        newRole = "PhraseGuessingGame"
      } else if (productID === "prod_J5zLyjuxivbVGa") {
        //Pattern Matching Game
        newRole = "PatternMatchingGame"
      } else if (productID === "prod_JvP6WyIlOPtnh3") {
        //Pattern Matching Game
        newRole = "QuizApp"
      } else if (productID === "prod_JvPedxmGqF6dy7") {
        //Pattern Matching Game
        newRole = "CheckoutForm"
      }

      const faunaFetch = ({ query, variables }) => {
        fetch("https://graphql.fauna.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.FAUNA_SERVER_KEY}`,
          },
          body: JSON.stringify({
            query,
            variables,
          }),
        })
          .then(res => {
            console.log(res.json())
            res.json()
          })
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

      const userCurrentRoles = await fetch(
        `${identity.url}/admin/users/${netlifyID}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${identity.token}`,
          },
        }
      )
        .then(res => {
          res.json()
        })
        .then(data => data.app_metadata.roles)
        .catch(err => console.error(err))

      const { user } = context.clientContext

      const response = await fetch(`${identity.url}/admin/users/${netlifyID}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${identity.token}`,
        },
        body: JSON.stringify({
          app_metadata: {
            roles: [...userCurrentRoles, newRole],
          },
        }),
      })
        .then(res => {
          res.json()
        })
        .catch(err => console.error(err))
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    }
  } catch (err) {
    console.error(`Stripe webhook failed with ${err}`)

    // if (typeof err === "object") {
    //   if (err.message) {
    //     console.log("\nMessage: " + err.message)
    //   }
    //   if (err.stack) {
    //     console.log("\nStacktrace:")
    //     console.log("====================")
    //     console.log(err.stack)
    //   }
    // } else {
    //   console.log("dumpError :: argument is not an object")
    // }

    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    }
  }
}
