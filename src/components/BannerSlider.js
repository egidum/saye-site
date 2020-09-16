import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  banner: {
    width: '100%',
    height: '360px',
    padding: '2rem',
    backgroundColor: '#a09e9f',
    color: '#373839',
  },
})

export default function BannerSlider() {
  const classes = useStyles()

  return (
    <Grid item xs={12} md={12}>
      <Paper className={classes.banner} elevation={2} square>
        <h2>Banner</h2>
      </Paper>
    </Grid>
  )
}
