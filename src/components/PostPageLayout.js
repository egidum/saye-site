import React from 'react'
import { graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
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

export default function PostPageLayout({ data, children }) {
  const post = data.markdownRemark
  const classes = useStyles()

  return (
    <PageLayout tag={post.frontmatter.tag} slug={post.frontmatter.title}>
      <Grid container spacing={4}>
        <Grid item component="section" xs={12} md={9}>
          <div>
            <Typography className={classes.title} variant="h5" gutterBottom>
              {post.frontmatter.title}
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </Grid>

        <Grid item component="aside" xs={12} md={3}>
          <Typography className={classes.title} variant="h5" gutterBottom>
            Categories
          </Typography>
          {children}
        </Grid>
      </Grid>
    </PageLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tag
      }
    }
  }
`
