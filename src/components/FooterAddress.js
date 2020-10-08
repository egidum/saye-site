import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import HomeIcon from '@material-ui/icons/Home'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk'
import MailIcon from '@material-ui/icons/Mail'

const useStyles = makeStyles(theme => ({
  root: {
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
}))

export default function FooterAddress() {
  const classes = useStyles()

  return (
    <Box className={classes.root} component="address" fontStyle="normal">
      <Typography className={classes.title} variant="subtitle1" gutterBottom>
        Contacts
      </Typography>
      <Typography className={classes.subtitle} variant="caption" gutterBottom>
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

          <Box mr={5} mr={1}>
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
  )
}
