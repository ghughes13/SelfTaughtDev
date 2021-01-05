import React from "react"

import "./mailing-list-signup.scss"
import Loader from "../loader/Loader"

const mailingListSignup = ({
  pageTitle,
  formTitle,
  urlToPostTo,
  btnText,
  successMessage,
}) => (
  <div className="mailing-list-signup">
    <h1>{pageTitle}</h1>
    <form
      id={formTitle}
      method="POST"
      encType="multipart/form-data"
      name={formTitle}
      action={urlToPostTo}
      onSubmit={e => {
        e.preventDefault()
        const submitButton = document.getElementById("sbmt-form-btn")
        const loader = document.querySelector(".loader")
        const formName = document.getElementById(formTitle)

        loader.style.display = "block"
        submitButton.style.display = "none"

        fetch(formName.getAttribute("action"), {
          method: "POST",
          body: new FormData(document.getElementById(formTitle)),
        })
          .then(res => {
            if (res.status === 200) {
              document.querySelector(".form-info-div").style.display = "none"
              document.getElementById("thanks").style.display = "flex"
              loader.style.display = "none"
            } else {
              loader.style.display = "none"
              document.getElementById("error-msg").style.display = "block"
              submitButton.style.display = "block"
            }
          })
          .catch(error => {
            loader.style.display = "none"
            document.getElementById("error-msg").style.display = "block"
            submitButton.style.display = "block"
          })
      }}
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
          <input type="checkbox" name="optin" id="optin" required />
          <label htmlFor="optin" id="optin-label">
            I acknowledge that I am also signing up for the SelfTaughtDev free
            email newsletter.{" "}
          </label>
        </div>
        <button id="sbmt-form-btn" type="submit">
          {btnText}
        </button>
      </div>
      <div id="thanks">
        <p>{successMessage}</p>
      </div>
      <Loader />
      <p id="error-msg">
        Error submitting form. <br />
        Ensure all fields are filled out.
      </p>
    </form>
  </div>
)

export default mailingListSignup
