import React, { useState } from "react"
import { useIdentityContext } from "react-netlify-identity-gotrue"
import { useForm } from "react-hook-form"
import { Link } from "gatsby"
import Loader from "../animations/loader/Loader"

import "./login-screen.scss"

const LoginForm = ({
  pageTitle,
  formTitle,
  urlToPostTo,
  btnText,
  successMessage,
  navigateTarget,
}) => {
  const identity = useIdentityContext()
  const { register, handleSubmit, errors } = useForm()
  const [formError, setFormError] = useState(false)
  const [loggingIn, setLoggingIn] = useState(false)

  const onSubmit = async data => {
    setLoggingIn(true)
    setFormError(false)

    await identity
      .login({ email: data.email, password: data.password })
      .then(res => {
        setLoggingIn(false)
      })
      .catch(e => {
        setLoggingIn(false)
        setFormError(e.message)
      })
  }

  let isLoggedIn = identity.user

  return (
    <div className="login-screen">
      <h1>Sign In</h1>
      <form
        id={formTitle}
        method="POST"
        encType="multipart/form-data"
        name={formTitle}
        action={urlToPostTo}
        onSubmit={handleSubmit(onSubmit)}
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
                ref={register({
                  required: true,
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                type="email"
                placeholder="Email"
                name="email"
                id="email"
              />
              {errors.email && <p className="error-msg">Email is required</p>}
            </label>
            <label htmlFor="password">
              <input
                ref={register({ required: true })}
                className="margin-top-input"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
              />
              {errors.password && (
                <p className="error-msg">Password is required</p>
              )}
            </label>
            {loggingIn ? (
              <Loader />
            ) : (
              <button id="sbmt-form-btn" className="btn-style-1" type="submit">
                Login
              </button>
            )}
          </div>
        )}
        <div id="thanks">
          <p>
            This shouldn't show up. You should just be taken to the project
            archive main screen
          </p>
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
