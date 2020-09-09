import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import CardMedia from '@material-ui/core/CardMedia'

import NavButton from './NavButton'

const useStyles = makeStyles({
  header: {
    height: 120,
    marginTop: '2rem',
    marginBottom: '1rem',
    backgroundColor: '#fff',
  },
  nav: {
    fontFamily: 'Cuprum',
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      color: 'blue',
    },
    textTransform: 'uppercase',
  },
})

export default function Home() {
  const classes = useStyles()

  return (
    <Paper className={classes.header} square>
      <Grid container>
        {/* logo */}
        <Grid item xs={3}>
          <CardMedia
            component="img"
            alt="Saye logo"
            height="60"
            image="/static/saye-bg-dark.webp"
          />
        </Grid>
        {/* navigation */}
        <Grid item xs>
          <Grid container direction="row">
            <NavButton title="Company" to="/" />
            <NavButton title="Services" to="/services" />
            <NavButton title="Solutions" />
            <NavButton title="Stories" />
            <NavButton title="Contacts" to="/contacts" />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
