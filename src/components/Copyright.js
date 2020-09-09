import React from 'react'
import Typography from '@material-ui/core/Typography'

export default function Copyright() {
  return (
    <Typography variant="caption">
      {'SAYE © '} {'2009'} {'-'} {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
