import React from "react"
import { useIdentityContext } from "react-netlify-identity-gotrue"
import { loadStripe } from "@stripe/stripe-js"

export default function ManageSub({ innerText, classList, productID }) {
  const btnText = innerText || "Manage Subscription"
  const identity = useIdentityContext()
  const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)
  const stripe = stripePromise

  function redirectToCheckoutSession() {
    if (identity.user) {
      identity
        .authorizedFetch("/.netlify/functions/create-manage-link", {
          method: "POST",
          body: JSON.stringify({
            product: productID,
          }),
        })
        .then(res => res.json())
        .then(stripeSessionID => {
          stripe.redirectToCheckout({
            sessionID: stripeSessionID,
          })
        })
        .catch(err => console.error(err))
    } else {
      console.log("not logged in")
    }
  }

  return (
    <a
      className="manage-sub-btn btn-style-1 demo-btn"
      onClick={redirectToCheckoutSession}
    >
      {btnText}
    </a>
  )
}
