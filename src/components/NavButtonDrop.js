import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  title: {
    fontFamily: 'Cuprum',
    color: '#373839',
  },
  drop: {
    display: 'inline-block',
    position: 'relative',
    maxHeight: 120,
    padding: '3rem 1.5rem',
    textDecoration: 'none',
    textTransform: 'uppercase',
    verticalAlign: 'center',
    cursor: 'pointer',
    '&:hover': {
      borderBottom: '2px solid #373839',
      boxShadow: '0 0 7px rgba(0, 0, 0, 0.1)',
      '& $dropContent': {
        display: 'block',
        left: 0,
        border: '1px solid #c7c7c8',
      },
    },
  },
  dropContent: {
    display: 'none',
    position: 'absolute',
    background: '#f9f9f9',
    minWidth: 160,
    top: 121,
    zIndex: 1,
    '& a': {
      display: 'block',
      padding: '0.75rem 1rem',
      textDecoration: 'none',
      color: '#373839',
      '&:hover': {
        background: '#ccc',
      },
    },
  },
  active: {
    borderBottom: '2px solid #373839',
    boxShadow: '0 0 7px rgba(0, 0, 0, 0.1)',
  },
})

export default function NavButton({ title, to }) {
  const classes = useStyles()

  return (
    <Link className={classes.drop} to={to} activeClassName={classes.active}>
      <Typography className={classes.title} variant="h6" component="h2">
        {title}
      </Typography>
      <div className={classes.dropContent}>
        <Link>Link 1</Link>
        <Link>Link 2</Link>
      </div>
    </Link>
  )
}
