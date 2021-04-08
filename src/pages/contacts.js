import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import PageLayout from '../components/PageLayout'
import ContactForm from '../components/ContactForm'

const useStyles = makeStyles({
  title: {
    fontFamily: 'Cuprum',
    textTransform: 'uppercase',
  },
  address: {
    '& p > a': {
      textDecoration: 'none',
      color: 'inherit',
    },
    '& p > a:hover, a:active': {
      textDecoration: 'underline',
      color: '#757575',
    },
  },
})

export default function Contacts() {
  const classes = useStyles()

  return (
    <PageLayout tag="contacts">
      <Grid container spacing={2}>
        <Grid item component="section" xs={12} md={6}>
          <Typography className={classes.title} variant="h5" gutterBottom>
            Our Location
          </Typography>
          <p>Google Map</p>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item component="section" xs={12} md={6}>
          <ContactForm />
        </Grid>

        <Grid item component="section" xs={12} md={6}>
          <Typography className={classes.title} variant="h5" gutterBottom>
            Contact Information
          </Typography>
          <Box mt={3}>
            <Typography variant="subtitle2" gutterBottom>
              We are open for you emails, questions and suggestions on:
            </Typography>

            <Typography paragraph>
              <strong>Monday - Friday: </strong>8.30 am - 5.30 pm
              <br />
              <strong>Saturday: </strong>
              9.00 am - 2.00 pm
              <br />
              <strong>Sunday: </strong>
              Closed
            </Typography>
            <Box
              className={classes.address}
              component="address"
              fontStyle="normal"
            >
              <Typography paragraph>
                <strong>Saye Ltd.</strong>
                <br /> 15 Gregory Rd Hannibal, <br />
                New York(NY), 13074
              </Typography>
              <Typography paragraph>
                Telephone: <a href="tel: #"> (315) 564-7350</a>
              </Typography>
              <Typography paragraph>
                E-mail: <a href="mailto: #">mail@demolink.org</a>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </PageLayout>
  )
}
