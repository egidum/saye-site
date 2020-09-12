import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: '#a09e9f',
    padding: '3rem 1rem 0 0',
  },
})

export default function BottomNav() {
  const classes = useStyles()

  return (
    <Box component="section">
      <Link className={classes.link} to={'/'}>
        <Typography variant="caption">Company</Typography>
      </Link>
      <Link className={classes.link} to={'/contacts'}>
        <Typography variant="caption">Contacts</Typography>
      </Link>
      <Link className={classes.link} to={'/services'}>
        <Typography variant="caption">Services</Typography>
      </Link>
      <Link className={classes.link}>
        <Typography variant="caption">Solutions</Typography>
      </Link>
      <Link className={classes.link}>
        <Typography variant="caption">Stories</Typography>
      </Link>
    </Box>
  )
}
