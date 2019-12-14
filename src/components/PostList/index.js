import React from "react"
import { Link } from "gatsby"

import postListStyles from "./postlist.module.scss"

const PostList = props => (
  <div>
    {props.data.map(edge => (
      <div
        className={postListStyles.container}
        key={edge.node.frontmatter.date}
      >
        <Link
          className={postListStyles.links}
          to={`/blog/${edge.node.fields.slug}`}
        >
          <h1 className={postListStyles.postTitle}>
            {edge.node.frontmatter.title}
          </h1>
          <p className={postListStyles.postDate}>
            {edge.node.frontmatter.date}
          </p>
        </Link>
        {edge.node.frontmatter.description}
        <br />
        <Link
          className={postListStyles.readLink}
          to={`/blog/${edge.node.fields.slug}`}
        >
          Read→
        </Link>
      </div>
    ))}
  </div>
)

export default PostList
