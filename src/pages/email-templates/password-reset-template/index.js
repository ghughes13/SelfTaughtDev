import React from "react"

const PasswordResetTemplate = () => (
  <>
    <h2>Reset Password</h2>

    <p>
      Please click the link below to reset your password for selftaughtdev.com
    </p>
    <p>
      <a href="{{ .SiteURL }}/password-reset/#recovery_token={{ .Token }}">
        Reset Password
      </a>
    </p>
    <p>
      If you did not request a password reset email for your account, please
      ignore this email.
    </p>
  </>
)

export default PasswordResetTemplate
