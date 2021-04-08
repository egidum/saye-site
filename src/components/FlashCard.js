import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import 'fontsource-cuprum'

const useStyles = makeStyles({
  card: {
    background: '#f9f9f9',
  },
  media: {
    backgroundColor: '#4DD0E1',
    boxSizing: 'border-box',
    height: '12rem',
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
    color: '#373839',
    fontFamily: 'Cuprum',
  },
})

export default function FlashCard({ title, readmore, slug }) {
  const classes = useStyles()

  return (
    <Grid item xs={12} md>
      <Card className={classes.card} elevation={2} square>
        <CardMedia
          component="img"
          alt="Images"
          className={classes.media}
          image="#"
          title="Images"
        />
        <CardContent>
          <Typography
            className={classes.title}
            variant="h5"
            component="h2"
            gutterBottom
          >
            <Link className={classes.link} to={slug}>
              {title}
            </Link>
          </Typography>
          <Typography className={classes.content} variant="body1" component="p">
            Reikia komponentą FlashCard susieti su index failu
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className={classes.button}>
            <Link className={classes.link} to={slug}>
              {readmore} ...
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
