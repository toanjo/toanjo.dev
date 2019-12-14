import React from "react"

import LinkedIn from "../../assets/images/linkedin.svg"
import Twitter from "../../assets/images/twitter.svg"
import Github from "../../assets/images/github.svg"
import Mail from "../../assets/images/mail.svg"

import SocialStyles from "./social.module.scss"

const Social = () => (
  <div className={SocialStyles.social}>
    <a
      aria-label="Email"
      href="mailto:to.anjo57@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Mail />
    </a>
    <a
      aria-label="Twitter"
      href="https://www.twitter.com/to__anjo"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Twitter />
    </a>
    <a
      aria-label="Github"
      href="https://www.github.com/toanjo"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github />
    </a>
    <a
      aria-label="LinkedIn"
      href="https://www.linkedin.com/in/antonio-anjo/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedIn />
    </a>
  </div>
)

export default Social
