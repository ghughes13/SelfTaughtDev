import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import MailingListSignup from "../../components/MailingListSignup"

const archiveNotificationLP = () => (
  <Layout footer="transparent">
    <SEO title="Archive Notification LP" />
    <MailingListSignup
      pageTitle="Get notified when the Project Archive launches."
      formTitle="Archive Notification LP"
      urlToPostTo="/archive-notification-lp/#thanks"
      btnText="Let me know when it launches!"
      successMessage="Thanks for signing up! You'll get an email confirmation and we'll let
      you know when the Project Archive Launches!"
    />
  </Layout>
)

export default archiveNotificationLP
