import React from 'react'
import { Link } from 'gatsby'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import Layout from '../components/Layout'
import MainPage from '../components/MainPage'

const useStyles = makeStyles({
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
      <MainPage>
        <Typography className={classes.title} variant="h5" gutterBottom>
          Services
        </Typography>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In modi rem
          dolore soluta rerum suscipit, qui est necessitatibus itaque voluptatem
          excepturi vel? Veniam, nostrum! Assumenda totam vel asperiores
          reiciendis, tenetur ab. Fugiat sit repellat iste? Quae rem libero,
          facere maxime laboriosam qui vero voluptatum consectetur quos,
          doloremque culpa atque mollitia.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsa
          facilis esse velit ducimus, dolores accusantium repellat, dignissimos
          optio mollitia commodi repudiandae. Nobis maiores esse, non sed
          asperiores animi. Quasi repellendus amet corrupti voluptates at, nulla
          dolorem tenetur tempore aut quisquam quam odio reprehenderit possimus
          eos esse ab recusandae obcaecati commodi ducimus aliquid dolorum sequi
          voluptatem vel minus! Aspernatur nostrum quam vero reiciendis
          provident voluptas dolorum architecto, ab enim sit quos commodi harum
          molestiae incidunt cum porro eius dolor ad ipsam eaque voluptates!
          Accusamus provident obcaecati assumenda, sapiente eum in?
        </p>
        <Link className={classes.link} to={'/service1'}>
          <Typography variant="body2">Service One</Typography>
        </Link>
      </MainPage>
    </Layout>
  )
}
