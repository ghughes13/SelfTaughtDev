import React from "react"
import "./styles.scss"
import DownArrows from "../../Animations/DownArrows"

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skill-logo-container">
        <img
          className="html-logo skill"
          src={require("../../../svgs/skills/html-logo.svg")}
          alt="logo"
          title="HTML"
        />
        <img
          className="css-logo skill"
          src={require("../../../svgs/skills/css-logo.svg")}
          alt="logo"
          title="CSS"
        />
        <img
          className="javascript-logo skill"
          src={require("../../../svgs/skills/javascript-logo.svg")}
          alt="logo"
          title="JavaWcript"
        />
        <img
          className="typescript-logo skill"
          src={require("../../../svgs/skills/typescript-logo.svg")}
          alt="logo"
          title="TypeScript"
        />
        <img
          className="react-logo skill"
          src={require("../../../svgs/skills/react-logo.svg")}
          alt="logo"
          title="React"
        />
        <img
          className="sass-logo skill"
          src={require("../../../svgs/skills/sass-logo.svg")}
          alt="logo"
          title="SASS"
        />
        <img
          className="gatsby-logo skill"
          src={require("../../../svgs/skills/gatsby-logo.svg")}
          alt="logo"
          title="Gatsby"
        />
        <img
          className="linux-logo skill"
          src={require("../../../svgs/skills/linux-logo.svg")}
          alt="logo"
          title="Linux"
        />
        <img
          className="git-logo skill"
          src={require("../../../svgs/skills/git-logo.svg")}
          alt="logo"
          title="GIT"
        />
        <img
          className="react-native-logo skill"
          src={require("../../../svgs/skills/react-native-logo.svg")}
          alt="logo"
          title="React Native"
        />
        <img
          className="premier-pro-logo skill"
          src={require("../../../svgs/skills/premiere-pro-logo.svg")}
          alt="logo"
          title="Adobe Premiere Pro"
        />
        <img
          className="photoshop-logo skill"
          src={require("../../../svgs/skills/photoshop-logo.svg")}
          alt="logo"
          title="Adobe Photoshop"
        />
        <img
          className="adobe-xd-logo skill"
          src={require("../../../svgs/skills/adobe-xd-logo.svg")}
          alt="logo"
          title="Adobe XD"
        />
      </div>
      <DownArrows />
    </div>
  )
}

export default Skills
