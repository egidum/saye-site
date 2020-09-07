import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles({
  root: {
    backgroundColor: "#BDBDBD",
    minHeight: "100vh",
    paddingTop: "1rem",
  },
  header: {
    padding: "2rem",
    marginTop: "2rem",
    marginBottom: "1rem",
    backgroundColor: "#673AB7",
    color: "#EEEEEE",
    "& a": {
      color: "#EEEEEE",
    },
  },
})

export default function Home() {
  const classes = useStyles()

  return (
    <Grid item xs={12} md={12}>
      <Paper className={classes.header} square>
        <h2>Home page</h2>
        <Link to="/about">About Us</Link>
      </Paper>
    </Grid>
  )
}
