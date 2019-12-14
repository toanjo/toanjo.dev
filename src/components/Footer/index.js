import React from "react"

import footerStyles from "./footer.module.scss"

const Footer = () => (
  <footer className={footerStyles.footer}>
    <small className={footerStyles.footerText}>
      Built by Tó with{" "}
      <a
        className={footerStyles.footerLinks}
        href="https://gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>
      , © 2019
    </small>
  </footer>
)

export default Footer
