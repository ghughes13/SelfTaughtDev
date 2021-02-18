import React, { useState } from "react"
import { useIdentityContext } from "react-netlify-identity-gotrue"
import { useForm } from "react-hook-form"
import { navigate } from "gatsby"

import "./new-user.scss"
import Loader from "../animations/loader/Loader"

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

  const onSubmit = async data => {
    setSigningUp(true)
    setFormError(false)

    identity
      .signup(data)
      .then(() => {
        setSigningUp(false)
        navigate("/")
      })
      .catch(e => {
        setFormError(e.message)
        setSigningUp(false)
      })
  }

  return (
    <div className="new-user">
      <h1>Become A Self Taught Dev.</h1>
      <form
        id={formTitle}
        method="POST"
        encType="multipart/form-data"
        name={formTitle}
        action={urlToPostTo}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-info-div">
          <label htmlFor="user_metadata.full_name">
            <input
              ref={register({ required: true })}
              type="text"
              placeholder="Full Name"
              name="user_metadata.full_name"
            ></input>
          </label>
          {errors.user_metadata?.full_name && (
            <p className="error-msg">Name is required</p>
          )}
          <label htmlFor="email">
            <input
              ref={register({
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              type="email"
              placeholder="Email"
              className="margin-top-input"
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
