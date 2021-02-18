import React from "react"
import NetlifyIdentityContext from "react-netlify-identity-gotrue"

export const wrapRootElement = ({ element }) => {
  return (
    <NetlifyIdentityContext url={"https://selftaught-dev.com"}>
      {element}
    </NetlifyIdentityContext>
  )
}
