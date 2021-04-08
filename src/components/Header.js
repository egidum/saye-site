import React, { useState } from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Hidden from '@material-ui/core/Hidden'
import { Menu, Close } from '@material-ui/icons'
import 'fontsource-cuprum'

import logo from '../images/saye.svg'
import NavButton from './NavButton'
import NavButtonDrop from './NavButtonDrop'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    background: '#f9f9f9',
    [theme.breakpoints.up('md')]: {
      height: 120,
    },
  },
  logo: {
    width: 150,
    height: 60,
    background: '#303030',
    position: 'relative',
    '& img': {
      height: '80%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2),
      width: '100%',
    },
  },
  hamburger: {
    fontSize: '2.5rem',
    color: '#fff',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: '50%',
      right: '5%',
      transform: 'translateY(-50%)',
    },
  },
  overlay: {
    height: '100%',
    width: 0,
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: '#f1f1f1',
    overflowX: 'hidden',
    transition: '0.5s',
  },
  overlayContent: {
    position: 'relative',
    top: '25%',
    width: '100%',
    textAlign: 'center',
    marginTop: theme.spacing(4),
    fontFamily: 'Cuprum',
    '& $link': {
      color: '#303030',
      transition: '0.3s',
      '&:hover, &:focus': {
        color: '#a09e9f',
      },
    },
  },
  closebtn: {
    position: 'absolute',
    top: '5%',
    right: '10%',
    fontSize: '3rem',
    color: '#303030',
    transition: '0.3s',
    '&:hover, &:focus': {
      color: '#a09e9f',
    },
  },
  link: {
    display: 'block',
    textDecoration: 'none',
    padding: theme.spacing(1),
    fontSize: '2.25rem',
  },
}))

export default function Header() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  return (
    <Paper className={classes.root} component="header" elevation={2} square>
      <Grid container direction="row" justify="space-between">
        {/* logo */}
        <Grid container item xs md={3} justify="center" alignItems="center">
          <div className={classes.logo}>
            <Link to="/">
              <img src={logo} alt="Saye logo" />
            </Link>
            {/* mobile */}
            <Hidden mdUp>
              <Menu
                className={classes.hamburger}
                onClick={() => setOpen(true)}
              />
              <div
                className={classes.overlay}
                style={open === true ? { width: '100%' } : { width: '0%' }}
                open={open}
              >
                <Close
                  className={classes.closebtn}
                  onClick={() => setOpen(false)}
                />
                <div className={classes.overlayContent}>
                  <Link className={classes.link} to="/">
                    Home
                  </Link>
                  <Link className={classes.link} to="/company">
                    Company
                  </Link>
                  <Link className={classes.link} to="/services">
                    Services
                  </Link>
                  <Link className={classes.link} to="/solutions">
                    Solutions
                  </Link>
                  <Link className={classes.link} to="/stories">
                    Stories
                  </Link>
                  <Link className={classes.link} to="/contacts">
                    Contacts
                  </Link>
                </div>
              </div>
            </Hidden>
          </div>
        </Grid>

        {/* desktop */}
        <Hidden smDown>
          <Grid
            component="nav"
            container
            item
            xs
            justify="center"
            alignItems="center"
          >
            <NavButtonDrop title="Company" to="/company" />
            <NavButtonDrop title="Services" to="/services" />
            <NavButtonDrop title="Solutions" to="/solutions" />
            <NavButtonDrop title="Stories" to="/stories" />
            <NavButton title="Contacts" to="/contacts" />
          </Grid>
        </Hidden>
      </Grid>
    </Paper>
  )
}
