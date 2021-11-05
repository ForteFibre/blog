import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`
  return (
    <Layout>
      <div className="content-box clearfix">
        <div className="blog-tags">
          <h1>{tagHeader}</h1>
          <ul className="tag-list">
            {edges.map(({ node }) => {
              const { title, date } = node.frontmatter
              const { slug } = node.fields
              return (
                <li key={slug}>
                  <Link to={slug}>{title}</Link>
                  <small> | {date}</small>
                </li>
              )
            })}
          </ul>
          <span>
            <Link to="/tags">← All tags</Link>
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($num: Int) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___number], order: DESC }
      filter: { frontmatter: { number: { in: [$num] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            updated_at(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
