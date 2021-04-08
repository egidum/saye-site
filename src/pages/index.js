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
        <FlashCard
          title="Brilliant Ideas"
          readmore="More Ideas"
          slug="/solutions/brilliant-ideas"
        >
          Content
        </FlashCard>
        <FlashCard
          title="Strong Support"
          readmore="More Support"
          slug="/solutions/strong-support"
        >
          Content
        </FlashCard>
        <FlashCard
          title="Smart Strategies"
          readmore="More Strategies"
          slug="/solutions/smart-strategies"
        >
          Content
        </FlashCard>
        <Introduction />
      </Grid>
    </Layout>
  )
}
