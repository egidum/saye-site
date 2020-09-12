import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'

import Address from './Address'
import SocialLinks from './SocialLinks'
import BottomNav from './BottomNav'
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
  copy: {
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
    <Box className={classes.root}>
      <Paper className={classes.footer} component="footer" square>
        <Grid container>
          <Grid item xs={12} md>
            <Address />
          </Grid>
          <Grid item xs={12} md={2}>
            <SocialLinks />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Box className={classes.separator} component="section" mb={3}>
              <Box component="span">&nbsp;</Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={12}>
            <BottomNav />
          </Grid>
        </Grid>
      </Paper>
      <Box className={classes.copy} my={2}>
        <Copyright />
      </Box>
    </Box>
  )
}
