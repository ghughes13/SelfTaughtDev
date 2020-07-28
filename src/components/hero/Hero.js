import React from "react"
import "./hero.scss"
import { motion, AnimatePresence } from "framer-motion"
import DownArrows from "../down-arrows/DownArrows"

const Hero = () => {
  return (
    <div className="hero">
      <img
        className="logo"
        src={require("../../svgs/selftaughtdev-logo-mini.svg")}
        alt="logo"
      />
      <AnimatePresence>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h1>Garrett Hughes</h1>
          <div className="subtext">
            <h5>Developer - YouTuber - Human</h5>
          </div>
        </motion.div>
      </AnimatePresence>
      <DownArrows />
    </div>
  )
}

export default Hero
