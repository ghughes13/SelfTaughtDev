import React from "react"
import { useIdentityContext } from "react-netlify-identity-widget"

export default function ManageSub({ innerText, classList }) {
  const btnText = innerText || "Manage Subscription"
  const identity = useIdentityContext()

  function redirectToManage() {
    if (
      identity &&
      identity.user &&
      identity.user.token &&
      identity.user.token.access_token
    ) {
      const token = identity.user.token.access_token
      fetch("/.netlify/functions/create-manage-link", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => res.json())
        .then(link => {
          window.location.href = link
        })
        .catch(err => console.error(err))
    } else {
      console.log("not logged in")
    }
  }

  return (
    <a
      className="manage-sub-btn btn-style-1 demo-btn"
      onClick={redirectToManage}
    >
      {btnText}
    </a>
  )
}
