import React from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import MailingListSignup from "../components/mailing_list_signup/MailingListSignup"

const archiveNotificationLP = () => (
  <Layout footer="transparent">
    <SEO title="Archive Notification LP" />
    <MailingListSignup
      pageTitle="Get My Resume Template Sent To Your Inbox"
      formTitle="Resume Template LP"
      urlToPostTo="/resume-template/#thanks"
      btnText="Get The Template"
      successMessage="Thanks for signing up to the SelfTaughtDev Newsletter. If you don't receive the resume template within a few minutes, be sure to check your spam folder."
    />
  </Layout>
)

export default archiveNotificationLP
