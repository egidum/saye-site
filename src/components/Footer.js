import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  footer: {
    padding: '2rem',
    marginTop: '1rem',
    backgroundColor: '#673AB7',
    color: '#EEEEEE',
  },
})

export default function Home() {
  const classes = useStyles()

  return (
    <Grid item xs={12} md={12} spacing={2}>
      <Paper className={classes.footer} square>
        <h2>Footer</h2>
      </Paper>
    </Grid>
  )
}
