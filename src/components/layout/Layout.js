import React from "react"
import PropTypes from "prop-types"
import Header from "../header/header"
import Footer from "../footer/Footer.js"
import "./layout.scss"

const Layout = ({ children, footer = "" }) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
        <Footer footerClass={footer} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
