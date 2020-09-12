import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles({
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
})

export default function SociaMedia() {
  const classes = useStyles()

  return (
    <Box component="section">
      <Typography className={classes.title} variant="subtitle1" gutterBottom>
        Follow us on
      </Typography>
      <Typography className={classes.subtitle} variant="caption" gutterBottom>
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
  )
}
