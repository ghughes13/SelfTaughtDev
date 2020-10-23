import React from "react"
import {
  IdentityModal,
  useIdentityContext,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"
import "@reach/tabs/styles.css"

import "./login-btn.scss"

function AuthStatusView({ innerText, classList }) {
  const btnText = innerText || "Log In"
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      identity.user.user_metadata.full_name) ||
    "NoName"

  // console.log('Login Btn')
  // console.log(identity && identity.isLoggedIn)

  return (
    <div className="App">
      <header className="App-header">
        {identity && identity.isLoggedIn ? (
          <>
            <button className="btn" onClick={() => setDialog(true)}>
              LOG OUT
            </button>
          </>
        ) : (
          <>
            <button
              className={"btn " + classList}
              onClick={() => setDialog(true)}
            >
              {btnText}
            </button>
          </>
        )}

        <IdentityModal
          showDialog={dialog}
          onCloseDialog={() => setDialog(false)}
          onLogin={user => {
            console.log("hello ", user?.user_metadata)
            identity.getFreshJWT(true)
          }}
          onSignup={user => {
            console.log("welcome ", user?.user_metadata)
            user.logout()
          }}
          onLogout={() => console.log("bye ", name)}
        />
      </header>
    </div>
  )
}
export default AuthStatusView
