import React from 'react'
import Link from '../src/Link'
import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ButtonArrow from '../src/ui/original'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  serviceContainer: {
    marginTop: '10rem',
    [theme.breakpoints.down('sm')]: {
      padding: 25
    },
    [theme.breakpoints.down('xs')]: {
      padding: 5
    }
  },
  subtitle: {
    marginBottom: '1rem'
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange
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
  icon: {
    marginLeft: '2rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0'
    }
  }
}))

export default function Services(props) {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Grid container direction="column">
      <Head>
        <title key="title">Top Custom Software Services - Free Estimate | Demo</title>
        <meta
          name="description"
          key="description"
          content="All you need for a software design and development. One step closer to make it reality. Get an online free estimate now."
        />
        <meta
          property="og:title"
          content="Bringing High-End Technology to my Life | Services"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="/services" />
        <link rel="canonical" key="canonical" href="/services" />
      </Head>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? undefined : '5rem',
          marginTop: matchesSM ? '1rem' : '2rem'
        }}
      >
        <Typography variant="h1" gutterBottom style={{ textAlign: matchesSM ? 'center' : 'inherit' }}>
          Services
        </Typography>
      </Grid>
      <Grid item>
        {/* mobile app dev section */}
        <Grid
          container
          direction="row"
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.serviceContainer}
          style={{ marginTop: matchesSM ? '1rem' : '5rem' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35rem'
            }}
          >
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
            <img
              width="250em"
              alt="Mobile app icon"
              src="/assets/mobileIcon.svg"
              className={classes.icon}
            />
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
        {/* website blog */}
        <Grid
          container
          direction="row"
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.serviceContainer}
          style={{ marginBottom: '10rem' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35rem'
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
          <Grid item style={{ marginRight: matchesSM ? '0' : '5rem' }}>
            <img
              width="250em"
              alt="Custom sofware icon"
              src="/assets/websiteIcon.svg"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
