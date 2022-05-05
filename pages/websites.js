import React from 'react'
import Head from 'next/head'
import Link from '../src/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import CallToAction from '../src/ui/CallToAction'

const useStyles = makeStyles((theme) => ({
  arrowContainer: {
    marginTop: '0.5rem'
  },
  heading: {
    maxWidth: '40rem'
  },
  pragraphContainer: { maxWidth: '30rem' },
  rowContainer: {
    paddingLeft: '5rem',
    paddingRight: '5rem',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem'
    }
  }
}))
export default function Websites(props) {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
  return (
    <Grid container direction="column">
      <Head>
        <title key="title">Custom Website Design and Development</title>
        <meta
          name="description"
          key="description"
          content="Custom designed from scratch to deployment in a minimum price. Optimized and perfectly responsive. Fit for all kind of device."
        />
        <meta
          property="og:title"
          content="Bringing High-End Technology to my Life | Website Development"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="/websites" />
        <link rel="canonical" key="canonical" href="/websites" />
      </Head>
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? '1rem' : '2rem' }}
      >
        <Hidden mdDown>
          <Grid
            item
            component={Link}
            href="/mobileapps"
            className={classes.arrowContainer}
            style={{ marginLeft: '-3.5rem', marginRight: '1rem' }}
          >
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              onClick={() => {
                props.setValue(1)
                props.setSelected(2)
              }}
            >
              <img alt="Back to custom services page" src="/assets/backArrow.svg" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h1" align={matchesMD ? 'center' : 'left'}>
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              paragraph
              variant="body1"
              style={{ color: 'grey' }}
              align={matchesSM ? 'center' : undefined}
            >
              Having a website is a necessity in today’s business world. They give you one central,
              public location to let people know who you are, what you do, and why you’re the best
              at it.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              paragraph
              variant="body1"
              style={{ color: 'grey' }}
              align={matchesSM ? 'center' : undefined}
            >
              From simply having your hours posted to having a full fledged online store, making
              yourself as accessible as possible to users online drives growth and enables you to
              reach new customers.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer} component={Link} href="/services">
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              onClick={() => {
                props.setValue(1)
                props.setSelected(0)
              }}
            >
              <img alt="Forward to services page" src="/assets/forwardArrow.svg" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginTop: '15rem', marginBottom: '15rem' }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align={matchesSM ? 'center' : undefined}>
                Analytics
              </Typography>
            </Grid>
            <Grid item style={{ marginLeft: '-2.75rem' }}>
              <img alt="analytics" src="/assets/analytics.svg" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            align={matchesSM ? 'center' : undefined}
            variant="body1"
            className={classes.pragraphContainer}
          >
            Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden
            patterns and trends in your business, empowering you to make smarter decisions with
            measurable effects.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        justify={matchesMD ? 'center' : 'flex-end'}
        alignItems="center"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item align="center">
              <Typography variant="h4" align={matchesSM ? 'center' : undefined}>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img alt="ecommerce" src="/assets/ecommerce.svg" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.pragraphContainer} style={{ marginLeft: '1rem' }}>
          <Typography variant="body1" gutterBottom align={matchesSM ? 'center' : undefined}>
            It’s no secret that people like to shop online.
          </Typography>
          <Typography variant="body1" align={matchesSM ? 'center' : undefined}>
            In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that
            pie.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginTop: '15rem', marginBottom: '15rem' }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align={matchesSM ? 'center' : undefined}>
                Outreach
              </Typography>
            </Grid>
            <Grid item style={{ marginRight: '1rem', marginLeft: matchesSM ? '0' : '-1rem' }}>
              <img alt="outreach" src="/assets/outreach.svg" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            className={classes.pragraphContainer}
            align={matchesSM ? 'center' : undefined}
          >
            Draw people in with a dazzling website. Showing off your products online is a great way
            to help customers decide what’s right for them before visiting in person.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        justify={matchesMD ? 'center' : 'flex-end'}
        alignItems="center"
        style={{ marginBottom: '10rem' }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item align="center">
              <Typography variant="h4" align={matchesSM ? 'center' : undefined}>
                Search Engine
                <br /> Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img alt="seo" src="/assets/seo.svg" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.pragraphContainer}
          style={{ marginLeft: matchesSM ? '0' : '1rem' }}
        >
          <Typography variant="body1" gutterBottom align={matchesSM ? 'center' : undefined}>
            How often have you ever been to the second page of Google results?
          </Typography>
          <Typography variant="body1" gutterBottom align={matchesSM ? 'center' : undefined}>
            If you’re like us, probably never.
          </Typography>
          <Typography variant="body1" align={matchesSM ? 'center' : undefined}>
            Customers don’t go there either, so we make sure your website is designed to end up on
            top.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  )
}
