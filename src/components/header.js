import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import LoginBtn from "./login-btn/LoginBtn"
import "@reach/dialog/styles.css"

const Header = ({ siteTitle }) => {
  useEffect(() => {}, [])

  return (
    <header>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="nav">
        <Link to="/">
          {" "}
          <img
            className="logo"
            src={require("../svgs/selftaughtdev-logo-mini.svg")}
            alt="logo"
          />
        </Link>
        <LoginBtn />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
