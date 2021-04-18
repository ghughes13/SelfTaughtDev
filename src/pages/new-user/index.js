import React from "react"

import Layout from "../../components/layout/Layout"
import SEO from "../../components/seo"
import NewUser from "../../components/new_user/NewUser"

const NewUserPage = () => {
  return (
    <Layout footer="transparent">
      <SEO title="Archive Notification LP" />
      <NewUser
        pageTitle="Get My Resume Template Sent To Your Inbox"
        formTitle="Resume Template LP"
        urlToPostTo="/resume-template/#thanks"
        btnText="Get The Template"
        successMessage="Thanks for signing up to the SelfTaughtDev Newsletter. If you don't receive the resume template within a few minutes, be sure to check your spam folder."
      />
    </Layout>
  )
}

export default NewUserPage
