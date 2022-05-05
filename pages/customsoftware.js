import React from 'react'
import Head from 'next/head'
import Link from '../src/Link'
import Lottie from 'react-lottie'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import animationData from '../src/animations/documentsAnimation/data'
import scaleAnimation from '../src/animations/scaleAnimation/data.json'
import automationAnimation from '../src/animations/automationAnimation/data.json'
import uxAnimation from '../src/animations/uxAnimation/data'

import CallToAction from '../src/ui/CallToAction'
const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: '40rem'
  },
  arrowContainer: {
    marginTop: '0.5rem'
  },
  rowContainer: {
    paddingLeft: '5rem',
    paddingRight: '5rem',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem'
    }
  },
  itemContainer: {
    maxWidth: '40rem'
  }
}))
const documentOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}
const scaleOptions = {
  loop: true,
  autoplay: true,
  animationData: scaleAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}
const automationOptions = {
  loop: true,
  autoplay: true,
  animationData: automationAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}
const uxOptions = {
  loop: true,
  autoplay: true,
  animationData: uxAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}
export default function CustomSoftware(props) {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">Software Design and Development - Free Estimate</title>
        <meta
          name="description"
          key="description"
          content="Custom software design and development from scratch - optimize your business problems and let us make your work easy and smooth"
        />
        <meta
          property="og:title"
          content="Bringing High-End Technology to my Life | Custom Software Development"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="/customsoftware" />
        <link rel="canonical" key="canonical" href="/customsoftware" />
      </Head>
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? 'center' : undefined}
        alignItems={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? '1rem' : '2rem' }}
      >
        <Hidden mdDown>
          <Grid
            item
            component={Link}
            href="/services"
            className={classes.arrowContainer}
            style={{ marginLeft: '-3.5rem', marginRight: '1rem' }}
          >
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              onClick={() => {
                props.setValue(1)
                props.setSelected(0)
              }}
            >
              <img alt="Back to services page" src="/assets/backArrow.svg" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h1" align={matchesMD ? 'center' : 'left'}>
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              paragraph
              variant="body1"
              style={{ color: 'grey' }}
              align={matchesMD ? 'center' : undefined}
            >
              Whether we’re replacing old software or inventing new solutions, Arc Development is
              here to help your business tackle technology.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              paragraph
              variant="body1"
              style={{ color: 'grey' }}
              align={matchesMD ? 'center' : undefined}
            >
              Using regular commercial software leaves you with a lot of stuff you don’t need,
              without some of the stuff you do need, and ultimately controls the way you work.
              Without using any software at all you risk falling behind competitors and missing out
              on huge savings from increased efficiency.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              paragraph
              variant="body1"
              style={{ color: 'grey' }}
              align={matchesMD ? 'center' : undefined}
            >
              Our custom solutions are designed from the ground up with your needs, wants, and goals
              at the core. This collaborative process produces finely tuned software that is much
              more effective at improving your workflow and reducing costs than generalized options.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              paragraph
              variant="body1"
              style={{ color: 'grey' }}
              align={matchesMD ? 'center' : undefined}
            >
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer} component={Link} href="/mobileapps">
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              onClick={() => {
                props.setValue(1)
                props.setSelected(2)
              }}
            >
              <img alt="Forward to IOS/Android page" src="/assets/forwardArrow.svg" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: '15rem', marginBottom: '20rem' }}
      >
        <Grid
          item
          container
          direction="column"
          md
          style={{
            maxWidth: '40em'
          }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img alt="lightbulb" src="/assets/bulb.svg" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          style={{
            maxWidth: '40em',
            marginTop: matchesSM ? '10rem' : 0,
            marginBottom: matchesSM ? '10rem' : 0
          }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img alt="stopWatch" src="/assets/stopwatch.svg" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          style={{
            maxWidth: '40em'
          }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img alt="cash" src="/assets/cash.svg" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        justify={matchesMD ? 'center' : 'space-between'}
        className={classes.rowContainer}
        alignItems={matchesMD ? 'center' : undefined}
        style={{ display: matchesMD ? 'grid' : undefined }}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          style={{ marginBottom: matchesMD ? '10rem' : 0 }}
          direction={matchesSM ? 'column' : 'row'}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? 'center' : undefined}>
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesSM ? 'center' : undefined}>
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesSM ? 'center' : undefined}>
                Billions are spent annually on the purchasing, printing, and distribution of paper.
                On top of the massive environmental impact this has, it causes harm to your bottom
                line as well.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesSM ? 'center' : undefined}>
                By utilizing digital forms and documents you can remove these obsolete expenses,
                accelerate your communication, and help the Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              /* isStopped */ options={documentOptions}
              style={{ maxHeight: 255, maxWidth: 250 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          justify={matchesSM ? 'center' : undefined}
        >
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ minHeight: 240, maxHeight: 245, maxWidth: 240 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesMD ? 'center' : 'right'}>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesMD ? 'center' : 'right'}>
                Whether you’re a large brand, just getting started, or taking off right now, our
                application architecture ensures pain-free growth and reliability.{' '}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="row">
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          className={classes.rowContainer}
          style={{ marginTop: '20rem', marginBottom: '20rem' }}
        >
          <Grid item>
            <img
              alt="roots"
              src="/assets/root.svg"
              height={matchesSM ? '300' : '450'}
              width={matchesSM ? '300' : '450'}
            />
          </Grid>
          <Grid item container direction="column" className={classes.itemContainer}>
            <Typography variant="h4" gutterBottom align="center">
              Root-Cause Analysis
            </Typography>
            <Typography variant="body1" align="center">
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant="body1" align="center">
              We can help you thoroughly examine all areas of your business to develop a holistic
              plan for the most effective implementation of technology.{' '}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        style={{ marginBottom: '20rem', display: matchesMD ? 'grid' : undefined }}
        direction={matchesMD ? 'column' : 'row'}
        justify={matchesMD ? 'center' : 'space-between'}
        className={classes.rowContainer}
        alignItems={matchesMD ? 'center' : undefined}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesSM ? 'column' : 'row'}
          style={{ marginBottom: matchesMD ? '10rem' : 0 }}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesMD ? 'center' : undefined}>
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesMD ? 'center' : undefined}>
                Why waste time when you don’t have to?
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesMD ? 'center' : undefined}>
                We can help you identify processes with time or event based actions which can now
                easily be automated.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesMD ? 'center' : undefined}>
                Increasing efficiency increases profits, leaving you more time to focus on your
                business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              /* isStopped */ options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesSM ? 'column' : 'row'}
        >
          <Grid item md>
            <Lottie options={uxOptions} style={{ maxHeight: 310, maxWidth: 155 }} />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesMD ? 'center' : 'right'}>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesMD ? 'center' : 'right'}>
                A good design that isn’t usable isn’t a good design. our application architecture
                ensures pain-free growth and reliability.{' '}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesMD ? 'center' : 'right'}>
                So why are so many pieces of software complicated, confusing, and frustrating?
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesMD ? 'center' : 'right'}>
                By prioritizing users and the real ways they interact with technology we’re able to
                develop unique, personable experiences that solve problems rather than create new
                ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  )
}
