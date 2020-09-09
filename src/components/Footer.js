import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import HomeIcon from '@material-ui/icons/Home'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk'
import MailIcon from '@material-ui/icons/Mail'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import Copyright from './Copyright'

const useStyles = makeStyles({
  root: {
    marginTop: '1rem',
  },
  footer: {
    padding: '2rem 1.5rem',
    backgroundColor: '#373839',
    color: '#fff',
  },
  title: {
    fontFamily: 'Cuprum',
    textTransform: 'uppercase',
  },
  subtitle: {
    display: 'block',
    color: '#a09e9f',
    '& span > a': {
      textDecoration: 'none',
      color: 'inherit',
    },
    '& span > a:hover, a:active': {
      color: '#fff',
    },
  },
  copy: {
    color: '#828387',
  },
  icon: {
    verticalAlign: 'middle',
  },
  separator: {
    borderBottom: '1px solid #59595a',
    color: '#a09e9f',
  },
  link: {
    textDecoration: 'none',
    color: '#a09e9f',
    padding: '3rem 1rem 0 0',
  },
})

export default function Home() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Paper className={classes.footer} component="footer" square>
        <Grid container>
          <Grid item xs={12} md>
            <Box component="address" fontStyle="normal">
              <Typography
                className={classes.title}
                variant="subtitle1"
                gutterBottom
              >
                Contacts
              </Typography>
              <Typography
                className={classes.subtitle}
                variant="caption"
                gutterBottom
              >
                <Box display="flex" flexWrap="wrap" mt={3}>
                  <Box mr={5}>
                    <Box className={classes.icon} component="span" mr={1}>
                      <HomeIcon />
                    </Box>
                    <Box className={classes.icon} component="span">
                      15 Gregory Rd Hannibal, <br /> New York(NY), 13074
                    </Box>
                  </Box>

                  <Box mr={5}>
                    <Box className={classes.icon} component="span" mr={1}>
                      <PhoneInTalkIcon />
                    </Box>
                    <Box className={classes.icon} component="span">
                      <a href="tel: #"> (315) 564-7350</a>
                    </Box>
                  </Box>

                  <Box mr={5}>
                    <Box className={classes.icon} component="span" mr={1}>
                      <MailIcon />
                    </Box>
                    <Box className={classes.icon} component="span">
                      E-mail: <a href="mailto: #">mail@demolink.org</a>
                    </Box>
                  </Box>
                </Box>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box component="section">
              <Typography
                className={classes.title}
                variant="subtitle1"
                gutterBottom
              >
                Social links
              </Typography>
              <Typography
                className={classes.subtitle}
                variant="caption"
                gutterBottom
              >
                <Box mt={3}>
                  <Box component="span" mr={1}>
                    <a
                      href="http://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon />
                    </a>
                  </Box>
                  <Box component="span" mr={1}>
                    <a
                      href="http://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon />
                    </a>
                  </Box>
                  <Box component="span" mr={1}>
                    <a
                      href="http://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon />
                    </a>
                  </Box>
                </Box>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Box className={classes.separator} component="section" mb={3}>
              <span>&nbsp;</span>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={12}>
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
          </Grid>
        </Grid>
      </Paper>
      <Box className={classes.copy} my={2}>
        <Copyright />
      </Box>
    </Box>
  )
}
