import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import Layout from '../components/Layout'

const useStyles = makeStyles({
  root: {
    height: '60vh',
  },
})

export default function Contacts() {
  const classes = useStyles()

  return (
    <Layout>
      <Grid container direction="row">
        <Grid item xs={12} md>
          <Paper className={classes.root}>
            <h2>Contact Information</h2>
            <address>
              The Company Name Ltd. 15 Gregory Rd Hannibal, New York(NY), 13074
              Telephone:(315) 564-7350 E-mail: mail@demolink.org
            </address>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  )
}
