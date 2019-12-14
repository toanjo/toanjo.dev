import React from "react"

import LinkedIn from "../../assets/images/linkedin.svg"
import Twitter from "../../assets/images/twitter.svg"
import Github from "../../assets/images/github.svg"
import Mail from "../../assets/images/mail.svg"
import Bandcamp from "../../assets/images/bandcamp.svg"
import Soundcloud from "../../assets/images/soundcloud.svg"
import Spotify from "../../assets/images/spotify.svg"

import SocialStyles from "./social.module.scss"

function Social(props) {
  if (props.music) {
    return (
      <div className={SocialStyles.social}>
        <a
          aria-label="Bandcamp"
          href="https://eirmusic.bandcamp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Bandcamp />
        </a>
        <a
          aria-label="Spotify"
          href="https://open.spotify.com/artist/4RQ06roho2g9LlSewnkVI1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Spotify />
        </a>
        <a
          aria-label="Soundcloud"
          href="https://soundcloud.com/toanjo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Soundcloud />
        </a>
      </div>
    )
  } else
    return (
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
}

export default Social
