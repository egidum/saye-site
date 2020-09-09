import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import ImgWebP from '../images/body.webp'
import 'fontsource-roboto'

import Header from '../components/Header'
import Footer from '../components/Footer'

const useStyles = makeStyles({
  root: {
    background: `url(${ImgWebP}) center top repeat`,
    minHeight: '100vh',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
})

export default function Layout({ children }) {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Container maxWidth="md">
        <Header />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}
