import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../layout"
import PostList from "../components/PostList"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              description
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tó Anjo</title>
        <link rel="canonical" href="http://toanjo.dev" />
      </Helmet>
      <PostList data={data} />
    </Layout>
  )
}

export default Blog
