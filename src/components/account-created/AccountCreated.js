import React from "react"

import "./account-created.scss"

const AccountCreated = ({
  pageTitle,
  formTitle,
  urlToPostTo,
  btnText,
  successMessage,
}) => (
  <div className="mailing-list-signup">
    <h3>
      Your account has been created.
      <br />
      You may now log in.
    </h3>
  </div>
)

export default AccountCreated
