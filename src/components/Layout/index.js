import React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import Footer from "../Footer"

import "./styles.scss"

const Layout = ({ children, footer = "", className }) => {
  return (
    <div className={className}>
      <Header />
      <div>
        <main>{children}</main>
        <Footer footerClass={footer} />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
