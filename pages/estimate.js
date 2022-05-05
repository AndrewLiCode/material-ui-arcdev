import React, { useState, useRef } from 'react'
import Head from 'next/head'
import { cloneDeep } from 'lodash'
import Lottie from 'react-lottie'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import estimateAnimation from '../src/animations/estimateAnimation/data.json'

const useStyles = makeStyles((theme) => ({
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '3rem',
    marginBottom: '2rem',
    borderRadius: 5
  },
  icon: {
    width: '12rem',
    height: '10rem',
    marginTop: '1rem'
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: '50px',
    width: 225,
    height: 50,
    marginTop: '5rem',
    '&:hover': {
      backgroundColor: theme.palette.warning.dark
    }
  },
  specialText: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem',
    color: theme.palette.common.orange,
    fontFamily: 'Pacifico',
    fontWeight: 500
  }
}))
const estimateOptions = {
  loop: true,
  autoplay: true,
  animationData: estimateAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}
const defaultQuestions = [
  {
    id: 1,
    active: true,
    title: 'Which service are you interested in?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        subtitle: null,
        title: 'Custom Software Development',
        icon: '/assets/software.svg',
        iconAlt: 'three floating screen',
        selected: false,
        cost: 0
      },
      {
        id: 2,
        subtitle: null,
        title: 'iOS/Android App Development',
        icon: '/assets/mobile.svg',
        iconAlt: 'Mobile Apps Icon',
        selected: false,
        cost: 0
      },
      {
        id: 3,
        subtitle: null,
        title: 'Website Development',
        icon: '/assets/website.svg',
        iconAlt: 'Website development',
        selected: false,
        cost: 0
      }
    ]
  },

  {
    id: 2,
    active: false,
    title: 'Which platforms do you need supported?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Web Application',
        subtitle: null,
        icon: '/assets/websiteIcon.svg',
        iconAlt: 'computer outline',
        selected: false,
        cost: 100
      },
      {
        id: 2,
        title: 'iOS Application',
        subtitle: null,
        icon: '/assets/iphone.svg',
        iconAlt: 'outline of iphone',
        selected: false,
        cost: 100
      },
      {
        id: 3,
        title: 'Android Application',
        subtitle: null,
        icon: '/assets/android.svg',
        iconAlt: 'outlines of android phone',
        selected: false,
        cost: 100
      }
    ]
  },
  {
    id: 3,
    active: false,

    title: 'Which features do you expect to use?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Photo/Video',
        subtitle: null,
        icon: '/assets/camera.svg',
        iconAlt: 'camera outline',
        selected: false,
        cost: 25
      },
      {
        id: 2,
        title: 'GPS',
        subtitle: null,
        icon: '/assets/gps.svg',
        iconAlt: 'gps pin',
        selected: false,
        cost: 25
      },
      {
        id: 3,
        title: 'File Transfer',
        subtitle: null,
        icon: '/assets/upload.svg',
        iconAlt: 'outline of cloud with arrow pointing up',
        selected: false,
        cost: 25
      }
    ]
  },
  {
    id: 4,
    active: false,

    title: 'Which features do you expect to use?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Users/Authentication',
        subtitle: null,
        icon: '/assets/users.svg',
        iconAlt: 'outline of a person with a plus sign',
        selected: false,
        cost: 25
      },
      {
        id: 2,
        title: 'Biometrics',
        subtitle: null,
        icon: '/assets/biometrics.svg',
        iconAlt: 'fingerprint',
        selected: false,
        cost: 25
      },
      {
        id: 3,
        title: 'Push Notifications',
        subtitle: null,
        icon: '/assets/bell.svg',
        iconAlt: 'outline of a bell',
        selected: false,
        cost: 25
      }
    ]
  },
  {
    id: 5,
    active: false,

    title: 'What type of custom features do you expect to need?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: 'Low Complexity',
        subtitle: '(Informational)',
        icon: '/assets/info.svg',
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25
      },
      {
        id: 2,
        title: 'Medium Complexity',
        subtitle: '(Interactive, Customizable, Realtime)',
        icon: '/assets/customized.svg',
        iconAlt: 'two toggle switches',
        selected: false,
        cost: 50
      },
      {
        id: 3,
        title: 'High Complexity',
        subtitle: '(Data Modeling and Computation)',
        icon: '/assets/data.svg',
        iconAlt: 'outline of line graph',
        selected: false,
        cost: 100
      }
    ]
  },
  {
    id: 6,
    active: false,
    title: 'Which type of website are you wanting?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: 'Basic',
        subtitle: '(Informational)',
        icon: '/assets/info.svg',
        iconAlt: 'person outline',
        selected: false,
        cost: 100
      },
      {
        id: 2,
        title: 'Interactive',
        subtitle: "(Users, API's, Messaging)",
        icon: '/assets/customized.svg',
        iconAlt: 'outline of two people',
        selected: false,
        cost: 200
      },
      {
        id: 3,
        title: 'E-Commerce',
        subtitle: '(Sales)',
        icon: '/assets/globe.svg',
        iconAlt: 'outline of three people',
        selected: false,
        cost: 250
      }
    ]
  },
  {
    id: 7,
    active: false,

    title: 'How many users do you expect?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: '0-10',
        subtitle: null,
        icon: '/assets/persons.svg',
        iconAlt: 'person outline',
        selected: false,
        cost: 1
      },
      {
        id: 2,
        title: '10-100',
        subtitle: null,
        icon: '/assets/persons.svg',
        iconAlt: 'outline of two people',
        selected: false,
        cost: 1.25
      },
      {
        id: 3,
        title: '100+',
        subtitle: null,
        icon: '/assets/people.svg',
        iconAlt: 'outline of three people',
        selected: false,
        cost: 1.5
      }
    ]
  }
]
export default function Estimate(props) {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const myRef = useRef(null)

  const [questions, setQuestions] = useState(defaultQuestions)
  const [open, setOpen] = useState(false)

  const [name, setName] = useState('')

  const [email, setEmail] = useState('')
  const [emailHelper, setEmailHelper] = useState('')

  const [phone, setPhone] = useState('')
  const [phoneHelper, setPhoneHelper] = useState('')

  const [message, setMessage] = useState('')
  const [total, setTotal] = useState(0)
  const [title, setTitle] = useState('')
  const [platforms, setPlatforms] = useState([])
  const [features, setFeatures] = useState([])
  const [service, setService] = useState('')
  const [progress, setProgress] = useState(false)
  const [alert, setAlert] = useState({ bgc: '', open: false, message: '' })

  const nextQuestion = () => {
    if (matchesSM) {
      window.scrollTo(0, myRef.current.offsetTop + 75)
    }
    var newQuestions = cloneDeep(questions) //hamsi
    const currentActive = newQuestions.filter((qu) => qu.active) //indiki active olan
    var currentIndex = currentActive[0].id - 1 //activin indexi-1 cunki [1] =>[0]ci olur
    var nextIndex = currentIndex + 1 //sonraki indexi bu hazir 1vahid coxdu deye hecne elave edib cixmiram

    newQuestions[currentIndex] = {
      ...currentActive[0],
      active: false
    }
    newQuestions[nextIndex] = {
      ...newQuestions[nextIndex],
      active: true
    }

    setQuestions(newQuestions)
    // console.log(newQuestions)
  }
  const backQuestion = () => {
    if (matchesSM) {
      window.scrollTo(0, myRef.current.offsetTop + 75)
    }
    var newQuestions = cloneDeep(questions) //hamsi
    const currentActive = newQuestions.filter((qu) => qu.active) //indiki active olan
    var currentIndex = currentActive[0].id - 1 //activin indexi-1 cunki [1] =>[0]ci olur
    var prevIndex = currentIndex - 1 //evvelki indexi bu hazir 1vahid coxdu deye hecne elave edib cixmiram

    newQuestions[currentIndex] = {
      ...currentActive[0],
      active: false
    }
    newQuestions[prevIndex] = {
      ...newQuestions[prevIndex],
      active: true
    }

    setQuestions(newQuestions)
    // console.log(newQuestions)
  }
  const navigationPrevDisable = () => {
    const currentActive = questions.filter((qu) => qu.active) //indiki active olan
    if (currentActive[0].id === questions[0].id) {
      return true //dayan
    } else {
      return false
    }
  }
  const navigationNextDisable = () => {
    const currentActive = questions.filter((qu) => qu.active) //indiki active olan
    if (currentActive[0].id === questions[questions.length - 1].id) {
      return true //dayan
    } else {
      return false
    }
  }
  const onSelected = (id) => {
    const allQuestions = cloneDeep(questions)
    const activeCurrentQ = allQuestions.filter((q) => q.active)
    var currentIndex = activeCurrentQ[0].id - 1 //activin indexi-1 cunki [1] =>[0]ci olur

    const newSelected = allQuestions[currentIndex].options[id - 1]

    const previosSelected = activeCurrentQ[0].options.filter((opt) => opt.selected)

    switch (activeCurrentQ[0].subtitle) {
      case 'Select one.':
        newSelected.selected = !newSelected.selected //teze basdigimi true ele
        if (previosSelected[0]) {
          //eger secilmis biri varsa
          previosSelected[0].selected = false //true=>false ele
        }
        // console.log(previosSelected[0])
        break

      default:
        newSelected.selected = !newSelected.selected
        break
    }

    setQuestions(allQuestions)
    // console.log(allQuestions)
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
  const getTotal = () => {
    let cost = 0

    let selections = questions
      .map((question) => question.options.filter((opt) => opt.selected)) //selectedleri sec
      .filter((question) => question.length > 0) //bos array lazim deyil
    selections.map((options) => options.map((option) => (cost += option.cost)))

    let userSelect = questions
      .filter((question) => question.title === 'How many users do you expect?')[0]
      .options.filter((option) => option.selected)[0]
    let userSelectCost = userSelect.cost
    cost -= userSelectCost
    cost *= userSelectCost
    setTotal(cost)

    let userSelectTitle = userSelect.title
    setTitle(userSelectTitle)
  }
  const getPlatforms = () => {
    let newPlatforms = []
    questions
      .filter((question) => question.title === 'Which platforms do you need supported?')[0]
      .options.filter((option) => option.selected)
      .map((opt) => newPlatforms.push(opt.title))
    setPlatforms(newPlatforms)

    let service = questions
      .filter((question) => question.title === 'Which platforms do you need supported?')[0]
      .options.filter((option) => option.selected)[0].title
    setService(service)
  }
  const getFeatures = () => {
    let newFeatures = []
    questions
      .filter((question) => question.title === 'Which features do you expect to use?')
      .map((question) => question.options.filter((option) => option.selected))
      .map((option) => option.map((newF) => newFeatures.push(newF.title)))
    setFeatures(newFeatures)
  }
  const getDisable = () => {
    let disable = questions
      .map((question) => question.options.filter((opt) => opt.selected)) //selectedleri sec
      .filter((question) => question.length > 0)

    if (disable.length < 7) {
      return true
    } else {
      return false
    }
  }
  const placeRequest = () => {
    let params = {
      name: name,
      phone: phone,
      email: email,
      message: message,
      total: total,
      title: title,
      platforms: platforms,
      features: features,
      service: service
    }
    setProgress(true)
    setTimeout(() => {
      axios
        .post('https://material-ui-project-1e510.firebaseio.com/estimate.json', params)
        .then((res) => {
          setProgress(false)
          setSelectedFalse()
          setMessage('')
          setPhone('')
          setName('')
          setEmail('')
          setOpen(false)
          setAlert({ bgc: '#4bb543', open: true, message: 'Your order accepted' })
        })
        .catch((err) => {
          setProgress(false)
          setAlert({ bgc: 'red', open: true, message: 'Error happened' })
        })
    }, 3000)
  }
  const setSelectedFalse = () => {
    setQuestions(defaultQuestions)
  }
  return (
    <Grid container direction="row">
      <Head>
        <title key="title">Free Estimate For Software Development</title>
        <meta
          name="description"
          key="description"
          content="Use our online estimate for free to calculate the cost of custom software design and development with iOS/Android apps."
        />
        <meta
          property="og:title"
          content="Bringing High-End Technology to my Life | Free Estimate"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="/estimate" />
        <link rel="canonical" key="canonical" href="/estimate" />
      </Head>
      <Grid item container direction="column" lg alignItems={matchesMD ? 'center' : undefined}>
        <Grid item style={{ marginTop: '2rem', marginLeft: matchesMD ? '0' : '5rem' }}>
          <Typography variant="h1" align="left">
            Estimate
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            marginRight: matchesMD ? '0' : '10rem',
            maxWidth: matchesSM ? '25rem' : matchesMD ? '35rem' : '50rem',
            marginTop: '7.5rem'
          }}
        >
          <Lottie options={estimateOptions} /* isStopped */ height="100%" width="100%" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        lg
        style={{
          marginRight: matchesMD ? '0' : '2.5rem',
          marginBottom: '25rem'
        }}
      >
        {questions
          .filter((question) => question.active === true)
          .map((question, index) => (
            <React.Fragment key={index}>
              <Grid item ref={myRef}>
                <Typography
                  variant="h1"
                  style={{
                    fontWeight: 500,
                    fontSize: '2.5rem',
                    marginTop: '5rem',
                    marginBottom: '2.5rem',
                    lineHeight: 1.25,
                    marginLeft: matchesSM ? '1rem' : 0,
                    marginRight: matchesSM ? '1rem' : 0
                  }}
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{
                    marginBottom: '2.5rem'
                  }}
                  gutterBottom
                >
                  {question.subtitle}
                </Typography>
              </Grid>
              <Grid item container>
                {question.options.map((option) => (
                  <Grid
                    component={Button}
                    style={{
                      display: 'grid',
                      textTransform: 'none',
                      marginBottom: matchesSM ? '1.5rem' : '0',
                      borderRadius: 0,
                      backgroundColor: option.selected ? theme.palette.common.orange : null
                    }}
                    onClick={() => onSelected(option.id)}
                    item
                    container
                    direction="column"
                    md
                    key={question.id + "'s " + option.id}
                  >
                    <Grid item style={{ maxWidth: '14rem' }}>
                      <Typography variant="h6" align="center" style={{ marginBottom: '1rem' }}>
                        {option.title}
                      </Typography>
                      <Typography variant="caption" align="center">
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img src={option.icon} alt={option.iconAlt} className={classes.icon} />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}
        <Grid item container justify="space-between" style={{ maxWidth: '18rem', marginTop: '3rem' }}>
          <Grid item>
            <IconButton onClick={backQuestion} disabled={navigationPrevDisable()}>
              <img
                src={
                  navigationPrevDisable()
                    ? '/assets/backArrowDisabled.svg'
                    : '/assets/backArrow.svg'
                }
                alt="back"
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={nextQuestion} disabled={navigationNextDisable()}>
              <img
                src={
                  navigationNextDisable()
                    ? '/assets/backArrowDisabled.svg'
                    : '/assets/forwardArrow.svg'
                }
                alt="forward"
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            disabled={getDisable()}
            variant="contained"
            className={classes.estimateButton}
            onClick={() => {
              setOpen(true)
              getTotal()
              getPlatforms()
              getFeatures()
            }}
          >
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: 1302 }}
        fullScreen={matchesSM}
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="lg"
      >
        <Grid container justify="center">
          <Grid item style={{ marginTop: '1rem' }}>
            <Typography variant="h1">Estimate</Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid
            item
            container
            justify={matchesSM ? 'center' : 'space-between'}
            alignItems={matchesSM ? 'center' : undefined}
            direction={matchesSM ? 'column' : 'row'}
          >
            <Grid
              item
              container
              direction="column"
              md={7}
              style={{ maxWidth: matchesSM ? '24rem' : matchesMD ? '27rem' : '30rem' }}
            >
              <Grid item style={{ marginBottom: '0.5rem', marginRight: matchesSM ? '0' : '4rem' }}>
                <TextField label="Name" id="name" fullWidth value={name} onChange={handleChange} />
              </Grid>
              <Grid item style={{ marginBottom: '0.5rem', marginRight: matchesSM ? '0' : '4rem' }}>
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
              <Grid item style={{ marginBottom: '0.5rem', marginRight: matchesSM ? '0' : '4rem' }}>
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
              <Grid item style={{ marginBottom: '0.5rem', marginRight: matchesSM ? '0' : '4rem' }}>
                <TextField
                  id="message"
                  fullWidth
                  className={classes.message}
                  InputProps={{ disableUnderline: true }}
                  multiline
                  rows={8}
                  placeholder="Tell us about your project"
                  value={message}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <Typography
                  style={{ lineHeight: 1.25 }}
                  variant="body1"
                  gutterBottom
                  align={matchesMD ? 'center' : undefined}
                >
                  We can create this custom digital solution for an estimated
                  <span className={classes.specialText}>${total.toFixed(2)}</span>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" align={matchesMD ? 'center' : undefined}>
                  Fill out your name, number, and email, place your request, and we’ll get back to
                  you with details moving forward and a final price.{' '}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="row"
              md={5}
              style={{ maxWidth: matchesSM ? '26rem' : matchesMD ? '30rem' : '35rem' }}
            >
              <Hidden smDown>
                <Grid container direction="column">
                  <Grid item container alignItems="center" style={{ marginBottom: '1.25rem' }}>
                    <Grid item xs={2}>
                      <img src="/assets/check.svg" alt="check" />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        variant="body1"
                        style={{ color: 'grey' }}
                        align={matchesSM ? 'center' : undefined}
                      >
                        You want{' '}
                        {platforms.length > 0
                          ? platforms.indexOf('Web Application') > -1 && platforms.length === 1
                            ? //then finish sentence here
                            'a Web Application.'
                            : //otherwise, if web application and another platform is selected...
                            platforms.indexOf('Web Application') > -1 && platforms.length === 2
                              ? //then finish the sentence here
                              `a Web Application and an ${platforms[1]}`
                              : //otherwise, if only one platform is selected which isn't web application...
                              platforms.length === 1
                                ? //then finish the sentence here
                                `an ${platforms[0]}`
                                : //otherwise, if other two options are selected...
                                platforms.length === 2
                                  ? //then finish the sentence here
                                  'an iOS Application and an Android Application'
                                  : //otherwise if all three are selected...
                                  platforms.length === 3
                                    ? //then finish the sentence here
                                    'a Web Application, an iOS Application, and an Android Application'
                                    : null
                          : null}{' '}
                        for {service} service
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container alignItems="center" style={{ marginBottom: '1.25rem' }}>
                    <Grid item xs={2}>
                      <img src="/assets/check.svg" alt="check" />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        variant="body1"
                        style={{ color: 'grey' }}
                        align={matchesSM ? 'center' : undefined}
                      >
                        for {title} users
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container alignItems="center">
                    <Grid item xs={2}>
                      <img src="/assets/check.svg" alt="check" />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        variant="body1"
                        style={{ color: 'grey' }}
                        align={matchesSM ? 'center' : undefined}
                      >
                        using with {''}
                        {/* if we have features... */}
                        {features.length > 0
                          ? //...and there's only 1...
                          features.length === 1
                            ? //then end the sentence here
                            `${features[0]}.`
                            : //otherwise, if there are two features...
                            features.length === 2
                              ? //...then end the sentence here
                              `${features[0]} and ${features[1]}.`
                              : //otherwise, if there are three or more features...
                              features
                                //filter out the very last feature...sondakindan ferqlileri sec
                                .filter((feature, index) => index !== features.length - 1)
                                //and for those features return their name...
                                .map((feature, index) =>
                                  index === features.length - 2 ? (
                                    <span key={index}>{`${feature} `}</span>
                                  ) : (
                                      <span key={index}>{`${feature}, `}</span>
                                    )
                                )
                          : null}
                        {features.length > 2
                          ? //...and then finally add the last feature with 'and' in front of it
                          ` and ${features[features.length - 1]}.`
                          : null}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Hidden>

              <Grid item container justify="center">
                <Button
                  disabled={
                    name.length === 0 ||
                    email.length === 0 ||
                    phone.length === 0 ||
                    message.length === 0 ||
                    emailHelper ||
                    phoneHelper
                  }
                  variant="contained"
                  className={classes.estimateButton}
                  onClick={() => {
                    setOpen(true)
                    placeRequest()
                  }}
                >
                  Place Request
                  {progress ? (
                    <CircularProgress size={20} style={{ marginLeft: '1rem' }} />
                  ) : (
                      <img src="/assets/send.svg" alt="send" style={{ marginLeft: '0.5rem' }} />
                    )}
                </Button>
              </Grid>
              <Hidden mdUp>
                <Grid item container justify="center" style={{ marginTop: '2rem' }}>
                  <Button color="primary" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                </Grid>
              </Hidden>
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
