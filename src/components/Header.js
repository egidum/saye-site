import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Hidden from '@material-ui/core/Hidden'

import logo from '../images/saye-light-t.webp'
import NavButton from './NavButton'

const useStyles = makeStyles({
  root: {
    height: 120,
    marginTop: '2rem',
    marginBottom: '1rem',
    background: '#f9f9f9',
  },
  logo: {
    width: 180,
    height: 62,
    paddingTop: 1,
    paddingLeft: 5,
    background: '#373839',
  },
})

export default function Header() {
  const classes = useStyles()

  return (
    <Paper className={classes.root} component="header" elevation={2} square>
      <Grid container>
        {/* logo */}
        <Grid
          container
          item
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          md={3}
        >
          <div className={classes.logo}>
            <Link to="/">
              <img src={logo} alt="Saye logo" />
            </Link>
          </div>
        </Grid>
        {/* navigation */}
        <Grid
          component="nav"
          container
          item
          direction="row"
          justify="center"
          xs
        >
          <Hidden smDown>
            <NavButton title="Company" to="/" />
            <NavButton title="Services" to="/services" />
            <NavButton title="Solutions" />
            <NavButton title="Stories" />
            <NavButton title="Contacts" to="/contacts" />
          </Hidden>
        </Grid>
      </Grid>
    </Paper>
  )
}
