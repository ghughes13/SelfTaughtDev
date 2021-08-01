import React, { useState } from "react"
import { useIdentityContext } from "react-netlify-identity-gotrue"
import { useForm } from "react-hook-form"
import { Link } from "gatsby"
import Loader from "../Animations/Loader"

import "../LoginScreen/styles.scss"

const LoginForm = ({
  pageTitle,
  formTitle,
  urlToPostTo,
  btnText,
  successMessage,
  navigateTarget,
}) => {
  const identity = useIdentityContext()
  const [email, setEmail] = useState("guitarguy13@ymail.com")
  const [formError, setFormError] = useState(false)
  const [loggingIn, setLoggingIn] = useState(false)
  // const [formMessage, setFormMessage] = useState()

  const onSubmit = async e => {
    setLoggingIn(true)
    setFormError(false)

    e.preventDefault()
    await identity
      .sendPasswordRecovery({
        email,
      })
      // .then(() =>
      //   setFormMessage("Please check your email for a password recovery link")
      // )
      .catch(e => setFormError(e.message))
  }

  let isLoggedIn = identity.user

  return (
    <div className="login-screen">
      <h1>Password Reset</h1>
      <form
        id={formTitle}
        method="POST"
        encType="multipart/form-data"
        name={formTitle}
        action={urlToPostTo}
        onSubmit={onSubmit}
      >
        {isLoggedIn ? (
          <p className="white-text">
            You are currently logged in as <br />
            {identity.user.user_metadata.full_name}{" "}
          </p>
        ) : (
          <div className="form-info-div">
            <label htmlFor="email">
              <input
                // ref={register({
                //   required: true,
                //   pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                // })}
                type="email"
                placeholder="Email"
                name="email"
                id="email"
              />
            </label>
            <label htmlFor="password">
              <input
                // ref={register({ required: true })}
                className="margin-top-input"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
              />
            </label>
            {loggingIn ? (
              <Loader />
            ) : (
              <button id="sbmt-form-btn" className="btn-style-1" type="submit">
                Reset
              </button>
            )}
          </div>
        )}
        <div id="thanks">
          <p>Please check your email for a password recovery link</p>
        </div>
        {formError && (
          <p id="error-msg" className="error-msg">
            Error submitting form. <br />
            Ensure all fields are filled out.
          </p>
        )}
        <div className="other-options">
          <Link to="/new-user">Create Account</Link>
          <Link to="/new-user">Forgot Password</Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
