import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

const subjects = [
  {
    value: '',
    label: 'None',
  },
  {
    value: 'Service 1',
    label: 'Service 1',
  },
  {
    value: 'Service 2',
    label: 'Service 2',
  },
  {
    value: 'Solution 1',
    label: 'Solution 1',
  },
  {
    value: 'Solution 2',
    label: 'Solution 2',
  },
]

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginRight: theme.spacing(1),
    },
  },
  btn: {
    marginTop: theme.spacing(2),
  },
}))

export default function ContactForm() {
  const classes = useStyles()
  const [subject, setSubject] = React.useState('')

  const handleChange = event => {
    setSubject(event.target.value)
  }

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Contact Form
      </Typography>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        name="contact"
        method="POST"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <TextField
          required
          id="standard-basic"
          label="Name"
          helperText="John Doe"
          fullWidth
          type="text"
          name="name"
        />
        <TextField
          required
          id="standard-basic"
          label="Email address"
          helperText="example@example.com"
          fullWidth
          type="email"
          name="email"
        />
        <TextField
          required
          id="standard-select"
          select
          label="Subject"
          value={subject}
          onChange={handleChange}
          helperText="Please select your subject"
          fullWidth
          name="subjects[]"
          multiple
        >
          {subjects.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="standard-textarea"
          label="Message"
          placeholder=""
          multiline
          rows={4}
          helperText="Write your message here"
          fullWidth
          name="message"
        />
        <div className={classes.btn}>
          <Button variant="contained" type="submit">
            Send
          </Button>
        </div>
      </form>
    </React.Fragment>
  )
}
