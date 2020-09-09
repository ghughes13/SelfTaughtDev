import React from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import SignUpScreen from "../components/sign_up_screen/SignUpScreen"

const archiveNotificationLP = () => (
  <Layout footer="transparent">
    <SEO title="Archive Notification LP" />
    <SignUpScreen
      pageTitle="Get My Resume Template Sent To Your Inbox"
      formTitle="Resume Template LP"
      urlToPostTo="/resume-template/#thanks"
      btnText="Get The Template"
      successMessage="Thanks for signing up to the SelfTaughtDev Newsletter. If you don't receive the resume template within a few minutes, be sure to check your spam folder."
    />
  </Layout>
)

export default archiveNotificationLP
