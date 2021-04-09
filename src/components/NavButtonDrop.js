import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  title: {
    fontFamily: 'Cuprum',
    color: '#373839',
  },
  drop: {
    display: 'inline-block',
    position: 'relative',
    maxHeight: 120,
    padding: '3rem 1.5rem',
    textDecoration: 'none',
    textTransform: 'uppercase',
    verticalAlign: 'center',
    cursor: 'pointer',
    '&:hover': {
      borderBottom: '2px solid #373839',
      boxShadow: '0 0 7px rgba(0, 0, 0, 0.1)',
      '& $dropContent': {
        display: 'block',
        left: 0,
        border: '1px solid #c7c7c8',
      },
    },
  },
  dropContent: {
    display: 'none',
    position: 'absolute',
    background: '#f9f9f9',
    minWidth: 160,
    top: 121,
    zIndex: 1,
    '& a': {
      display: 'block',
      padding: '0.75rem 1rem',
      textDecoration: 'none',
      color: '#373839',
      '&:hover': {
        background: '#ccc',
      },
    },
  },
  active: {
    borderBottom: '2px solid #373839',
    boxShadow: '0 0 7px rgba(0, 0, 0, 0.1)',
  },
})

export default function NavButton() {
  const classes = useStyles()

  return (
    <>
      <Link
        className={classes.drop}
        to="/company"
        activeClassName={classes.active}
      >
        <Typography className={classes.title} variant="h6" component="h2">
          Company
        </Typography>
        <div className={classes.dropContent}>
          <Link to="/company/about">About</Link>
          <Link to="/company/our-culture">Our Culture</Link>
          <Link to="/company/faq">FAQ</Link>
          <Link to="/company/testimonials">Testimonials</Link>
        </div>
      </Link>
      <Link
        className={classes.drop}
        to="/services"
        activeClassName={classes.active}
      >
        <Typography className={classes.title} variant="h6" component="h2">
          Services
        </Typography>
        <div className={classes.dropContent}>
          <Link to="/services/best-services">Best Services</Link>
          <Link to="/services/service-one">Service One</Link>
          <Link to="/services/service-two">Service Two</Link>
          <Link to="/services/service-three">Service Three</Link>
        </div>
      </Link>
      <Link
        className={classes.drop}
        to="/solutions"
        activeClassName={classes.active}
      >
        <Typography className={classes.title} variant="h6" component="h2">
          Solutions
        </Typography>
        <div className={classes.dropContent}>
          <Link to="/solutions/master-solutions">Master Solutions</Link>
          <Link to="/solutions/brilliant-ideas">Brilliant Ideas</Link>
          <Link to="/solutions/smart-strategies">Smart Strategies</Link>
          <Link to="/solutions/strong-support">Strong Support</Link>
        </div>
      </Link>
      <Link
        className={classes.drop}
        to="/stories"
        activeClassName={classes.active}
      >
        <Typography className={classes.title} variant="h6" component="h2">
          Stories
        </Typography>
        <div className={classes.dropContent}>
          <Link to="/stories/lorem-ipsum-dolor-sit-amet">
            Lorem ipsum dolor sit amet
          </Link>
          <Link to="/stories/aspernatur-nostrum-quam">
            Aspernatur nostrum quam
          </Link>
          <Link to="/stories/nobis-maiores-esse">Nobis maiores esse</Link>
          <Link to="/stories/veniam-nostrum">Veniam nostrum</Link>
        </div>
      </Link>
    </>
  )
}
