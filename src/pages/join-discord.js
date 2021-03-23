import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"

import "../page_styles/account-created.scss"

const DiscordInvitePage = () => {
  return (
    <Layout footer="transparent">
      <SEO title="Archive Notification LP" />
      <div className="mailing-list-signup discord-invite">
        <h3>
          <a
            href="https://discord.gg/hE2JZcj"
            class="white-text text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Click Here To Join Our Discord - <br />
            <img
              class="discord-logo"
              src={require("../svgs/discord-logo-white.svg")}
            />{" "}
          </a>
        </h3>
        <p class="white-text">
          *If the link above stops working, please let us know by email at
          selftdev@gmail.com
        </p>
      </div>
    </Layout>
  )
}

export default DiscordInvitePage
