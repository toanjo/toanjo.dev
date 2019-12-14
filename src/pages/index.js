import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../layout"
import PostList from "../components/PostList"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              title
              date
              description
              published
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
      <PostList data={data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.published)} />
    </Layout>
  )
}

export default Blog
