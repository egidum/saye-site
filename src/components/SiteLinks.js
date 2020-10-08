import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2),
  },
  link: {
    textDecoration: 'none',
    color: '#a09e9f',
    padding: '0.5rem 1rem 0.5rem 0',
  },
  active: {
    color: '#fff',
  },
}))

export default function SiteLinks() {
  const classes = useStyles()

  return (
    <Box
      className={classes.root}
      component="section"
      display="flex"
      flexWrap="wrap"
    >
      <Link className={classes.link} to={'/'} activeClassName={classes.active}>
        <Typography variant="caption">Home</Typography>
      </Link>
      <Link
        className={classes.link}
        to={'/about'}
        activeClassName={classes.active}
      >
        <Typography variant="caption">About Saye</Typography>
      </Link>
      <Link
        className={classes.link}
        to={'/contacts'}
        activeClassName={classes.active}
      >
        <Typography variant="caption">Contacts</Typography>
      </Link>
      <Link
        className={classes.link}
        to={'/services'}
        activeClassName={classes.active}
      >
        <Typography variant="caption">Services</Typography>
      </Link>
      <Link className={classes.link} activeClassName={classes.active}>
        <Typography variant="caption">Solutions</Typography>
      </Link>
      <Link className={classes.link} activeClassName={classes.active}>
        <Typography variant="caption">Stories</Typography>
      </Link>
    </Box>
  )
}
