import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => (
  <header className={headerStyles.header}>
    <h1 className={headerStyles.h1}>
      <Link to="/" className={headerStyles.title}>
        Tó Anjo
      </Link>
    </h1>
    <p>
      {/* Software Engineer at <a className={headerStyles.headerLinks} href="https://utrust.com/" target="_blank" rel="noopener noreferrer">Utrust</a>. Tech, music and other good things. */}
      Software Engineer at{" "}
      <a
        className={headerStyles.headerLinks}
        href="https://jumpseller.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jumpseller
      </a>
      . Tech, music and other good things.
    </p>
    <nav>
      <ul className={headerStyles.navList}>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
