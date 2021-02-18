import React from "react"
import { useIdentityContext } from "react-netlify-identity-gotrue"

export default function ManageSub({ innerText, classList }) {
  const btnText = innerText || "Manage Subscription"
  const identity = useIdentityContext()

  function redirectToManage() {
    if (identity.user) {
      identity
        .authorizedFetch("/.netlify/functions/create-manage-link", {
          method: "POST",
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
