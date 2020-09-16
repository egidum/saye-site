import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  root: {
    minHeight: '70vh',
    marginTop: '1rem',
    padding: '1.5rem',
  },
})

export default function MainPage({ children }) {
  const classes = useStyles()

  return (
    <Paper className={classes.root} component="main" elevation={2} square>
      <Grid container direction="row">
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Paper>
  )
}
