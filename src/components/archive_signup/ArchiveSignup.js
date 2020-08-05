import React from "react"

import "./archive-signup.scss"
import Loader from "../loader/Loader"

const archiveSignup = () => (
  <div className="archive-signup-lp">
    <img
      className="logo"
      src={require("../../svgs/selftaughtdev-logo-mini.svg")}
      alt="logo"
    />
    <h1>Get notified when the Project Archive launches.</h1>
    <form
      id="archive-notification-form"
      method="POST"
      name="Archive Notification LP"
      action="/archive-notification-lp/#thanks"
      onSubmit={e => {
        e.preventDefault()
        const submitButton = document.getElementById("sbmt-form-btn")
        const loader = document.querySelector(".loader")
        const formName = document.getElementById("archive-notification-form")

        loader.style.display = "block"
        submitButton.style.display = "none"

        fetch(formName.getAttribute("action"), {
          method: "POST",
          body: new FormData(formName),
        })
          .then(res => {
            console.log(res)
            if (res.status === 200) {
              document.querySelector("#vendor-lp").style.display = "none"
              document.querySelector(".contact-thank-you").style.display =
                "block"
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

            console.log(error)
          })
      }}
      netlify="true"
      netlify-honeypot="bot-field"
    >
      <div className="form-info-div">
        <input type="hidden" name="bot-field" id="bot" />
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Name" name="name" id="name" />
        <label htmlFor="email">email</label>
        <input
          className="margin-top-input"
          type="email"
          name="email"
          placeholder="Email"
          id="email"
        />
        <button id="sbmt-form-btn" type="submit">
          Let me know when it launches!
        </button>
      </div>
      <div id="thanks">
        <p>
          Thanks for signing up! You'll get an email confirmation and we'll let
          you know when the Project Archive Launches!
        </p>
      </div>
      <Loader />
      <p id="error-msg">
        Error submitting form. <br />
        Ensure all fields are filled out.
      </p>
    </form>
  </div>
)

export default archiveSignup
