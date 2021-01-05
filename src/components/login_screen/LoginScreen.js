import React from "react"
import GoTrue from "gotrue-js"

import "./login-screen.scss"
import Loader from "../loader/Loader"

const mailingListSignup = ({
  pageTitle,
  formTitle,
  urlToPostTo,
  btnText,
  successMessage,
}) => {
  const auth = new GoTrue({
    APIUrl: "https://selftaught-dev.com/.netlify/identity",
    audience: "",
    setCookie: true,
  })

  const submitForm = () => {
    const password = document.getElementById("password").value
    const email = document.getElementById("email").value

    auth
      .login(password, email, true)
      .then(response => {
        console.log("Success! Response: " + JSON.stringify({ response }))
      })
      .catch(error => console.log("Failed :( " + JSON.stringify(error)))
  }

  return (
    <div className="login-screen">
      <h1>Sign In</h1>
      <form
        id={formTitle}
        method="POST"
        encType="multipart/form-data"
        name={formTitle}
        action={urlToPostTo}
        onSubmit={e => {
          e.preventDefault()
          submitForm()
        }}
      >
        <div className="form-info-div">
          <label htmlFor="email">
            Email
            <input type="email" placeholder="Email" name="email" id="email" />
          </label>
          <label htmlFor="password">
            Password
            <input
              className="margin-top-input"
              type="password"
              name="password"
              placeholder="Password"
              id="password"
            />
          </label>
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
}

export default mailingListSignup
