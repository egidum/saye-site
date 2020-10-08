import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

import FooterAddress from './FooterAddress'
import SocialMedia from './SocialMedia'
import SiteLinks from './SiteLinks'

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
}))

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
            <Divider className={classes.separator} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={12}>
            <SiteLinks />
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
