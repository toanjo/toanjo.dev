import React from "react"

import footerStyles from './footer.module.scss'

const Footer = () => <footer className={footerStyles.footer}>
    <small className={footerStyles.footerText}>Built with <a className={footerStyles.footerLinks} href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>.</small>
</footer>

export default Footer