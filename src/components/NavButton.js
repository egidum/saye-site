import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  link: {
    display: 'block',
    maxHeight: 120,
    padding: '3rem 1.5rem',
    textDecoration: 'none',
    textTransform: 'uppercase',
    verticalAlign: 'center',
    cursor: 'pointer',
    '&:hover': {
      borderBottom: '2px solid #373839',
      boxShadow: '0 0 7px rgba(0, 0, 0, 0.1)',
    },
  },
  title: {
    fontFamily: 'Cuprum',
    color: '#373839',
  },
  active: {
    borderBottom: '2px solid #373839',
    boxShadow: '0 0 7px rgba(0, 0, 0, 0.1)',
  },
})

export default function NavButton() {
  const classes = useStyles()

  return (
    <Link
      className={classes.link}
      to="/contacts"
      activeClassName={classes.active}
    >
      <Typography className={classes.title} variant="h6" component="h2">
        Contacts
      </Typography>
    </Link>
  )
}
