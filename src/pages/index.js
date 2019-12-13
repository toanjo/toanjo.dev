import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from '../layout'
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
            <PostList data={data} />
        </Layout>
    )
}

export default Blog