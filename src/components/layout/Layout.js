import React from "react"
import PropTypes from "prop-types"
import Header from "../header"
import "./layout.scss"

const Layout = ({ children, footer = "" }) => {
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
          <p>Send bugs/feedback to selftdev@gmail.com</p>
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
