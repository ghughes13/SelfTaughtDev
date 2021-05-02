import React from "react"

import Layout from "../../components/layout/Layout"
import SEO from "../../components/seo"
import MailingListSignup from "../../components/mailing_list_signup/MailingListSignup"

const archiveNotificationLP = () => (
  <Layout footer="transparent">
    <SEO title="Resume Template" />
    <MailingListSignup
      pageTitle="Get My Resume Template Sent To Your Inbox"
      formTitle="Resume Template LP"
      urlToPostTo="/resume-template/#thanks"
      btnText="Get The Template"
      successMessage="Thanks for signing up to the SelfTaughtDev Newsletter. You should receive my resume template in 5-10 minutes. Be sure to check your spam folder."
    />
  </Layout>
)

export default archiveNotificationLP
