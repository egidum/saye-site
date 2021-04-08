import React from 'react'
import { Link, graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import PageLayout from '../components/PageLayout'

const useStyles = makeStyles({
  title: {
    fontFamily: 'Cuprum',
    textTransform: 'uppercase',
  },
  tag: {
    backgroundColor: '#d7ccc8',
    padding: '0.3rem',
    borderRadius: '0.3rem',
  },
})

export default function Contents({ data }) {
  const classes = useStyles()

  return (
    <PageLayout tag="Contents">
      <Typography className={classes.title} variant="h5" gutterBottom>
        List of Contents
      </Typography>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link className={classes.link} to={node.fields.slug}>
            <Typography className={classes.title} gutterBottom>
              {node.frontmatter.title}
            </Typography>
          </Link>
          <p>{node.excerpt}</p>
          <span className={classes.tag}>{node.frontmatter.tag}</span>
          <hr />
        </div>
      ))}
    </PageLayout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            tag
          }
          excerpt
        }
      }
    }
  }
`
