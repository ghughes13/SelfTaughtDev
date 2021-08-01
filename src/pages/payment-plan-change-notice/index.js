import React from "react"
import { useIdentityContext } from "react-netlify-identity-gotrue"
import { Link } from "gatsby"

import Layout from "../../components/Layout"
import SEO from "../../components/Seo"

const PaymentPlanUpdated = () => {
  const identity = useIdentityContext()
  if (identity.user) {
    identity.logout()
  }

  return (
    <Layout footer="transparent">
      <SEO title="Archive Notification LP" />
      <div className="mailing-list-signup">
        <h3>
          You have been logged out. <br /> Please log back in.
        </h3>
        <Link to="/login" className="btn-style-1 demo-btn">
          Login
        </Link>
      </div>
    </Layout>
  )
}

export default PaymentPlanUpdated
