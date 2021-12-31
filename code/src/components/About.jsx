import React from "react"
import { motion } from "framer-motion"
import "../styles/about-styles.scss"

export default function About() {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-name-container">
        <img src="p/temi_c_prof_circle_small.png" alt="profile-picture" />
        <h1>Gokul Syam</h1>
      </div>
      <div className="about-summary-container">
        <p>Front-end, back-end, and everything in between.</p>
        <p>
          I'm a fullstack developer and an opensource enthusiast, among other
          things.
        </p>
        <p>
          Find me on{" "}
          <a
            href="https://www.linkedin.com/in/gokulsyam/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/RushDynamic/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          Also,{" "}
          <a
            href="https://github.com/RushDynamic/rushdynamic.com"
            target="_blank"
            rel="noreferrer"
          >
            here's
          </a>{" "}
          the source code for this website.
        </p>
      </div>
    </motion.div>
  )
}
