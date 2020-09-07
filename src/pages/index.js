import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"

import Header from "../components/Header"
import Footer from "../components/Footer"
import BannerSlider from "../components/BannerSlider"
import FlashCard from "../components/FlashCard"
import ContentCard from "../components/ContentCard"

const useStyles = makeStyles({
  root: {
    backgroundColor: "#BDBDBD",
    minHeight: "100vh",
    paddingTop: "1rem",
  },
})

export default function Home() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Container maxWidth="md">
        <Header />

        <Grid container direction="row" spacing={2}>
          <BannerSlider />
          <FlashCard />
          <FlashCard />
          <FlashCard />
          <ContentCard />

          <Footer />
        </Grid>
      </Container>
    </Box>
  )
}
