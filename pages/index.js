import React from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'
import Link from '../src/Link'
import Lottie from 'react-lottie'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import ButtonArrow from '../src/ui/original'
import CallToAction from '../src/ui/CallToAction'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import animationData from '../src/animations/landinganimation/data'

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '50rem',
    minWidth: '21rem',
    marginTop: '2rem',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '25rem'
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: '50px',
    width: 145,
    height: 45,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.warning.dark
    }
  },
  buttonContainer: {
    marginTop: '1rem'
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    width: 145,
    height: 45
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    padding: 5,
    height: 35,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2rem'
    }
  },
  subtitle: {
    marginBottom: '1rem'
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em'
    }
  },
  heroTextContainer: {
    minWidth: '21.5rem',
    marginLeft: '1rem',
    [theme.breakpoints.down('xs')]: {
      marginTop: '0'
    }
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange
  },
  icon: {
    marginLeft: '2rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0'
    }
  },
  serviceContainer: {
    marginTop: '12rem',
    [theme.breakpoints.down('sm')]: {
      padding: 25
    },
    [theme.breakpoints.down('xs')]: {
      padding: 5
    }
  },
  revolutionBgImage: {
    backgroundImage: `url('/assets/repeatingBackground.svg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  informationBgImage: {
    backgroundImage: `url('/assets/infoBackground.svg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '80rem',
    marginTop: '12rem'
  },
  revolutionCard: {
    position: 'absolute',
    padding: '10rem',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8rem',
      paddingBottom: '8rem',
      paddingLeft: '0',
      paddingRight: '0',
      borderRadius: 0,
      width: '100%'
    }
  }
}))
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}
export default function LandingPage(props) {
  const theme = useTheme()
  const classes = useStyles()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <div>
      <Grid container direction="column" className={classes.mainContainer}>
        <Head>
          <title key="title">Software Design and Development - mobile - websites | Demo</title>
          <meta
            name="description"
            key="description"
            content="Top notch custom software design and development with a free estimate. Optimize your business and scale your project anytime"
          />
          <meta
            property="og:title"
            content="Bringing High-End Technology to my Life | Demo Arc Development"
            key="og:title"
          />
          <meta property="og:url" key="og:url" content="/" />
          <link rel="canonical" key="canonical" href="/" />
        </Head>
        <Grid item>
          {/* Hero Blok */}
          <Grid container direction="row" alignItems="center">
            <Grid item sm className={classes.heroTextContainer}>
              <Typography alignitems="center" variant="h1">
                Bringing High-End Technology
                <br /> to my Life.
              </Typography>
              <Grid container justify="center" className={classes.buttonContainer}>
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.estimateButton}
                    component={Link}
                    href="/estimate"
                    onClick={() => {
                      props.setValue(5)
                      ReactGA.event({
                        category: 'Estimate',
                        action: 'button in Landing Page'
                      })
                    }}
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButtonHero}
                    component={Link}
                    href="/revulation"
                    onClick={() => props.setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm className={classes.animation}>
              <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* services blog */}
          <Grid
            container
            direction="row"
            justify={matchesSM ? 'center' : undefined}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? '0' : '5rem',
                textAlign: matchesSM ? 'center' : undefined
              }}
            >
              <Typography variant="h4">Custom Software Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Complete digital solutions, from investigation to {''}
                <span className={classes.specialText}>celebration</span>.
              </Typography>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                href="/customsoftware"
                onClick={() => {
                  props.setValue(1)
                  props.setSelected(1)
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
              </Button>
            </Grid>
            <Grid item>
              <img
                alt="Custom sofware icon"
                src="/assets/customSoftware.svg"
                className={classes.icon}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* mobile app dev section */}
          <Grid
            container
            direction="row"
            justify={matchesSM ? 'center' : 'flex-end'}
            style={{ color: 'red' }}
            className={classes.serviceContainer}
          >
            <Grid item style={{ textAlign: matchesSM ? 'center' : undefined }}>
              <Typography variant="h4">iOS/Android App Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Integrate your web experience or create a standalone app {matchesSM ? null : <br />}
                with either mobile platform.
              </Typography>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                href="/mobileapps"
                onClick={() => {
                  props.setValue(1)
                  props.setSelected(2)
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
              </Button>
            </Grid>
            <Grid item style={{ marginRight: matchesSM ? '0' : '5rem' }}>
              <img alt="Mobile app icon" src="/assets/mobileIcon.svg" className={classes.icon} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* website blog */}
          <Grid
            container
            direction="row"
            justify={matchesSM ? 'center' : undefined}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? '0' : '5rem',
                textAlign: matchesSM ? 'center' : undefined
              }}
            >
              <Typography variant="h4">Website Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Optimized for Search Engines, {matchesSM ? null : <br />} built for speed.
              </Typography>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                href="/websites"
                onClick={() => {
                  props.setValue(1)
                  props.setSelected(3)
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
              </Button>
            </Grid>
            <Grid item>
              <img
                alt="Custom sofware icon"
                src="/assets/websiteIcon.svg"
                className={classes.icon}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ height: '100rem', marginTop: '12rem' }}
          >
            <Card className={classes.revolutionCard}>
              <CardContent>
                <Grid container direction="column" align="center">
                  <Grid item>
                    <Typography variant="h3" gutterBottom>
                      Revolution
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" gutterBottom>
                      Visionary insights coupled with cutting-edge technology is a recipe for
                      revolution.
                    </Typography>
                    <Button
                      variant="outlined"
                      className={classes.learnButton}
                      component={Link}
                      href="/revulation"
                      onClick={() => props.setValue(2)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <div className={classes.revolutionBgImage} />
          </Grid>
        </Grid>
        <Grid item>
          {/* information block */}
          <Grid
            container
            direction="row"
            alignItems="center"
            className={classes.informationBgImage}
          >
            <Grid
              item
              container
              style={{ textAlign: matchesXS ? 'center' : 'inherit' }}
              direction={matchesXS ? 'column' : 'row'}
            >
              <Grid item sm style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2rem' : '5rem' }}>
                <Grid
                  direction="column"
                  container
                  style={{ marginBottom: matchesXS ? '10rem' : '0' }}
                >
                  <Typography variant="h1" style={{ color: 'white', textAlign: 'inherit' }}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Let’s get personal.
                  </Typography>
                  <Grid item>
                    <Button
                      variant="outlined"
                      className={classes.learnButton}
                      style={{ borderColor: 'white', color: 'white' }}
                      component={Link}
                      href="/about"
                      onClick={() => props.setValue(3)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={15} height={15} fill={'white'} />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sm
                style={{
                  marginRight: matchesXS ? 0 : matchesSM ? '2rem' : '5rem',
                  textAlign: matchesXS ? 'center' : 'right'
                }}
              >
                <Grid container direction="column">
                  <Typography variant="h1" style={{ color: 'white', textAlign: 'inherit' }}>
                    Contact Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Say hello!{' '}
                    <span role="img" aria-label="wawing hand">
                      👋🏻
                    </span>
                  </Typography>
                  <Grid item>
                    <Button
                      variant="outlined"
                      className={classes.learnButton}
                      style={{ borderColor: 'white', color: 'white' }}
                      component={Link}
                      href="/contact"
                      onClick={() => props.setValue(4)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={15} height={15} fill={'white'} />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* CallToAction section */}
          <CallToAction setValue={props.setValue} />
        </Grid>
      </Grid>
    </div>
  )
}
