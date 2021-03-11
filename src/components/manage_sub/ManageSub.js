import React from "react"
import { useIdentityContext } from "react-netlify-identity-gotrue"
import { loadStripe } from "@stripe/stripe-js"
const stripePromise = loadStripe(
  "pk_live_51HOpV2JqkXITmJSIX9u1xJfBxbpWXDMbh6wl97LOvbDfCiD9v5hMW2lVyILd27448QFnJcZWpzZ8dDwTEWoEULbd006bvmFUIt"
)

export default function ManageSub({ innerText, classList, projectTitle }) {
  const btnText = innerText || "Manage Subscription"
  const identity = useIdentityContext()
  let stripeID

  if (identity.user && identity.user.app_metadata.stripeCustomerID) {
    stripeID = identity.user.app_metadata.stripeCustomerID
  }

  const redirectToCheckoutSession = async event => {
    const stripe = await stripePromise

    if (identity.user) {
      identity
        .authorizedFetch("/.netlify/functions/create-manage-link", {
          method: "POST",
          body: JSON.stringify({
            projectTitle: projectTitle,
            stripeID: stripeID,
          }),
        })
        .then(res => res.json())
        .then(stripeSessionID => {
          stripe.redirectToCheckout({
            sessionId: stripeSessionID.id,
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
