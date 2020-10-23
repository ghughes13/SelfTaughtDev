import React from "react"
import { useIdentityContext } from "react-netlify-identity-widget"

export default function ManageSub({ innerText, classList }) {
  const btnText = innerText || "Manage Subscription"
  const identity = useIdentityContext()

  function redirectToManage() {
    const token = identity.user.token

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
  }

  return (
    <button className="manage-sub-btn" onClick={redirectToManage()}>
      {btnText}
    </button>
  )
}
