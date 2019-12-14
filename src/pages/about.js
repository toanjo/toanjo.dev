import React from "react"
import Layout from "../layout"

const About = () => (
  <Layout>
    <h1>About Me</h1>
    <p>I am a Software Engineer living and working in the north of Portugal.</p>
    <p>
      I mainly work on Front-End development and am currently enjoying{" "}
      <a
        className="red-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        React
      </a>{" "}
      and related technologies.
    </p>
    <p>
      You can find some of my open-source projects (such as this website) on{" "}
      <a
        className="red-link"
        href="https://github.com/toanjo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      .
    </p>
    <p>---</p>
    <p>
      I am also an avid music lover and since 2015 have been composing,
      recording and producing music from my home and releasing it as{" "}
      <a
        className="red-link"
        href="https://eirmusic.bandcamp.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Eir
      </a>
      . Go check me out!
    </p>
  </Layout>
)

export default About
