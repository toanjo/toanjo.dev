import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../layout'
import postStyles from './blogPost.module.scss'

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`

const Blog = (props) => <Layout>
    <h1 className={postStyles.postTitle}>{props.data.markdownRemark.frontmatter.title}</h1>
    <p className={postStyles.postDate}>{props.data.markdownRemark.frontmatter.date}</p>
    <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
    <p className={postStyles.postFooter}>Written by Tó. <Link to="/">Go back home</Link>.</p>
</Layout>

export default Blog