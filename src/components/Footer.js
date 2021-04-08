import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import HomeIcon from '@material-ui/icons/Home'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk'
import MailIcon from '@material-ui/icons/Mail'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
  },
  footer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    backgroundColor: '#303030',
    color: '#fff',
  },
  copyright: {
    color: '#848387',
    marginTop: theme.spacing(2),
  },
  separator: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    backgroundColor: '#a09e9f',
  },
  section: {
    paddingBottom: theme.spacing(2),
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
  icon: {
    verticalAlign: 'middle',
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

export default function Footer() {
  const classes = useStyles()

  return (
    <Box className={classes.root} component="footer">
      <Paper className={classes.footer} elevation={2} square>
        <Grid container>
          <Grid item xs={12} md>
            {/* Address block */}
            <Box
              className={classes.section}
              component="address"
              fontStyle="normal"
            >
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
                  <Box mr={5} mb={1}>
                    <Box className={classes.icon} component="span" mr={1}>
                      <HomeIcon />
                    </Box>
                    <Box className={classes.icon} component="span">
                      15 Gregory Rd Hannibal, <br /> New York(NY), 13074
                    </Box>
                  </Box>

                  <Box mr={5} mb={1}>
                    <Box className={classes.icon} component="span" mr={1}>
                      <PhoneInTalkIcon />
                    </Box>
                    <Box className={classes.icon} component="span">
                      <a href="tel: #"> (315) 564-7350</a>
                    </Box>
                  </Box>

                  <Box mr={5} mb={1}>
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
            {/* Social Media block */}
            <Box className={classes.section} component="section">
              <Typography
                className={classes.title}
                variant="subtitle1"
                gutterBottom
              >
                Follow us on
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
            <Divider className={classes.separator} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={12}>
            {/* Navigation Menu block */}
            <Box
              className={classes.section}
              component="section"
              display="flex"
              flexWrap="wrap"
            >
              <Link
                className={classes.link}
                to={'/'}
                activeClassName={classes.active}
              >
                <Typography variant="caption">Home</Typography>
              </Link>
              <Link
                className={classes.link}
                to={'/company/about'}
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
              <Link
                className={classes.link}
                to={'/solutions'}
                activeClassName={classes.active}
              >
                <Typography variant="caption">Solutions</Typography>
              </Link>
              <Link
                className={classes.link}
                to={'/stories'}
                activeClassName={classes.active}
              >
                <Typography variant="caption">Stories</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Box className={classes.copyright}>
        <Typography variant="caption">
          {'SAYE © 2009'} {'-'} {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </Box>
  )
}
