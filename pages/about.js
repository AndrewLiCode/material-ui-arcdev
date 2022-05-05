import React from 'react'
import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import useMediaQuery from '@material-ui/core/useMediaQuery'

import CallToAction from '../src/ui/CallToAction'
const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontSize: '1.25rem',
    fontWeight: '500',
    fontStyle: 'italic',
    maxWidth: '50rem',
    lineHeight: '1.4'
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
    maxWidth: '36rem'
  },
  avatar: {
    height: '20rem',
    width: '20rem',
    [theme.breakpoints.down('sm')]: {
      height: '15rem',
      width: '15rem',
      maxHeight: 300,
      maxWidth: 300
    }
  }
}))
export default function About(props) {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Grid item container direction="column">
      <Head>
        <title key="title">About Us - History & Team | Demo Arc Development</title>
        <meta
          name="description"
          key="description"
          content="We provide the fastest, modern, most affordable, and software design and development across globe. Get a free online estimate now!"
        />
        <meta
          property="og:title"
          content="Bringing High-End Technology to my Life | About Us"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="/about" />
        <link rel="canonical" key="canonical" href="/about" />
      </Head>
      <Grid item style={{ marginTop: '2rem' }} className={classes.rowContainer}>
        <Typography variant="h1" align={matchesSM ? 'center' : 'left'}>
          About Us
        </Typography>
      </Grid>
      <Grid item container justify="center" className={classes.rowContainer}>
        <Typography
          variant="h4"
          className={classes.missionStatement}
          align="center"
          style={{ marginTop: matchesMD ? '2rem' : '0', color: theme.palette.common.blue }}
        >
          Whether it be person to person, business to consumer, or an individual to their interests,
          technology is meant to bring us closer to what we care about in the best way possible. Arc
          Development will use that principle to provide fast, modern, inexpensive, and aesthetic
          software to your life and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        justify="space-around"
        alignItems={matchesMD ? 'center' : undefined}
        style={{ marginTop: '10rem', marginBottom: '10rem' }}
      >
        <Grid item>
          <Grid item container direction="column" md style={{ maxWidth: '35rem' }}>
            <Grid item>
              <Typography variant="h4" gutterBottom align={matchesMD ? 'center' : undefined}>
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                gutterBottom
                align={matchesMD ? 'center' : undefined}
                paragraph
                style={{ fontWeight: '700', fontStyle: 'italic' }}
              >
                We’re the new kid on the block.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                gutterBottom
                paragraph
                align={matchesMD ? 'center' : undefined}
              >
                Founded in 2019, we’re ready to get our hands on the world’s business problems.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                gutterBottom
                paragraph
                align={matchesMD ? 'center' : undefined}
              >
                It all started with one question: Why aren’t all businesses using available
                technology? There are many different answers to that question: economic barriers,
                social barriers, educational barriers, and sometimes institutional barriers.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                gutterBottom
                paragraph
                align={matchesMD ? 'center' : undefined}
              >
                We aim to be a powerful force in overcoming these obstacles. Recent developments in
                software engineering and computing power, compounded by the proliferation of smart
                phones, has opened up infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and completely new methods
                of interaction are created daily. Taking full advantage of these advancements is the
                name of the game.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                gutterBottom
                paragraph
                align={matchesMD ? 'center' : undefined}
              >
                All this change can be a lot to keep up with, and that’s where we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify="center" md>
            <img
              src="/assets/history.svg"
              alt={'history'}
              style={{ maxHeight: matchesSM ? 170 : '22rem' }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginBottom: matchesMD ? '5rem' : '15rem' }}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom align="center">
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" align="center">
            Andrew Li, Founder
          </Typography>
          <Typography variant="body1" align="center">
            I started coding when I was 11 years old.
          </Typography>
        </Grid>
        <Grid container justify="center">
          <Avatar src="/assets/founder.jpg" alt="founder" className={classes.avatar} />
        </Grid>
        <Grid
          container
          direction={matchesMD ? 'column' : 'row'}
          alignItems={matchesMD ? 'center' : undefined}
        >
          <Hidden lgUp>
            <Grid
              item
              container
              className={classes.itemContainer}
              align="center"
              style={{ padding: '1.25rem' }}
              lg
            >
              <Typography variant="body1" gutterBottom>
                I taught myself basic coding from a library book in third grade, and ever since then
                my passion has solely been set on learning — learning about computers, learning
                mathematics and philosophy, studying design, always just learning.
              </Typography>
              <Typography variant="body1">
                Now I’m ready to apply everything I’ve learned, and to help others with the
                intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            container
            item
            direction="column"
            lg
            alignItems={matchesMD ? 'center' : undefined}
            style={{ marginBottom: matchesMD ? '2.5rem' : '0' }}
          >
            <Grid item>
              <img
                src="/assets/car.jpg"
                alt="yearbook"
                style={{
                  borderRadius: '50%'
                }}
                className={classes.avatar}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">my dream car</Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid
              item
              container
              className={classes.itemContainer}
              align="center"
              style={{ padding: '1.25rem' }}
              lg
            >
              <Typography variant="body1" gutterBottom>
                I taught myself basic coding from a library book in third grade, and ever since then
                my passion has solely been set on learning — learning about computers, learning
                mathematics and philosophy, studying design, always just learning.
              </Typography>
              <Typography variant="body1">
                Now I’m ready to apply everything I’ve learned, and to help others with the
                intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>
          <Grid container item direction="column" lg alignItems={matchesMD ? 'center' : 'flex-end'}>
            <Grid item>
              <img
                src="/assets/masmas.jpg"
                alt="masmas"
                style={{
                  borderRadius: '50%'
                }}
                className={classes.avatar}
              />
            </Grid>
            <Grid item align="right">
              <Typography variant="caption">my lovely cat</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setvalue={props.setValue} />
      </Grid>
    </Grid>
  )
}
