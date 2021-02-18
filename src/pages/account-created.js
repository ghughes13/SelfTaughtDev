import React from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import "../page_styles/account-created.scss"

const AccountCreated = () => (
  <Layout footer="transparent">
    <SEO title="Archive Notification LP" />
    <div className="mailing-list-signup">
      <h3>
        Your account has been created.
        <br />
        You may now log in.
      </h3>
    </div>
  </Layout>
)

export default AccountCreated
