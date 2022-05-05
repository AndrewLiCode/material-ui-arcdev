import React from 'react'
import  Link  from '../Link'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

import {makeStyles} from '@material-ui/core/styles' 
const useStyles = makeStyles((theme) => ({
  footer: {
    ...theme.typography.tab,
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative'
  },
  footerAdorment: {
    width: '25rem',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21rem'
    },
    [theme.breakpoints.down('xs')]: {
      width: '14.5rem'
    }
  },
  mainContainer: {
    position: 'absolute'
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  gridItem: {
    margin: '3rem'
  },
  icon: {
    height: '4rem',
    width: '4rem',
    [theme.breakpoints.down('md')]: {
      height: '3rem',
      width: '3rem'
    },
    [theme.breakpoints.down('xs')]: {
      height: '2.5.rem',
      width: '2.5rem'
    }
  },
  socialContainer: {
    position: 'absolute',
    right: '1.5rem',
    marginTop: '-6rem',
    [theme.breakpoints.down('xs')]: {
      right: '0.6rem'
    }
  }
}))
export default function Footer(props) {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/"
                onClick={() => props.setValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/services"
                onClick={() => {
                  props.setSelected(0)
                  props.setValue(1)
                }}
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/customsoftware"
                onClick={() => {
                  props.setSelected(1)
                  props.setValue(1)
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/mobileapps"
                onClick={() => {
                  props.setValue(1)
                  props.setSelected(2)
                }}
              >
                IOS/Android App Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/websites"
                onClick={() => {
                  props.setValue(1)
                  props.setSelected(3)
                }}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/revulation"
                onClick={() => props.setValue(2)}
              >
                Revulation
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/revulation"
                onClick={() => props.setValue(2)}
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/revulation"
                onClick={() => props.setValue(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/revulation"
                onClick={() => props.setValue(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/about"
                onClick={() => props.setValue(3)}
              >
                About us
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/about"
                onClick={() => props.setValue(3)}
              >
                History
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/about"
                onClick={() => props.setValue(3)}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/contact"
                onClick={() => props.setValue(4)}
              >
                Contact
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        src='/assets/footerAdornment.svg'
        alt="black decorative footer slash"
        className={classes.footerAdorment}
      />
      <Grid container className={classes.socialContainer} spacing={2} justify="flex-end">
        <Grid
          item
          component={'a'}
          href="http://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src='/assets/facebook.svg' alt="facebook logo" className={classes.icon} />
        </Grid>
        <Grid item component={'a'} href="http://www.twitter.com" rel="noopener noreferrer">
          <img src='/assets/twitter.svg' alt="twitter logo" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href="http://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src='/assets/instagram.svg' alt="instagram logo" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  )
}
