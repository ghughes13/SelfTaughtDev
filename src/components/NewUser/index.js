import React, { useState, useEffect } from "react"
import { useIdentityContext } from "react-netlify-identity-gotrue"
import { useForm } from "react-hook-form"

import "./styles.scss"
import Loader from "../Animations/Loader"

const NewUser = ({
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
  const [signingUp, setSigningUp] = useState(false)
  const [hasFormSubmitted, setHasFormSubmitted] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(identity.user)
  })

  const onSubmit = async data => {
    setSigningUp(true)
    setFormError(false)

    identity
      .signup(data)
      .then(() => {
        setSigningUp(false)
        setHasFormSubmitted(true)
      })
      .catch(e => {
        setFormError(e.message)
        setSigningUp(false)
      })
  }

  return (
    <div className="new-user">
      <h1>
        Become A <br />
        Self Taught Dev.
      </h1>
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
            New Account Created. <br />
            You are currently logged in as: <br />
            {identity.user.user_metadata.full_name}{" "}
          </p>
        ) : !hasFormSubmitted ? (
          <div className="form-info-div">
            {signingUp ? (
              <>
                <p className="white-text">Submitting form...</p>
                <Loader />
              </>
            ) : (
              <>
                <label htmlFor="user_metadata.full_name">
                  <input
                    ref={register({ required: true })}
                    type="text"
                    placeholder="Full Name"
                    name="user_metadata.full_name"
                  ></input>
                  {errors.user_metadata?.full_name && (
                    <p className="error-msg">Name is required</p>
                  )}
                </label>
                <label htmlFor="email">
                  <input
                    ref={register({
                      required: true,
                      pattern:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                    type="email"
                    placeholder="Email"
                    className="margin-top-input"
                    name="email"
                    id="email"
                  />
                  {errors.email && (
                    <p className="error-msg">Email is required</p>
                  )}
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
                <button
                  id="sbmt-form-btn"
                  className="btn-style-1"
                  type="submit"
                >
                  Create Account
                </button>
              </>
            )}
          </div>
        ) : (
          <p className="white-text confirmation-text">
            Thanks for signing up! A confirmation email has been sent to the
            email address you provided. You must validate your email before
            signing in.
          </p>
        )}
        <div className="pt-2">
          {formError && (
            <p className="error-msg">
              Looks like something went wrong. Please try again!
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default NewUser
