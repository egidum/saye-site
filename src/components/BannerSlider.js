import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles({
  banner: {
    width: "100%",
    height: "360px",
    padding: "2rem",
    backgroundColor: "#90A4AE",
    color: "#009688",
  },
})

export default function BannerSlider() {
  const classes = useStyles()

  return (
    <Grid item xs={12} md={12}>
      <Paper className={classes.banner} square>
        <h2>Images</h2>
      </Paper>
    </Grid>
  )
}
