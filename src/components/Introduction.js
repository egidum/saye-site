import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  card: {
    background: '#f9f9f9',
  },
  title: {
    fontFamily: 'Cuprum',
  },
  content: {
    color: '#757575',
  },
  link: {
    color: '#373839',
    textDecoration: 'none',
    '&:hover': {
      color: '#a09e9f',
    },
    textTransform: 'uppercase',
  },
  button: {
    color: '#2196F3',
    fontFamily: 'Cuprum',
  },
})

export default function Introduction() {
  const classes = useStyles()

  return (
    <Grid item xs={12} md={12}>
      <Card className={classes.card} elevation={2} square>
        <CardContent>
          <Typography
            className={classes.title}
            variant="h5"
            component="h2"
            gutterBottom
          >
            <Link className={classes.link} to="/about">
              Why You Should Hire Us
            </Link>
          </Typography>
          <Typography className={classes.content} variant="body1" component="p">
            Here are just a few reasons why you should hire us
            <ul>
              <li>In-depth Experience: 10+ years in business.</li>
              <li>Effective Results. We do the work anyway.</li>
              <li>You get the expertise you need.</li>
              <li>
                We’re always here. We work irregular hours, often more than the
                5 days a week.
              </li>
              <li>
                No matter what business you’re in, We can help you do more of
                it.
              </li>
              <li>Business Owners Love Working With Us.</li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className={classes.button}>
            <Link className={classes.link} to="/about">
              More About Us...
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
