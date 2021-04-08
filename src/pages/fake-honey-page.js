import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"

export default function FakeHonePage() {
  return (
    <Layout>
      <SEO title="Project Archive" />
      <div className="index-hero">
        <h2>
          This is HoneyCRM. You've been logged out for security reasons. Please
          log back in.
        </h2>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="Password" />
      </div>
    </Layout>
  )
}
