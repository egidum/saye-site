import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles({
  card: {
    color: "#2196F3",
    "& a, p": {
      color: "#673AB7",
    },
  },
  media: {
    backgroundColor: "#4DD0E1",
    boxSizing: "border-box",
    height: "12rem",
  },
  button: {
    color: "#673AB7",
    "&:hover": {
      backgroundColor: "#673AB7",
      color: "#EEEEEE",
    },
  },
})

export default function FlashCard() {
  const classes = useStyles()

  return (
    <Grid item xs={12} md={12}>
      <Card className={classes.card} elevation={3} square>
        <CardContent>
          <h2>Content Card</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            magni, ea saepe fuga obcaecati aliquam cumque minima ducimus dicta
            accusamus velit vero veritatis omnis assumenda iure soluta id eos
            repudiandae nulla exercitationem.
          </p>
        </CardContent>
        <CardActions>
          <Button size="small" className={classes.button}>
            More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
