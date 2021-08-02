import React from "react"

const PasswordResetTemplate = () => (
  <>
    <h2>Reset Password</h2>

    <p>This one's in SRC/EMAILTEMPLATES</p>
    <p>
      <a href="{{ .SiteURL }}/password-reset/#recovery_token={{ .Token }}">
        Reset Password
      </a>
    </p>
  </>
)

export default PasswordResetTemplate
