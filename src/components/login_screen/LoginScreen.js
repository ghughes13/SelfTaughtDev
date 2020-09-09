import React from "react"

import "./login-screen.scss"
import Loader from "../loader/Loader"

const mailingListSignup = ({
  pageTitle,
  formTitle,
  urlToPostTo,
  btnText,
  successMessage,
}) => (
  <div className="mailing-list-signup">
    <img
      className="logo"
      src={require("../../svgs/selftaughtdev-logo-mini.svg")}
      alt="logo"
    />
    <h1>Sign In</h1>
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
    >
      <div className="form-info-div">
        <label htmlFor="name">Username</label>
        <input type="text" placeholder="Username" name="name" id="name" />
        <label htmlFor="email">Password</label>
        <input
          className="margin-top-input"
          type="password"
          name="email"
          placeholder="Password"
          id="email"
        />
        <button id="sbmt-form-btn" type="submit">
          Login
        </button>
      </div>
      <div id="thanks">
        <p>
          This shouldn't show up. You should just be taken to the project
          archive main screen
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

export default mailingListSignup
