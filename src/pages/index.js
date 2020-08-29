import React from "react"
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles({
  root: { 
    backgroundColor: '#BDBDBD',   
    minHeight: '100vh',    
    paddingTop: '1rem'
  },
  header: {
    padding: '2rem',
    marginBottom: '1rem',
    backgroundColor: '#673AB7',
    color: '#EEEEEE',
    '& a': {
      color: '#EEEEEE'
    }
  },
  slider: {
    width: '100%',
    height: '360px',
    padding: '2rem',
    backgroundColor: '#90A4AE',
  },
  card: {
    color: '#2196F3',
    '& a, p': {
      color: '#673AB7'
    },
    height: '25rem'
  },
  footer: {
    padding: '2rem',
    backgroundColor: '#673AB7',
    color: '#EEEEEE'
  },
})

export default function Home() {
  const classes = useStyles();

  return (  
    <Box className={classes.root}>
      <CssBaseline/>
      <Container maxWidth="md">
        <Grid item xs={12} md={12} >
          <Paper className={classes.header}>        
            <h2>Home page</h2>
            <Link to="/about">About Us</Link>
          </Paper> 
        </Grid>
        <Grid  
          container 
          direction="row"
          spacing={2}
        >
          <Grid item xs={12} md={12} >
            <Paper className={classes.slider}>        
              <Box>Images</Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md >
            <Card className={classes.card}>
              <CardContent>
                <h2>Box 1</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque magni, ea saepe fuga obcaecati aliquam cumque minima ducimus dicta accusamus velit vero veritatis omnis assumenda iure soluta id eos repudiandae nulla exercitationem.</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md >
            <Card className={classes.card}>
              <CardContent>
                <h2>Box 2</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque magni, ea saepe fuga obcaecati aliquam cumque minima ducimus dicta accusamus velit vero veritatis omnis assumenda iure soluta id eos repudiandae nulla exercitationem.</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md >
            <Card className={classes.card}>
              <CardContent>
                <h2>Box 3</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque magni, ea saepe fuga obcaecati aliquam cumque minima ducimus dicta accusamus velit vero veritatis omnis assumenda iure soluta id eos repudiandae nulla exercitationem.</p> 
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} >
            <Card className={classes.card}>
              <CardContent>
                <h2>Box 4</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque magni, ea saepe fuga obcaecati aliquam cumque minima ducimus dicta accusamus velit vero veritatis omnis assumenda iure soluta id eos repudiandae nulla exercitationem.</p> 
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} >
            <Paper className={classes.footer}>        
              <h2>Footer</h2>              
            </Paper> 
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
