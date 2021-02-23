import React, { useState } from "react"
import { useForm } from "react-hook-form"

import "./mailing-list-signup.scss"
import Loader from "../animations/loader/Loader"

const MailingListSignup = ({
  pageTitle,
  formTitle,
  urlToPostTo,
  btnText,
  successMessage,
}) => {
  const { register, handleSubmit, errors } = useForm()
  const [formError, setFormError] = useState(false)
  const [signingUp, setSigningUp] = useState(false)

  const onSubmit = async data => {
    setSigningUp(true)
    setFormError(false)

    const formName = document.getElementById(formTitle)

    fetch(formName.getAttribute("action"), {
      method: "POST",
      body: new FormData(document.getElementById(formTitle)),
    })
      .then(res => {
        if (res.status === 200) {
          document.querySelector(".form-info-div").style.display = "none"
          document.getElementById("thanks").style.display = "flex"
        }
      })
      .catch(e => {
        setFormError(e.message)
      })
  }

  return (
    <div className="mailing-list-signup">
      <h1>{pageTitle}</h1>
      <form
        id={formTitle}
        method="POST"
        encType="multipart/form-data"
        name={formTitle}
        action={urlToPostTo}
        onSubmit={handleSubmit(onSubmit)}
        netlify="true"
        netlify-honeypot="bot-field"
      >
        <div className="form-info-div">
          <input type="hidden" name="form-name" value={formTitle} />
          <input type="hidden" name="bot-field" id="bot" />
          <label htmlFor="name">
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
          </label>
          <label htmlFor="email">
            <input
              className="margin-top-input"
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              required
            />
          </label>
          <div className="optin-box">
            <label htmlFor="optin" id="optin-label">
              <input type="checkbox" name="optin" id="optin" required />I
              acknowledge that I am also signing up for the SelfTaughtDev free
              email newsletter.{" "}
            </label>
          </div>
          {signingUp ? (
            <Loader />
          ) : (
            <button id="sbmt-form-btn" type="submit">
              {btnText}
            </button>
          )}
        </div>
        <div id="thanks">
          <p>{successMessage}</p>
        </div>
        <p id="error-msg">
          Error submitting form. <br />
          Ensure all fields are filled out.
        </p>
      </form>
    </div>
  )
}

export default MailingListSignup
