import React from 'react'
import { Link } from 'gatsby'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import Layout from '../components/Layout'
import MainPage from '../components/MainPage'
import ContactForm from '../components/ContactForm'

const useStyles = makeStyles({
  link: {
    color: 'inherit',
  },
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
    <Layout>
      <Breadcrumbs separator="»" aria-label="breadcrumb">
        <Link className={classes.link} to={'/'}>
          <Typography variant="body2">Home</Typography>
        </Link>
        <Typography variant="body2" color="textPrimary">
          Contacts
        </Typography>
      </Breadcrumbs>

      <MainPage>
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

              <p>
                <strong>Monday - Friday: </strong>8.30 am - 5.30 pm
                <br />
                <strong>Saturday: </strong>
                9.00 am - 2.00 pm
                <br />
                <strong>Sunday: </strong>
                Closed
              </p>

              <Box
                className={classes.address}
                component="address"
                fontStyle="normal"
              >
                <p>
                  <strong>Saye Ltd.</strong>
                  <br /> 15 Gregory Rd Hannibal, <br />
                  New York(NY), 13074
                </p>
                <p>
                  Telephone: <a href="tel: #"> (315) 564-7350</a>
                </p>
                <p>
                  E-mail: <a href="mailto: #">mail@demolink.org</a>
                </p>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </MainPage>
    </Layout>
  )
}
