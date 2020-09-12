import React from 'react'
import Grid from '@material-ui/core/Grid'
import Layout from '../components/Layout'
import BannerSlider from '../components/BannerSlider'
import FlashCard from '../components/FlashCard'
import Introduction from '../components/Introduction'

export default function Company() {
  return (
    <Layout>
      <Grid container direction="row" spacing={2}>
        <BannerSlider />
        <FlashCard title="Brilliant Ideas" more="Ideas" to="/ideas" />
        <FlashCard title="Strong Support" more="Support" to="/support" />
        <FlashCard
          title="Smart Strategies"
          more="Strategies"
          to="/strategies"
        />
        <Introduction />
      </Grid>
    </Layout>
  )
}
