import React from 'react'
import Head from 'next/head'
import Link from '../src/Link'
import Lottie from 'react-lottie'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import CallToAction from '../src/ui/CallToAction'

import mobileAnimation from '../src/animations/integrationAnimation/data.json'
const useStyles = makeStyles((theme) => ({
  arrowContainer: {
    marginTop: '0.5rem'
  },
  heading: {
    maxWidth: '40rem'
  },
  rowContainer: {
    paddingLeft: '5rem',
    paddingRight: '5rem',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem'
    }
  }
}))
const mobileOptions = {
  loop: true,
  autoplay: true,
  animationData: mobileAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}
export default function MobileApps(props) {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? '1rem' : '2rem' }}
      >
        <Head>
          <title key="title">Mobile Apps Development iOS/Android - Demo</title>
          <meta
            name="description"
            key="description"
            content="Mobile Apps Made Easy | Our app development process lets you custom design your own website and mobile apps."
          />
          <meta
            property="og:title"
            content="Bringing High-End Technology to my Life | iOS/Android App Development"
            key="og:title"
          />
          <meta property="og:url" key="og:url" content="/mobileapps" />
          <link rel="canonical" key="canonical" href="/mobileapps" />
        </Head>
        <Hidden mdDown>
          <Grid
            item
            component={Link}
            href="/customsoftware"
            className={classes.arrowContainer}
            style={{ marginLeft: '-3.5rem', marginRight: '1rem' }}
          >
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              onClick={() => {
                props.setValue(1)
                props.setSelected(1)
              }}
            >
              <img alt="Back to custom services page" src="/assets/backArrow.svg" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h1" align={matchesMD ? 'center' : 'left'}>
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              paragraph
              variant="body1"
              style={{ color: 'grey' }}
              align={matchesMD ? 'center' : undefined}
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              paragraph
              variant="body1"
              style={{ color: 'grey' }}
              align={matchesMD ? 'center' : undefined}
            >
              Whether you want an app for your customers, employees, or yourself, we can build
              cross-platform native solutions for any part of your business process. This opens you
              up to a whole new world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              paragraph
              variant="body1"
              style={{ color: 'grey' }}
              align={matchesMD ? 'center' : undefined}
            >
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer} component={Link} href="/websites">
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              onClick={() => {
                props.setValue(1)
                props.setSelected(3)
              }}
            >
              <img alt="Forward to website page" src="/assets/forwardArrow.svg" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        justify="space-between"
        className={classes.rowContainer}
        style={{ marginTop: '15rem', marginBottom: '15rem' }}
      >
        <Grid item container direction="column" md style={{ marginBottom: matchesMD ? '10rem' : 0 }}>
          <Grid item>
            <Typography variant="h4" align={matchesSM ? 'center' : undefined}>
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph align={matchesSM ? 'center' : undefined}>
              Our technology enables an innate interconnection between web and mobile applications,
              putting everything you need right in one convenient place.
            </Typography>
          </Grid>{' '}
          <Grid item>
            <Typography variant="body1" paragraph align={matchesSM ? 'center' : undefined}>
              This allows you to extend your reach, reinvent interactions, and develop a stronger
              relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie
            options={mobileOptions}
            style={{
              height: matchesMD ? 280 : 300,
              maxWidth: matchesMD ? 220 : 240
            }} /* isStopped */
          />
        </Grid>
        <Grid item container direction="column" md style={{ marginTop: matchesSM ? '10rem' : 0 }}>
          <Grid item>
            <Typography variant="h4" align={matchesSM ? 'center' : 'right'} gutterBottom>
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph align={matchesSM ? 'center' : 'right'}>
              Our cutting-edge development process allows us to create apps for iPhone, Android, and
              tablets — all at the same time.
            </Typography>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesSM ? 'center' : 'right'}>
                This significantly reduces costs and creates a more unified brand experience across
                all devices.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ marginBottom: '15rem', display: matchesMD ? 'grid' : undefined }}
        justify={matchesMD ? 'center' : 'space-between'}
      >
        <Grid item container direction="column" md alignItems="center">
          <Typography variant="h4" align="center" gutterBottom>
            Extend Functionality
          </Typography>
          <Grid item>
            <img alt="knife" src="/assets/swissKnife.svg" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ marginTop: matchesMD ? '10rem' : '0', marginBottom: matchesMD ? '10rem' : '0' }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Extend Access
          </Typography>
          <Grid item>
            <img
              alt="knife"
              src="/assets/extendAccess.svg"
              style={{ maxWidth: matchesXS ? '20rem' : '25rem' }}
            />
          </Grid>
        </Grid>
        <Grid item container direction="column" md alignItems="center">
          <Typography variant="h4" align="center" gutterBottom>
            Increase Engagement
          </Typography>
          <Grid item>
            <img alt="knife" src="/assets/increaseEngagement.svg" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  )
}
