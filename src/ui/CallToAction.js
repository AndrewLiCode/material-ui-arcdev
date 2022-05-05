import React from 'react'
import ReactGA from 'react-ga'
import Link from '../Link'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ButtonArrow from './original'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {makeStyles, useTheme} from '@material-ui/core/styles'
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
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2rem'
    }
  },
  background: {
    backgroundImage: `url('/assets/background.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '60rem',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `url('/assets/mobileBackground.jpg')`,
      backgroundAttachment: 'inherit'
    }
  }
}))
export default function CallToAction(props) {
  const theme = useTheme()
  const classes = useStyles()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Grid
      container
      alignItems="center"
      className={classes.background}
      direction={matchesSM ? 'column' : 'row'}
      justify={matchesSM ? 'center' : 'space-between'}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? '0' : '5rem',
          textAlign: matchesSM ? 'center' : 'inherit'
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h1" style={{textAlign: 'inherit'}}>
              Simple Software. <br />
              Revolutionary Results.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Take advantage of the 21st Century.
            </Typography>
            <Grid container justify={matchesSM ? 'center' : undefined}>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                href="/revulation"
                onClick={() => {
                  props.setValue(2)
                }}
              >
                <span style={{marginRight: 10}}>Learn More</span>
                <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        style={{
          marginRight: matchesSM ? '0' : '5rem',
          marginLeft: '2rem'
        }}
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
              action: 'button in CallToAction'
            })
          }}
        >
          <span style={{marginRight: 10}}>Learn More</span>
          <ButtonArrow width={15} height={15} fill={theme.palette.common.white} />
        </Button>
      </Grid>
    </Grid>
  )
}
