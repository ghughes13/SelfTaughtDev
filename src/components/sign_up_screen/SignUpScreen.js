import React from "react"

import "./sign-up-screen.scss"
import Loader from "../loader/Loader"

const SignUpScreen = ({
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
    <h1>Sign Up</h1>
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
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          id="firstName"
        />
        <label htmlFor="name">Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          id="lastName"
        />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Email" id="email" />
        <label htmlFor="name">Username</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          id="username"
        />
        <label htmlFor="name">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
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

export default SignUpScreen
