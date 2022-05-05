import React, { useState } from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'
import Link from '../src/Link'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import ButtonArrow from '../src/ui/original'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: '50px',
    width: 205,
    height: 80,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.warning.dark
    }
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    padding: 5,
    height: 35,
    [theme.breakpoints.down('md')]: {
      marginBottom: '2rem'
    }
  },
  revolutionBgImage: {
    backgroundImage: `url('/assets/background.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '45rem',
    paddingBottom: '10rem',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url('/assets/mobileBackground.jpg')`
    }
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '5rem',
    borderRadius: 5
  },
  sendButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: '50px',
    width: 205,
    height: 45,
    '&:hover': {
      backgroundColor: theme.palette.warning.dark
    },
    [theme.breakpoints.down('sm')]: {
      width: 185,
      height: 40
    }
  }
}))
export default function Contact(props) {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

  const [name, setName] = useState('')

  const [phone, setPhone] = useState('')
  const [phoneHelper, setPhoneHelper] = useState('')

  const [email, setEmail] = useState('')
  const [emailHelper, setEmailHelper] = useState('')

  const [message, setMessage] = useState('')

  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(false)
  const [alert, setAlert] = useState({ bgc: '', open: false, message: '' })

  const handleClose = () => {
    setOpen(false)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleChange = (e) => {
    let valid

    switch (e.target.id) {
      case 'name':
        setName(e.target.value)
        break
      case 'email':
        setEmail(e.target.value)
        /*   ————-——EMAIL—————————— */
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
        if (!valid) {
          setEmailHelper('Invalid email')
        } else {
          setEmailHelper('')
        }
        break

      case 'phone':
        setPhone(e.target.value)
        /* ——————PHONE—————————— */

        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(e.target.value)
        if (!valid) {
          setPhoneHelper('Invalid phone')
        } else {
          setPhoneHelper('')
        }
        break
      case 'message':
        setMessage(e.target.value)
        break
      default:
        break
    }
  }
  const onConfirm = () => {
    let params = { name: name, phone: phone, email: email, message: message }
    setProgress(true)
    setTimeout(() => {
      axios
        .post('https://material-ui-project-1e510.firebaseio.com/contact.json', params)
        .then((res) => {
          setProgress(false)
          setMessage('')
          setPhone('')
          setName('')
          setEmail('')
          setOpen(false)
          setAlert({ bgc: '#4bb543', open: true, message: 'Message sent succesfully' })
        })
        .catch((err) => {
          setProgress(false)
          setAlert({ bgc: 'red', open: true, message: 'Error happened' })
        })
    }, 3000)
  }
  const buttonContainer = (
    <React.Fragment>
      Send Message
      <img src="/assets/send.svg" alt="send message button" style={{ marginLeft: '1rem' }} />
    </React.Fragment>
  )
  return (
    <Grid item container direction="row">
      <Head>
        <title key="title">Contact Us | Demo Arc Developmet</title>
        <meta
          name="description"
          key="description"
          content="Let us guide you through the custom software development and design process. Send us an email for further discussion and get started now."
        />
        <meta
          property="og:title"
          content="Bringing High-End Technology to my Life | Contact Us"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="/contact" />
        <link rel="canonical" key="canonical" href="/contact" />
      </Head>
      <Grid
        item
        container
        lg={4}
        xl={3}
        justify="center"
        alignItems="center"
        style={{
          marginTop: matchesSM ? '1rem' : matchesMD ? '5rem' : 0,
          marginBottom: matchesMD ? '5rem' : 0
        }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h1"
                align={matchesMD ? 'center' : 'left'}
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? 'center' : 'inherit'}
                style={{ color: theme.palette.common.blue }}
              >
                We’re waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: '2rem' }}>
              <Grid item>
                <img src="/assets/phone.svg" alt="phone" style={{ marginRight: '0.5rem' }} />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  <a href="tel:(555) 555-5555" style={{ textDecoration: 'none', color: 'inherit' }}>
                    (555) 555-5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: '2rem' }}>
              <Grid item>
                <img
                  src="/assets/email.svg"
                  alt="emailIcon"
                  style={{ marginRight: '0.5rem', verticalAlign: 'bottom' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  <a
                    href="mailto:andrewli94125@gmail.com"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    andrewli94125@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" style={{ width: '20rem' }}>
              <Grid item style={{ marginBottom: '0.5rem' }}>
                <TextField label="Name" id="name" fullWidth value={name} onChange={handleChange} />
              </Grid>
              <Grid item style={{ marginBottom: '0.5rem' }}>
                <TextField
                  label="Phone"
                  id="phone"
                  helperText={phoneHelper}
                  error={phoneHelper.length !== 0}
                  fullWidth
                  value={phone}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5rem' }}>
                <TextField
                  label="Email"
                  id="email"
                  helperText={emailHelper}
                  error={emailHelper.length !== 0}
                  fullWidth
                  value={email}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ width: '20rem' }}>
              <TextField
                id="message"
                fullWidth
                className={classes.message}
                InputProps={{ disableUnderline: true }}
                multiline
                rows={8}
                placeholder="Write your message"
                value={message}
                onChange={handleChange}
              />
            </Grid>
            <Grid item container justify="center" style={{ marginTop: '2rem' }}>
              <Button
                disabled={
                  name.length === 0 ||
                  email.length === 0 ||
                  phone.length === 0 ||
                  message.length === 0 ||
                  emailHelper ||
                  phoneHelper
                }
                onClick={handleClickOpen}
                variant="contained"
                className={classes.sendButton}
              >
                Send Message
                <img
                  src="/assets/send.svg"
                  alt="send message button"
                  style={{ marginLeft: '1rem' }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.revolutionBgImage}
        alignItems="center"
        justify={matchesMD ? 'center' : undefined}
        lg={8}
        xl={9}
        direction={matchesMD ? 'column' : 'row'}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? '0' : '5rem',
            textAlign: matchesMD ? 'center' : 'inherit'
          }}
        >
          <Grid container direction="column">
            <Typography variant="h1" align={matchesMD ? 'center' : 'inherit'}>
              Simple Software. <br />
              Revolutionary Results.
            </Typography>
            <Typography variant="subtitle1" gutterBottom align={matchesMD ? 'center' : undefined}>
              Take advantage of the 21st Century.
            </Typography>
            <Grid container justify={matchesMD ? 'center' : undefined}>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                href="/revulation"
                onClick={() => {
                  props.setValue(2)
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            marginRight: matchesMD ? '0' : '3rem',
            marginLeft: '2rem'
          }}
          align={matchesMD ? 'center' : undefined}
        >
          <Button
            variant="outlined"
            className={classes.estimateButton}
            component={Link}
            href="/estimate"
            onClick={() => {
              props.setValue(5)
              ReactGA.event({
                category: 'Estimate',
                action: 'button in Contact'
              })
            }}
          >
            <span style={{ marginRight: 10 }}>Learn More</span>
            <ButtonArrow width={15} height={15} fill={theme.palette.common.white} />
          </Button>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            paddingTop: matchesSM ? '1rem' : '3rem',
            paddingBottom: matchesSM ? '1rem' : '3rem',
            paddingRight: matchesXS ? 0 : matchesSM ? '5rem' : matchesMD ? '7rem' : '10rem',
            paddingLeft: matchesXS ? 0 : matchesSM ? '5rem' : matchesMD ? '7rem' : '10rem'
          }
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: '0.5rem' }}>
              <TextField label="Name" id="name" fullWidth value={name} onChange={handleChange} />
            </Grid>
            <Grid item style={{ marginBottom: '0.5rem' }}>
              <TextField
                label="Phone"
                id="phone"
                helperText={phoneHelper}
                error={phoneHelper.length !== 0}
                fullWidth
                value={phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5rem' }}>
              <TextField
                label="Email"
                id="email"
                helperText={emailHelper}
                error={emailHelper.length !== 0}
                fullWidth
                value={email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5rem' }}>
              <TextField
                id="message"
                fullWidth
                className={classes.message}
                InputProps={{ disableUnderline: true }}
                multiline
                rows={8}
                placeholder="Write your message"
                value={message}
                onChange={handleChange}
              />
            </Grid>
            <Grid
              item
              container
              direction={matchesSM ? 'column' : 'row'}
              style={{ marginTop: '2rem' }}
              alignItems="center"
            >
              <Grid item>
                <Button onClick={handleClose} color="primary" style={{ marginRight: '1rem' }}>
                  Disagree
                </Button>
              </Grid>
              <Grid item>
                <Button
                  disabled={
                    name.length === 0 ||
                    email.length === 0 ||
                    phone.length === 0 ||
                    message.length === 0 ||
                    emailHelper ||
                    phoneHelper
                  }
                  onClick={onConfirm}
                  autoFocus
                  variant="contained"
                  className={classes.sendButton}
                >
                  {progress ? <CircularProgress size={30} /> : buttonContainer}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.bgc } }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
    </Grid>
  )
}
