import React from "react"

import "./archive-signup.scss"

const archiveSignup = () => (
  <div className="archive-signup-lp">
    <img
      className="logo"
      src={require("../../svgs/selftaughtdev-logo-mini.svg")}
      alt="logo"
    />
    <h1>Get notified when the Project Archive launches.</h1>
    <form
      // action="https://selftaught-dev.us17.list-manage.com/subscribe/post-json?u=f78948dc4e5d0d17d2b0eb52f&id=89067ad222&c=?"
      // method="POST"
      id="theForm"
      onSubmit={e => {
        e.preventDefault()

        fetch("https://selftaught-dev.us17.list-manage.com/subscribe/post", {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: new FormData(document.getElementById("theForm")),
        }).then(res => {
          console.log(res)
          if (res.status === 200) {
            console.log("success!")
          } else {
            console.log(res)
            console.log("ERROR ERROR")
          }
        })
      }}
    >
      <input type="hidden" name="u" value="f78948dc4e5d0d17d2b0eb52f" />
      <input type="hidden" name="id" value="89067ad222" />
      <label htmlFor="MERGE1">Name</label>
      <input type="text" placeholder="Name" name="MERGE1" id="MERGE1" />

      <label htmlFor="MERGE0">email</label>
      <input
        className="margin-top-input"
        type="email"
        name="MERGE0"
        placeholder="Email"
        id="MERGE0"
      />
      <button type="submit">Let me know when it launches!</button>
    </form>
  </div>
)

export default archiveSignup
