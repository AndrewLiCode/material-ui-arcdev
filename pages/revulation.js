import React from 'react'
import Head from 'next/head'
import Lottie from 'react-lottie'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import technologyAnimation from '../src/animations/technologyAnimation/data.json'

// import CallToAction from './ui/CallToAction'
const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: '5rem',
    paddingRight: '5rem',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem'
    }
  }
}))
const revOptions = {
  loop: true,
  autoplay: true,
  animationData: technologyAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}
export default function Revulation(props) {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Grid item container direction="column">
      <Head>
        <title key="title">The Revolution of Software Starts Here | Arc Development</title>
        <meta
          name="description"
          key="description"
          content="The revolution for the custom software design and development starts from here. Make an estimate now and bring revolution to your business."
        />
        <meta
          property="og:title"
          content="Bringing High-End Technology to my Life | The Revolution"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="/revulation" />
        <link rel="canonical" key="canonical" href="/revulation" />
      </Head>
      <Grid item className={classes.rowContainer} style={{ marginTop: '2rem' }}>
        <Typography
          variant="h1"
          align={matchesMD ? 'center' : 'left'}
          style={{ fontFamily: 'Pacifico' }}
        >
          The Revulation
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginTop: '5rem' }}
        justify={matchesMD ? 'center' : undefined}
      >
        <Grid item lg>
          <img
            src="/assets/vision.svg"
            alt="vision"
            style={{
              maxWidth: matchesSM ? 300 : '40rem',
              marginRight: matchesMD ? 0 : '5rem',
              marginBottom: matchesMD ? '5rem' : 0
            }}
          />
        </Grid>
        <Grid item container direction="column" lg style={{ maxWidth: '40rem' }}>
          <Grid item>
            <Typography variant="h1" align={matchesMD ? 'center' : 'right'}>
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" gutterBottom align={matchesMD ? 'center' : 'right'}>
              The rise of computers, and subsequently the Internet, has completely altered every
              aspect of human life. This has increased our comfort, broadened our connections, and
              reshaped how we view the world.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" gutterBottom align={matchesMD ? 'center' : 'right'}>
              What once was confined to huge rooms and teams of engineers now resides in every
              single one of our hands. Harnessing this unlimited potential by using it to solve
              problems and better lives is at the heart of everything we do.
            </Typography>
          </Grid>{' '}
          <Grid item>
            <Typography variant="body1" gutterBottom align={matchesMD ? 'center' : 'right'}>
              What once was confined to huge rooms and teams of engineers now resides in every
              single one of our hands. Harnessing this unlimited potential by using it to solve
              problems and better lives is at the heart of everything we do.
            </Typography>
          </Grid>{' '}
          <Grid item>
            <Typography variant="body1" gutterBottom align={matchesMD ? 'center' : 'right'}>
              By holding ourselves to rigorous standards and pristine quality, we can ensure you
              have the absolute best tools necessary to thrive in this new frontier.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align={matchesMD ? 'center' : 'right'}>
              We see a future where every individual has personalized software custom tailored to
              their lifestyle, culture, and interests, helping them overcome life’s obstacles. Each
              project is a step towards that goal.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginTop: '10rem', marginBottom: '10rem' }}
        justify={matchesMD ? 'center' : undefined}
      >
        <Grid item container direction="column" lg style={{ maxWidth: '40rem' }}>
          <Grid item>
            <Typography variant="h1" align={matchesMD ? 'center' : undefined}>
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" gutterBottom align={matchesMD ? 'center' : undefined}>
              In 2013, Facebook invented a new way of building websites. This new system, React.js,
              completely revolutionizes the process and practice of website development.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" gutterBottom align={matchesMD ? 'center' : undefined}>
              Instead of chaining together long individual pages, like traditional websites, React
              websites are built with little chunks of code called components. These components are
              faster, easier to maintain, and are easily reused and customized, each serving a
              singular purpose.
            </Typography>
          </Grid>{' '}
          <Grid item>
            <Typography variant="body1" gutterBottom align={matchesMD ? 'center' : undefined}>
              Two years later they shocked the world by releasing a similar system, React Native,
              for producing iOS and Android apps. Instead of having to master two completely
              separate development platforms, you can leverage the knowledge you already possessed
              from building websites and reapply it directly! This was a huge leap forward.
            </Typography>
          </Grid>{' '}
          <Grid item>
            <Typography variant="body1" gutterBottom align={matchesMD ? 'center' : undefined}>
              By holding ourselves to rigorous standards and pristine quality, we can ensure you
              have the absolute best tools necessary to thrive in this new frontier.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align={matchesMD ? 'center' : undefined}>
              We see a future where every individual has personalized software custom tailored to
              their lifestyle, culture, and interests, helping them overcome life’s obstacles. Each
              project is a step towards that goal.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" gutterBottom>
              By holding ourselves to rigorous standards and pristine quality, we can ensure you
              have the absolute best tools necessary to thrive in this new frontier.
            </Typography>
          </Grid>{' '}
          <Grid item>
            <Typography variant="body1" gutterBottom>
              By holding ourselves to rigorous standards and pristine quality, we can ensure you
              have the absolute best tools necessary to thrive in this new frontier.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justify={matchesMD ? 'center' : 'flex-end'} lg>
          <Lottie
            /* isStopped */
            options={revOptions}
            style={{ maxHeight: 330, maxWidth: 300, margin: 0 }}
          />
        </Grid>
      </Grid>
      <Grid item container className={classes.rowContainer} direction="row" justify="center">
        <Typography variant="h4" gutterBottom align={matchesMD ? 'center' : undefined}>
          Process
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#B3B3B3', height: '65rem' }}
      >
        <Grid item container direction="column" lg alignItems={matchesMD ? 'center' : undefined}>
          <Typography
            variant="h4"
            style={{ color: '#000', marginTop: '5rem', maxWidth: '20rem' }}
            gutterBottom
            align={matchesMD ? 'center' : undefined}
          >
            Consultation
          </Typography>
          <Typography
            variant="body1"
            style={{ color: '#fff', maxWidth: '20rem' }}
            gutterBottom
            align={matchesMD ? 'center' : undefined}
          >
            Our process begins the moment you realize you need a piece of technology for your
            business. Whether you already have an idea for where to start and what to do, or if you
            just know you want to step things up, our initial consultation will help you examine
            your business holistically to find the best solutions.
          </Typography>
          <Typography
            variant="body1"
            style={{ color: '#fff', maxWidth: '20rem' }}
            gutterBottom
            align={matchesMD ? 'center' : undefined}
          >
            Detailed notes will be taken on your requirements and constraints, while taking care to
            identify other potential areas for consideration.
          </Typography>
          <Typography
            variant="body1"
            style={{ color: '#fff', maxWidth: '20rem' }}
            align={matchesMD ? 'center' : undefined}
          >
            Cutting-edge advancements in machine learning like object detection and natural language
            processing allow computers to do things previously unimaginable, and our expertise and
            intuition will help usher you into this new future of possibilities.
          </Typography>
        </Grid>
        <Grid
          item
          container
          style={{ alignSelf: 'center' }}
          lg
          alignItems={matchesMD ? 'center' : undefined}
        >
          <img
            src="/assets/consultationIcon.svg"
            alt="consultation"
            style={{ maxHeight: matchesMD ? 190 : 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#FF7373', height: '55rem' }}
      >
        <Grid item container direction="column" lg alignItems={matchesMD ? 'center' : undefined}>
          <Typography
            variant="h4"
            style={{ color: '#000', marginTop: '5rem', maxWidth: '20rem' }}
            gutterBottom
          >
            Mockup
          </Typography>
          <Typography
            variant="body1"
            style={{ color: '#fff', maxWidth: '20rem' }}
            align={matchesMD ? 'center' : undefined}
            gutterBottom
          >
            Before moving any farther we come back to you with our progress. This gives you the
            freedom to discuss any changes you may want or any ideas you may have come up with
            before any heavy lifting has been done.
          </Typography>
          <Typography
            variant="body1"
            style={{ color: '#fff', maxWidth: '20rem' }}
            align={matchesMD ? 'center' : undefined}
            gutterBottom
          >
            We give you an interactive demonstration of the mockups, thoroughly explaining the
            thought process that went into each screen and every anticipated feature.
          </Typography>
          <Typography
            variant="body1"
            style={{ color: '#fff', maxWidth: '20rem' }}
            align={matchesMD ? 'center' : undefined}
          >
            Once you’re completely satisfied with the vision for our solution we get down to the
            nitty gritty, fine-details of design.
          </Typography>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src="/assets/mockupIcon.svg"
            alt="mockup"
            style={{ maxHeight: matchesMD ? 190 : 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#39B54A', height: '61rem' }}
      >
        <Grid item container direction="column" lg alignItems={matchesMD ? 'center' : undefined}>
          <Typography
            variant="h4"
            style={{ color: '#000', marginTop: '5rem', maxWidth: '20rem' }}
            gutterBottom
          >
            Review
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ color: '#fff', maxWidth: '20rem' }}
            gutterBottom
          >
            Before moving any farther we come back to you with our progress. This gives you the
            freedom to discuss any changes you may want or any ideas you may have come up with
            before any heavy lifting has been done.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ color: '#fff', maxWidth: '20rem' }}
            gutterBottom
          >
            We give you an interactive demonstration of the mockups, thoroughly explaining the
            thought process that went into each screen and every anticipated feature.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ color: '#fff', maxWidth: '20rem' }}
          >
            Once you’re completely satisfied with the vision for our solution we get down to the
            nitty gritty, fine-details of design.
          </Typography>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src="/assets/reviewIcon.svg"
            alt="review"
            style={{ maxHeight: matchesMD ? 300 : 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#A67C52', height: '41rem' }}
      >
        <Grid item container direction="column" lg alignItems={matchesMD ? 'center' : undefined}>
          <Typography
            variant="h4"
            style={{ color: '#000', marginTop: '5rem', maxWidth: '20rem' }}
            gutterBottom
            align={matchesMD ? 'center' : undefined}
          >
            Design
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ color: '#fff', maxWidth: '20rem' }}
          >
            Once you’re completely satisfied with the vision for our solution we get down to the
            nitty gritty, fine-details of design.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ color: '#fff', maxWidth: '20rem' }}
            gutterBottom
          >
            Before moving any farther we come back to you with our progress. This gives you the
            freedom to discuss any changes you may want or any ideas you may have come up with
            before any heavy lifting has been done.
          </Typography>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src="/assets/designIcon.svg"
            alt="review"
            style={{ maxHeight: matchesMD ? 100 : 500 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#39B54A', height: '53rem' }}
      >
        <Grid item container direction="column" lg alignItems={matchesMD ? 'center' : undefined}>
          <Typography
            variant="h4"
            style={{ color: '#000', marginTop: '5rem', maxWidth: '20rem' }}
            gutterBottom
            align={matchesMD ? 'center' : undefined}
          >
            Review
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ color: '#fff', maxWidth: '20rem' }}
          >
            Once you’re completely satisfied with the vision for our solution we get down to the
            nitty gritty, fine-details of design.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ color: '#fff', maxWidth: '20rem' }}
            gutterBottom
          >
            Before moving any farther we come back to you with our progress. This gives you the
            freedom to discuss any changes you may want or any ideas you may have come up with
            before any heavy lifting has been done.
          </Typography>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src="/assets/reviewIcon.svg"
            alt="review"
            style={{ maxHeight: matchesMD ? 300 : 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#C1272D', height: '88rem' }}
      >
        <Grid item container direction="column" lg alignItems={matchesMD ? 'center' : undefined}>
          <Typography
            variant="h4"
            style={{ color: '#000', marginTop: '5rem', maxWidth: '20rem' }}
            gutterBottom
            align={matchesMD ? 'center' : undefined}
          >
            Build
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ color: '#fff', maxWidth: '20rem' }}
          >
            Engineering begins after your approval on the final designs. We start by scaffolding out
            the project on a high level, prioritizing some areas over others.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ color: '#fff', maxWidth: '20rem' }}
          >
            Each area is then developed in order of importance until ready to be connected to the
            next piece.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ color: '#fff', maxWidth: '20rem' }}
            gutterBottom
          >
            Before moving any farther we come back to you with our progress. This gives you the
            freedom to discuss any changes you may want or any ideas you may have come up with
            before any heavy lifting has been done.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ color: '#fff', maxWidth: '20rem' }}
            gutterBottom
          >
            Before moving any farther we come back to you with our progress. This gives you the
            freedom to discuss any changes you may want or any ideas you may have come up with
            before any heavy lifting has been done.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ color: '#fff', maxWidth: '20rem' }}
            gutterBottom
          >
            Only after our rigorous examinations will we accept a product as finished, then pushing
            it through the production pipeline. This produces an optimized, compressed, consumer
            version of the code and assets ready for deployment.
          </Typography>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img src="/assets/buildIcon.svg" alt="build" style={{ maxHeight: matchesMD ? 190 : 480 }} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#FBB03B', height: '80rem' }}
      >
        <Grid item container direction="column" lg alignItems={matchesMD ? 'center' : undefined}>
          <Typography
            variant="h4"
            style={{ color: '#000', marginTop: '5rem', maxWidth: '20rem' }}
            gutterBottom
            align={matchesMD ? 'center' : undefined}
          >
            Launch
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ color: '#fff', maxWidth: '20rem' }}
          >
            The moment we’ve all been waiting for.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ color: '#fff', maxWidth: '20rem' }}
            gutterBottom
          >
            Before moving any farther we come back to you with our progress. This gives you the
            freedom to discuss any changes you may want or any ideas you may have come up with
            before any heavy lifting has been done.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ color: '#fff', maxWidth: '20rem' }}
            gutterBottom
          >
            Before moving any farther we come back to you with our progress. This gives you the
            freedom to discuss any changes you may want or any ideas you may have come up with
            before any heavy lifting has been done.
          </Typography>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src="/assets/launchIcon.svg"
            alt="launch"
            style={{ maxHeight: matchesMD ? 500 : 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#8E45CE', height: '82rem' }}
      >
        <Grid item container direction="column" lg alignItems={matchesMD ? 'center' : undefined}>
          <Typography
            variant="h4"
            style={{ color: '#000', marginTop: '5rem', maxWidth: '20rem' }}
            gutterBottom
            align={matchesMD ? 'center' : undefined}
          >
            Maintain
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ color: '#fff', maxWidth: '20rem' }}
            gutterBottom
          >
            Before moving any farther we come back to you with our progress. This gives you the
            freedom to discuss any changes you may want or any ideas you may have come up with
            before any heavy lifting has been done.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ color: '#fff', maxWidth: '20rem' }}
            gutterBottom
          >
            From there on out we make sure your application is kept up to date and taking advantage
            of the best features and practices available. When new developments arise or new
            techniques are discovered in future projects, we will implement those advancements in
            your project as part of our routine maintenance.
          </Typography>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src="/assets/maintainIcon.svg"
            alt="maintain"
            style={{ maxHeight: matchesMD ? 500 : 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#29ABE2', height: '70rem' }}
      >
        <Grid item container direction="column" lg alignItems={matchesMD ? 'center' : undefined}>
          <Typography
            variant="h4"
            style={{ color: '#000', marginTop: '5rem', maxWidth: '20rem' }}
            gutterBottom
            align={matchesMD ? 'center' : undefined}
          >
            Maintain
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ color: '#fff', maxWidth: '20rem' }}
            gutterBottom
          >
            By planning for future features and changes we can build and evolve your application
            over time. As new use cases and customer needs develop we can respond with continuous
            integration of new content.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ color: '#fff', maxWidth: '20rem' }}
            gutterBottom
          >
            From there on out we make sure your application is kept up to date and taking advantage
            of the best features and practices available. When new developments arise or new
            techniques are discovered in future projects, we will implement those advancements in
            your project as part of our routine maintenance.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ color: '#fff', maxWidth: '20rem' }}
            gutterBottom
          >
            By planning for future features and changes we can build and evolve your application
            over time. As new use cases and customer needs develop we can respond with continuous
            integration of new content.
          </Typography>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src="/assets/iterateIcon.svg"
            alt="iterate"
            style={{ maxHeight: matchesMD ? 140 : 1000 }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
