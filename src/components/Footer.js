import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'

import FooterAddress from './FooterAddress'
import SocialMedia from './SocialMedia'
import SiteLinks from './SiteLinks'

const useStyles = makeStyles({
  root: {
    marginTop: '1rem',
  },
  footer: {
    padding: '2rem 1.5rem',
    backgroundColor: '#373839',
    color: '#fff',
  },
  copyright: {
    color: '#828387',
  },
  separator: {
    borderBottom: '1px solid #59595a',
    color: '#a09e9f',
  },
})

export default function Footer() {
  const classes = useStyles()

  return (
    <Box className={classes.root} component="footer">
      <Paper className={classes.footer} elevation={2} square>
        <Grid container>
          <Grid item xs={12} md>
            <FooterAddress />
          </Grid>
          <Grid item xs={12} md={2}>
            <SocialMedia />
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
            <SiteLinks />
          </Grid>
        </Grid>
      </Paper>
      <Box className={classes.copyright} my={2}>
        <Typography variant="caption">
          {'SAYE © 2009'} {'-'} {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </Box>
  )
}
