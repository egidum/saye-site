import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

const useStyles = makeStyles({
  root: {
    minHeight: '60vh',
    marginTop: '1rem',
    padding: '1.5rem',
  },
})

export default function Contacts() {
  const classes = useStyles()

  return (
    <Layout>
      <Grid container direction="row">
        <Grid item xs={12}>
          <Paper className={classes.root} component="main" square>
            <Grid container spacing={2}>
              <Grid component="section" item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>
                  Our Location
                </Typography>
                <p>Google Map</p>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid component="section" item xs={12} md={6}>
                <ContactForm />
              </Grid>

              <Grid component="section" item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>
                  Contact Information
                </Typography>
                <Box component="address" fontStyle="normal">
                  <Typography
                    variant="body2"
                    component="p"
                    gutterBottom
                    fontStyle="normal"
                  >
                    The Company Name Ltd. 15 Gregory Rd Hannibal, New York(NY),
                    13074 Telephone:(315) 564-7350 E-mail: mail@demolink.org
                  </Typography>
                </Box>
                <Box component="address" fontStyle="normal">
                  <p>
                    The Company Name Ltd. 15 Gregory Rd Hannibal, New York(NY),
                    13074 Telephone:(315) 564-7350 E-mail: mail@demolink.org
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  )
}
