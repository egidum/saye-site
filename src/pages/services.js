import React from 'react'
import { Link } from 'gatsby'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import Layout from '../components/Layout'

const useStyles = makeStyles({
  root: {
    minHeight: '70vh',
    marginTop: '1rem',
    padding: '1.5rem',
  },
  link: {
    color: 'inherit',
  },
  title: {
    fontFamily: 'Cuprum',
    textTransform: 'uppercase',
  },
})

export default function Services() {
  const classes = useStyles()

  return (
    <Layout>
      <Breadcrumbs separator="»" aria-label="breadcrumb">
        <Link className={classes.link} to={'/'}>
          <Typography variant="body2">Home</Typography>
        </Link>
        <Typography variant="body2" color="textPrimary">
          Services
        </Typography>
      </Breadcrumbs>
      <Grid container direction="row">
        <Grid item xs={12}>
          <Paper className={classes.root} square>
            <Typography className={classes.title} variant="h5" gutterBottom>
              Services
            </Typography>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In modi
              rem dolore soluta rerum suscipit, qui est necessitatibus itaque
              voluptatem excepturi vel? Veniam, nostrum! Assumenda totam vel
              asperiores reiciendis, tenetur ab. Fugiat sit repellat iste? Quae
              rem libero, facere maxime laboriosam qui vero voluptatum
              consectetur quos, doloremque culpa atque mollitia.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              ipsa facilis esse velit ducimus, dolores accusantium repellat,
              dignissimos optio mollitia commodi repudiandae. Nobis maiores
              esse, non sed asperiores animi. Quasi repellendus amet corrupti
              voluptates at, nulla dolorem tenetur tempore aut quisquam quam
              odio reprehenderit possimus eos esse ab recusandae obcaecati
              commodi ducimus aliquid dolorum sequi voluptatem vel minus!
              Aspernatur nostrum quam vero reiciendis provident voluptas dolorum
              architecto, ab enim sit quos commodi harum molestiae incidunt cum
              porro eius dolor ad ipsam eaque voluptates! Accusamus provident
              obcaecati assumenda, sapiente eum in?
            </p>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  )
}
