import React from "react"

const EmailConfirmationTemplate = () => (
  <>
    <h2>Confirm your signup</h2>
    <p>Follow this link to confirm your user:</p>
    <p>
      <a href="{{ .SiteURL }}/new-user/#confirmation_token={{ .Token }}">
        Confirm your mail
      </a>
    </p>
  </>
)

export default EmailConfirmationTemplate
