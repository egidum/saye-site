import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'

import Layout from '../components/Layout'

const useStyles = makeStyles({
  root: {
    minHeight: '70vh',
    marginTop: '1rem',
    padding: '1.5rem',
    background: '#f9f9f9',
  },
  link: {
    color: 'inherit',
    textTransform: 'capitalize',
  },
  slug: {
    textTransform: 'capitalize',
  },
})

export default function PageLayout({ tag, slug, children }) {
  const classes = useStyles()

  return (
    <Layout>
      <Breadcrumbs separator="»" aria-label="breadcrumb">
        <Typography variant="body2">
          <Link className={classes.link} to={'/'}>
            Home
          </Link>
        </Typography>
        <Typography variant="body2">
          <Link className={classes.link} to={`/${tag}`}>
            {tag}
          </Link>
        </Typography>
        <Typography
          className={classes.slug}
          variant="body2"
          color="textPrimary"
        >
          {slug}
        </Typography>
      </Breadcrumbs>

      <Paper className={classes.root} component="main" elevation={2} square>
        <Grid container direction="row">
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Paper>
    </Layout>
  )
}
