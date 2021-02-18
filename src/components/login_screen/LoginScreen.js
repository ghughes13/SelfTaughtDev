import React, { useState, useEffect } from "react"
import { useIdentityContext } from "react-netlify-identity-gotrue"
import { useForm } from "react-hook-form"
import { navigate, Link } from "gatsby"

import "./login-screen.scss"
import Loader from "../animations/loader/Loader"

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

  useEffect(() => {
    navigateTarget && identity.user && navigate(navigateTarget)
  }, [navigateTarget, identity.user])

  const onSubmit = async data => {
    setLoggingIn(true)
    setFormError(false)

    await identity
      .login({ email: data.email, password: data.password })
      .then(res => {
        console.log(res)
        setLoggingIn(false)
        navigateTarget && navigate(navigateTarget)
      })
      .catch(e => {
        setLoggingIn(false)
        setFormError(e.message)
      })
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
        onSubmit={handleSubmit(onSubmit)}
      >
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
            <button id="sbmt-form-btn" type="submit">
              Login
            </button>
          )}
        </div>
        <div id="thanks">
          <p>
            This shouldn't show up. You should just be taken to the project
            archive main screen
          </p>
        </div>
        <Loader />
        {formError && (
          <p id="error-msg" class="error-msg">
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
