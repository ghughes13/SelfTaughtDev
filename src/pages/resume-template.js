import React from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import MailingListSignup from "../components/mailing_list_signup/MailingListSignup"

const archiveNotificationLP = () => (
  <Layout footer="transparent">
    <SEO title="Archive Notification LP" />
    <MailingListSignup
      pageTitle="Get My Resume Template Sent To Your Inbox"
      formTitle="Email Template LP"
      urlToPostTo="/resume-template/#thanks"
      btnText="Get The Template"
    />
  </Layout>
)

export default archiveNotificationLP
