import React from "react"
import GoTrue from 'gotrue-js';

import "./sign-up-screen.scss"
import Loader from "../loader/Loader"

const SignUpScreen = ({
  pageTitle,
  formTitle,
  urlToPostTo,
  btnText,
  successMessage,
}) => {

  const auth = new GoTrue({
    APIUrl: 'https://selftaught-dev.com/.netlify/identity',
    audience: '',
    setCookie: true,
  });

  const submitForm = () => {
    console.log('submitting');

      const password = document.getElementById("password").value;
      const email = document.getElementById("email").value;
      
      auth
      .signup(email, password)
      .then((response) => {
        fetch("/sign-up/#thanks", {
          method: "POST",
          body: new FormData(document.getElementById("new-user")),
        })
        .then(response => {
          if (response.status === 200) {
            console.log('Posted Noob;')
          }
        })
        .catch(error => {
          console.error(error)
          console.log("FAILED ):")
        })
      })
      .catch((error) => {
        if(JSON.stringify(error.json.msg) === '"A user with this email address has already been registered"') {
          console.log('email error');
          document.querySelector('.email-error').style.display = "block"
        }
      });   
  }

  
  // Instantiate the GoTrue auth client with an optional configuration




  return (
    <div className="mailing-list-signup">
      <h1>Sign Up</h1>
      <form
        id="new-user"
        name={formTitle}
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault()
          submitForm()
        }}
        netlify="true"
        netlify-honeypot="bot-field"
      >
            <input type="hidden" name="bot-field" id="bot" />
        <div className="form-info-div">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            id="firstName"
            required
          />
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            id="lastName"
            required
          />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email" id="email" autoComplete="email" required/>
          <p className="email-error">A user with this email is already registered</p>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            id="username"
            autoComplete="username"
            required
          />
          <label htmlFor="name">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            autoComplete="new-password"
            required
          />
          <button id="sbmt-form-btn" type="submit">
            Login
          </button>
        </div>
        <div id="thanks">
          <p>
            A confirmation email has been send to your inbox. Please confirm your email to login. 
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
