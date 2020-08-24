import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header"
import "./layout.scss"

const Layout = ({ children, footer = "" }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
        <footer className={footer}>
          <div className="footer col-1">
            <p>
              <a href="/privacy-policy">Privacy Policy</a>
            </p>
          </div>
          <p>Send any bugs/feedback to selftdev@gmail.com</p>
          <p>
            © {new Date().getFullYear()}, All Rights Reserved Self Taught Dev
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
