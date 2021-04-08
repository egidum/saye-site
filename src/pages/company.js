import React from 'react'
import { Link, graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import PageLayout from '../components/PageLayout'

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: 'Cuprum',
    textTransform: 'uppercase',
  },
  link: {
    display: 'block',
    textDecoration: 'none',
    padding: theme.spacing(1),
    fontSize: '1rem',
  },
}))

export default function Company({ data }) {
  const classes = useStyles()

  return (
    <PageLayout tag="company">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div>
          <Link className={classes.link} to={node.fields.slug}>
            <Typography className={classes.title} gutterBottom>
              {node.frontmatter.title}
            </Typography>
          </Link>
          <p>{node.excerpt}</p>
          <hr />
        </div>
      ))}
    </PageLayout>
  )
}

export const query = graphql`
  query($eq: String = "company") {
    allMarkdownRemark(filter: { frontmatter: { tag: { eq: $eq } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
`
