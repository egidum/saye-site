import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: {
    background: 'inherit',
    maxHeight: 120,
  },
  link: {
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
  btn: {
    padding: '3rem 1.5rem',
    verticalAlign: 'center',
  },
  title: {
    fontFamily: 'Cuprum',
    color: '#373839',
  },
})

export default function NavButton({ title, to }) {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Link className={classes.link} to={to}>
        <Button className={classes.btn}>
          <Typography className={classes.title} variant="h6" component="h2">
            {title}
          </Typography>
        </Button>
      </Link>
    </Box>
  )
}
