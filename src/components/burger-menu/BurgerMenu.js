import React from "react"
import { Link } from "gatsby"

import { slide as Menu } from "react-burger-menu"
import { useIdentityContext } from "react-netlify-identity-gotrue"

import "../burger-menu/burger-styles.scss"

const BurgerMenu = () => {
  const identity = useIdentityContext()

  return (
    <Menu right>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a
        href="https://youtube.com/playlist?list=PLIjhdtSXcP9Lpz0VJsb9QOFCrfSvl8K2I"
        target="_blank"
        rel="noReferrer"
        className="login-text"
      >
        HTML Tutorials
      </a>
      <a
        href="https://www.youtube.com/playlist?list=PLIjhdtSXcP9Lh-ZAgde1RwfCpWyxXeSI_"
        target="_blank"
        rel="noReferrer"
        className="login-text"
      >
        CSS Tutorials
      </a>
      {identity.user ? (
        <button onClick={identity.logout} className="login-btn">
          Logout
        </button>
      ) : (
        <>
          <Link to="/new-user" className="login-text">
            Create Account
          </Link>
          <Link to="/login" className="login-text">
            Login
          </Link>
        </>
      )}
    </Menu>
  )
}

export default BurgerMenu
