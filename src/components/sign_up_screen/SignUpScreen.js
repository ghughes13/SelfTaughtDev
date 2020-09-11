import React from "react"
import axios from "axios"

import "./sign-up-screen.scss"
import Loader from "../loader/Loader"

const SignUpScreen = ({
  pageTitle,
  formTitle,
  urlToPostTo,
  btnText,
  successMessage,
}) => {
  const submitForm = () => {
    axios
      .post(
        "https://selftaught-dev.com/.netlify/functions/newUser",
        JSON.stringify({
          userName: document.getElementById("username").value,
          password: document.getElementById("password").value,
          firstName: document.getElementById("firstName").value,
          lastName: document.getElementById("lastName").value,
          email: document.getElementById("email").value,
        })
      )
      .then(response => {
        if (response.status === 200) {
          console.log("IT WORKED MAYBE?")
        }
      })
      .catch(error => {
        console.error(error)
        console.log("FAILED ):")
      })
  }

  return (
    <div className="mailing-list-signup">
      <img
        className="logo"
        src={require("../../svgs/selftaughtdev-logo-mini.svg")}
        alt="logo"
      />
      <h1>Sign Up</h1>
      <form
        id={formTitle}
        name={formTitle}
        onSubmit={e => {
          submitForm()
          e.preventDefault()
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
}

export default SignUpScreen
